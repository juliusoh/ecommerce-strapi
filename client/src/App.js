/** @format */
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Checkout from './screens/checkout/Checkout';
import Home from './screens/home/Home';
import ProductDetails from './screens/productDetails/ProductDetails';
import Navbar from './screens/global/Navbar';
import CartMenu from './screens/global/CartMenu';
import Footer from './screens/global/Footer';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='product/:productId' element={<ProductDetails />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
      <CartMenu />
      <Footer />
    </Router>
  );
}

export default App;
