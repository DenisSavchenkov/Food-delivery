import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ErrorPage from './pages/ErrorPage';
import FullProductPage from './pages/FullProductPage';
import './styles/global.scss';
import Container from './Components/Container';

const App: FC = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<FullProductPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Container>
  );
};

export default App;
