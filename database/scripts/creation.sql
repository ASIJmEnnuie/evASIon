DROP TABLE IF EXISTS Categorie_favorite_Compte;
DROP TABLE IF EXISTS Image_Evenement;
DROP TABLE IF EXISTS Collaborateur_Evenement;
DROP TABLE IF EXISTS Participant_Evenement;
DROP TABLE IF EXISTS Categorie_Activite;
DROP TABLE IF EXISTS Image_Activite;
DROP TABLE IF EXISTS Image_Compte;
DROP TABLE IF EXISTS Ami;
DROP TABLE IF EXISTS Evenement;
DROP TABLE IF EXISTS Categorie;
DROP TABLE IF EXISTS Activite;
DROP TABLE IF EXISTS Image;
DROP TABLE IF EXISTS Admin;
DROP TABLE IF EXISTS Compte;



CREATE TYPE status AS ENUM ('M','F');

CREATE TABLE Compte (
  id SERIAL PRIMARY KEY,
  nom varchar(255) default NULL,
  prenom varchar(255) default NULL,
  date_naissance varchar(255) default NULL,
  genre status default NULL,
  email varchar(255) NOT NULL,
  mot_de_passe varchar(255) NOT NULL,
  flag_suppression boolean NOT NULL
);

CREATE TABLE Admin (
	id SERIAL PRIMARY KEY,
	id_compte integer REFERENCES Compte(id),
	date_debut varchar(255) NOT NULL,
	date_fin varchar(255) NOT NULL
);

CREATE TABLE Activite (
  id SERIAL PRIMARY KEY,
  nom varchar(255) NOT NULL,
  adresse varchar(255) default NULL,
  description varchar(255) default NULL,
  site varchar(255) default NULL,
  id_admin_derniere_modif integer REFERENCES Compte(id),
  date_derniere_modif varchar(255) default NULL
);


CREATE TABLE Evenement (
    id_evt SERIAL PRIMARY KEY,
    id_act integer references Activite(id),
    date_evt varchar(255) NOT NULL,
    description varchar(255) default NULL,
    heure varchar(10) NOT NULL,
    lieu varchar(255) NOT NULL,
    nb_inscrits integer default NULL,
    nb_places integer default NULL,
    nom varchar(255) NOT NULL,
    id_orga integer references Compte(id),
    prix varchar(10) default NULL
);

CREATE TABLE Image (
    id SERIAL PRIMARY KEY,
    chemin varchar(255) default null
);

CREATE TABLE Categorie (
    id SERIAL PRIMARY KEY,
    nom varchar(50),
    id_img integer references Image(id)
);

CREATE TABLE Image_Activite (
	id_act integer REFERENCES Activite(id),
	id_img integer REFERENCES Image(id),
	est_principale boolean NOT NULL,
	PRIMARY KEY(id_act, id_img)
);

CREATE TABLE Categorie_Activite (
	id_act integer REFERENCES Activite(id),
	id_cat integer REFERENCES Categorie(id),
	PRIMARY KEY(id_act, id_cat)
);

CREATE TABLE Ami (
	id_compte1 integer REFERENCES Compte(id),
	id_compte2 integer REFERENCES Compte(id),
	CHECK (id_compte1 != id_compte2),
	PRIMARY KEY (id_compte1, id_compte2)
);

CREATE TABLE Image_Compte (
	id_compte integer REFERENCES Compte(id),
	id_img integer REFERENCES Image(id),
	est_principale boolean NOT NULL,
	PRIMARY KEY(id_compte, id_img)
);

CREATE TABLE Image_Evenement (
    id_evt integer references Evenement(id_evt),
    id_img integer references Image(id),
    est_principale boolean,
    PRIMARY KEY(id_evt, id_img)
);

CREATE TABLE Collaborateur_Evenement (
    id_evt integer references Evenement(id_evt),
    id_compte integer references Compte(id),
    PRIMARY KEY(id_evt, id_compte)
);

CREATE TABLE Participant_Evenement (
    id_evt integer references Evenement(id_evt),
    id_compte integer references Compte(id),
    PRIMARY KEY(id_evt, id_compte)
);

CREATE TABLE Categorie_favorite_Compte (
    id_cat integer references Categorie(id),
    id_compte integer references Compte(id),
    PRIMARY KEY(id_cat, id_compte)
);
