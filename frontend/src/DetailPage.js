import { Link } from "react-router-dom";
import "./App.css";
import React, { useEffect } from 'react';
import OpenSeadragon from 'openseadragon';

const ZoomableImage = () => {
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
          return `http://localhost:8000/images/mandelbrot-2/${level}/${x}_${y}.jpeg`;
        },
      },
      // Optional: Zoom and pan settings
      defaultZoomLevel: 0,
      debugMode: false,
    });
  }, []);

  return <div id="openseadragon" style= {{width:'100%', height: '100vh'}}/>;
};

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
        <ZoomableImage/>
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
