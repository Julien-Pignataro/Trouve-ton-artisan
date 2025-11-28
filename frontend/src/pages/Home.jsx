import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/home.scss";

export default function Home() {
  const [top, setTop] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/artisans/top3")
      .then(res => setTop(res.data))
      .catch(() => console.log("Erreur chargement artisans"));
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
            {top.map(a => (
              <Link to={`/artisan/${a.id}`} key={a.id} className="artisan-card">
                <div className="artisan-img"></div>
                
                <h3>{a.nom}</h3>
                <p className="spec">{a.specialite}</p>
                <p className="loc">{a.ville}</p>

                <div className="stars">
                  {"★".repeat(a.note)}
                  {"☆".repeat(5 - a.note)}
                </div>
              </Link>
            ))}
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