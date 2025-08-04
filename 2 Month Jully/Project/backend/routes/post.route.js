const express = require("express")
const { createPost, getAllPost } = require("../controllers/post/post.controller")
const { verifyToken } = require("../utils/jwtFunctions")

const router = express.Router();

router.post('/create-post' , verifyToken , createPost)
router.get('/get-all-post' , verifyToken , getAllPost)

module.exports = router