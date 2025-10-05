import NavBar from '../components/NavBar';
import CartContent from '../components/CartContent';
import Footer from '../components/Footer';
function CartPage({ cartItems, removeFromCart }) {
  return (
    <div>
      <NavBar />
      <CartContent cartItems={cartItems} removeFromCart={removeFromCart} />
      <Footer />
    </div>
  );
}
export default CartPage;
