/** Import*/
const express = require('express');
const bodyParser=require('body-parser');
/** Module pour lire cookie dans le navigateur*/
const cookieParser = require('cookie-parser'); 
const DataBase =require('./utils/connectionDB.js');
const SessionChecker = require('./utils/sessionChecker.js');
const login = require('./routes/login');
const logout = require('./routes/logout');
const menu = require('./routes/menu');
const randomizer = require('./routes/randomizer');
const cookieClicker = require('./routes/cookieClicker');

const app = express();
const port = 3000;
const path="/";

// TODO : Remove trash ...
//tmp = new DataBase();
//tmp.connectToDataBase();
//---------------------------

//


console.log('Loading bodyParser');
/** Lire le corps d'une requête (post) http*/
app.use(bodyParser.urlencoded({ extended: false }));

console.log('Loading cookie-parser');
/** Cookie parser permet de lire les cookies dans le navigateur*/
app.use(cookieParser());

console.log('Loading Routes');
/** On indique à l'application qu'elle pourra utiliser les routes suivantes :*/
app.use(login);
app.use(logout);
app.use(menu);
app.use(randomizer);
app.use(cookieClicker);



/** Création d'un domaine public pour les ressources comme les images CSS et jeux*/
app.use(express.static(__dirname + '/public'));


/** Redirection vers la page de login*/ 
app.get('/', function (req, res) {
	res.redirect('/login');
})

app.listen(port, () => console.log('\nhttp://localhost:'+port+path));

