import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <ul>
        <NavLink to="signUp">Signup</NavLink>
      </ul>
    </div>
  );
}
export default NavBar;
