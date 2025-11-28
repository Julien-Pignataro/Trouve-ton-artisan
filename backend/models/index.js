// backend/models/index.js
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

// 🔥 Toujours utiliser le bon nom de fichier (respecter majuscules/minuscules)
const ArtisanModel = require("./Artisan");

// Initialisation du modèle
const Artisan = ArtisanModel(sequelize, DataTypes);

module.exports = {
  sequelize,
  Artisan
};