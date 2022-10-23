const router = require('express').Router()
const toilets = require('../models/toilets')
const db= require("../models")

router.get('/test', (req,res) => {
    db.Toilets.find()
    .then((toilets) => {
        console.log("sending")
        res.send(toilets)
    })
})



module.exports = router