import { Link } from 'react-router-dom';
import Logo from './Logo';
import Cart from './cart';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-info">
        <div>
          <Logo className="footer-logo" color="red" />
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
        <div>
          <div>
            <Link to="#">Follow Us</Link>
          </div>
          <div>
            <div>
              <Cart width={25} />
            </div>
            <div>
              <Link to="#">Facebook</Link>
            </div>
          </div>
          <div>
            <div>
              <Cart width={25} />
            </div>
            <div>
              <Link to="#">twitter</Link>
            </div>
          </div>
          <div>
            <div>
              <Cart width={25} />
            </div>
            <div>
              <Link to="#">Instagram</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright"></div>
    </div>
  );
}
export default Footer;
