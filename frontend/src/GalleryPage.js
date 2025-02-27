import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Card from "./Components/Card";
import Nav_Bar from "./Nav_Bar";
import './GalleryPage.css';

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
      <Nav_Bar variant="show-logo" />
      {/* Gallerie de photos */}
      <div className="img-container">
        {itemData.map((item) => (
          <Link to={`/details/${item.id-1}`} style={{ textDecoration: 'none', color: 'inherit' }} key={item.img_url}>
          <Card item={item}/>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default GalleryPage;
