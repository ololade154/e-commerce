import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import ProductPage from './Pages/ProductPage';
import CartPage from './Pages/CartPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="productpage" element={<ProductPage />} />
        <Route path="CartPage" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
