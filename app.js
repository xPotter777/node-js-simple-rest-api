//Env
require('dotenv').config()

//Modules
const express = require('express')
const app = express()

//Components
const router = require('./api/routes/posts')
//App middlewares
app.use(express.json())
app.use('/api',router)

//Last one middleware as a error handler
app.use(function(err, req, res, next) {
    if(err) {
        return res.status(500).json({error:{errorMessage:err.message}})
    }
});
//Export app
module.exports = app;