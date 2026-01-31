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

  // basic validation
  if (!name || !age || !gender || !phone || !appointment_date || !appointment_time) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // fallback doctor name (important)
  const doctor = doctor_name || "Dr. Sharma";

  // Insert patient
  db.query(
    "INSERT INTO patients (name, age, gender, phone) VALUES (?, ?, ?, ?)",
    [name, age, gender, phone],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Patient insert failed" });
      }

      const patientId = result.insertId;

      // Insert appointment
      db.query(
        `INSERT INTO appointments
         (patient_id, appointment_date, appointment_time, doctor_name)
         VALUES (?, ?, ?, ?)`,
        [patientId, appointment_date, appointment_time, doctor],
        (err) => {
          if (err) {
            console.error(err);
            return res.status(500).json({ message: "Appointment insert failed" });
          }

          res.json({ message: "Appointment Added Successfully" });
        }
      );
    }
  );
});

/* LIST APPOINTMENTS */
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
     JOIN patients p ON a.patient_id = p.patient_id
     ORDER BY a.appointment_id DESC`,
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Failed to fetch appointments" });
      }

      res.json(result);
    }
  );
});

/* UPDATE STATUS */
router.put("/appointments/:id/status", (req, res) => {
  const { status } = req.body;
  const { id } = req.params;

  const allowedStatus = ["Pending", "Confirmed", "Cancelled", "Completed"];

  if (!allowedStatus.includes(status)) {
    return res.status(400).json({ message: "Invalid status value" });
  }

  db.query(
    "UPDATE appointments SET status=? WHERE appointment_id=?",
    [status, id],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Status update failed" });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Appointment not found" });
      }

      res.json({ message: "Status Updated Successfully" });
    }
  );
});

export default router;
