const Post = require("../../models/post/post.model");

const createPost = async(req, res) => {
    try {
        const {discription , location , active} = req.body
        const userId = req.user.id;
        const newPost = new Post({
            discription,
            location,
            active,
            userId
        });
        await newPost.save()

        res.status(201).json({post: newPost, message : "post created"})
    } catch (error) {
        console.log(error)
    }
} 

const getAllPost = async(req,res) => {
    try {
        const allPostData = await Post.find()
        res.status(201).json({ message : "get all post Data", allPostData: allPostData,})
    } catch (error) {
        console.log(error)
    }
}
 
module.exports={
    createPost,
    getAllPost,
}