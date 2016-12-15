INSERT INTO compte values (1, 'Bob', 'Leponge', '01/01/2001', 'M', 'bobleponge@carree.fr', 'blpg', false);
INSERT INTO compte values (2, 'Inspecteur', 'Gadget', '02/02/2002', 'M', 'insp.gadget@quivoila.houhou', 'inspG', true);
INSERT INTO compte values (3, 'Dora', 'Lexploratrice', '03/03/2003', 'F', 'd.lexplo@ouallonsnous.fr', 'dora', true);
INSERT INTO compte values (4, 'Petit', 'OursBrun', '04/04/2004', 'M', 'petitours@brun.fr', 'petitOB', false);

INSERT INTO activite values (1, 'Zenith de Paris', 'Paris', 'Concerts au Zénith...', 'zenithparis.fr', null, null);
INSERT INTO activite values (2, 'Théatre Les Etoiles', 'Paris', 'Spectacles et concerts','lesetoiles.fr', null, null);
INSERT INTO activite values (3, 'Musee du Louvre', 'Paris', 'Visite du musee', 'louvre.fr', null, null);
INSERT INTO activite values (4, 'La Tour Eiffel', 'Paris', 'Visite de la TE', 'toureiffel.fr', null, null);
INSERT INTO activite values (5, 'Laser Game Evolution', 'Rouen', 'Partie de Laser Game...', 'www.LGEvolution.com', null, null);

INSERT INTO image values (1, 'zenith.jpg');
INSERT INTO image values (2, 'theatre.jpg');
INSERT INTO image values (3, 'louvre.jpg');
INSERT INTO image values (4, 'tour.jpg');
INSERT INTO image values (5, 'lasergame.jpg');
INSERT INTO image values (6, 'tour2.jpg');
INSERT INTO image values (7, 'lasergame2.jpg');
INSERT INTO image values (8, 'randonne.jpg');
INSERT INTO image values (9, 'jeux.jpg');
INSERT INTO image values (10, 'visite.jpg');
INSERT INTO image values (11, 'autre.jpg');
INSERT INTO image values (12, 'sport.jpg');
INSERT INTO image values (13, 'concert.jpg');

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

INSERT INTO evenement values (1, 1, '25/12/2016', 'Concert du père noel', '21:00', 'Paris', 10, 15, );
INSERT INTO evenement values (2, );
INSERT INTO evenement values (3, );
INSERT INTO evenement values (4, );
INSERT INTO evenement values (5, );

INSERT INTO categorie values (1, 'Sport', 12);
INSERT INTO categorie values (2, 'Visite', 10);
INSERT INTO categorie values (3, 'Concert', 13);
INSERT INTO categorie values (4, 'Randonnee', 8);
INSERT INTO categorie values (5, 'Jeux', 9);
