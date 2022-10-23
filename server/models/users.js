require('dotenv').config()

const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fname: { type: String, required: true},
    lname: { type: String, required: true},
    email: { type: String, required: true},
    notPassword: { type: String, required: true}

})

module.exports = mongoose.model('User', userSchema)