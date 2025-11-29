import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import API from "../api.js";
import "../styles/artisans.scss";

export default function Artisans() {
  const [artisans, setArtisans] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  // Récupération des paramètres d'URL
  const params = new URLSearchParams(location.search);
  const q = params.get("q") || "";
  const categorie = params.get("categorie") || "";
  const sort = params.get("sort") || "";

  // Charger les artisans depuis l’API
  useEffect(() => {
    async function load() {
      try {
        const res = await API.get("/artisans/search", {
          params: {
            q: q,
            categorie: categorie,
            sort: sort
          }
        });

        setArtisans(res.data);
      } catch (err) {
        console.error("Erreur API :", err);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [q, categorie, sort]);

  if (loading) return <p>Chargement...</p>;

  return (
    <div className="artisans-page container">

      <h1>Liste des artisans</h1>

      {/* Barre de recherche */}
      <form method="GET">
        <input
          type="text"
          name="q"
          placeholder="Rechercher..."
          defaultValue={q}
          className="search-bar"
        />

        <select name="categorie" defaultValue={categorie}>
          <option value="">Toutes catégories</option>
          <option value="Alimentation">Alimentation</option>
          <option value="Bâtiment">Bâtiment</option>
          <option value="Fabrication">Fabrication</option>
          <option value="Services">Services</option>
        </select>

        <select name="sort" defaultValue={sort}>
          <option value="">Trier par nom</option>
          <option value="note_desc">Meilleure note</option>
          <option value="note_asc">Note la plus basse</option>
        </select>

        <button className="btn-search">Filtrer</button>
      </form>

      {/* Grille des artisans */}
      <div className="artisan-grid">
        {artisans.length === 0 ? (
          <p className="empty">Aucun artisan trouvé...</p>
        ) : (
          artisans.map((a) => (
            <Link to={`/artisan/${a.id}`} key={a.id} className="artisan-card">
              <div className="card-content">
                <h3>{a.nom}</h3>
                <p className="spec">{a.specialite}</p>
                <p className="loc">{a.ville}</p>

                <div className="stars">
                  {"★".repeat(Math.round(a.note))}
                  {"☆".repeat(5 - Math.round(a.note))}
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}