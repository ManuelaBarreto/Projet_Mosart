import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function GalleryPage() {
  return (
    <div>
      {/* Barra de navegação */}
      <nav className="navbar">
        <div className="nav-left">
          <img src={require("./Assets/logo.png")} alt="Logo" className="logo" />
          <h1>Mos'Art</h1>
        </div>
        <div className="nav-right">
          <Link to="/">Page d'accueil</Link>
          <Link to="/galerie" className="active">Galerie</Link>
          <Link to="/login">Connexion</Link>
        </div>
      </nav>

      {/* Formulário de login */}
      <div className="login-container">
        <h2>Log in</h2>
        <input type="text" placeholder="Placeholder" className="input-field" />
        <h2>Mot de passe</h2>
        <input
          type="password"
          placeholder="Placeholder"
          className="input-field"
        />
        <button className="login-button">Se connecter</button>
      </div>
    </div>
  );
}

export default GalleryPage;
