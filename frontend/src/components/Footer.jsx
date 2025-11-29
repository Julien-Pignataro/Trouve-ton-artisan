import "../styles/footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">

       <div>
          <h4>Liens utiles</h4>
          <p>Mentions légales</p>
          <p>Données personnelles</p>
          <p>Accessibilité</p>
          <p>Cookies</p>
        </div>

        <div>
          <h4>Contact</h4>
          <p>101 cours Charlemagne</p>
          <p>CS 20033</p>
          <p>69269 LYON CEDEX 02</p>
          <p>+33 (0)4 26 73 40 00</p>
        </div>
        
      </div>

      <p className="copyright">
        © 2025 Région Auvergne-Rhône-Alpes – Tous droits réservés
      </p>
    </footer>
  );
}