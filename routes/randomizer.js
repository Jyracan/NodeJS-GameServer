const express = require('express');
const sessionChecker = require('../utils/sessionChecker');
const router = express.Router();

router.get('/randomizer', function (req, res) {
	sessionChecker.check()
	res.sendFile('public/games/randomizer/randomizer.html', { root : __dirname +'/..'});
	console.log('get jeux.randomizer');
	//res.render('assets/connexion')
}) 


module.exports = router