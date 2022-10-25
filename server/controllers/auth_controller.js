const User = require('../models/users')
const router = require('express').Router()
const bcrypt = require('bcrypt')
const db = require("../models")
const mongoose = require('mongoose')
const jwt = require('json-web-token')

router.post('/login-user', async (req, res) => {
    const { email, password } = req.body;

    // To find if user has email/password
    const user = await User.findOne({ email });

    if (!user || !await bcrypt.compare(password, user.password)) {
    
        return res.json({ error: 'User Not Found' });
    }
    else {
        const result = await jwt.encode(process.env.JWT_SECRET, { id: user.userId })
        res.json({ user: user, token: result.value })
    }

    // if (!password) {
    //     console.log("here 2")
    //     return res.json({ status: 'error', error: 'Invalid Password' });
    // }
});
router.get('/profile', async (req, res) => {
    try {
       
        const [authenticationMethod, token]= req.headers.authorization.split(' ')
        if (authenticationMethod == 'Bearer') {
            const result = await jwt.decode(process.env.JWT_SECRET, token)
            const {id} = result.value
          
            let user = await User.findOne({
                
        })
        res.json(user)
        }
        
    } catch (e) {
        console.log(e)
        res.json(null)
    }
}
)

module.exports = router