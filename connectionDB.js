class connection{
	constructor(){
		console.log("Lancement de la connexion\n");
	}
	connectToDataBase(){
		var mongoose = require('mongoose');
		const uri = "mongodb+srv://admin:Admin123!@game-server-qgt19.mongodb.net/test?retryWrites=true";

		mongoose.connect(uri,function(err){
			
		  	console.log("Connexion réussie !");
		});
		var schema = new mongoose.Schema({ game : String, highScore : Number});
		var highScoreModel = mongoose.model('databaseServer', schema);
		var test = new highScoreModel({game : 'Randomizer', highScore : 2});
	  	test.save(function (err){
	  		console.log("Insertion d'un objet dans la base de donnée");
	  	});
		mongoose.connection.close();
	}
}

module.exports = connection;