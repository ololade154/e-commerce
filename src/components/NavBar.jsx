import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import Cart from './cart';
import MenuIcon from './MenuIcon';
import CloseIcon from './CloseIcon';

function NavBar({ cartItems }) {
  const [isOpen, setIsOpen] = useState(false);
  function openMenu() {
    setIsOpen(true);
  }

  function closeMenu() {
    setIsOpen(false);
  }
  const { pathname } = useLocation();

  return (
    <>
      <div
        className={`desktop-nav ${
          pathname !== '/' ? 'non-transparent' : 'transparent'
        }`}
      >
        <div>
          <Link to="/" className="logo-link">
            <Logo />
          </Link>
        </div>
        <div>
          <ul className="nav-link">
            <li className="nav-item ">
              <Link to="/SignUp">Furniture</Link>
            </li>
            <li className="nav-item">
              <Link to="/Login">Shop</Link>
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
          <Link to="/CartPage">
            <Cart className="cart-icon" width={25} color="white" />
            {cartItems && cartItems.length > 0 && (
              <p className="cart-details">{cartItems.length}</p>
            )}
          </Link>
        </div>
      </div>
      <div className="mobile-nav">
        <div
          className={`mobile-navigation ${
            pathname !== '/' ? 'non-transparent with-margin' : 'transparent'
          }`}
        >
          <div>
            <Link to="/" className="logo-link">
              <Logo />
            </Link>
          </div>
          <div className="menu-icon">
            <MenuIcon
              onClick={openMenu}
              className="cart-icon"
              width={42}
              color="white"
            />
          </div>
        </div>
        <div>
          <ul className={`nav-link ${isOpen ? 'open' : ''}`}>
            <li className="nav-item">
              <CloseIcon
                onClick={closeMenu}
                className="cart-icon"
                width={30}
                color="white"
              />
            </li>
            <li className="nav-item ">
              <Link to="/SignUp">Furniture</Link>
            </li>
            <li className="nav-item">
              <Link to="/Login">Shop</Link>
            </li>
            <li className="nav-item">
              <Link to="/">About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/ProductPage">Contact</Link>
            </li>
            <li className="nav-item">
              <Link to="/CartPage">
                <Cart className="cart-icon" width={23} color="white" />
                {cartItems && cartItems.length > 0 && (
                  <p className="cart-details">{cartItems.length}</p>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default NavBar;
