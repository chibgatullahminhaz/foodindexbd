const express = require("express");
const app = express();
const cors = require('cors');
const morgan = require('morgan');

// use cors 
app.use(cors())
// use morgam 
app.use(morgan('dev'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());






module.exports = app;