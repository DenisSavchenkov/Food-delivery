import './scss/global.scss';
import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage/HomePage';
import OrderPage from './pages/OrderPage/OrderPage';
import Header from './Components/Header/Header';
import LoginPopup from './Components/LoginPopup/LoginPopup';
import { useState } from 'react';

const App = () => {
  const [showLogin, setShowLogin] = useState<boolean>(false);

  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div className="wrapper">
        <Header setShowLogin={setShowLogin} />
        <Routes>
          <Route path="order" element={<OrderPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
