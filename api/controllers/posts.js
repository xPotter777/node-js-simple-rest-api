//Components
const Post = require("../models/Post");
const mongoose = require("mongoose");


    exports.create = async ( req, res, next ) => {
        try {
            const { author, title, body } = req.body

            if(!author || !title || !body) {
                return next(new Error('All required fields must have value'))
            }

            const post = await Post.create({author,title,body})

            res.json(post)
        }

        catch (e) {
            return next(new Error(e.message))
        }
    }

    exports.getAll = async (req, res, next) => {
        try {
            const posts = await Post.find();

            return res.json({message:'Here are the posts',posts})
        }

        catch (e) {
            return next(new Error(e.message))
        }
    }

    exports.getOne = async (req, res, next) => {
        try {
            const {id} = req.params

            if(!id) {
                return next(new Error('Please specify the id of post'))
            }

            const post = await Post.findById(id);

            return res.json({message:'Here is your post',post})
        }

        catch (e) {
            return next(new Error(e.message))
        }
    }

    exports.change = async (req, res, next) => {
        try {
                const { body:post } = req

                if(!post._id){
                    return next(new Error('Please specify the id of post'))
                }

                const updatedPost = await Post.findByIdAndUpdate(post._id, post, { new:true })

                return res.json({message:'Successfully updated!', updatedPost})
        }

        catch (e) {
            return next(new Error(e.message))
        }
    }

    exports.delete = async (req, res, next) => {
        try {
            const { id } = req.params

            if(!id) {
                return next(new Error('Please specify the id of post'))
            }
            const deletedPost = await Post.findByIdAndDelete(id)
            return res.json({message:'Successfully deleted!', deletedPost})
        }

        catch (e) {
            return next(new Error(e.message))
        }
    }


