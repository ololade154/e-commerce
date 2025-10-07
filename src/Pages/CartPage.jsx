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
    <div className="page">
      <NavBar cartItems={cartItems} />
      <main className="main-content">
        <CartContent
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        />
      </main>
      <Footer />
    </div>
  );
}
export default CartPage;
