var mongoose = require('mongoose');
const User = mongoose.model('User');
const sessionChecker = require('../utils/sessionChecker');

exports.addUser = function (userName) {								// fonction qui va permettre de rajouter un utilisateur à la base de donnée 
	var myUser = new User({									// On créé un nouvel untilisateur 
		name : userName,								// Son nom est celui donné en paramètre
		randomizer : 0,									// Les scores des deux jeux sont initialisé à 0
		cookieClicker : 0,
		isBanned : false								// On initialise le joueur comme 'non-banni'
	});
	myUser.save(function (err){								// Fonction pour gérer une erreur quelconque
  		if(err !=null){
  			console.log("Erreur lors de l'insertion !" + "\n######\n" + err);	// Indiqué à l'utilisateur qu'une erreur est survenue
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
        	if(theUser.isBanned == false){
				sessionChecker.login(req,res);
			}else{
				res.send('L\'utilisateur ' + userName + ' est blacklisté !');
			}
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
	} else if ( game === 'cookieClicker') {
		User.updateOne( { name : userName}, {cookieCliker : score },function(err) {
		if ( err) {
			 throw err;
		 } 
		console.log('Score du cookieClicker modifié');
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

exports.hsRandomizer = function(){
	
	User.findOne(null);
	
	res = parcours.exec(function (err, theUser) {
				var res = 0;
				if (err) {
					console.log('Une erreur est survenue losr de la recherche du meilleur score de Randomizer');
					throw err;
				}
				var tmp = -1;
				for (var i = 0, l = theUser.length; i < l; i++) {
					
    					tmp = theUser[i];
    					console.log('dbg : hsr['+i+'] = ' + tmp);
    					if ( tmp.randomizer > res ){
    						res = tmp.randomizer;
    					}
    				}
    				//console.log('dbg : res = ' + res);
    				return res 
    			});
    	return res;
}

exports.scoreUser = function(Username, game, err){
	var res;
	User.findOne({name : Username}, function(err, theUser, res){ 
	 							if ( err ) {
	 								console.log(err);
	 							} 
	 							if ( game === 'randomizer' ){
								 	console.log(theUser.randomizer);
								 	res = theUser.randomizer;
								 } else if ( game === 'cookieClicker'){
								 	res = theUser.cookierClicker;
								 } else {
								 	console.log('Le jeu n existe pas, jeux disponibles : \n-randomizer\n-cookieClicker');
								 }
	 						});
	console.log('res = '+res);
	return res;

}	  
    	
    			
				
			

