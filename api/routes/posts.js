//Modules
const express = require('express')
const router = express.Router();
//Components
const PostsController = require("../controllers/posts")
const Post = require("../models/Post");

//Create post
router.post('/posts', PostsController.create)

//Get All post
router.get('/posts',PostsController.getAll)

//Get single post
router.get('/posts:id',PostsController.getOne)

//Change post
router.put('/posts',PostsController.change)

//Delete post
router.delete('/posts:id',PostsController.delete)

module.exports = router