import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./App.css";
import OpenSeadragon from 'openseadragon';
import Nav_Bar from "./Nav_Bar";

const URL = "http://127.0.0.1:8000/items/";

const ZoomableImage = (props) => {
  useEffect(() => {
    OpenSeadragon({
      id: "openseadragon",
      prefixUrl: "https://cdnjs.cloudflare.com/ajax/libs/openseadragon/4.0.0/images/",
      tileSources: {
        width: 256*2**7, // Full width of the image
        height: 256*2**7, // Full height of the image
        tileSize: 256, // Size of each tile (e.g., 256x256)
        tileOverlap: 0, // No overlap between tiles
        minLevel: 0, // Minimum zoom level
        maxLevel: 7, // Maximum zoom level
        getTileUrl: function (level, x, y) {
          // Construct the URL dynamically based on the level, x, and y
          return `http://localhost:8000/images/${props.image}/${level}/${x}_${y}.jpeg`;
        },
      },
      // Optional: Zoom and pan settings
      defaultZoomLevel: 0,
      debugMode: false,
    });
  }, []);

  return <div id="openseadragon" style= {{width:'100%', height: '100vh'}}/>;
};

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
            <Nav_Bar variant="" />

      {/* Return Button */}
      <Link to="/galerie">Galerie</Link>

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
        <ZoomableImage image={image.img_url}/>
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