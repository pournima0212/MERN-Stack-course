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
}

module.exports = {
    getUserProfile
}