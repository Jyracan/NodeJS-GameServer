const express = require('express');
const sessionChecker = require('../utils/sessionChecker');
const router = express.Router();

/**
* We serve the index page
**/
router.get('/index' , function (req, res) {
	console.log('post accueil ');
	if(sessionChecker.check(req,res)){
		res.render('accueil.ejs', {login : req.cookies.userName});
	}
});

module.exports = router;