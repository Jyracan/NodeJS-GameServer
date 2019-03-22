const express = require('express');
const sessionChecker = require('../utils/sessionChecker');
const router = express.Router();

router.get('/login', function (req, res) {
	res.render('connexion.ejs', {})
	console.log(req.cookies)
	console.log('get connexion')
})
router.post('/login', function (req,res){
	sessionChecker.login(req,res)	
})


module.exports = router