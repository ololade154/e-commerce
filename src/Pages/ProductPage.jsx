import NavBar from '../components/NavBar';
import ProductSection from '../components/ProductSection';
import Footer from '../components/Footer';
function ProductPage({ addToCart, cartItems }) {
  return (
    <div className="page">
      <NavBar cartItems={cartItems} />
      <main className="main-content">
        <ProductSection addToCart={addToCart} />
      </main>
      <Footer />
    </div>
  );
}
export default ProductPage;
