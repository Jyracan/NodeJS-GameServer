# Projet NodeJS

## Introduction :

Dans le cadre du projet NodeJS, nous devons réaliser un serveur de jeux. Cela implique un dialogue client serveur et des problèmatiques tel que où stocké les données.
Dans ce projet seront réalisé :
    - Une page d'authentification (sans mot de passe)
    - Une page d'accueil dynamique où le client pourra choisir un jeux
    - Un (ou des) jeux avec un score, il faut retenir le score de l'utilisateur et un "meilleur score" qui sera stocké dans une base de donnée
    - La communication avec une base de donnée MongoDB pour récupérer et mettre à jour les meilleurs score de chaque utilisateur
    - L'implémentation d'une notion de session, un utilisateur ne devra pas pouvoir accéder au jeu si il n'est pas passé par la page de login !


## Authentification

### Cookie de session :
J'ai utiliser express pour mettre les cookies sur le navigateur du client et cookie-parser pour lire les cookies dans la requête HTTP. Le cookie de session permet de connaitre le nom du client, mais aussi d'éviter qu'il puisse accéder à une page sans passer par la page de login.

### Inscription :
Le joueur doit s'inscrire via un formulaire avant de pouvoir se connecter au site. Une fois le formulaire remplis et envoyé au serveur, le serveur va communiquer avce une base de donnée MongoDB qui va enregistrer un nouvel utilisateur.

### Bannissement :
Par manque de temps, je n'ai pas ajouté de contrainte pour accéder aux foncationnalité administrateur. Si j'aurais du le faire, j'aurais crée un booléen 'isAdmin' dans le modèle 'user' et en fonction de ce booléen, j'aurais servi des pages différentes. 
Cependant, j'ai quand même ajouté un boutton pour accéder à une fonctionnalité de banissement et de débanissement sur le menu. Cela se fait en mettant un champ booleén à true, qui empêche l'utilisateur de se connecter.

## Gestion des scores

### Score du client :
Le score du client est stocké comme demandé dans une base de données. Cependant pour y accéder j'ai besoin de passer par une callback, ce qui m'empêche de faire un return. Je n'ai donc pas réussi à afficher en même temps le score de l'utilisateur et le meilleur score.
J'ai donc rusé et j'ai stocké le score du client dans le localStorage.

### Meilleur score :
Le meilleur score est donné sur chaque jeu en parcourant à chaque fois la liste des utilisateurs et en renvoyant le meilleur.