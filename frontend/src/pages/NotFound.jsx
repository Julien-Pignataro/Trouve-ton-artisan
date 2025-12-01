import { Link } from "react-router-dom";
import "../styles/notfound.scss";

export default function NotFound() {
  return (
    <div className="notfound container">

      <h1>404</h1>
      <p className="subtitle">La page que vous recherchez est introuvable.</p>

      <img
        src="../84411880-404-liquid-error-or-page-not-found-design-graphic-template-website-with-white-background.jpg"
        alt="404 illustration"
        className="nf-img"
      />

      <Link to="/" className="btn-back">Retour à l’accueil</Link>
    </div>
  );
}