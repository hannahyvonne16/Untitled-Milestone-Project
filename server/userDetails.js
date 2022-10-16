// (Shane) trying to set up for log in and sign up to connect with MongoDB

const mongoose = require('mongoose');

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