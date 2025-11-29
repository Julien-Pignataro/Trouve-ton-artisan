import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api";        // ⭐ important : on utilise ton API sécurisée
import "../styles/home.scss";

export default function Home() {
  const [top, setTop] = useState([]);

  useEffect(() => {
    async function load() {
      try {
        const res = await API.get("/artisans/top3");   // ⭐ CORRECT
        setTop(res.data);
      } catch (err) {
        console.error("Erreur API TOP3 :", err);
      }
    }

    load();
  }, []);

  return (
    <div className="home">

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="container">
          <h1>Trouve ton artisan en un clic</h1>
          <p>Recherchez, découvrez et contactez facilement les artisans de votre région.</p>

          <Link to="/artisans" className="btn-cta">Voir les artisans</Link>
        </div>
      </section>

      {/* ===== COMMENT ÇA MARCHE ===== */}
      <section className="steps container">
        <h2>Comment trouver mon artisan ?</h2>

        <div className="steps-grid">
          <div className="step">
            <div className="num">1</div>
            <p>Choisir la catégorie d’artisanat dans le menu.</p>
          </div>

          <div className="step">
            <div className="num">2</div>
            <p>Choisir un artisan.</p>
          </div>

          <div className="step">
            <div className="num">3</div>
            <p>Le contacter via le formulaire de contact.</p>
          </div>

          <div className="step">
            <div className="num">4</div>
            <p>Une réponse sera apportée sous 48h.</p>
          </div>
        </div>
      </section>

      {/* ===== LES ARTISANS DU MOIS ===== */}
      <section className="top-artisans">
        <div className="container">
          <h2>Les artisans du mois</h2>

          <div className="artisan-grid">
            {top.length === 0 ? (
              <p>Aucun artisan trouvé...</p>
            ) : (
              top.map((a) => (
                <Link to={`/artisan/${a.id}`} key={a.id} className="artisan-card">
                  <div className="artisan-img"></div>

                  <h3>{a.nom}</h3>
                  <p className="spec">{a.specialite}</p>
                  <p className="loc">{a.ville}</p>

                  <div className="stars">
                    {"★".repeat(Math.round(a.note))}
                    {"☆".repeat(5 - Math.round(a.note))}
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </section>

      {/* ===== FORMULAIRE ===== */}
      <section className="contact container">
        <h2>Contactez un artisan</h2>

        <form className="contact-form">
          <input type="text" placeholder="Votre nom" required />
          <input type="email" placeholder="Votre email" required />
          <input type="text" placeholder="Objet" />
          <textarea placeholder="Votre message" rows="5"></textarea>
          <button type="submit">Envoyer</button>
        </form>
      </section>

    </div>
  );
}