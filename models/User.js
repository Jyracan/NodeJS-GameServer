const mongoose = require('mongoose');
console.log('Création d\'un schémas');
var schema = new mongoose.Schema({ 
	name : String, 
	randomizer : Number, 
	cookieClicker : Number
});
module.exports = mongoose.model('User', schema);