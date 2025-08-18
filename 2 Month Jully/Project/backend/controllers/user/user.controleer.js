const User = require("../../models/user/user.model");

const getUserProfile = async (req, res) => {
    try {
        console.log(req.user.id, "user-Id")

        const userData = await User.findById(req.user.id);
        res.status(201).json({
            message: "Get user successfully", userData
        })

    } catch (error) {

    }
};

const updateUserProfile = async (req, res) => {
    try {
        const userId = req.user.id

        const { fullName, userName, mobileNo } = req.body

        const updateUser = await User.findByIdAndUpdate(userId, {
            fullName,
            userName,
            mobileNo,
        },
            {
                new: true,
            })

        res.status(200).json({
            message: "User Updated",
            userData: updateUser,
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: error.message })
    }
}

const deleteUserProfile = async (req, res) => {
    try {
        const userId = req.user.id;

        const deleteUser = await User.findByIdAndDelete(userId)

        res.status(200).json({message : "User Profile Deleted"})
    } catch (error) {
        console.log(message.error)
    }
}

module.exports = {
    getUserProfile,
    updateUserProfile,
    deleteUserProfile,
}