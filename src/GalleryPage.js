import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

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

      {/* Gallerie de photos */}
      <nav className="mosaics">
      <ImageList variant="masonry" cols={3} gap={10}>
  {itemData.map((item) => (
    <ImageListItem key={item.img}>
      <img
        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
        src={`${item.img}?w=248&fit=crop&auto=format`}
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

const itemData = [
  {
    img: require('./Assets/img_exemple1.jpg'),
    title: 'Mosaïque 1',
  },
  {
    img: require("./Assets/img_exemple2.jpg"),
    title: 'Mosaïque 2',
  },
  {
    img: require("./Assets/Arbre.png"),
    title: 'Arbre 1',
  },
  {
    img: require("./Assets/Arbre2.png"),
    title: 'Arbre 2',
  },
  {
    img: require("./Assets/LGBT.png"),
    title: 'Drapeau LGBT',
  },
  {
    img: require("./Assets/Tortue.png"),
    title: 'Tortue',
  },
];

export default GalleryPage;
