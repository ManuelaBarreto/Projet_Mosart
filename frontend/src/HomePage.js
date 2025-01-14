import React from 'react';
import Nav_Bar from './Nav_Bar';
import './HomePage.css';

export default function HomePage() {
  return (
    <div className="home-page">
      <Nav_Bar variant="" />
      <div className="content">
        <h1 className="title kaushan-script-regular">Mos'Art</h1>
        <p className="description inter-regular">
          Explorez le monde des mosaïques photographiques. Participez à
          l'aventure en contribuant à des créations uniques et collectives.
        </p>
      </div>
      <div className="footer">
        <button className="gallery-button inter-regular">
          <p>Galery</p>
          <img className="DownArrow" src={require('./Assets/DownArrow.png')} alt="Down Arrow" />
        </button>
      </div>
    </div>
  );
}
