const express = require("express")
const { createPost, getAllPost, getMyPost, deletePost } = require("../controllers/post/post.controller")
const { verifyToken } = require("../utils/jwtFunctions")

const router = express.Router();

router.post('/create-post' , verifyToken , createPost)
router.get('/get-all-post' , verifyToken , getAllPost)
router.get('/get-my-post' , verifyToken , getMyPost)
router.get('/delete-my-post' , verifyToken , deletePost)

module.exports = router