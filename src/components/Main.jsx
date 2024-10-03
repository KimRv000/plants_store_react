import { Route, Routes } from 'react-router-dom';
import AboutUs from '../pages/AboutUs.jsx';
import Plants from '../pages/Plants.jsx';
import ShoppingCartPage from '../pages/ShoppingCartPage.jsx';
import Header from './Header.jsx';
import HomePlants from './HomePlants.jsx';
import PropTypes from 'prop-types';


const Main = ({ onBuy }) => {
  return (
    <main>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <HomePlants />
          </>
        } />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/plants" element={<Plants onBuy={onBuy}/>} />
        <Route path="/shopping-cart" element={<ShoppingCartPage />} />
      </Routes>
    </main>
  );
};

Main.propTypes = {
  onBuy: PropTypes.func.isRequired, 
};

export default Main;
