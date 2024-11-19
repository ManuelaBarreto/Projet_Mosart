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

      {/* Gallerie de photos */}
      <div>
          <p>
            Bienvenue sur Mos’Art, un site étudiant engagé où vous pouvez créer
            et découvrir des mosaïques photographiques. Chaque œuvre combine une
            image finale impactante et des centaines de photos qui la composent,
            illustrant des concepts profonds à travers cette double lecture.
            Participez à l’aventure en contribuant à des créations uniques et
            collectives.
          </p>
        </div>
    </div>
  );
}

export default DetailPage;
