import { Link } from 'react-router-dom';
import Label from './Label';
import Inputs from './Inputs';

function SignSection() {
  return (
    <div className="sign-section">
      <div className="sign-details">
        <h1>Signup</h1>
        <p>
          Already have an Account?
          <Link className="signup-link" to="#">
            Login
          </Link>
        </p>

        <div className="signup-detail">
          <div className="details">
            <div>
              <Label text="Full Name" className="form-label" />
              <Inputs placeholder="michael joe" width="260px" type="text" />
            </div>
            <div>
              <Label text="Email" />
              <Inputs
                placeholder="michael.joe@gmail.com"
                width="260px"
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
                width="260px"
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
                width="260px"
              />
            </div>
          </div>
        </div>
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
