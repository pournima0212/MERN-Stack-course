const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectMongoDb = require("./config/db");
const userRoutes = require("./routes/users.routes")

const app = express();
const PORT = 8080

connectMongoDb()

app.use(cors())
app.use(bodyParser.json());

app.use('/api', userRoutes)

app.listen(PORT, () => {
    console.log(`Server running on port: http://localhost:${PORT}`)
});