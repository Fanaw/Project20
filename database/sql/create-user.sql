CREATE DATABASE IF NOT EXISTS Participants;
CREATE USER IF NOT EXISTS participant IDENTIFIED BY 'participant';
GRANT ALL PRIVILEGES ON Participants.* TO participant;
USE Participants;
CREATE TABLE IF NOT EXISTS participants( id INT NOT NULL AUTO_INCREMENT, PRIMARY KEY(id), nom VARCHAR(100), prenom VARCHAR(100), email VARCHAR(100), ok INT, maybe INT, non INT);