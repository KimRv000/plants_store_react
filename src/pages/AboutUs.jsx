import './AboutUs.css';
import { Link } from 'react-router-dom';


const AboutUs = () => {
    return (
        <div className="about-us-container">
            <Link className='nav-link' to="/plants_store_react">
                <h3 className="title-pages">Green Leaf</h3>
            </Link>            
            <hr className="custom-line-pages" />
            <span className='page-name'>About us</span>
            <p className='p-about-us'>
                At Green Leaf, we believe that nature brings joy and tranquility into our lives. Our mission is to connect you with the beauty of plants, offering a curated selection of greenery that enhances any space.<br></br>
                <br></br>
                With a passion for nurturing, we provide not just plants but also guidance on how to care for them, ensuring that your indoor oasis thrives. Each leaf represents our commitment to quality and sustainability, helping you bring nature’s touch into your home.<br></br>
                <br></br>
                Join us on this journey to create a greener, more vibrant world—one leaf at a time!
            </p>
            <hr className="custom-line-pages" />
            <Link className='nav-link' to="/plants_store_react">
                <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none">
                    <g >
                        <path d="M9 21H4C3.44772 21 3 20.5523 3 20V12.4142C3 12.149 3.10536 11.8946 3.29289 11.7071L11.2929 3.70711C11.6834 3.31658 12.3166 3.31658 12.7071 3.70711L20.7071 11.7071C20.8946 11.8946 21 12.149 21 12.4142V20C21 20.5523 20.5523 21 20 21H15M9 21H15M9 21V15C9 14.4477 9.44772 14 10 14H14C14.5523 14 15 14.4477 15 15V21" />
                    </g>
                </svg>
            </Link>
        </div>
    );
};

export default AboutUs;