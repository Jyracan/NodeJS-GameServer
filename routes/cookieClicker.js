const express = require('express');
const sessionChecker = require('../utils/sessionChecker');
const router = express.Router();

router.get('/cookieClicker', function (req, res) {
	sessionChecker.check(req,res)
	res.sendFile('public/games/cookieClicker/cookieClicker.html', { root : __dirname +'/..'});
	console.log('get jeux.cookieClicker');
	//res.render('assets/connexion')
}) 


module.exports = router