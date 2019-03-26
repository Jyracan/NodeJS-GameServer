const express = require('express');
const router = express.Router();
const sessionChecker = require('../utils/sessionChecker');
const DataBase =require('../utils/connectionDB.js');


router.post('/register', function (req,res){
	console.log('TODO');
	DataBase.addUser(req.body.login)
	sessionChecker.login(req,res);
});
router.get('/register', function (req,res){
	res.render('register.ejs');
});
module.exports = router;