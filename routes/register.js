const express = require('express');
const router = express.Router();
const sessionChecker = require('../utils/sessionChecker');
const DataBase =require('../utils/connectionDB.js');

/**
* We receive a request to create a User
**/
router.post('/register', function (req,res){
	DataBase.addUser(req.body.login)
	sessionChecker.login(req,res);
});
/**
* We serve the page register
**/
router.get('/register', function (req,res){
	res.render('register.ejs');
});
module.exports = router;