import express from "express";
import db from "./db.js";

const router = express.Router();

/*  ADD APPOINTMENT */
router.post("/appointments", (req, res) => {
  const {
    name,
    age,
    gender,
    phone,
    appointment_date,
    appointment_time,
    doctor_name
  } = req.body;

  // Insert patient
  db.query(
    "INSERT INTO patients (name, age, gender, phone) VALUES (?, ?, ?, ?)",
    [name, age, gender, phone],
    (err, result) => {
      if (err) return res.status(500).json(err);

      const patientId = result.insertId;

      // Insert appointment
      db.query(
        `INSERT INTO appointments 
         (patient_id, appointment_date, appointment_time, doctor_name)
         VALUES (?, ?, ?, ?)`,
        [patientId, appointment_date, appointment_time, doctor_name],
        () => res.json({ message: "Appointment Added" })
      );
    }
  );
});

/*  LIST APPOINTMENTS */
router.get("/appointments", (req, res) => {
  db.query(
    `SELECT 
      a.appointment_id,
      p.name,
      p.age,
      p.gender,
      p.phone,
      a.appointment_date,
      a.appointment_time,
      a.doctor_name,
      a.status
     FROM appointments a
     JOIN patients p ON a.patient_id = p.patient_id`,
    (err, result) => res.json(result)
  );
});

/*  UPDATE STATUS */
router.put("/appointments/:id/status", (req, res) => {
  const { status } = req.body;

  db.query(
    "UPDATE appointments SET status=? WHERE appointment_id=?",
    [status, req.params.id],
    () => res.json({ message: "Status Updated" })
  );
});

export default router;
