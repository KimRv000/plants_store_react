import './HomePlants.css';
import monstera from '../assets/monstera_transparent.png';
import orchid from '../assets/orchid_transparent.png';
import succulent from '../assets/succulent_transparent.png';
import pothos from '../assets/pothos_transparent.png';
import snakePlant from '../assets/snake_plant_transparent.png';


const HomePlants = () => {
  return (
    <div className="homePlants-Globalcontainer">
      <section className="homePlants-container">
        <div className="plants-container">
          <img src={monstera} alt="Monstera" className="plant-image monstera" />
          <img src={orchid} alt="Orchid" className="plant-image orchid" />
          <img src={orchid} alt="Orchid" className="plant-image orchid-2" />
          <img src={succulent} alt="Succulent" className="plant-image succulent" />
          <img src={pothos} alt="Pothos" className="plant-image pothos" />
          <img src={snakePlant} alt="Snake Plant" className="plant-image snake-plant" />
        </div>
        <hr className="custom-line-home" />
      </section>
      <a href="/plants" className="see-more">See all ...</a>
    </div>
  );
};

export default HomePlants;