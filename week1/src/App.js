import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Error from './pages/Error';
import SingleProduct from './pages/SingleProduct';
import Post from './pages/Post';
import './App.css';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='products' element={<Products />} />
      <Route path='products/:productId' element={<SingleProduct />} />
      <Route path='post' element={<Post />} />
      <Route path='*' element={<Error />} />
     </Routes>
     <Footer />
     </BrowserRouter>
    </div>
  );
}

export default App;
