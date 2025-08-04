const express = require("express")
const { loginUser, registerUser,  forgotpassword, verifyOtp, resetPassword, changePassword } = require("../controllers/auth/auth.controller")

const router = express.Router()

router.post('/login' , loginUser)
router.post('/register' ,  registerUser)
router.post('/forgot-password' , forgotpassword)
router.post('/verify-otp' ,  verifyOtp)
router.post('/reset-password' ,  resetPassword)
router.post('/change-password' ,  changePassword)

module.exports = router;