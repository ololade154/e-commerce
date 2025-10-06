import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import SignSection from '../components/SignSection';

function SignUp({ cartItems }) {
  return (
    <div>
      <NavBar cartItems={cartItems} />
      <SignSection />
      <Footer />
    </div>
  );
}

export default SignUp;
