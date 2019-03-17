const express = require('express')
const bodyParser=require('body-parser')
//recquire body-parser regarder sur internet !
const app = express()
const port = 3000
const path="/"

const DataBase =require('./utils/connectionDB.js');
tmp = new DataBase();

tmp.connectToDataBase();

app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(__dirname + '/public'));

//Redirection to the login page
app.get('/', function (req, res) {
	res.render('connexion.ejs', {})
	console.log('\nget connexion')
	//res.render('assets/connexion')
})

app.post('/index' , function (req, res) { //utiliser req.body.login pour attrapper le login
	res.render('accueil.ejs', {login : req.body.login})
	console.log('\npost accueil');
	//res.render('assets/connexion')
})

app.get('/randomizer', function (req, res) {
	res.sendFile(__dirname+'/public/games/randomizer/randomizer.html');
	console.log('\nget jeux.randomizer');
	//res.render('assets/connexion')
}) 

app.get('/cookieClicker', function (req, res) {
	res.sendFile(__dirname+'/public/games/cookieClicker/cookieClicker.html');
	console.log('\nget jeux.cookieClicker');
	//res.render('assets/connexion')
}) 

app.listen(port, () => console.log('\nhttp://localhost:'+port+path))