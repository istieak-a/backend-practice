require('dotenv').config(); 
const express = require('express')
const mongoose = require('mongoose'); 
const app = express();
const connectDB = require('./db/index.js');

connectDB()
.then( () => {
    app.listen(process.env.PORT || 8000, () => {
        console.log("Server is running on port: ", process.env.PORT); 
    })
})
.then((err) => {
    console.log("MONGODB connection error: ", err);
})

