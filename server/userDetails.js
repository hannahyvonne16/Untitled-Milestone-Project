const mongoose = require('mongoose');
require('dotenv').config()
// (Shane) trying to set up for log in and sign up to connect with MongoDB

const UserDetailsSchema = new mongoose.Schema(
    {
        fname: String,
        lname: String,
        email: { type: String, unique: true },
        password: String,
    }, {
        collection: 'UserInfo',
    }
)

mongoose.model('UserInfo', UserDetailsSchema);