const User = require('../models/users')
const router = require('express').Router()
const bcrypt = require ('bcrypt')
const db= require("../models")
const mongoose = require('mongoose')


// router.post('/', async (req, res) => {
//     let {password, ...rest} = req.body
//     console.log(req.body)
//     const 
// })

// const User = mongoose.model('UserInfo', userModel);
// router.post('/sign-up', async (req, res) => {
//     console.log("results", req.body)
//     const { fname, lname, email, password } = req.body;
//     try {
//         console.log('16 is working')
//         const oldUser = await User.findOne({ email });
//         if (oldUser) {
//             res.send({ error: 'User exists' });
//         }
//         await User.create({
//             fname,
//             lname,
//             email,
//             password,
//         });
//         console.log('line 27 is working')
//         res.send({ status: 'userCreated' });
//     } catch (error) {
//         res.send({ status: 'error' });
//     }
//     console.log('finishline')
// });
router.post('/sign-up', async (req, res) => {
    let {email, ...rest} = req.body
    console.log('from client: ', req.body)
    const oldUser = await User.findOne({email});
    if(oldUser){
        res.send({error: 'User exists'})
    } else {
        const user = await User.create(req.body)
        // res.json(user)
        res.send({ status: "userCreated" })
    }

})

// router.get('/', async (req, res) => {
//     const users = await 
// })

module.exports= router