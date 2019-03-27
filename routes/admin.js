const express = require('express');
const router = express.Router();
const DataBase =require('../utils/connectionDB.js');

router.get('/admin', function (req, res) {
	res.render('admin.ejs');
});
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