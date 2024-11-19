import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function HomePage() {
  return (
    <div className="HomePage">
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

      {/* Conteúdo principal */}
      <header className="App-header">
        <div className="Logo-accueil">
          <img
            src={require("./Assets/logo.png")}
            alt="Logo"
            className="logo-accueil-img"
          />
          <h2>Mos'Art</h2>
        </div>

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

        {/* Galeria de imagens */}
        <div className="gallery">
          <img
            src={require("./Assets/img_exemple1.jpg")}
            alt="Mosaïque 1"
            className="gallery-image"
          />
          <img
            src={require("./Assets/img_exemple2.jpg")}
            alt="Mosaïque 2"
            className="gallery-image"
          />
        </div>

        {/* Botão da galeria */}
        <button className="gallery-button">Galerie</button>
      </header>
    </div>
  );
}

export default HomePage;
