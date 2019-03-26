exports.login = function (req, res) {
	console.log('Identification de l\'utilisateur ')
	res.cookie('session', 'True', { maxAge: 900000, httpOnly: true })
	res.cookie('userName',req.body.login, { maxAge: 900000, httpOnly: true })
	res.redirect('/index')
}
exports.logout = function (req, res) {
	this.user_identifier=''
	console.log('Suppression du cookie de session')
	res.clearCookie('session')
	res.clearCookie('userName')
	res.redirect('/login')
}
exports.check = function (req, res) {
	// TODO : Si le cookie de session est à false on redirige a '/'
	console.log('###\nTest de routine du cookie de session ...');
	console.log('cookies ' + req.cookies.userName)
	//flag=false
	console.log('Fin\n###');

}
