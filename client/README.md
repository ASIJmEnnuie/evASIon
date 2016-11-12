# Configuration du client

## Pré-requis :
* [sass](http://sass-lang.com/install)
* [sass-json-vars](https://github.com/vigetlabs/sass-json-vars)
* [node-js](https://nodejs.org/en/)
* [npm](http://blog.npmjs.org/post/85484771375/how-to-install-npm)
* [gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)
* [docker](https://www.docker.com/products/overview)
* [docker-compose](https://docs.docker.com/compose/install/)
* [live-reload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=fr)

## Documentations officielles
* [ReactJS](https://facebook.github.io/react/docs/getting-started.html)
* [Material-UI](http://www.material-ui.com#/)

## Commandes
* `npm install` : récupère toutes les librairies nécessaires au projet
* `gulp build` ou `gulp` : compile l'ensemble du projet
* `gulp minify` : minifie les fichiers
* `gulp prod` : compile et minifie l'ensemble du projet
* `gulp watch` : auto-compilation et rafraichissement de la page web sur le navigateur (**ctrl-c** pour quitter)
* `docker-compose build` : création de l'image docker utilisée
* `docker-compose up` : lancement du serveur web sur le **port 9090** (**ctrl-c** pour quitter)

## Première utilisation
* Executer la commande `npm install`
* Executer la commande `gulp`
* Executer la commande `docker-compose up`
* Executer dans un nouveau terminal la commande `gulp watch` (penser à activer l'extension *live-reload* sur le navigateur)
* Se connecter à l'adresse *192.168.1.1:9090* depuis votre navigateur
---
## TODO

### Partie connectée
- [x] Barre de navigation:
  - [x] Icône permettant le contrôle de l'affichage du menu de navigation latéral gauche
  - [x] Icône permettant l'affichage du menu d'accès aux propriétés liées au profil
  - [x] Icône de recherche se transformant en input de saisie textuelle après clic
- [x] Menu de navigation latéral gauche
- [ ] Page d'accueil:
  - [x] Carrousels
  - [ ] Evénements dans les carrousels
- [ ] Page de visualisation de toutes les activités
- [ ] Page de visualisation de tous les évènements:
  - [ ] Système de recherche d’événements
- [ ] Interface de visualisation d’une activité:
  - [ ] description sommaire
  - [ ] lien vers site web (officiel de préférence)
  - [ ] photos (nombre limité à définir)
  - [ ] événements liés
  - [ ] catégories associées
- [ ] Interface de visualisation d’un événement:
  - [ ] nombre de personnes inscrites
  - [ ] possibilité de limiter le nombre de participants
  - [ ] description sommaire
  - [ ] potentiel lieu (lié à une activité ou juste point géographique)
  - [ ] potentiel prix
  - [ ] date et heure
  - [ ] potentiel lieu de rendez-vous
- [ ] Interface de création d’un événement
- [ ] Interface de création d’une activité

### Partie hors connexion
- [x] Barre de navigation
- [x] Page d’accueil:
  - [x] Carrousel
  - [x] Formulaire de connexion
- [x] Page d’inscription (formulaire):
  - [x] nom
  - [x] email
  - [x] mot de passe
  - [x] genre (non obligatoire)
  - [x] date de naissance (non obligatoire)

### Autres
- [x] Gestion multilingue possible
