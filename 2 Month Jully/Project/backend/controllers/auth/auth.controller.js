//1. /api/auth/register   ===> post
//2. /api/auth/login      ===> post
//3. /api/auth/forget-password    ===> post
//4. /api/auth/reset-password    ===> post
//5. /api/auth/change-password    ===> post

const User = require("../../models/user/user.model");
const { generateToken } = require("../../utils/jwtFunctions")
const jwt = require("jsonwebtoken")
const nodemailer = require("nodemailer");
const bcrypt = require('bcrypt');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ronycolmen67@gmail.com',
        pass: 'wxch lhzp pkwq whjc',
    },
    tls: {
        rejectUnauthorized: false, // Ignore self-signed certificates
    },
});

const registerUser = async (req, res) => {
    try {
        console.log("Register API called")
        const { userName, email, fullName, password } = req.body

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = await User({ userName, email, fullName, password: hashedPassword });
        await newUser.save()

        res.status(201).json({ user: newUser, message: "user registered successfully" });

    } catch (error) {
        console.log(error)
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body

        const userData = await User.findOne({ email })

        if (!userData) {
            return res.status(404).json({ message: "User NOt found in db" });
        }
        // if (userData.password == password) {
        //     const token = generateToken(userData._id)
        //     res.status(200).json({ message: "login successfull", token: token });
        // } else {
        //     res.status(500).json({ message: "log in failed" });
        // }

        const ispasswordTrue = await bcrypt.compare(password, userData.password);

        if (!ispasswordTrue) {
            res.status(500).json({ message: "Password is incorrect" })
        }

        const token = generateToken(userData._id)
        res.status(200).json({ message: "login successfull", token: token });
    } catch (error) {
        console.log(error)
    }
};

const forgotpassword = async (req, res) => {
    try {
        const { email } = req.body
        const userData = await User.findOne({ email })

        if (!userData) {
            return res.status(404).json({ message: "User NOt found in db" });
        }

        const otp = Math.floor(10000 + Math.random() * 1000);

        userData.resetOtp = otp;
        userData.resetOtpExpire = Date.now() + 10 * 60 * 1000;    //10 Minutes expiration

        await userData.save();

        const mailOptions = {
            from: "ronycolmen67@gmail.com",
            to: email,
            subject: "Password resent OTP",
            text: `Your otp for password reset is: ${otp}.It will expire in 10 minutes.`,
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: "Otp send to email", Otp: otp })

    } catch (error) {
        console.log(error)
    }
};

const verifyOtp = async (req, res) => {
    try {

        const { email, otp } = req.body

        const userData = await User.findOne({ email })

        if (!userData) {
            return res.status(404).json({ message: "user not found in db" })
        }

        if (otp !== userData.resetOtp) {
            return res.status(404).json({ message: "otp is invalid" })
        }

        if (userData.resetOtpExpire < Date.now()) {
            return res.status(404).json({ message: "otp is expired" })
        }

        const token = generateToken(userData._id)
        return res.status(200).json({ message: "otp verified successfully", token: token });

    } catch (error) {
        console.log(error)
    }
}

const resetPassword = async (req, res) => {
    try {

        const { token, newPassword } = req.body
        let decode

        try {
            decode = jwt.verify(token, "JWT_SECRET");
        } catch (error) {
            return res.status(201).json({ message: "token is not valid", error: error.message })
        }

        const userData = await User.findById(decode.id)

        if (!userData) {
            return res.status(404).json({ message: "user not found in db" })
        }

        userData.password = newPassword

        userData.save()

        return res.status(200).json({ message: "password reset successfully" });

    } catch (error) {
        console.log(error)
    }
};

const changePassword = async (req, res) => {
    try {

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    loginUser,
    registerUser,
    forgotpassword,
    verifyOtp,
    resetPassword,
    changePassword,
}