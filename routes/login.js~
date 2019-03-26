const express = require('express');
const sessionChecker = require('../utils/sessionChecker');
const router = express.Router();
const DataBase =require('../utils/connectionDB.js');

router.get('/login', function (req, res) {
	res.render('connection.ejs');
	console.log('get connexion');
});
router.post('/login', function (req,res){
<<<<<<< HEAD
	flag = DataBase.checkUser(req.body.login);
	console.log(flag);
	//if( === true){
	//	sessionChecker.login(req,res);
	//}else{
	//	res.send('Veuillez vous enregistrer pour accéder au site.');
	//}
=======
	DataBase.checkUser(req.body.login, req, res);
>>>>>>> ba88cd3c18d043d3ecd9436feb5a3848054e8a80
});

module.exports = router;
