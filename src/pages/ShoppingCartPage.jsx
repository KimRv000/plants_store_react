import './ShoppingCartPage.css';
import { Link } from 'react-router-dom';


const ShoppingCartPage = () => {
  // Lógica para mostrar los productos en el carrito
  return (
    <section className='shopping-cart'>
      <Link className='nav-link' to="/">
        <h3 className="title-pages">Green Leaf</h3>
      </Link>
      <hr className="custom-line-pages" />
      <span className='page-name'>Your cart</span>
      <div className='cart-info-container'>
        <h3 className='cart-info'>Total Items: 0</h3>
        <h3 className='cart-info'>Total: $0</h3>
      </div>
      <button className='pay-button'>Pay</button>
      <hr className="custom-line-pages" />
      <Link className='nav-link' to="/">
        <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none">
          <g >
            <path d="M9 21H4C3.44772 21 3 20.5523 3 20V12.4142C3 12.149 3.10536 11.8946 3.29289 11.7071L11.2929 3.70711C11.6834 3.31658 12.3166 3.31658 12.7071 3.70711L20.7071 11.7071C20.8946 11.8946 21 12.149 21 12.4142V20C21 20.5523 20.5523 21 20 21H15M9 21H15M9 21V15C9 14.4477 9.44772 14 10 14H14C14.5523 14 15 14.4477 15 15V21" />
          </g>
        </svg>
      </Link>
    </section>
  );
};

export default ShoppingCartPage;
