show databases;

create database Clinic_db;

use Clinic_db;

CREATE TABLE patients (
patient_id VARCHAR(200) PRIMARY KEY,
name VARCHAR(50),
age INT,
gender VARCHAR(10),
phone VARCHAR(15));

INSERT INTO patients (patient_id, name, age, gender, phone)
values('P001','Swastika Soni',20,'Female',8764469688),
('P002','Anurag Verma',24,'Male',9876234500),
('P003','Himanshi Makwana',22,'Female',1234567890),
('P004','Pavan Makwana',20,'Male',2345098761),
('P005','Sneha',19,'Female',0987651234),
('P006','Arjini',18,'Female',7865490111),
('P007','Heer',20,'Female',1234509876),
('P008','Simone Agarwal',21,'Female',9123498471),
('P009','Harshit Vyas',22,'Male',9423889385),
('P010','Bunny',26,'Male',8561550003);

select * from patients;

CREATE TABLE doctor(
doctor_id VARCHAR(10) PRIMARY KEY,
doctor_name VARCHAR(20),
specialization VARCHAR(20),
fee INT NOT NULL);

INSERT INTO doctor(doctor_id, doctor_name, specialization,fee)
VALUES('D001','Dr. Mehta','Cardiologist',500),
('D002','Dr. Sharma','Dermatologist',600),
('D003','Dr. Khan','Opthopedist',700),
('D004','Dr. Joshi','Neurologist',800),
('D005','Dr. Patel','Pediatrition',750);

select * from doctor;

CREATE TABLE appointments(
appointment_id VARCHAR(200),
patient_id VARCHAR(200),
appointment_date DATE NOT NULL,
appointment_time TIME NOT NULL,
doctor_id VARCHAR(100),
status ENUM('Pending','Confirmed','Cancelled','Completed')DEFAULT 'Pending',
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (patient_id) REFERENCES patients(patient_id),
FOREIGN KEY (doctor_id) REFERENCES doctor(doctor_id));

drop table patients;
show tables;
drop table doctor;

CREATE TABLE patients (
patient_id VARCHAR(200) PRIMARY KEY,
name VARCHAR(50),
age INT,
gender VARCHAR(10),
phone VARCHAR(15));

INSERT INTO patients (patient_id, name, age, gender, phone)
values('P001','Swastika Soni',20,'Female',8764469688),
('P002','Anurag Verma',24,'Male',9876234500),
('P003','Himanshi Makwana',22,'Female',1234567890),
('P004','Pavan Makwana',20,'Male',2345098761),
('P005','Sneha',19,'Female',0987651234),
('P006','Arjini',18,'Female',7865490111),
('P007','Heer',20,'Female',1234509876),
('P008','Simone Agarwal',21,'Female',9123498471),
('P009','Harshit Vyas',22,'Male',9423889385),
('P010','Bunny',26,'Male',8561550003);

select * from patients;

CREATE TABLE doctor(
doctor_id VARCHAR(10) PRIMARY KEY,
doctor_name VARCHAR(20),
specialization VARCHAR(20),
fee INT NOT NULL);

INSERT INTO doctor(doctor_id, doctor_name, specialization,fee)
VALUES('D001','Dr. Mehta','Cardiologist',500),
('D002','Dr. Sharma','Dermatologist',600),
('D003','Dr. Khan','Opthopedist',700),
('D004','Dr. Joshi','Neurologist',800),
('D005','Dr. Patel','Pediatrition',750);

select * from doctor;

CREATE TABLE appointments(
appointment_id VARCHAR(200),
patient_id VARCHAR(200),
appointment_date DATE NOT NULL,
appointment_time TIME NOT NULL,
doctor_id VARCHAR(100),
status ENUM('Pending','Confirmed','Cancelled','Completed')DEFAULT 'Pending',
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (patient_id) REFERENCES patients(patient_id),
FOREIGN KEY (doctor_id) REFERENCES doctor(doctor_id));

INSERT INTO appointments (appointment_id, patient_id, appointment_date, appointment_time, doctor_id, status)
VALUES ('A101', 'P001', '2026-02-01', '09:00:00','D003', 'Pending'),
('A102','P002', '2026-02-01', '09:30:00', 'D001', 'Confirmed'),
('A103','P003', '2026-02-01', '10:00:00', 'D002', 'Completed'),
('A104','P004', '2026-02-02', '10:30:00', 'D004', 'Cancelled'),
('A105','P005', '2026-02-02', '11:00:00', 'D004', 'Confirmed'),
('A106','P006', '2026-02-03', '11:30:00', 'D005', 'Pending'),
('A107','P007', '2026-02-03', '12:00:00', 'D001', 'Completed'),
('A108','P008', '2026-02-04', '12:30:00', 'D002', 'Pending'),
('A109','P009', '2026-02-04', '13:00:00', 'D003', 'Confirmed'),
('A110','P010','2026-02-05', '13:30:00', 'D005', 'Cancelled');

select * from appointments;

SHOW INDEX FROM appointments;
SHOW CREATE TABLE appointments;

ALTER TABLE appointments ADD PRIMARY KEY (appointment_id);
ALTER TABLE patients ADD PRIMARY KEY (patient_id);
ALTER TABLE doctor ADD PRIMARY KEY (doctor_id);

SELECT appointment_id, COUNT(*) FROM appointments GROUP BY appointment_id HAVING COUNT(*) > 1;
 SHOW TABLES;
 SELECT * FROM patients;
  SELECT * FROM doctor;
 SELECT * FROM appointments;
 
 DROP TABLE IF EXISTS billing;
 CREATE TABLE billing (
    billing_id VARCHAR(200) PRIMARY KEY,
    patient_id VARCHAR(200),
    appointment_id VARCHAR(200),
    doctor_id VARCHAR(100),
    total_amount INT NOT NULL,
    generated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (patient_id) REFERENCES patients(patient_id),
    FOREIGN KEY (appointment_id) REFERENCES appointments(appointment_id),
    FOREIGN KEY (doctor_id) REFERENCES doctor(doctor_id));
 
 SHOW CREATE TABLE billing;
 
 INSERT INTO billing(billing_id, patient_id,appointment_id,doctor_id,total_amount)
VALUES('B201', 'P001', 'A101','D003',700),
('B202', 'P002', 'A102','D001',500),
('B203', 'P003', 'A103','D002',600),
('B204', 'P004', 'A104','D004',800),
('B205', 'P005', 'A105','D004',800),
('B206', 'P006', 'A106','D005',750),
('B207', 'P007', 'A107','D001',500),
('B208', 'P008', 'A108','D002',600),
('B209', 'P009', 'A109','D003',700),
('B210', 'P010', 'A110','D005',750);

select * from billing;
 

