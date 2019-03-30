const express = require('express');
const sessionChecker = require('../utils/sessionChecker');
const DataBase =require('../utils/connectionDB.js');
const router = express.Router();


router.get('/randomizer', function (req, res) {
	if(sessionChecker.check(req,res)){ // We check if the user is logged 
		DataBase.loadingRandomizer(res)
		console.log('get jeux.randomizer');
	}
});

router.post('/randomizer', function (req, res) { // Here we receive the new score of a user
	console.log('mis a jour du score de ' +req.cookies.userName + ' : '+ req.body.scoretosend);
	DataBase.updateUser(req.cookies.userName, req.body.scoretosend , 'randomizer' );
	res.redirect('/randomizer');
});



module.exports = router;