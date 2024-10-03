import './Navbar.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const Navbar = ({ cartCount }) => {

    return (
        <nav>
            <div className="navBar-elements-container">
                <Link className='nav-link' to="/about-us">About Us</Link>
                <Link className='nav-link' to="/plants">Plants</Link>
                <div className='shopping-cart-icon'>
                <Link className='nav-link shopping-icon' to="/shopping-cart">
                    <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none">
                        <g id="Interface / Shopping_Cart_02">
                            <path id="Vector" d="M3 3H3.26835C3.74213 3 3.97943 3 4.17267 3.08548C4.34304 3.16084 4.48871 3.28218 4.59375 3.43604C4.71269 3.61026 4.75564 3.8429 4.84137 4.30727L7.00004 16L17.4218 16C17.875 16 18.1023 16 18.29 15.9199C18.4559 15.8492 18.5989 15.7346 18.7051 15.5889C18.8252 15.4242 18.8761 15.2037 18.9777 14.7631L18.9785 14.76L20.5477 7.95996L20.5481 7.95854C20.7023 7.29016 20.7796 6.95515 20.6947 6.69238C20.6202 6.46182 20.4635 6.26634 20.2556 6.14192C20.0184 6 19.6758 6 18.9887 6H5.5M18 21C17.4477 21 17 20.5523 17 20C17 19.4477 17.4477 19 18 19C18.5523 19 19 19.4477 19 20C19 20.5523 18.5523 21 18 21ZM8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20C9 20.5523 8.55228 21 8 21Z"  />
                        </g>
                    </svg>
                    <div className='shopping-circle'>{cartCount}</div> 
                </Link>
                </div>
            </div>
        </nav>
    );
};

Navbar.propTypes = {
    cartCount: PropTypes.number.isRequired,
  };

export default Navbar;
