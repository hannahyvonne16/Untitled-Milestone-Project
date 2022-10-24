const User = require('../models/users')
const router = require('express').Router()
const bcrypt = require ('bcrypt')
const db= require("../models")
const mongoose = require('mongoose')
const jwt = require('json-web-token')

router.post('/login-user', async (req, res) => {
    const { email, password } = req.body;
    console.log('from client: ', req.body)
    console.log(email, password)
    // To find if user has email/password
    const user = await User.findOne({ email });
    console.log(user)
    if (!user || !await bcrypt.compare (password, user.password)) {
        console.log("here")
        return res.json({ error: 'User Not Found' });
    }
    else {
        const result = await jwt.encode(process.env.JWT_SECRET, { id: user.userId})
        res.json({user: user, token: result.value})
    }

    // if (!password) {
    //     console.log("here 2")
    //     return res.json({ status: 'error', error: 'Invalid Password' });
    // }
});
router.get('/profile', async(req,res) => {
    try{
        let user = await User.findOne({
        })
        res.json(user)
    } catch{
        res.json(null)
    }
}
)

module.exports= router