var mongoose = require('mongoose');
const User = mongoose.model('User');
const Scores = mongoose.model('Scores');
const sessionChecker = require('../utils/sessionChecker');
/**
* @param : String : userName
* This function add an user ot the database
**/
exports.addUser = function (userName) {								// fonction qui va permettre de rajouter un utilisateur à la base de donnée 
	var myUser = new User({									// On créé un nouvel untilisateur 
		name : userName,								// Son nom est celui donné en paramètre
		randomizer : 0,									// Les scores des deux jeux sont initialisé à 0
		cookieClicker : 0,
		isBanned : false								// On initialise le joueur comme 'non-banni'
	});
	myUser.save(function (err){								
  		if(err !=null){
  			console.log("Erreur lors de l'insertion !" + "\n######\n" + err);  		}
  	});
}
/**
* @param : String : userName
* @param : HTTP request : req
* @param : HTTP response : res
* This function check if an user is register in the dataBase
**/
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

/**
* @param : String : userName
* @param : int : score
* @game : String : game
* This function update the score of the a user.
**/
exports.updateUser = function(userName, score, game ){
	console.log(' Mise à jour de score ('+score+') de ' + userName + ' dans la BDD pour le jeu : '+ game);
	
	if (game === 'randomizer'){
		User.updateOne( { name : userName}, {randomizer : score }, function(err) {
			if ( err) {
				 throw err;
			 } 
			console.log('Score du randomizer modifié');
		});
	} else if ( game === 'cookieClicker') {
		User.updateOne( { name : userName}, {cookieClicker : score },function(err) {
			if ( err) {
				 throw err;
			 } 
			console.log('Score du cookieClicker modifié');
		});
	} else {
		console.log('ce jeu n existe pas');
	}
}
	
/**
* @param : String : userName
* This function pass the field 'isBanned' of a user to true which will prevent this user to log in
**/
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

/**
* @param : String : userName
* This function pass the field 'isBanned' of a user to false which will allow this user to log in
**/
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

/**
* @param : HTTP response : res
* This function look for the best score in the game randomizer and create a page for the user
**/
exports.loadingRandomizer = function(res){
	 
	var parcours = User.find(null);
	parcours.exec(function (err, theUser) {
		if (err) {
			console.log('Une erreur est survenue lors de la recherche du meilleur score de Randomizer');
			throw err;
		}
		var tmp ;
		var l = theUser.length;
		var maxScore =0;
		console.log('A la recherche du meilleur score pour randomizer dans la liste de taille ' + l);
		for (var i = 0; i < l; i++) {
			tmp = theUser[i].randomizer;
			console.log('Analyse du joueur : ' + theUser[i].name)
			if ( tmp > maxScore ){
				maxScore = tmp;
				console.log ('Meilleur score mis à jour : ' + maxScore);
			}
		}
		console.log ('Chargement de la page randomizer : ' + maxScore);
		res.render('randomizer.ejs', { Worldscore : maxScore});
	});
 }

 /**
* @param : HTTP response : res
* This function look for the best score in the game cookieClicker and create a page for the user
**/
exports.loadingCookieClicker = function(res){
	 
	var parcours = User.find(null);
	parcours.exec(function (err, theUser) {
		if (err) {
			console.log('Une erreur est survenue losr de la recherche du meilleur score de Randomizer');
			throw err;
		}
		var tmp ;
		var l = theUser.length;
		var maxScore =0;
		console.log('A la recherche du meilleur score pour cookieClicker dans la liste de taille ' + l);
		for (var i = 0; i < l; i++) {
			tmp = theUser[i].cookieClicker;
			console.log('Analyse du joueur : ' + theUser[i].name)
			if ( tmp > maxScore ){
				maxScore = tmp;
				console.log ('Meilleur score mis à jour : ' + maxScore);
			}
		}
		console.log ('Chargement de la page cookieClicker : ' + maxScore);
		res.render('cookieClicker.ejs', { Worldscore : maxScore});
	});
 }
