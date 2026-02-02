import express from "express";
import db from "./db.js";

const router = express.Router();

/*    BOOK APPOINTMENT (USER) */
router.post("/appointments", (req, res) => {
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

  // Insert patient
  db.query(
    "INSERT INTO patients (patient_id, name, age, gender, phone) VALUES (?, ?, ?, ?, ?)",
    [patientId, name, age, gender, phone],
    (err) => {
      if (err) return res.status(500).json(err);

      // Insert appointment
      db.query(
        `INSERT INTO appointments 
        (appointment_id, patient_id, appointment_date, appointment_time, doctor_id)
        VALUES (?, ?, ?, ?, ?)`,
        [appointmentId, patientId, appointment_date, appointment_time, doctor_id],
        (err) => {
          if (err) return res.status(500).json(err);

          // Insert billing using doctor fee
          db.query(
            `INSERT INTO billing (billing_id, patient_id, appointment_id, doctor_id, total_amount)
             SELECT ?, ?, ?, d.doctor_id, d.fee
             FROM doctor d WHERE d.doctor_id = ?`,
            [billingId, patientId, appointmentId, doctor_id],
            () => res.json({ message: "Appointment submitted successfully" })
          );
        }
      );
    }
  );
});

/* =====================================
   USER: VIEW MY APPOINTMENTS
===================================== */
router.get("/appointments/user/:phone", (req, res) => {
  const phone = req.params.phone;

  db.query(
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
    [phone],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json(result);
    }
  );
});

/* =====================================
   ADMIN: LIST ALL APPOINTMENTS
===================================== */
router.get("/appointments", (req, res) => {
  db.query(
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
     ORDER BY a.created_at DESC`,
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json(result);
    }
  );
});

/* =====================================
   ADMIN: UPDATE STATUS
===================================== */
router.put("/appointments/:id/status", (req, res) => {
  const { status } = req.body;
  const id = req.params.id;

  db.query(
    "UPDATE appointments SET status=? WHERE appointment_id=?",
    [status, id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Status updated successfully" });
    }
  );
});

/* USER: VIEW BILL */
router.get("/bill/:appointmentId", (req, res) => {
  const id = req.params.appointmentId;

  db.query(
    `SELECT 
      p.name AS patient_name,
      d.doctor_name,
      d.specialization,
      b.total_amount,
      a.appointment_date,
      a.appointment_time
     FROM billing b
     JOIN patients p ON b.patient_id = p.patient_id
     JOIN doctor d ON b.doctor_id = d.doctor_id
     JOIN appointments a ON b.appointment_id = a.appointment_id
     WHERE b.appointment_id = ?`,
    [id],
    (err, result) => {
      if (err) return res.status(500).json(err);
      if (result.length === 0)
        return res.status(404).json({ message: "Bill not found" });

      res.json(result[0]);
    }
  );
});

export default router;
