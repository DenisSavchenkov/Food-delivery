import './scss/global.scss';
import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage/HomePage';
import OrderPage from './pages/OrderPage/OrderPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrPage from './pages/RegistrPage/RegistrPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="order" element={<OrderPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registr" element={<RegistrPage />} />
      </Routes>
    </>
  );
};

export default App;
