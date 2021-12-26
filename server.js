//Env
require('dotenv').config()
//Modules
const mongoose = require('mongoose')
//Components
const app = require('./app')
//Listen to the port and log the message
const startApp = async () => {
    try {

        await mongoose.connect(process.env.DB_URL)

        app.listen(process.env.PORT || 3000, () => {
            console.log('App has started')
        })
    }catch (e) {
        console.log(e)
    }
}

startApp()

