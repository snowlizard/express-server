// import files and packages up here
const express = require('express');
const morgan = require('morgan');

// create your express server below
let app = express();
// add your routes and middleware below
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.status(200).send("Hello Express!");
});

app.get('/data', (req, res) => {
    let data = require('./data.json');
    res.status(200).send(data);
})

// finally export the express application
module.exports = app;
