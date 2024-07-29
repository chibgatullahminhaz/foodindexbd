const express = require('express');
const routes = express.Router();

// // require controller 
const { registerController, loginController ,testController} = require('../controller/auth.controller');
const { isAdmin, requireSingIn } = require('../middleware/AuthMiddleware');

//Register route || method
routes.post('/register',registerController )

//LOGIN route || method
routes.post('/login',loginController )


// TEST ROUTRE
routes.get('/test',requireSingIn, isAdmin, testController)

module.exports = routes;