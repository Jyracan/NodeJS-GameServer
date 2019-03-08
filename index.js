const express = require('express')
const bodyParser=require('body-parser')
//recquire body-parser regarder sur internet !
const app = express()
const port = 3000
const path="/"
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static('assets'))

//Redirection to the login page
app.get('/', function (req, res) {
	res.render('connexion.ejs', {})
	console.log('Affichage de la page de connexion')
	//res.render('assets/connexion')
})
app.post('/index' , function (req, res) { //utiliser req.body.login pour attrapper le login
	res.render('accueil.ejs', {login : req.body.login})
	console.log('Affichage de la page de choix de jeu')
	//res.render('assets/connexion')
})

app.get('/devinette', function (req, res) {
	res.sendFile(__dirname+'/assets/jeux/devinette/devinette.html')
	console.log('Lancement du jeux devinette')
	//res.render('assets/connexion')
}) 

app.get('/randomizer', function (req, res) {
	res.sendFile(__dirname+'/assets/jeux/randomizer/randomizer.html')
	console.log('Lancement du jeux randomizer')
	//res.render('assets/connexion')
}) 

app.listen(port, () => console.log('http://localhost:'+port+path))