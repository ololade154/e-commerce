import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HomePage from './Pages/HomePage';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import ProductPage from './Pages/ProductPage';
import CartPage from './Pages/CartPage';
import Contact from './Pages/Contact';
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
        return prev.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      }

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
        <Route index element={<HomePage cartItems={cartItems} />} />
        <Route path="signup" element={<SignUp cartItems={cartItems} />} />
        <Route path="login" element={<Login cartItems={cartItems} />} />
        <Route
          path="productpage"
          element={<ProductPage addToCart={addToCart} cartItems={cartItems} />}
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
        <Route path="Contact" element={<Contact cartItems={cartItems} />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
