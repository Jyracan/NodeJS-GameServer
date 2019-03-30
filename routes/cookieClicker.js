const express = require('express');
const sessionChecker = require('../utils/sessionChecker');
const DataBase =require('../utils/connectionDB.js');
const router = express.Router();

router.get('/cookieClicker', function (req, res) {
	if(sessionChecker.check(req,res)){ // We check if the user is logged 
		DataBase.loadingCookieClicker(res)
		console.log('get jeux.cookieClicker');
	}
});

router.post('/cookieClicker', function (req, res) { // Here we receive the new score of a user
	console.log('mis a jour du score de ' +req.cookies.userName + ' : '+ req.body.scoretosend);
	DataBase.updateUser(req.cookies.userName, req.body.scoretosend , 'cookieClicker' );
	res.redirect('/cookieClicker');
});

module.exports = router;