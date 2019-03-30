/**
* @param : HTTP request : req
* @param : HTTP response : res
* Put 2 cokies in the navigator of the user, one for the name and one for the session
* Then redirect him to the index
**/
exports.login = function (req, res) {
	console.log('Identification de l\'utilisateur ');
	res.cookie('session', 'True', { maxAge: 900000, httpOnly: true });
	res.cookie('userName',req.body.login, { maxAge: 900000, httpOnly: true });
	res.redirect('/index');
}
/**
* @param : HTTP request : req
* @param : HTTP response : res
* Remove the cokies in the navigator of the user
* Then redirect him to the login page
**/
exports.logout = function (req, res) {
	this.user_identifier='';
	console.log('Suppression du cookie de session');
	res.clearCookie('session');
	res.clearCookie('userName');
	res.redirect('/login');
}
/**
* @param : HTTP request : req
* @param : HTTP response : res
* If the navigator doesn't have a cookie then redirect to the login
* I use a boolean to notify if a redirectio happened
**/
exports.check = function (req, res) {
	// TODO : Si le cookie de session est à false on redirige a '/'
	console.log('###\nTest de routine du cookie de session ...');
	if(req.cookies.userName === undefined){
		console.log('Redirection vers page de login ...\n###');
		res.redirect('/login');
		return false;
	}
	console.log('Fin\n###');
	return true;
}
