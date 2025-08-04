const mongoose= require ("mongoose")

const connectMongoDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/instagram-db")
        console.log("mongodb connected")
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectMongoDB;