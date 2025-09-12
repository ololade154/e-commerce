import { Link } from 'react-router-dom';
import Logo from './Logo';
import Cart from './cart';
import MenuIcon from './MenuIcon';
import CloseIcon from './CloseIcon';

function NavBar() {
  return (
    <>
      <div className="desktop-nav">
        <div className="logo">
          <Logo />
        </div>
        <div>
          <ul className="nav-link">
            <li className="nav-item ">
              <Link to="#">Furniture</Link>
            </li>
            <li className="nav-item">
              <Link to="#">Shop</Link>
            </li>
            <li className="nav-item">
              <Link to="#">About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="#">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <Cart className="cart-icon" width={25} color="white" />
        </div>
      </div>
      <div className="mobile-nav">
        <div className="mobile-navigation">
          <div className="logo">
            <Logo />
          </div>
          <div className="menu-icon">
            <MenuIcon className="cart-icon" width={42} color="white" />
          </div>
        </div>
        <div>
          <ul className="nav-link">
            <li className="nav-item">
              <CloseIcon className="cart-icon" width={30} color="white" />
            </li>
            <li className="nav-item ">
              <Link to="#">Furniture</Link>
            </li>
            <li className="nav-item">
              <Link to="#">Shop</Link>
            </li>
            <li className="nav-item">
              <Link to="#">About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="#">Contact</Link>
            </li>
            <li className="nav-item">
              <Cart className="cart-icon" width={23} color="white" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default NavBar;
