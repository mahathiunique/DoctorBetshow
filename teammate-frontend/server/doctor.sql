-- Create staff_directory table
CREATE TABLE staff_directory (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    name TEXT,
    role TEXT,
    department TEXT,
    email TEXT,
    phone TEXT,
    status TEXT,
    joined DATE
);

-- Insert staff data
INSERT INTO staff_directory (name, role, department, email, phone, status, joined) VALUES
('Dr. Sarah Johnson', 'Cardiologist', 'Cardiology', 'sarah.johnson@hospital.com', '555-123-4567', 'Active', '2020-05-15'),
('Dr. Michael Chen', 'Cardiac Surgeon', 'Cardiology', 'michael.chen@hospital.com', '555-234-5678', 'Active', '2019-08-10'),
('Dr. Emily Rodriguez', 'Electrophysiologist', 'Cardiology', 'emily.rodriguez@hospital.com', '555-345-6789', 'On leave', '2021-02-20'),
('Dr. James Wilson', 'Neurologist', 'Neurology', 'james.wilson@hospital.com', '555-456-7890', 'Active', '2018-11-05'),
('Dr. Lisa Thompson', 'Pediatrician', 'Pediatrics', 'lisa.thompson@hospital.com', '555-567-8901', 'Active', '2022-01-15'),
('Nurse Robert Brown', 'Head Nurse', 'Emergency', 'robert.brown@hospital.com', '555-678-9012', 'Active', '2020-09-30'),
('Nurse Jennifer Lee', 'Registered Nurse', 'Cardiology', 'jennifer.lee@hospital.com', '555-789-0123', 'Active', '2021-06-12'),
('Alex Martinez', 'Lab Technician', 'Laboratory', 'alex.martinez@hospital.com', '555-890-1234', 'Active', '2022-03-18'),
('Samantha Davis', 'Pharmacist', 'Pharmacy', 'samantha.davis@hospital.com', '555-901-2345', 'Active', '2021-11-08');

-- Create incident_reports table
CREATE TABLE incident_reports (
    title TEXT,
    type TEXT,
    department TEXT,
    reported_date DATE,
    reported_by TEXT,
    status TEXT,
    priority TEXT
);

-- Insert incident data
INSERT INTO incident_reports (problem, type, department, reported_date, reported_by, status, priority) VALUES
('Long wait time in Emergency', 'Patient', 'Emergency', '2025-05-10', 'John Doe', 'Resolved', 'High'),
('Rude behavior from staff', 'Patient', 'Cardiology', '2025-05-12', 'Mary Smith', 'In Progress', 'Medium'),
('MRI machine making unusual noise', 'Equipment', 'Radiology', '2025-05-13', 'Dr. David Kim', 'In Progress', 'Critical'),
('Incorrect medication dispensed', 'Patient', 'Pharmacy', '2025-05-08', 'Robert Johnson', 'Resolved', 'Critical'),
('ECG machine not printing properly', 'Equipment', 'Cardiology', '2025-05-14', 'Dr. Sarah Johnson', 'New', 'High'),
('Cold food served in patient room', 'Patient', 'Food Services', '2025-05-11', 'Emily Davis', 'Resolved', 'Low'),
('Ventilator alarm malfunctioning', 'Equipment', 'ICU', '2025-05-13', 'Dr. Michael Chen', 'In Progress', 'Critical');
-- See all tables

-- View data
SELECT * FROM staff_directory;
SELECT * FROM incident_reports;
