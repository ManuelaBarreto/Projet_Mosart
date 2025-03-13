import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from 'pages/HomePage';
import ImageDetailsPage from 'pages/ImageDetailsPage';
import NavBar from "components/NavBar";

function App() {
  return (
    <Router>
      <NavBar/>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:slug" element={<ImageDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
