const mongoose = require('mongoose')

const Post = new mongoose.Schema({
    author: { type: String, required:true},
    title: {type: String, required:true},
    body: {type:String, required:true}
})

module.exports = mongoose.model('Post',Post)