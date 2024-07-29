require('../config/db')
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const routes = require('../routes/Auth.route'); 

// use cors 
app.use(cors())
// use morgam 
app.use(morgan('dev'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());


// routes
app.use( "/api/v1/auth", routes);

// defualt route 
app.get('/', (req,res)=>{
  res.status(200).send('<h1>welcme to server </h1>')
})

// not found Router
app.use('*', (req, res)=>{
    res.status('404').send("Page not found");
  });

//   error server 
app.use((err,req,res)=>{
    res.status(500).send(err.message)
})


module.exports = app;