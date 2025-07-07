const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    name : String,
    email : String,
    mobileNo : Number,
    age : Number
})

const Users = mongoose.model("Users" , usersSchema)
module.exports = Users