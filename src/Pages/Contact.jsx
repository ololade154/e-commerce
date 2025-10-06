import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ContactContent from '../components/ContactContent';
function Contact({ cartItems }) {
  return (
    <div>
      <NavBar cartItems={cartItems} />
      <ContactContent />
      <Footer />
    </div>
  );
}
export default Contact;
