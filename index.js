const express = require('express')
const bodyParser=require('body-parser')
const DataBase =require('./utils/connectionDB.js');
const SessionChecker = require('./utils/sessionChecker.js');

const app = express()
const port = 3000
const path="/"

sessionChecker = new SessionChecker()
tmp = new DataBase();

tmp.connectToDataBase();

app.use(bodyParser.urlencoded({ extended: false }))

// Création d'un domaine public pour les ressources comme les images CSS et jeux
app.use(express.static(__dirname + '/public'));

// Page de login
app.get('/', function (req, res) {
	res.render('connexion.ejs', {})
	console.log(req.cookies)
	console.log('get connexion')
	//res.render('assets/connexion')
})

app.post('/login', function (req,res){
	sessionChecker.login(req,res)	
})
app.post('/logout', function (req,res){
	sessionChecker.logout(req,res)	
})

app.get('/index' , function (req, res) {
	res.render('accueil.ejs', {login : sessionChecker.user_identifier})
	console.log('post accueil');
	//res.render('assets/connexion')
})

app.get('/randomizer', function (req, res) {
	res.sendFile(__dirname+'/public/games/randomizer/randomizer.html');
	console.log('get jeux.randomizer');
	//res.render('assets/connexion')
}) 

app.get('/cookieClicker', function (req, res) {
	res.sendFile(__dirname+'/public/games/cookieClicker/cookieClicker.html');
	console.log('get jeux.cookieClicker');
	//res.render('assets/connexion')
}) 

app.listen(port, () => console.log('\nhttp://localhost:'+port+path))