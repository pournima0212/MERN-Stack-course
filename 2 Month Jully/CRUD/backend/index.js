// import required modules
const express = require("express") // node js framework to creat api
// const mongoose = require("mongoose");
const bodyParser = require("body-parser");// json data
const connectMongoDb = require("./config/db");
// const Student = require("./models/studentModel");
const { createStudent, getAllStudent } = require("./controllers/studentController");

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

//connect to mongodb database

connectMongoDb()

// CREATE - Add a new student (POST /students)
app.post("/students", createStudent);

// Read all- GET all students record

app.get('/students', getAllStudent);
