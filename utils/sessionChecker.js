class sessionChecker{
	constructor(){
		console.log('Lancement du gestionnaire de session');
		this.user_identifier=''
	}
	login (req, res) {
		this.user_identifier=req.body.login
		console.log('Identification de l\'utilisateur ' + this.user_identifier)
		res.cookie('session', 'True')
		res.redirect('/index')
	}
	logout (req, res) {
		this.user_identifier=''
		console.log('Suppression du cookie de session')
		res.cookie('session', 'False')
		res.redirect('/')
	}
	check (req, res) {
		// TODO : Si le cookie de session est à false on redirige a '/'
		console.log('###\nTest de routine du cookie de session ...');

		/*
		for (cookie in cookies) {
			if(cookie.toString()=='True'){
				console.log('La vérifiaction de cookie fonctionne !')
			}
		}*/
		console.log('Cookie valide, utilisateur ' + this.user_identifier + ' reconnu\n###');
	}

}
module.exports = sessionChecker;