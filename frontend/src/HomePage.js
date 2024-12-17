import React from 'react';
import Nav_Bar from './Nav_Bar';
import './HomePage.css';

export default function HomePage() {
  return (
    <div className="home-page">
      <Nav_Bar variant="show-logo"/>
      <div className="content">
        <h1 className="title kaushan-script-regular">Mos'Art</h1>
        <p className="description">
          Explorez le monde des mosaïques photographiques. Participez à
          l'aventure en contribuant à des créations uniques et collectives.
        </p>
        <button className="gallery-button">Galerie</button>
      </div>
    </div>
  );
}
