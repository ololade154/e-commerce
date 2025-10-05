import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HomePage from './Pages/HomePage';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import ProductPage from './Pages/ProductPage';
import CartPage from './Pages/CartPage';
function App() {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems((prev) => {
      const existingItem = prev.find((i) => i.name === item.name);
      if (existingItem) {
        // If item already in cart, increase quantity
        return prev.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      // If new item, add with quantity 1
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  // Remove from cart
  const removeFromCart = (indexToRemove) => {
    setCartItems((prev) => prev.filter((_, i) => i !== indexToRemove));
  };
  // Increase quantity
  const increaseQuantity = (index) => {
    setCartItems((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (index) => {
    setCartItems((prev) =>
      prev.map((item, i) =>
        i === index && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
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
        <Route
          path="CartPage"
          element={
            <CartPage
              cartItems={cartItems}
              removeFromCart={removeFromCart}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
