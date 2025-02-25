import React from "react";
import Nav_Bar from './Nav_Bar';
import { Link } from "react-router-dom";
import "./App.css";
/*import './GaleryPage.css';*/
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Card from "./Components/Card";

const URL = "http://127.0.0.1:8000/items/";

function GalleryPage() {
  itemData.map((item) => (console.log(item.img_url)))
  return (
    <div>
      {/* Barra de navegação */}
      <Nav_Bar variant="show-logo" />
      {/* Gallerie de photos */}
      <nav className="mosaics">
      <ImageList variant="masonry" cols={3} gap={10}>
  {itemData.map((item) => (
    <ImageListItem key={item.img_url}>
      <Link to="/details" style={{ textDecoration: 'none', color: 'inherit' }}>
      <Card item={item}/>
      </Link>
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
