import NavBar from '../components/NavBar';
import CartContent from '../components/CartContent';
import Footer from '../components/Footer';
function CartPage({ cartItems }) {
  return (
    <div>
      <NavBar />
      <CartContent cartItems={cartItems} />
      <Footer />
    </div>
  );
}
export default CartPage;
