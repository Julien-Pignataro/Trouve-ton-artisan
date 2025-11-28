// backend/models/Artisan.js
module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Artisan",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      nom: { type: DataTypes.STRING, allowNull: false },
      specialite: { type: DataTypes.STRING, allowNull: false },
      note: { type: DataTypes.FLOAT, allowNull: false },
      ville: { type: DataTypes.STRING, allowNull: true },
      description: { type: DataTypes.TEXT, allowNull: true },
      email: { type: DataTypes.STRING, allowNull: true },
      site: { type: DataTypes.STRING, allowNull: true },
      categorie: { type: DataTypes.STRING, allowNull: true },
      top: { type: DataTypes.BOOLEAN, defaultValue: false }
    },
    {
      tableName: "artisans",
      timestamps: true
    }
  );
};