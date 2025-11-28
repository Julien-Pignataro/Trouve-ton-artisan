const Sequelize = require("sequelize");
const sequelize = require("../config/db");
const ArtisanModel = require("./artisan");

const Artisan = ArtisanModel(sequelize, Sequelize.DataTypes);

// Si tu veux ajouter d'autres modèles, les initialiser ici

module.exports = {
  sequelize,
  Artisan
};