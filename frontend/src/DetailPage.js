import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function DetailPage() {
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
          <Link to="/galerie">Galerie</Link>
          <Link to="/login">Connexion</Link>
        </div>
      </nav>

    </div>
  );
}

export default DetailPage;
