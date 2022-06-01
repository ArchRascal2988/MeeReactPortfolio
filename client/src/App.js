import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Header from './componets/header;'
import Footer from './componets/footer;'

function App() {
  return (
    <Router>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container">
          <Routes>
            <Route 
              path="/" 
              element={<Home />} 
            />
            <Route 
              path="/work" 
              element={<Work />} 
            />
            <Route 
              path="/about" 
              element={<About />} 
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
