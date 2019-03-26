const express = require('express');
const router = express.Router();
const DataBase =require('../utils/connectionDB.js');

router.get('/admin', function (req, res) {
	res.render('admin.ejs');
});
router.post('/admin', function (req,res){
	DataBase.banUser(req.body.login);
	res.send('Le marteau de la justive a frappé !')
});

module.exports = router;