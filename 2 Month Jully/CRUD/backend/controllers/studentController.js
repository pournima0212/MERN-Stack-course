const Student = require("../models/studentModel");

const createStudent = async (req, res) => {
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
};

const getAllStudent = async (req, res) => {
    try {
        const students = await Student.find();  //get all students from DB
        res.json(students); // returns all students record
    } catch (err) {
        res.status(500).json({ error: err.message }); // returns error if something get wrong
    }
};

module.exports = {createStudent, getAllStudent};