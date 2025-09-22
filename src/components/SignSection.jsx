import { Link } from 'react-router-dom';
import Label from './Label';
import Inputs from './Inputs';

function SignSection() {
  return (
    <div className="sign-section">
      <div className="sign-details">
        <h1>Signup</h1>
        <p>
          Already have an Account,
          <Link className="signup-link" to="#">
            Login.
          </Link>
        </p>
        <div className="signup-detail">
          <div className="details">
            <div>
              <Label text="Full Name" />
              <Inputs placeholder="michael joe" width="250px" />
            </div>
            <div>
              <Label text="Email" />
              <Inputs placeholder="michael.joe@gmail.com" width="250px" />
            </div>
          </div>
          <div className="details">
            <div>
              <Label text="password" />
              <div>
                <Inputs
                  placeholder="******"
                  type="password"
                  showCart={true}
                  cartWidth={25}
                  cartColor="red"
                  onCartClick={() => alert('Cart clicked!')}
                  width="250px"
                />
              </div>
            </div>
            <div>
              <Label text="Confirm Password" />
              <Inputs
                placeholder="*****"
                type="password"
                showCart={true}
                cartWidth={25}
                cartColor="red"
                width="250px"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="signup-image">
        <img
          src="/assets/experience-image.svg"
          alt="experience-image"
          className="sign-image"
        />
      </div>
    </div>
  );
}
export default SignSection;
