import React, { useState, useEffect, useRef } from 'react';
import './HomePage.css';
import GalleryPage from 'components/Gallery';
import ScrollToTop from "react-scroll-to-top";

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  const galleryRef = useRef(null);
  const homeRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToGallery = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='full-page'>
      <ScrollToTop smooth color="#000" />
      <div className="home-page" ref={homeRef}>
        <div className="content">
          <h1
            className="title"
            style={{
              fontSize: `clamp(40px, calc(17vw - ${scrollY / 10}vw), 80vw)`, // Reduz tamanho
              opacity: `clamp(0, 1 - ${scrollY / 300}, 1)`
            }}
          >
            Mos'Art
          </h1>
          <p
            className="description inter-regular"
            style={{ opacity: `clamp(0, 1 - ${scrollY / 300}, 1)` }}
          >
            Explorez le monde des mosaïques photographiques. Participez à
            l'aventure en contribuant à des créations uniques et collectives.
          </p>
        </div>
        <div className="footer">
          <button
            className="gallery-button inter-regular"
            style={{ opacity: `clamp(0, 1 - ${scrollY / 300}, 1)` }}
            onClick={scrollToGallery}
          >
            <div>Galerie</div>
            <img className="down-arrow" src={require('../assets/down-arrow.png') ?? ""} alt="Down Arrow" />
          </button>
        </div>
      </div>
      
      {/* Adicionando ref ao GalleryPage */}
      <div className="gallery-container" ref={galleryRef}>
        <GalleryPage />
      </div>
    </div>
  );
}
