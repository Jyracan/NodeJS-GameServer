const express = require('express');
const router = express.Router();
const DataBase =require('../utils/connectionDB.js');
/**
* We serve the login page
**/
router.get('/login', function (req, res) {
	res.render('connection.ejs');
});

/**
* We have a request to login to the website
**/
router.post('/login', function (req,res,){
	DataBase.checkUser(req.body.login, req, res);

});

module.exports = router;
