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

      {/* Return Button */}
      <button className="return-button">Return</button>

      {/* Title */}
        <div className="Title-detail">
          <h2>Eyes on the ocean</h2>
        </div>

      {/* Thèmes */}
        <div className="Theme">
          <div className="Theme-main">
            <p>
            Thèmes :
          </p>
          </div>
        <div className="Theme-mosaic">
          <p>
            Océan
          </p>
        </div>
        </div>

      {/* Image */}
        <div>
        <img
            src={require("./Assets/img_exemple1.jpg")}
            alt="Mosaïque 1"
            className="Image-detail"
          />
        </div>
      
      {/* Description */}
        <div className="Description-detail">
          <p>
            Les océans, recouvrant 70% de la planète, jouent un rôle primordial dans l’existence humaine et de la biodiversité. Ils nous font respirer, manger, ils régulent le climat et abritent 80 % de la vie dans le monde.
          Le réchauffement de la température des eaux, l’acidification du milieu, la désoxygénation, et l’élévation du niveau de la mer, combinés aux impacts de la surpêche, de la pollution.
          </p>
        </div>

    </div>
  );
}

export default DetailPage;
