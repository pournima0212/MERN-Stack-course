const Users = require("../models/users.models");

const createUsers = async (req, res) => {
    try {

        const { name, email, mobileNo, age } = req.body;

        const usersData = await Users({
            name,
            email,
            mobileNo,
            age
        })
        await usersData.save()

        res.status(201).json({ data: usersData, message: "Create User" });

    } catch (error) {
        console.log(error);
    }
};

const getAllUsers = async (req, res) => {
    try {

        const allUsersData = await Users.find()
        res.status(201).json({ data: allUsersData, message: "ger all Users Data" });

    } catch (error) {
        console.log(error);
    }
};

const deleteUser = async (req, res) => {
    try {
        const userId = req.body;
        await Users.findByIdAndDelete({_id : userId})
        res.status(201).json({ message: "User Deleted" });

    } catch (error) {
        console.log(error);

    }
};

const updateUser = async (req, res) => {
    try {
        res.status(201).json({ message: "Working on this API" });

    } catch (error) {
        console.log(error);

    }
};

module.exports = {
    createUsers,
    getAllUsers,
    deleteUser,
    updateUser,
}
