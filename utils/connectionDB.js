var mongoose = require('mongoose');
const User = mongoose.model('User');

exports.addUser = function (userName) {
	var myUser = new User({
		name : userName,
		randomizer : 0,
		cookieClicker : 0
	});
	myUser.save(function (err){
  		if(err !=null){
  			console.log("Erreur lors de l'insertion !" + "\n######\n" + err);
  		}
  	});
}

exports.checkUser = function(userName){
	console.log('Est-ce que ' + userName + ' est dans la BDD ?');
	User.findOne({name : userName}, function(err, theUser) {
		flag = false;
        if (err){
            console.log(err);
        }
        if(theUser === null){
        	console.log('Non ...');
        }else{
        	console.log('Trouvé !');
        	flag=true;
        }
        return flag;

    });
}
