class connection{
	constructor(){
		console.log('Lancement du gestionnaire de DB');
	}
	connectToDataBase(){
		var mongoose = require('mongoose');
		const uri = "mongodb+srv://admin:Admin123!@game-server-qgt19.mongodb.net/test?retryWrites=true";
		mongoose.connect(uri,{ useNewUrlParser: true });
		var schema = new mongoose.Schema({ game : String, highScore : Number});
		var highScoreModel = mongoose.model('databaseServer', schema);
		var test = new highScoreModel({game : 'Randomizer', highScore : 2});
	  	test.save(function (err){
	  		console.log("Erreur lors de l'insertion !");
	  	});
		mongoose.connection.close();
		console.log('Fermeture de la DB')

	}
}

module.exports = connection;