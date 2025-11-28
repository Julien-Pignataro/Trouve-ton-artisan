const express = require("express");
const router = express.Router();
const { Artisan } = require("../models/artisan");
const requireApiKey = require("../middleware/apikey");

// ⭐ ROUTE — Top 3 artisans
router.get("/artisans/top3", requireApiKey, async (req, res) => {
  try {
    const artisans = await Artisan.findAll({
      limit: 3,
      order: [["note", "DESC"]],
    });
    res.json(artisans);
  } catch (err) {
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// ⭐ ROUTE — Recherche + filtres
router.get("/artisans/search", requireApiKey, async (req, res) => {
  const { q = "", categorie = "", sort = "" } = req.query;

  const where = {};

  if (q) {
    where.nom = { [require("sequelize").Op.like]: `%${q}%` };
  }

  if (categorie) {
    where.categorie = categorie;
  }

  try {
    const order =
      sort === "note_desc"
        ? [["note", "DESC"]]
        : sort === "note_asc"
        ? [["note", "ASC"]]
        : [["nom", "ASC"]];

    const artisans = await Artisan.findAll({
      where,
      order,
    });

    res.json(artisans);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur lors de la recherche" });
  }
});

// ⭐ ROUTE — Détails d’un artisan
router.get("/artisans/:id", requireApiKey, async (req, res) => {
  try {
    const artisan = await Artisan.findByPk(req.params.id);
    if (!artisan) return res.status(404).json({ error: "Artisan introuvable" });

    res.json(artisan);
  } catch (err) {
    res.status(500).json({ error: "Erreur serveur" });
  }
});

module.exports = router;