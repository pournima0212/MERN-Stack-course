const mongoose = require("mongoose"); // data base to store data

const connectMongoDb = async() => {
    try {
        // Connect to MongoDB database
       const connection = await mongoose.connect("mongodb://127.0.0.1:27017/School-DataBase");
       if(connection == true){
         console.log("connected DB....");
       }
    } catch (error) {
        console.log(error, "=====>");
    }
};

module.exports = connectMongoDb;