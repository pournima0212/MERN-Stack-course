//profile photo
// full name
// user name
// Email 
// mob no 
// password 

const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    userProfile : String,
    fullName : String,
    userName : String,
    email : String,
    mobileNo : Number,
    password : String,
    resetOtp : String,
    resetOtpExpire : Date,
})

const User = mongoose.model("User", userSchema)

module.exports = User;
