import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import SignSection from '../components/SignSection';

function SignUp({ cartItems }) {
  return (
    <div className="page">
      <NavBar cartItems={cartItems} />
      <main className="main-content">
        <SignSection />
      </main>
      <Footer />
    </div>
  );
}

export default SignUp;
