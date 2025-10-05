import NavBar from '../components/NavBar';
import CartContent from '../components/CartContent';
import Footer from '../components/Footer';
function CartPage({
  cartItems,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
}) {
  return (
    <div>
      <NavBar />
      <CartContent
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />
      <Footer />
    </div>
  );
}
export default CartPage;
