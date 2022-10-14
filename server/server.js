import express from 'express'
const PORT = 4000;
const app = express();

app.get('/', (req, res) => {
    res.send("Toiletries");
});

app.listen(PORT, () => {
    console.log('server running at http:localhost:4000')
})