import './App.css';
import './style.css'
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './components/Pages/home';

import {
  Routes,
  Route
} from "react-router-dom";
import About from './components/Pages/About';
import Shop from './components/Pages/Shop';
import Categories from './components/Pages/Categories';
import Cart from './components/Pages/cart';
import { CartProvider } from './Cartcontext';


function App() {
  return (
    <CartProvider>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/blog" element={<About/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <Footer/>
    </div>
    </CartProvider>
  );
}

export default App;
