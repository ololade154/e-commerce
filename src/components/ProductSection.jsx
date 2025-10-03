import ProductInput from './ProductInput';
import Products from './Products';

function ProductSection({ addToCart }) {
  return (
    <div className="product-section">
      <h1 className="product-section-header">Our Collection Of Products</h1>
      <ProductInput
        containerClass="product-input-container"
        placeholder="Search An Item"
        inputClass="product-input"
      />
      <Products addToCart={addToCart} />
    </div>
  );
}
export default ProductSection;
