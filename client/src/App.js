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
              path="/MeeReactPortfolio/" 
              element={<Home />} 
            />
            <Route 
              path="/MeeReactPortfolio/work" 
              element={<Work />} 
            />
            <Route 
              path="/MeeReactPortfolio/about" 
              element={<About />} 
            />
          </Routes>
        <Footer />
    </Router>
  );
}

export default App;
