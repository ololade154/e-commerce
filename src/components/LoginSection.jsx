import { Link } from 'react-router-dom';
import Label from './Label';
import Inputs from './Inputs';
import Buttons from './Buttons';
function LoginSection() {
  return (
    <div className="login-section">
      <div className="login-details">
        <h1>Login</h1>
        <p>
          Do not have an account
          <Link className="Login-link" to="#">
            create a new one
          </Link>
        </p>
        <div className="Login-detail">
          <div>
            <div>
              <Label text="Enter Your Email or Phone" />
              <Inputs
                placeholder="michael.joe@gmail.com"
                className="custom-input"
              />
            </div>
          </div>
          <div>
            <div>
              <Label text="Enter Your Password" />
              <Inputs
                placeholder="******"
                type="password"
                showEye={true}
                eyeWidth={22}
                eyeColor="#696969"
                className="custom-input"
              />
            </div>
          </div>
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
export default LoginSection;
