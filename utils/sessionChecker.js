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
		// TODO : Si le cookie de session est à false on redirige a /
	}

}
module.exports = sessionChecker;