import NavBar from '../components/NavBar';
import LoginSection from '../components/LoginSection';
import Footer from '../components/Footer';
// import { useScrollToTop } from '../Hooks/CustomHook';

function Login({ cartItems }) {
  // useScrollToTop();
  return (
    <div className="page">
      <NavBar cartItems={cartItems} />
      <main className="main-content">
        <LoginSection />
      </main>
      <Footer />
    </div>
  );
}
export default Login;
