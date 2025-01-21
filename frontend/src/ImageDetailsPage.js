import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./App.css";

const URL = "http://127.0.0.1:8000/items/";

function ImageDetailsPage() {

  const { id } = useParams(); // Récupérer l'id depuis l'URL
  const [image, setImage] = useState(undefined);

  useEffect(() => {
      fetch(`${URL}${id}`, {
          headers: {
            "Content-Type": "application/json",
          }})
        .then(response => response.json())
        .then(data => setImage(data.item))
        .catch(error => {
          console.error("Erreur lors du chargement des détails :", error);
        });
  }, [id]);

  useEffect(() => {
    console.log(image)
  }, [image])

  if (!image) {
    return <p>Chargement des détails...</p>;
  }

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
      <Link to="/galerie">Retour à la galerie</Link>

      {/* Title */}
        <div className="Title-detail">
          <h2>{image.title}</h2>
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
            {image.label}
          </p>
        </div>
        </div>

      {/* Image */}
        <div>
        <img
            src={`http://localhost:8000/images/${image.img_url}`}
            alt={image.title}
            className="Image-detail"
          />
        </div>
      
      {/* Description */}
        <div className="Description-detail">
          <p>
          {image.description}
          </p>
        </div>

    </div>
  );
}

export default ImageDetailsPage;