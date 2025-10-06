import NavBar from '../components/NavBar';
import LoginSection from '../components/LoginSection';
import Footer from '../components/Footer';

function Login({ cartItems }) {
  return (
    <div>
      <NavBar cartItems={cartItems} />
      <LoginSection />
      <Footer />
    </div>
  );
}
export default Login;
