const express = require('express')
const path =require('path')
const PORT = process.env.PORT || 4000
const app = express();
const mongoose = require('mongoose');

// Connection to mongoDB database
    const mongoUrl = 'mongodb+srv://finalproject:theshit@finalproject.mcyoudd.mongodb.net/test';

    mongoose.connect(mongoUrl, {
        useNewUrlParser: true
    }).then(() => {console.log('connected to database');

    }).catch(e => console.log(e));

    require('./userDetails');

    // code for sign up 
    const User = mongoose.model('UserInfo');
    app.post('/sign-up', async(req, res) => {
        const {fname, lname, email, password} = req.body;
        try {
            const oldUser = await User.findOne({ email });
            if(oldUser) {
                res.send({error: 'User exists'});
            }
                await User.create({
                    fname,
                    lname,
                    email,
                    password,
                });
                res.send({status: 'ok'});
        } catch (error) {
            res.send({status: 'error'});
        }
    });

    // code for log in

    app.post('/login-user', async (req, res) => {
        const { email, password } = req.body;

        // To find if user has email/password
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({ error: 'User Not Found' });
        } 
        if (!password) {
            return res.json({ status: 'error', error: 'Invalid Password'});
        }
    });

    app.listen(4000, () => {
        console.log('Server started');
    });

app.use(express.static(path.resolve(__dirname, '../client/build')))


app.use(express.urlencoded({extended:true}));

app.use('/', require('./controllers/toilets_controller'))

app.get('/', (req, res) => {
    res.send("Toiletries");
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})

// for sign-up and maybe log-in??? (Shane)
// app.post('/post', async (req, res) => {
//     console.log(req.body);
//     const { data } = req.body;

//     try {
//         if (data == "") {
//             res.send({ status: 'ok'});
//         } else {
//             res.send({ status: 'User not found'});
//         }
//     } catch (error) {
//         res.send({ status: 'Something went wrong try again'});
//     }
// });

// require('./userDetails');

// const User = mongoose.model('UserInfo');

// app.post('/register', async (req, res) => {

//     const { name, email } = req.body;
//     try {
//         await User.create({
//             name: name,
//             email: email, 
//         });
//         res.send({ status: 'ok'})
//     } catch (error) {
//         res.send({ status: 'error' });
//     }
// });
// added comment