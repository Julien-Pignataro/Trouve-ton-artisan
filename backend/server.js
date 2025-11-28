require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const { sequelize } = require("./models");
const artisanRoutes = require("./routes/artisan");

const app = express();

const FRONTEND = process.env.FRONTEND_URL || "http://localhost:5173";

app.use(helmet());
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: FRONTEND
}));

// Rate limiting (basic)
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 120 // max 120 requests per minute
});
app.use(limiter);

// Routes
app.use("/api", require ("./routes/artisan"));

// Healthcheck
app.get("/health", (req, res) => res.json({ status: "ok" }));

// Start server
const PORT = process.env.PORT || 3001;
sequelize.authenticate()
  .then(() => {
    console.log("Connexion DB ok");
    app.listen(PORT, () => console.log(`API en ligne sur port ${PORT}`));
  })
  .catch((err) => {
    console.error("Impossible de se connecter à la DB :", err);
  });