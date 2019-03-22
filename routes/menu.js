const express = require('express');
const sessionChecker = require('../utils/sessionChecker');
const router = express.Router();

router.get('/index' , function (req, res) {
	sessionChecker.check()
	res.render('accueil.ejs', {login : sessionChecker.user_identifier})
	console.log('post accueil');
	//res.render('assets/connexion')
})

module.exports = router