

import insta from '../images/Instagram.png'
import facebook from '../images/Facebook.png'
import twitter from '../images/Twitter.png'
import whatsapp from '../images/WhatsApp.png'
import './HwCss.css'


const Footer = () => {
    return (
        <footer className='
         bg-gray-800 text-white
        footer-container font-bold uppercase
        '>
        <div className='
        md:flex-row md:justify-between md:items-center sm:px-12 px-4
       nav-cards
        '>
<h3 className="footer-titles" >Title Here</h3>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita officiis enim sint nostrum!</p>
<div className='
// md:flex-row md:justify-between md:items-center
media-container
'>
    <img className='med-icons' src={insta} alt="Instagram" />
    <img className='med-icons' src={facebook} alt="Facebook" />
    <img className='med-icons' src={twitter} alt="Twitter" />
    <img className='med-icons' src={whatsapp} alt="WhatsApp" />
</div>
        </div>
        <div className="nav-cards">
            <h3 className="footer-titles">About</h3>
            <a href="">History</a><br />
            <a href="">Our Team</a><br />
            <a href="">Brand Guidelines</a><br />
            <a href="">Terms & Conditions</a><br />
            <a href="">Privacy Policy</a>
        </div>
        <div className="nav-cards">
            <h3 className="footer-titles">Services</h3>
            <a href="">How to Order</a><br />
            <a href="">Our Products</a><br />
            <a href="">Order Status</a><br />
            <a href="">Promo</a><br />
            <a href="">Payment Method</a>
        </div>
        <div className="nav-cards">
            <h3 className="footer-titles">OTHER</h3>
            <a href="">How to Order</a><br />
            <a href="">Our Products</a><br />
            <a href="">Order Status</a><br />
            <a href="">Promo</a><br />
            <a href="">Payment Method</a>
        </div>

    </footer>
    );
  };
  
  export default Footer;
  
