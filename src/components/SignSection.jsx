import { Link } from 'react-router-dom';
import Label from './Label';
import Inputs from './Inputs';
import Buttons from './Buttons';

function SignSection() {
  return (
    <div className="sign-section">
      <div className="sign-details">
        <h1>Signup</h1>
        <p>
          Already have an Account?
          <Link className="signup-link" to="/Login">
            Login
          </Link>
        </p>

        <div className="signup-detail">
          <div className="details">
            <div>
              <Label text="Full Name" className="form-label" />
              <Inputs
                placeholder="michael joe"
                type="text"
                className="custom-input"
              />
            </div>
            <div>
              <Label text="Email" />
              <Inputs
                placeholder="michael.joe@gmail.com"
                className="custom-input"
                type="email"
              />
            </div>
          </div>

          <div className="details">
            <div>
              <Label text="Password" />
              <Inputs
                placeholder="******"
                type="password"
                showEye={true}
                eyeWidth={22}
                eyeColor="#696969"
                className="custom-input"
              />
            </div>
            <div>
              <Label text="Confirm Password" />
              <Inputs
                placeholder="*******"
                type="password"
                showEye={true}
                eyeWidth={22}
                eyeColor="#696969"
                className="custom-input"
              />
            </div>
          </div>
        </div>
        <div className="check">
          <Inputs type="checkbox" width="15px" />
          <span>
            I have read and agreed to the Terms of Service and Privacy Policy
          </span>
        </div>
        <Buttons className="signup-button">Create Account</Buttons>
      </div>

      <div className="signup-image">
        <img
          src="/assets/experience-image.svg"
          alt="experience"
          className="sign-image"
        />
      </div>
    </div>
  );
}

export default SignSection;
