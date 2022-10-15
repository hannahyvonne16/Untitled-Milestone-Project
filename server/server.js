const express = require('express')
const path =require('path')
const PORT = process.env.PORT || 4000
const app = express();

app.get('/', (req, res) => {
    res.send("Toiletries");
});

app.listen(PORT, () => {
    console.log('server running at http:localhost:4000')
})