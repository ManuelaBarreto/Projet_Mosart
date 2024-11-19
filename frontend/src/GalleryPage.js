import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const URL = "http://127.0.0.1:8000/items/";

function GalleryPage() {
  itemData.map((item) => (console.log(item.img_url)))
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
      {/* <img src="https://lh3.googleusercontent.com/d/1DU7wgPAW_mBEgMa9OHzJQcxkjV5thwrH=s220?authuser=0"/> */}
      <ImageList variant="masonry" cols={3} gap={10}>
  {itemData.map((item) => (
    <ImageListItem key={item.img_url}>
      <img
        src={item.img_url}
        alt={item.title}
        loading="lazy"
      />
    </ImageListItem>
  ))}
</ImageList>
</nav>
    </div>
  );
}

const response_get = await fetch(URL, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
});
const itemData = await response_get.json();

console.log(itemData)

export default GalleryPage;
