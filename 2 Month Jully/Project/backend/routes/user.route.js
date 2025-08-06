const express = require("express");
const { getUserProfile } = require("../controllers/user/user.controleer");
const { verifyToken } = require("../utils/jwtFunctions");


const router = express.Router();

router.get('/getuserprofile', verifyToken, getUserProfile)

module.exports = router