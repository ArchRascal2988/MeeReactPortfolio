import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Header from './componets/header/index';
import Footer from './componets/footer/index';

import { History } from 'history';

import './App.css';


const history = createBrowserHistory({ basename: '/your-base-name' });

function App() {
  return (
    <Router history={history}>
        <Header />
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
        <Footer />
    </Router>
  );
}

export default App;
