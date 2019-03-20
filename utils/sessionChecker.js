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
		user_identifier=req.body.login
		console.log('Identification de l\'utilisateur ' + this.user_identifier)
		res.cookie('session', 'True')
		res.redirect('/index')
	}
	check (req, res) {
		user_identifier=req.body.login
		console.log('Identification de l\'utilisateur ' + this.user_identifier)
		res.cookie('session', 'True')
		res.redirect('/index')
	}

}
module.exports = sessionChecker;