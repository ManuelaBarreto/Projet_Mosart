import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import GalleryPage from './GalleryPage';
import ImageDetailsPage from './ImageDetailsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/galerie" element={<GalleryPage />} />
          <Route path="/details/:id" element={<ImageDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
