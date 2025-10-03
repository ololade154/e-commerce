import { Link } from 'react-router-dom';
import Logo from './Logo';
import Cart from './cart';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-info">
        <div>
          <div className="footer-logo">
            <Logo />
          </div>
          <p>The advantage of hiring a workspace with </p>
          <p>us is that it gives you confortable service</p>
          <p>and all-around facilities</p>
        </div>
        <div>
          <Link to="#">Services</Link>
          <Link to="#">Email Marketing </Link>
          <Link to="#">Campaigns</Link>
          <Link to="#">Branding</Link>
        </div>
        <div>
          <Link to="#">Furniture</Link>
          <Link to="#">Beds</Link>
          <Link to="#">Chair</Link>
          <Link to="#">All</Link>
        </div>
        <div className="social-links">
          <Link to="#">Follow Us</Link>
          <div className="social-link">
            <Cart width={22} className="cart" />
            <Link to="#">Facebook</Link>
          </div>
          <div className="social-link">
            <Cart width={22} className="cart" />
            <Link to="#">twitter</Link>
          </div>
          <div className="social-link">
            <Cart width={22} className="cart" />
            <Link to="#">Instagram</Link>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div>copyright</div>
        <div className="policy">
          <div>Terms and conditions</div>
          <div>Privacy policy</div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
