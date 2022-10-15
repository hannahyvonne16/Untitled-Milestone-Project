const express = require('express')
const path =require('path')
const PORT = process.env.PORT || 4000
const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')))

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/', require('./controllers/toilets_controller'))

app.get('/', (req, res) => {
    res.send("Toiletries");
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})