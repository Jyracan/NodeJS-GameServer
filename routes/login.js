const express = require('express');
const router = express.Router();
const DataBase =require('../utils/connectionDB.js');

router.get('/login', function (req, res) {
	res.render('connection.ejs');
});
router.post('/login', function (req,res){
	DataBase.checkUser(req.body.login, req, res);
});

module.exports = router;