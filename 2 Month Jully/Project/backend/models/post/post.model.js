// post image
//discription or caption
// location
// show or hide post (active status== true/false)

const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    // userId : String,
    // postImage : String,
    // discription : String,
    // location : String,
    // active : Boolean

    userId: {
        type: mongoose.Schema.ObjectId,
        ref: "User", 
        require: true,
    },
    discription: {
        type: String,
        require: true,
        trim : true,
    },
    location: {
        type: String,
        require: true,
        trim : true,
    },
    active: {
        type: Boolean,
        default: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
})

const Post = mongoose.model("Post", postSchema) 

module.exports = Post