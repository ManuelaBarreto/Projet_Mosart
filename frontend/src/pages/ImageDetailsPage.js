import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import "./ImageDetailsPage.css";
import OpenSeadragon from 'openseadragon';
import {fetchMosaic, getMosaicTileUrl} from "api";

const ZoomableImage = ({ slug }) => {
  useEffect(() => {
    OpenSeadragon({
      id: "openseadragon-viewer",
      prefixUrl: "https://cdnjs.cloudflare.com/ajax/libs/openseadragon/4.0.0/images/",
      tileSources: {
        width: 960*2**7, // Full width of the image
        height: 540*2**7, // Full height of the image
        tileWidth: 960, // Size of each tile (e.g., 256x256)
        tileHeight: 540,
        tileOverlap: 0, // No overlap between tiles
        minLevel: 0, // Minimum zoom level
        maxLevel: 7, // Maximum zoom level
        getTileUrl: function (level, x, y) {
          return getMosaicTileUrl(slug, level, x, y);
        },
      },
      // Optional: Zoom and pan settings
      defaultZoomLevel: 0,
      debugMode: false,
    });
  }, [slug]);

  return <div id="openseadragon-viewer" style={{width:'100%', height:'auto', aspectRatio: '16/9'}}/>;
};

function ImageDetailsPage() {

  const { slug } = useParams();
  const [mosaic, setMosaic] = useState(undefined);

  useEffect(() => {
      fetchMosaic(slug)
          .then(setMosaic)
          .catch(error => console.error("Erreur lors du chargement des données :", error));
  }, [slug]);

  if (!mosaic) {
    return <p>Chargement des détails...</p>;
  }

  return (
    <div className ='gallery_content'>
      <div className ='first-line'>
        <div className="Title-detail">
          <h2>{mosaic.title}</h2>
        </div>
      </div>

      <div className='centrer-card'>
        <div className='Card'>
          <div className="theme-list">
            <span className="theme-title">Thèmes:</span>
            {mosaic.labels.map((label, index) => (
              <span key={index} className="theme-label">
                {label}
              </span>
            ))}
          </div>

          <div className="Image-detail">
            <ZoomableImage slug={mosaic.slug}/>
          </div>
        </div>
      </div>

      <div className="Description-detail">
        <p>{mosaic.description}</p>
      </div>
  </div>
  );
}

export default ImageDetailsPage;