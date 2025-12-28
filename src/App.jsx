import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Home";
import Fullmenu from "./pages/Fullmenu";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { CartProvider } from "./pages/CartContext";
import Layout from "./layout";
import Signup from "./components/Signup";
import Cart from "./pages/Cart";
import Placeorder from "./pages/Placeorder";

function App() {
  return (
    <Router>
      <CartProvider>
        {/* <div className="pt-20"> */}
          <Routes>
            {/* Wrap all routes that use Layout */}
            <Route element={<Layout />}>
              <Route path="/" element={<HeroSection />} />
              <Route path="/fullmenu" element={<Fullmenu />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/placeorder" element={<Placeorder />} />
            </Route>

            {/* Routes that don’t need Layout */}
            <Route path="/signup" element={<Signup />} />
          </Routes>
        {/* </div> */}
      </CartProvider>
    </Router>
  );
}

export default App;
