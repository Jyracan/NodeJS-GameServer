var mongoose = require('mongoose');
const User = mongoose.model('User');
const sessionChecker = require('../utils/sessionChecker');

exports.addUser = function (userName) {
	var myUser = new User({
		name : userName,
		randomizer : 0,
		cookieClicker : 0,
		isBanned : false
	});
	myUser.save(function (err){
  		if(err !=null){
  			console.log("Erreur lors de l'insertion !" + "\n######\n" + err);
  		}
  	});
}

exports.checkUser = function(userName,req,res){
	console.log('Est-ce que ' + userName + ' est dans la BDD ?');
	User.findOne({name : userName}, function(err, theUser) {
		flag = false;
        if (err){
            console.log(err);
        }
        if(theUser === null){
        	console.log('Non ...');
        	res.send('Veuillez vous enregistrer pour accéder au site.');
        }else{
        	console.log('Trouvé !');
        	sessionChecker.login(req,res);
        }
       

    });
}


exports.updateUser = function(userName, score, game ){
	console.log(' Mise à jour de score de ' + userName + ' dans la BDD pour le jeu : '+ game);
	
	if (game === 'randomizer'){
		User.updateOne( { name : userName}, {randomizer : score }, function(err) {
										if ( err) {
											 throw err;
										 } 
										console.log('Score du randomizer modifié');
									});
	} else if ( game === 'cookieCliker') {
		User.updateOne( { name : userName}, {cookieCliker : score },function(err) {
										if ( err) {
											 throw err;
										 } 
										console.log('Score du cookieCliker modifié');
									});
	} else {
		console.log('ce jeu n existe pas');
	}
}
	

exports.banUser = function(userName){
	User.findOne({name : userName}, function(err, theUser) {
		if (err){
            console.log(err);
        }else{
			User.updateOne( { name : userName}, {isBanned : true }, function(err) {
				if ( err) {
					 console.log(err);
				}
			});
        }
	});
}
exports.unBanUser = function(userName){
	User.findOne({name : userName}, function(err, theUser) {
		if (err){
            console.log(err);
        }else{
			User.updateOne( { name : userName}, {isBanned : false }, function(err) {
				if ( err) {
					 console.log(err);
				}
			});
        }
	});
}