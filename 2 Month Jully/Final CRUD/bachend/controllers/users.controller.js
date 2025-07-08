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
        const { userId } = req.query;
        console.log(userId, "userId")
        const userData = await Users.findByIdAndDelete(userId)
        console.log(userData, "userData")
        res.status(201).json({ message: "User Deleted" });

    } catch (error) {
        console.log(error);

    }
};

const updateUser = async (req, res) => {
    try {
        const { userId } = req.query;
        const { name, email, mobileNo, age } = req.body;
        const updateUser = await Users.findByIdAndUpdate(userId, { name, email, mobileNo, age })
        res.status(201).json({ data: updateUser, message: "User updated" });

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
