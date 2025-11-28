const { Artisan } = require("../models");
const nodemailer = require("nodemailer");

exports.getAll = async (req, res) => {
  try {
    const list = await Artisan.findAll({ order: [["nom", "ASC"]] });
    res.json(list);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

exports.getTop3 = async (req, res) => {
  try {
    const list = await Artisan.findAll({ limit: 3, order: [["note", "DESC"]] });
    res.json(list);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

exports.getById = async (req, res) => {
  try {
    const a = await Artisan.findByPk(req.params.id);
    if (!a) return res.status(404).json({ error: "Artisan introuvable" });
    res.json(a);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

// Endpoint pour envoyer un message à l'artisan (utilise nodemailer)
exports.contact = async (req, res) => {
  try {
    const { artisanId, nom, email, objet, message } = req.body;
    if (!nom || !email || !message) {
      return res.status(400).json({ error: "Champs obligatoires manquants" });
    }

    const artisan = await Artisan.findByPk(artisanId);
    if (!artisan) return res.status(404).json({ error: "Artisan introuvable" });

    // Configure nodemailer transporter (utiliser .env)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    const mailOptions = {
      from: process.env.FROM_EMAIL || process.env.SMTP_USER,
      to: artisan.email || process.env.FROM_EMAIL, // si artisan.email absent, envoyer à FROM
      subject: `[Trouve-ton-artisan] ${objet || "Nouveau message"}`,
      text: `Message de ${nom} <${email}>:\n\n${message}`
    };

    await transporter.sendMail(mailOptions);

    res.json({ ok: true, message: "Message envoyé" });
  } catch (err) {
    console.error("Erreur contact:", err);
    res.status(500).json({ error: "Impossible d'envoyer le message" });
  }
};