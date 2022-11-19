import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer'
import Home from './pages/Home'
import Product from './pages/Product'
import Checkout from './pages/Checkout'

import { CartProvider } from './Context/CartContext'


function App() {
  return (
    <div className="App">
    <CartProvider>
     <BrowserRouter>
     
     <Header />
     <Routes>
      <Route path='/' element={<Home />} />
      
      <Route path='product' element={<Product />} />
      
      <Route path='checkout' element={<Checkout />} />
      
     </Routes>
     <Footer />
     
     </BrowserRouter>
    </CartProvider>
    </div>
  );
}

export default App;
