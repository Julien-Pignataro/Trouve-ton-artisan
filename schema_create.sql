-- Création de la base 
CREATE DATABASE IF NOT EXISTS artisans
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE artisans;

-- Table artisans
CREATE TABLE artisans (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR (255) NOT NULL,
    specialite VARCHAR (255) NOT NULL,
    note FLOAT NOT NULL,
    ville VARCHAR (255),
    description TEXT,
    email VARCHAR (255),
    site VARCHAR (255),
    categorie VARCHAR (255), 
    top BOOLEAN DEFAULT 0,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
);