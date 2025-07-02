const mongoose = require("mongoose");

// Define schema for Student
const studentSchema = new mongoose.Schema({
  firstName: String,           // Student's full name
  lastName: String,            // Student's age
  std: String,          // Student's email address
  rollNo: String,         // Course the student is enrolled in
  address: String,    // Date of admission
});

// Create model for Student from schema
const Student = mongoose.model("Student", studentSchema);

module.exports = Student;