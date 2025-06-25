const mongoose = require("mongoose");

// Define schema for Student
const studentSchema = new mongoose.Schema({
  FirstName: String,           // Student's full name
  LastName: String,            // Student's age
  Std: String,          // Student's email address
  RollNo: String,         // Course the student is enrolled in
  Address: String,    // Date of admission
});

// Create model for Student from schema
const Student = mongoose.model("Student", studentSchema);

module.exports = Student