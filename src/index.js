require('dotenv').config(); 
const express = require('express')
const mongoose = require('mongoose'); 
const app = express();
const connectDB = require('./db/index.js');

connectDB();






app.listen(process.env.PORT, () => {
    app.get('/', (req, res) => {
        res.send('Hello World!');
    });

    console.log(`Server running on port ${process.env.PORT}`);
});