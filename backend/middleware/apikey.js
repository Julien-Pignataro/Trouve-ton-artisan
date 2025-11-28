module.exports = function requireApiKey(req, res, next) {
  const key = req.headers["x-api-key"];

  if (!key || key !== process.env.API_KEY) {
    return res.status(403).json({ error: "Invalid API key" });
  }

  next();
};