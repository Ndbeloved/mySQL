CREATE DATABASE notes_app;
USE notes_app;

CREATE TABLE notes(
    id integer PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR (255) NOT NULL,
    contents TEXT NOT NULL,
    created TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO notes(title, contents) 
VALUE
('My first note', 'A note about something'),
('My second note', 'MySQL is such a pain in the a$$');