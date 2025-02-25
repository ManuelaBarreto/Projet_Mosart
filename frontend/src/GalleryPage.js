import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Card from "./Components/Card";

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
      <Nav_Bar variant="" />
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

export default GalleryPage;
