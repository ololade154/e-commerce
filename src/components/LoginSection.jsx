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
          <Link className="login-link" to="/SignUp">
            create a new one
          </Link>
        </p>
        <div className="login-detail">
          <div>
            <div>
              <Label text="Enter Your Email or Phone" />
              <Inputs
                placeholder="michael.joe@gmail.com"
                className="login-input"
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
                className="login-input"
              />
            </div>
          </div>
        </div>

        <Buttons className="login-button">Login</Buttons>
        <Link to="#" className="password-link">
          Forgot Your Password
        </Link>
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
