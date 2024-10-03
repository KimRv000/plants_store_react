//import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {

  const [cartCount, setCartCount] = useState(0); // Estado para el número de compras

  const handleBuy = () => {
    setCartCount(cartCount + 1); // Incrementar el contador de compras
  };
  
  return (
    <Router>
      <Navbar cartCount={cartCount} />
      <Main onBuy={handleBuy} />
      <Footer />
    </Router>
  );
};

export default App;
