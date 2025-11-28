import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/fiche-artisan.scss";

export default function FicheArtisan() {
  const { id } = useParams();
  const [artisan, setArtisan] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/artisan/${id}`)
      .then((res) => setArtisan(res.data))
      .catch(() => console.log("Erreur chargement fiche artisan"));
  }, [id]);

  if (!artisan) return <p className="loading">Chargement...</p>;

  return (
    <div className="fiche container">

      {/* ===== TITRE + INFOS ===== */}
      <div className="top-section">

        <div className="left">
         <img 
           className="artisan-img"
           src={artisan.image || `/img/art-${(artisan.id % 17) + 1}.svg`} 
           alt={artisan.nom}
         />
        </div>

        <div className="right">
          <h1>{artisan.nom}</h1>

          <p className="spec">{artisan.specialite}</p>
          <p className="loc">{artisan.ville}</p>

          <div className="stars">
            {"★".repeat(artisan.note)}
            {"☆".repeat(5 - artisan.note)}
          </div>
        </div>

      </div>

      {/* ===== A PROPOS ===== */}
      <section className="about">
        <h2>À propos</h2>
        <p>{artisan.description || "Aucune description disponible."}</p>
      </section>

      {/* ===== FORMULAIRE DE CONTACT ===== */}
      <section className="contact">
        <h2>Contacter l’artisan</h2>

        <form className="contact-form">
          <input type="text" placeholder="Votre nom" required />
          <input type="email" placeholder="Votre email" required />
          <input type="text" placeholder="Objet" />
          <textarea rows="6" placeholder="Votre message"></textarea>

          <button type="submit">Envoyer votre message</button>
        </form>
      </section>
    </div>
  );
}