const express = require('express');
const sessionChecker = require('../utils/sessionChecker');
const router = express.Router();

/**
* we receive a demand to logout
**/
router.post('/logout', function (req,res){
	sessionChecker.logout(req,res);
});

module.exports = router;