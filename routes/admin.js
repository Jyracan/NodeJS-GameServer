const express = require('express');
const router = express.Router();
const DataBase =require('../utils/connectionDB.js');

/**
* We serve the admin page
**/
router.get('/admin', function (req, res) {
	res.render('admin.ejs');
});
/**
* This route is called when the admin want to ban or unban a user
* We user the 'id' to check what the admin want to do
**/
router.post('/admin/:id', function (req,res){
	id=req.params.id
	if(id=='ban'){
		console.log('Utilisateur à banir :' + req.body.loginB);
		DataBase.banUser(req.body.loginB);
		res.send('Le marteau de la justive a frappé !');
	}else{
		console.log('Utilisateur à débanir :' + req.body.loginU);
		DataBase.unBanUser(req.body.loginU);
		res.send(req.body.loginU + ' pourra à nouveau jouer');
	}
});
module.exports = router;