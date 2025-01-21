import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const URL = "http://127.0.0.1:8000/items/";

function GalleryPage() {
  
  const [itemData, setItemData] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setItemData(data);
      } catch (error) {
        console.error("Erreur lors du chargement des données :", error);
      }
    };

    fetchImages();
  }, []);

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

      {/* Gallerie de photos */}
      <nav className="mosaics">
      <ImageList variant="masonry" cols={3} gap={10}>
  {itemData.map((item) => (
    <ImageListItem key={item.id}>
      <Link to={`/details/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <img
        className="mosaicsimg"
        src={`http://localhost:8000/images/${item.img_url}`}
        alt={item.title}
        loading="lazy"
      />
      </Link>
    </ImageListItem>
  ))}
</ImageList>
</nav>
    </div>
  );
}

export default GalleryPage;
