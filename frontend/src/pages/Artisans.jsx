import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import "../styles/artisans.scss";

export default function Artisans() {
  const [artisans, setArtisans] = useState([]);
  const [search, setSearch] = useState("");

  const location = useLocation();

  // récupérer ?cat=xxx
  const params = new URLSearchParams(location.search);
  const category = params.get("cat") || null;

  // charger la liste des artisans au chargement de la page
  useEffect(() => {
    axios
      .get("http://localhost:3001/artisans")
      .then((res) => setArtisans(res.data))
      .catch(() => console.log("Erreur chargement artisans"));
  }, []);

  // filtrage par catégorie
  const filteredByCategory = category
    ? artisans.filter(
        (a) => a.specialite.toLowerCase().includes(category.toLowerCase())
      )
    : artisans;

  // recherche
  const filteredList = filteredByCategory.filter((a) =>
    a.nom.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="artisans-page container">

      <h1>Liste des artisans</h1>

      {/* Barre de recherche */}
      <input
        type="text"
        className="search-bar"
        placeholder="Rechercher un artisan..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Catégories affichées si un filtre est actif */}
      {category && (
        <p className="category-indicator">
          Catégorie sélectionnée : <strong>{category}</strong>
        </p>
      )}

      {/* Grille des artisans */}
      <div className="artisan-grid">
        {filteredList.length === 0 ? (
          <p className="empty">Aucun artisan trouvé...</p>
        ) : (
          filteredList.map((a) => (
            <Link to={`/artisan/${a.id}`} key={a.id} className="artisan-card">
              <div className="card-content">
                <h3>{a.nom}</h3>
                <p className="spec">{a.specialite}</p>
                <p className="loc">{a.ville}</p>

                <div className="stars">
                  {"★".repeat(a.note)}
                  {"☆".repeat(5 - a.note)}
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}