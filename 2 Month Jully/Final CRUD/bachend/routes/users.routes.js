const express = require("express")
const { getAllUsers, createUsers, updateUser, deleteUser } = require("../controllers/users.controller")

const router = express.Router()
router.get("/get-all-user", getAllUsers)
router.post("/create-user", createUsers)
router.put("/update-user", updateUser)
router.delete("/delete-user", deleteUser);

module.exports = router;