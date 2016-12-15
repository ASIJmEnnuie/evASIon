INSERT INTO compte values (1, 'Bob', 'Leponge', '01/01/2001', 'M', 'bobleponge@carree.fr', 'blpg', false);
INSERT INTO compte values (2, 'Inspecteur', 'Gadget', '02/02/2002', 'M', 'insp.gadget@quivoila.houhou', 'inspG', true);
INSERT INTO compte values (3, 'Dora', 'Lexploratrice', '03/03/2003', 'F', 'd.lexplo@ouallonsnous.fr', 'dora', true);
INSERT INTO compte values (4, 'Petit', 'OursBrun', '04/04/2004', 'M', 'petitours@brun.fr', 'petitOB', false);

INSERT INTO activite values (1, 'Zenith de Paris', 'Paris', 'Concerts au Zénith...', 'zenithparis.fr', null, null);
INSERT INTO activite values (2, 'Théatre Les Etoiles', 'Paris', 'Spectacles et concerts','lesetoiles.fr', null, null);
INSERT INTO activite values (3, 'Musee du Louvre', 'Paris', 'Visite du musee', 'louvre.fr', null, null);
INSERT INTO activite values (4, 'La Tour Eiffel', 'Paris', 'Visite de la TE', 'toureiffel.fr', null, null);
INSERT INTO activite values (5, 'Laser Game Evolution', 'Rouen', 'Partie de Laser Game...', 'www.LGEvolution.com', null, null);
INSERT INTO activite values (6, 'Autre', 'Autre', 'Autre', 'Autre', null, null);

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
INSERT INTO image values (12, 'lutin.jpg');
INSERT INTO image values (13, 'perenoel.jpg');

INSERT INTO evenement values (1, 1, '25/12/2016', 'Concert du père noel', '21:00', 'Paris', 2, 15, 'Le Père Noël Arrive', 4, '0');
INSERT INTO evenement values (2, 5, '01/01/2017', '2 parties de LG pour le nouvel an', '15:00', 'Rouen', 2, 20, 'Laser Game de l''An', 1, '15');
INSERT INTO evenement values (3, 4, '25/02/2017', 'Visite de la TE groupé', '10:00', 'Paris', 3, 15, 'Viste Tour Eiffel', 2, '20');
INSERT INTO evenement values (4, 2, '05/01/2017', 'Spectacle pour enfants, durée 1h30', '20:00', 'Paris', 3, 10, 'Spectacle des Lutins', 4, '12');

INSERT INTO categorie values (1, 'Sport', 12);
INSERT INTO categorie values (2, 'Visite', 10);
INSERT INTO categorie values (3, 'Concert', 13);
INSERT INTO categorie values (4, 'Randonnee', 8);
INSERT INTO categorie values (5, 'Jeux', 9);

INSERT INTO Imgact values (1, 1, true);
INSERT INTO Imgact values (2, 2, true);
INSERT INTO Imgact values (3, 3, true);
INSERT INTO Imgact values (4, 4, true);
INSERT INTO Imgact values (4, 6, false);
INSERT INTO Imgact values (5, 5, true);
INSERT INTO Imgact values (5, 7, false);
INSERT INTO Imgact values (6, 11, true);

INSERT INTO CategorieAct values (1, 3);
INSERT INTO CategorieAct values (2, 3);
INSERT INTO CategorieAct values (3, 2);
INSERT INTO CategorieAct values (4, 2);
INSERT INTO CategorieAct values (5, 5);

INSERT INTO ImgEvt values (1, 13, true);
INSERT INTO ImgEvt values (4, 12, true);


INSERT INTO ParticipantEvt values (1, 2);
INSERT INTO ParticipantEvt values (1, 3);
INSERT INTO ParticipantEvt values (2, 3);
INSERT INTO ParticipantEvt values (2, 2);
INSERT INTO ParticipantEvt values (3, 1);
INSERT INTO ParticipantEvt values (3, 3);
INSERT INTO ParticipantEvt values (3, 4);
INSERT INTO ParticipantEvt values (4, 1);
INSERT INTO ParticipantEvt values (4, 2);
INSERT INTO ParticipantEvt values (4, 3);
