const express = require('express')
const app = express()
const port = 3000
const path="/"

//app.use(express.static('assets'))

//Redirection to the login page
app.get('/', function (req, res) {
	res.sendFile(__dirname+'/assets/connexion.html')
	console.log('Affichage de la page de connexion')
	//res.render('assets/connexion')
})
app.post('/index' , function (req, res) {
	res.render('chambre.ejs', {etage : 1})
	console.log('Affichage de la page de choix de jeu')
	//res.render('assets/connexion')
})

app.listen(port, () => console.log('http://localhost:'+port+path))