import './HomePlants.css';



const HomePlants = () => {
  return (
    <div className="homePlants-Globalcontainer">
      <section className="homePlants-container">
        <div className="plants-container">
          <img src="src/assets/monstera_transparent.png" alt="Monstera" className="plant-image monstera" />
          <img src="src/assets/orchid_transparent.png" alt="Orchid" className="plant-image orchid" />
          <img src="src/assets/orchid_transparent.png" alt="Orchid" className="plant-image orchid-2" />
          <img src="src/assets/succulent_transparent.png" alt="Succulent" className="plant-image succulent" />
          <img src="src/assets/pothos_transparent.png" alt="Pothos" className="plant-image pothos" />
          <img src="src/assets/snake_plant_transparent.png" alt="Snake Plant" className="plant-image snake-plant" />
        </div>
        <hr className="custom-line-home" />
      </section>
      <a href="/plants" className="see-more">See all ...</a>
    </div>
  );
};

export default HomePlants;