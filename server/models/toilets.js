require('dotenv').config()

const mongoose = require('mongoose')

const toiletsSchema = new mongoose.Schema({
    name: { type: String, required: true},

})

module.exports.mongoose.model('Toilets', toiletsSchema)