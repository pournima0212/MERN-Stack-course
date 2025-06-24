// import required modules
const express = require("express") // node js framework to creat api
const mongoose = require("mongoose") // data base to store data
const bodyParser = require("body-parser")// json data

// To create express Application
const app = express();

//port where server will run
const PORT = 2000;

//middleware to parse json data from requests
app.use(bodyParser.json());

// to start the server
app.listen(PORT, () => {
  console.log(`Server running on port: http://localhost:${PORT}`) //to get log server running msg
});

// Connect to MongoDB database             // DB Name Any Name we can use
mongoose.connect("mongodb://127.0.0.1:27017/School-DataBase");

// connection events for mongodb
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:")); // Log connection error
db.once("open", () => console.log("Connected to MongoDB")); // Log success on connection

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

/* ===========================
      CRUD API ROUTES
=========================== */

// CREATE - Add a new student (POST /students)
app.post("/students", async (req, res) => {
  try {
    console.log("Start POST API");

    const { FirstName, LastName, Std, RollNo, Address } = req.body;
    const studentData = new Student({
      FirstName, LastName, Std, RollNo, Address
    }); // create new student from request body

    await studentData.save(); // Save to database

    res.status(201).json(studentData); // Return created student
  } catch (err) {
    res.status(400).json({ error: err.message }); // Return error if creation fails
  }
});

// Read all- GET all students record

app.get('/students', async (req, res) => {
  try {
    const students = await Student.find();  //get all students from DB
    res.json(students); // returns all students record
  } catch (err) {
    res.status(500).json({ error: err.message }); // returns error if something get wrong
  }
});
