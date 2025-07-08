import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import HeroSection from './components/Home'
import Fullmenu from './pages/Fullmenu';
import About from './components/About';
import Contact from './components/Contact'
import Footer from './components/Footer';
import { CartProvider } from '../src/pages/CartContext';



import Cart from './pages/Cart'
import Placeorder from './pages/Placeorder'




function App() {

  return (
    <>
        <Router>
          <CartProvider>
      <Navbar />
      <div className="pt-20"> {/* add padding if your navbar is fixed */}
         
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/fullmenu" element={<Fullmenu />} />
          <Route path="/About" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Cart" element={<Cart/>} />
        </Routes>
        
      </div>
      </CartProvider>
      <Footer />
    </Router>
    </>
  )
}

export default App
