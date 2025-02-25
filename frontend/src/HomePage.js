import React, { useState, useEffect } from 'react';
import Nav_Bar from './Nav_Bar';
import './HomePage.css';
import GalleryPage from './GalleryPage';

export default function HomePage() {

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='full-page'>
      <div className="home-page">
        <Nav_Bar variant="" />
        <div className="content">
          <h1
            className="title kaushan-script-regular"
            style={{
              fontSize: `${Math.max(40, 150 - scrollY / 5)}px`, // Reduz tamanho
            }}
          >
            Mos'Art
          </h1>
          <p
            className="description inter-regular"
            style={{ opacity: `${Math.max(0, 1 - scrollY / 300)}` }} // Reduz visibilidade
          >
            Explorez le monde des mosaïques photographiques. Participez à
            l'aventure en contribuant à des créations uniques et collectives.
          </p>
        </div>
        <div className="footer">
          <button className="gallery-button inter-regular"
          style={{ opacity: `${Math.max(0, 1 - scrollY / 550)}` }} // Reduz visibilidade
          >
            <div>Galery</div>
            <img className="DownArrow" src={require('./Assets/DownArrow.png')} alt="Down Arrow" />
          </button>
        </div>
      </div>
      <GalleryPage></GalleryPage>
    </div>
  );
}
