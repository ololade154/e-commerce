import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ContactContent from '../components/ContactContent';
function Contact({ cartItems }) {
  return (
    <div className="page">
      <NavBar cartItems={cartItems} />
      <main className="main-content">
        <ContactContent />
      </main>
      <Footer />
    </div>
  );
}
export default Contact;
