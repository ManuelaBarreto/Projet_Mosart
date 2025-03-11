import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "components/Card";
import './Gallery.css';

import {fetchMosaics} from "api";

function Gallery() {
  
  const [mosaics, setMosaics] = useState([]);

  useEffect(() => {
    fetchMosaics()
        .then(setMosaics)
        .catch(error => console.error("Erreur lors du chargement des données :", error));
  }, []);

  return (
    <div className="card-container">
      {mosaics.map((mosaic) => (
        <Link to={`/details/${mosaic.slug}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
              key={mosaic.slug}
        >
          <Card mosaic={mosaic}/>
        </Link>
      ))}
    </div>
  );
}

export default Gallery;
