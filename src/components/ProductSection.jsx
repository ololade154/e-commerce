import { useState } from 'react';
import ProductInput from './ProductInput';
import Products from './Products';

function ProductSection({ addToCart }) {
  const [typedText, setTypedText] = useState(''); // what user types
  const [searchQuery, setSearchQuery] = useState(''); // what we actually search

  const handleSearchClick = () => {
    setSearchQuery(typedText.trim()); // update when icon is clicked
  };

  return (
    <div className="product-section">
      <h1 className="product-section-header">Our Collection Of Products</h1>

      <ProductInput
        containerClass="product-input-container"
        placeholder="Search an item"
        inputClass="product-input"
        value={typedText}
        onChange={(e) => setTypedText(e.target.value)} // update while typing
        onSearch={handleSearchClick} // 👈 send function to handle click
      />

      <Products addToCart={addToCart} searchTerm={searchQuery} />
    </div>
  );
}

export default ProductSection;
