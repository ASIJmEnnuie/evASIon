DROP TABLE IF EXISTS Evenement;
DROP TABLE IF EXISTS Categorie;
DROP TABLE IF EXISTS Image;
DROP TABLE IF EXISTS ImgEvt;
DROP TABLE IF EXISTS CollaborateurEvt;
DROP TABLE IF EXISTS ParticipantEvt;
DROP TABLE IF EXISTS CategorieFavoriteCompte;

DROP TABLE IF EXISTS Activite;
DROP TABLE IF EXISTS Compte;
DROP TABLE IF EXISTS Admin;
DROP TABLE IF EXISTS ImgAct;
DROP TABLE IF EXISTS ImgCompte;
DROP TABLE IF EXISTS Ami;
DROP TABLE IF EXISTS CategorieAct;

CREATE TYPE status AS ENUM ('M','F');

CREATE TABLE Compte (
  id SERIAL PRIMARY KEY,
  nom varchar(255) default NULL,
  prenom varchar(255) default NULL,
  dateNaissance varchar(255) default NULL,
  genre status default NULL,
  email varchar(255) NOT NULL,
  motDePasse varchar(255) NOT NULL,
  flagSuppression boolean NOT NULL
);

CREATE TABLE Admin (
	id SERIAL PRIMARY KEY,
	idCompte integer REFERENCES Compte(id),
	dateDebut varchar(255) NOT NULL,
	dateFin varchar(255) NOT NULL
);

CREATE TABLE Activite (
  id SERIAL PRIMARY KEY,
  nom varchar(255) NOT NULL,
  adresse varchar(255) default NULL,
  description varchar(255) default NULL,
  site varchar(255) default NULL,
  idAdminDerniereModif integer REFERENCES Compte(id),
  dateDerniereModif varchar(255) default NULL
);


CREATE TABLE Evenement (
    idEvt SERIAL PRIMARY KEY,
    idAct integer references Activite(id),
    dateEvt varchar(255) NOT NULL,
    description varchar(255) default NULL,
    heure varchar(10) NOT NULL,
    image varchar(255) default NULL,
    lieu varchar(255) NOT NULL,
    nbInscrits integer default NULL,
    nbPlaces integer default NULL,
    nom varchar(255) NOT NULL,
    idOrga integer references Compte(id),
    prix varchar(10) default NULL
);

CREATE TABLE Image (
    id SERIAL PRIMARY KEY,
    chemin varchar(255) default null
);

CREATE TABLE Categorie (
    id SERIAL PRIMARY KEY,
    nom varchar(50),
    idImg integer references Image(id)
);

CREATE TABLE ImgAct (
	idAct integer REFERENCES Activite(id),
	idImg integer REFERENCES Image(id),
	estPrincipale boolean NOT NULL,
	PRIMARY KEY(idAct, idImg)
);

CREATE TABLE CategorieAct (
	idAct integer REFERENCES Activite(id),
	idCat integer REFERENCES Categorie(id),
	PRIMARY KEY(idAct, idCat)
);

CREATE TABLE Ami (
	idCompte1 integer REFERENCES Compte(id),
	idCompte2 integer REFERENCES Compte(id),
	CHECK (idCompte1 != idCompte2),
	PRIMARY KEY (idCompte1, idCompte2)
);

CREATE TABLE ImgCompte (
	idCompte integer REFERENCES Compte(id),
	idImg integer REFERENCES Image(id),
	estPrincipale boolean NOT NULL,
	PRIMARY KEY(idCompte, idImg)
);

CREATE TABLE ImgEvt (
    idEvt integer references Evenement(idEvt),
    idImg integer references Image(id),
    estPrincipal boolean,
    PRIMARY KEY(idEvt, idImg)
);

CREATE TABLE CollaborateurEvt (
    idEvt integer references Evenement(idEvt),
    idCompte integer references Compte(id),
    PRIMARY KEY(idEvt, idCompte)
);

CREATE TABLE ParticipantEvt (
    idEvt integer references Evenement(idEvt),
    idCompte integer references Compte(id),
    PRIMARY KEY(idEvt, idCompte)
);

CREATE TABLE CategorieFavoriteCompte (
    idCat integer references Categorie(id),
    idCompte integer references Compte(id),
    PRIMARY KEY(idCat, idCompte)
);
