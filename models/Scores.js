const mongoose = require('mongoose');
console.log('Création d\'un schémas Scores');
var schema = new mongoose.Schema({ 
	randomizer : Number, 
	cookieClicker : Number,
});
module.exports = mongoose.model('Scores', schema);