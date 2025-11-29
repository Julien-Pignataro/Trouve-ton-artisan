import { Link } from "react-router-dom";
import "../styles/header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">

        <Link to="/" className="logo">
          <img src="/Logo.png" alt="Logo" />
        </Link>

        <input type="checkbox" id="menu-toggle" />

        <label htmlFor="menu-toggle" className="burger">
          <span></span><span></span><span></span>
        </label>

        <nav className="menu">
          <Link to="/artisans?cat=batiment">Bâtiment</Link>
          <Link to="/artisans?cat=services">Services</Link>
          <Link to="/artisans?cat=fabrication">Fabrication</Link>
          <Link to="/artisans?cat=alimentation">Alimentation</Link>
          <Link to="/artisans">Tous les artisans</Link>
        </nav>
      </div>
    </header>
  );
}