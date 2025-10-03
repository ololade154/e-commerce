import NavBar from '../components/NavBar';
import ProductSection from '../components/ProductSection';
import Footer from '../components/Footer';
function ProductPage({ addToCart }) {
  return (
    <div>
      <NavBar />
      <ProductSection addToCart={addToCart} />
      <Footer />
    </div>
  );
}
export default ProductPage;
