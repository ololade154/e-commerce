import { useState } from 'react';
import ProductInput from './ProductInput';
import Products from './Products';

function ProductSection({ addToCart }) {
  const [typedText, setTypedText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [message, setMessage] = useState('');
  const [show, setShow] = useState(false);

  const handleSearchClick = () => {
    setSearchQuery(typedText.trim()); // update when icon is clicked
  };
  const handleAddToCart = (item) => {
    addToCart(item);
    setMessage(`${item.name} has been added to your cart `);
    setShow(true);
    setTimeout(() => setShow(false), 1000);
  };

  return (
    <div className="product-section">
      <h1 className="product-section-header">Our Collection Of Products</h1>

      <ProductInput
        containerClass="product-input-container"
        placeholder="Search an item"
        inputClass="product-input"
        value={typedText}
        onChange={(e) => setTypedText(e.target.value)}
        onSearch={handleSearchClick}
      />
      {message && (
        <div className={`cart-message ${show ? 'show' : ''}`}>{message}</div>
      )}
      <Products addToCart={handleAddToCart} searchTerm={searchQuery} />
    </div>
  );
}

export default ProductSection;
