const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectMongoDB = require("./config/db");
const authRoute = require("./routes/auth.route")
const userRoute = require("./routes/user.route")
const postRoute = require("./routes/post.route")
require('dotenv').config()

const app = express();
app.use(cors())
app.use(bodyParser.json());
connectMongoDB()
const PORT = 9090

app.use("/api/auth" , authRoute)
app.use('/api/user' , userRoute)
app.use('/api/post' , postRoute)

app.listen(PORT, () => {
    console.log(`Server running on port: http://localhost:${PORT}`)
});

