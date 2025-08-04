const express = require("express");
const { getUserProfile } = require("../controllers/user/user.controleer");

const router = express.Router();

router.get('/user/getuserprofile', getUserProfile)

module.exports = router