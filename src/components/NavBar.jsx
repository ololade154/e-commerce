import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import Cart from './cart';

function NavBar({ props }) {
  return (
    <div className="Nav">
      <div className="logo">
        <Logo />
      </div>
      <div className="nav-link">
        <ul>
          <NavLink to="signUp">Signup</NavLink>
          <NavLink to="signUp">Signup</NavLink>
          <NavLink to="signUp">Signup</NavLink>
        </ul>
      </div>
      <div>
        <Cart style={{ width: props.width }} />
      </div>
    </div>
  );
}
export default NavBar;
