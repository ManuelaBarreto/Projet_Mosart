import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import GalleryPage from './GalleryPage';
import DetailPage from './DetailPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/galerie" element={<GalleryPage />} />
          <Route path="/details" element={<DetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
