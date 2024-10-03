import PropTypes from 'prop-types';
import './PlantCard.css'; 

const PlantCard = ({ plant, onBuy }) => {
  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} />
      <div className="info">
        <div className="info-text">
        <h3>{plant.name}</h3>
        <p>${plant.price}</p>
        </div>
        <button className="buy-button" onClick={onBuy}>Buy</button>
      </div>
    </div>
  );
};

PlantCard.propTypes = {
    plant: PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      image: PropTypes.string,
    }).isRequired,
    onBuy: PropTypes.func.isRequired, 
  };
  

export default PlantCard;
