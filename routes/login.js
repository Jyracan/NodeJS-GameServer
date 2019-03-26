const express = require('express');
const sessionChecker = require('../utils/sessionChecker');
const router = express.Router();
const DataBase =require('../utils/connectionDB.js');

router.get('/login', function (req, res) {
	res.render('connection.ejs');
	console.log('get connexion');
});
router.post('/login', function (req,res){
	if(DataBase.checkUser(req.body.login) === true){
		sessionChecker.login(req,res);
	}else{
		res.send('Veuillez vous enregistrer pour accéder au site.');
	}
});

module.exports = router;