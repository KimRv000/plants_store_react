import './Plants.css';
import plantsData from '../data/plants_data.js';
import PlantCard from '../components/PlantCard.jsx';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';



const Plants = ({ onBuy }) => {
    return (
        <div className="plants-page-container">
            <Link className='nav-link' to="/">
                <h3 className="title-pages">Green Leaf</h3>
            </Link>
            <hr className="custom-line-pages" />
            <span className='page-name'>Plants</span>
            <div className="plant-container">
                {plantsData.map((plant, index) => (
                    <PlantCard key={index} plant={plant} onBuy={onBuy} />
                ))}
            </div>
            <hr className="custom-line-pages" />
            <Link className='nav-link home-plants' to="/">
                <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none">
                    <g >
                        <path d="M9 21H4C3.44772 21 3 20.5523 3 20V12.4142C3 12.149 3.10536 11.8946 3.29289 11.7071L11.2929 3.70711C11.6834 3.31658 12.3166 3.31658 12.7071 3.70711L20.7071 11.7071C20.8946 11.8946 21 12.149 21 12.4142V20C21 20.5523 20.5523 21 20 21H15M9 21H15M9 21V15C9 14.4477 9.44772 14 10 14H14C14.5523 14 15 14.4477 15 15V21" />
                    </g>
                </svg>
            </Link>
        </div>
    );
};

Plants.propTypes = {
    onBuy: PropTypes.func.isRequired,
};

export default Plants;
