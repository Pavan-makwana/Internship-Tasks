import express from "express";
import db from "./db.js";
import fetch from "node-fetch";

const router = express.Router();

const SHEET_URL = "https://script.google.com/macros/s/AKfycbySRLZLCB3oeyrAKTCsmVqFkX2b9jsp87pAxaZ5w7QcEOxx5KebvOG2L8YJNDm1wFlq/exec";

/* BOOK APPOINTMENT */
router.post("/appointments", async (req, res) => {
  const {
    name,
    age,
    gender,
    phone,
    appointment_date,
    appointment_time,
    doctor_id
  } = req.body;

  // Generate IDs
  const patientId = "P" + Date.now();
  const appointmentId = "A" + Date.now();
  const billingId = "B" + Date.now();

  try {
    /* 1️⃣ Insert patient */
    await db.promise().query(
      "INSERT INTO patients (patient_id, name, age, gender, phone) VALUES (?, ?, ?, ?, ?)",
      [patientId, name, age, gender, phone]
    );

    /* Insert appointment */
    await db.promise().query(
      `INSERT INTO appointments 
      (appointment_id, patient_id, appointment_date, appointment_time, doctor_id)
      VALUES (?, ?, ?, ?, ?)`,
      [appointmentId, patientId, appointment_date, appointment_time, doctor_id]
    );

    /* Get doctor details */
    const [[doctor]] = await db.promise().query(
      "SELECT doctor_name, specialization, fee FROM doctor WHERE doctor_id=?",
      [doctor_id]
    );

    /* Insert billing */
    await db.promise().query(
      `INSERT INTO billing 
      (billing_id, patient_id, appointment_id, doctor_id, total_amount)
      VALUES (?, ?, ?, ?, ?)`,
      [billingId, patientId, appointmentId, doctor_id, doctor.fee]
    );

    /* SEND DATA TO GOOGLE SHEET */
    await fetch(SHEET_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        appointment_id: appointmentId,
        patient_id: patientId,
        doctor_id: doctor_id,
        doctor: doctor.doctor_name,
        department: doctor.specialization,
        date: appointment_date,
        status: "Pending",
        fee: doctor.fee
      })
    });

    res.json({
      message: "Appointment booked successfully",
      appointment_id: appointmentId
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

/* USER: VIEW MY APPOINTMENTS */
router.get("/appointments/user/:phone", async (req, res) => {
  try {
    const [rows] = await db.promise().query(
      `SELECT 
        a.appointment_id,
        a.appointment_date,
        a.appointment_time,
        a.status,
        d.doctor_name
       FROM appointments a
       JOIN patients p ON a.patient_id = p.patient_id
       JOIN doctor d ON a.doctor_id = d.doctor_id
       WHERE p.phone = ?
       ORDER BY a.created_at DESC`,
      [req.params.phone]
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* ADMIN: LIST ALL APPOINTMENTS */
router.get("/appointments", async (req, res) => {
  try {
    const [rows] = await db.promise().query(
      `SELECT 
        a.appointment_id,
        p.name,
        p.phone,
        d.doctor_name,
        a.appointment_date,
        a.appointment_time,
        a.status
       FROM appointments a
       JOIN patients p ON a.patient_id = p.patient_id
       JOIN doctor d ON a.doctor_id = d.doctor_id
       ORDER BY a.created_at DESC`
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* ADMIN: UPDATE STATUS */
router.put("/appointments/:id/status", async (req, res) => {
  try {
    await db.promise().query(
      "UPDATE appointments SET status=? WHERE appointment_id=?",
      [req.body.status, req.params.id]
    );
    res.json({ message: "Status updated successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});

/* USER: VIEW BILL */
router.get("/bill/:appointmentId", async (req, res) => {
  try {
    const [rows] = await db.promise().query(
      `SELECT 
        p.name AS patient_name,
        d.doctor_name,
        d.specialization,
        b.total_amount,
        a.appointment_date,
        a.appointment_time,
        b.generated_at
       FROM billing b
       JOIN patients p ON b.patient_id = p.patient_id
       JOIN doctor d ON b.doctor_id = d.doctor_id
       JOIN appointments a ON b.appointment_id = a.appointment_id
       WHERE b.appointment_id = ?`,
      [req.params.appointmentId]
    );

    if (rows.length === 0)
      return res.status(404).json({ message: "Bill not found" });

    res.json(rows[0]);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
