import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
