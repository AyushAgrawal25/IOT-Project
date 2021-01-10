const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.json("Working ...");
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.json("Posted data");
});

var server = app.listen(8000, () => {
    console.log("Server is Listening..");
});