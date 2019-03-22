const express = require('express');
const sessionChecker = require('../utils/sessionChecker');
const router = express.Router();

router.get('/cookieClicker', function (req, res) {
	sessionChecker.check()
	res.sendFile(__dirname+'/public/games/cookieClicker/cookieClicker.html');
	console.log('get jeux.cookieClicker');
	//res.render('assets/connexion')
}) 


module.exports = router