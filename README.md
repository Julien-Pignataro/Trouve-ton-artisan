📘 README – Trouve Ton Artisan

📝 Présentation du projet

Trouve Ton Artisan est une plateforme permettant aux utilisateurs de trouver facilement des artisans locaux, de consulter leur fiche détaillée et de les contacter.
Le projet comporte :
	•	🖥 Un frontend React (design moderne + SCSS)
	•	⚙️ Un backend Node.js / Express
	•	🗄 Une base de données MySQL
	•	🔐 Un système d’API Key sécurisé
	•	🏆 Mise en avant des 3 artisans du mois
	•	🔍 Système de recherche + filtres dynamiques

  🚀 Fonctionnalités principales

🎯 Frontend (React + Vite)
	•	Page d’accueil moderne
	•	Sections : Hero, Étapes, Artisan du mois, Formulaire
	•	Page artisans avec :
	•	Recherche instantanée
	•	Filtres par catégorie
	•	Tri par note / nom
	•	Cartes artisans cliquables
	•	Page Fiche Artisan complète
	•	Pages légales (Mentions, Données perso, Accessibilité, Cookies non compléter)
	•	Header responsive + barre de recherche
	•	Footer 

  ⚙️ Backend (Node.js + Express)
	•	API REST sécurisée
	•	Endpoints :
	•	GET /api/artisans/top3
	•	GET /api/artisans/search
	•	GET /api/artisans/:id
	•	Middleware API Key
	•	Protection : CORS, Helmet, Rate limiting
	•	Connexion BDD avec Sequelize

  🗄 Base de données MySQL

Une table unique : artisans

Champs :
	•	id
	•	nom
	•	specialite
	•	note
	•	ville
	•	description
	•	email
	•	site
	•	categorie
	•	top
	•	createdAt
	•	updatedAt

🛠 Installation

🔧 1. Cloner le projet
      git clone https://github.com/Julien-Pignataro/Trouve-ton-artisan.git
      cd trouve-ton-artisan
      Le projet final se trouve sur la branche : branche-final

🧩 2. Installation du frontend
     cd frontend
     npm install

Créer un fichier .env :
    VITE_API_BASE=http://localhost:3001/api
    VITE_API_KEY=3a6eca19fef85115ad422c6f810dc8cf8ab8df053f0e7cf071c4bebaa4963907

Lancer le serveur :
    npm run dev

⚙️ 3. Installation du backend
   cd backend
   npm install

Configurer .env :
   DB_HOST=localhost
   DB_USER=root
   DB_PASS=
   DB_NAME=artisans
   API_KEY=3a6eca19fef85115ad422c6f810dc8cf8ab8df053f0e7cf071c4bebaa4963907
   FRONTEND_URL=http://localhost:5173
   PORT=3001

Lancer le backend :
   npm run dev

🔐 Sécurité mise en place
Élément              Description
API Key              Obligatoire pour toutes les routes de l’API
CORS                 Frontend autorisé uniquement
Helmet               Sécurisation HTTP
Rate Limiting        Protège contre les attaques bruteforce
Validation Sequelize Protection contre injection SQL
Fichier .env         Variables sensibles isolées

🧪 Routes API

🔝 Top 3 artisans
   GET /api/artisans/top3

🔍 Recherche + filtres
   GET /api/artisans/search?q=boucher&categorie=Alimentation&sort=note_desc

📄 Détails artisan
   GET /api/artisans/:id

👤 Auteur

Julien Pignataro-Barthome
Projet réalisé dans le cadre de formation / Produire le site Trouve ton artisan.

