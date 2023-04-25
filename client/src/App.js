import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Header from './componets/Header';
import Footer from './componets/Footer';

import './App.css'

function App() {
  return (
    <Router>
        <Header />
          <Routes>
            <Route 
              path="/Portfolio/" 
              element={<Home />} 
            />
            <Route 
              path="/Portfolio/work" 
              element={<Work />} 
            />
            <Route 
              path="/Portfolio/about" 
              element={<About />} 
            />
          </Routes>
        <Footer />
    </Router>
  );
}

export default App;
