import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HomePage from './Pages/HomePage';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import ProductPage from './Pages/ProductPage';
import CartPage from './Pages/CartPage';
function App() {
  const [cartItems, setCartItems] = useState([]);
  // Load cart from localStorage when app starts
  useEffect(() => {
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) setCartItems(JSON.parse(savedCart));
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);
  const addToCart = (item) => {
    console.log('Adding to cart:', item);
    setCartItems((prev) => [...prev, item]);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route
          path="productpage"
          element={<ProductPage addToCart={addToCart} />}
        />
        <Route path="CartPage" element={<CartPage cartItems={cartItems} />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
