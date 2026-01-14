import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/Home/Homepage";
import Menu from "./pages/menu/Menu";
import About from "./components/About";
// import Contact from "./components/Contact";
import Contact from "./pages/Contact/Contact";
// import Signup from "./components/Signup";
import Signup from "./components/form/Signup";
import Cart from "./pages/Cart";
import Placeorder from "./pages/Placeorder";
import Layout from "./layout";
import { CartProvider } from "./components/context/CartContext";
import ProtectedRoute from "../src/routes/ProtectedRoute";

function App() {
  return (
    <Router>
      <CartProvider>
        <Routes>
          {/* Layout wrapper */}
          <Route element={<Layout />}>

            {/* Public Route */}
            <Route path="/" element={<HeroSection />} />

            {/* Protected Routes */}
            <Route
              path="/Menu"
              element={
                
                  <Menu />
                
              }
            />

            <Route
              path="/about"
              element={
                
                  <About />
              
              }
            />

            <Route
              path="/Contact"
              element={
               
                  <Contact />
              
              }
            />

            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              }
            />

            <Route
              path="/placeorder"
              element={
                <ProtectedRoute>
                  <Placeorder />
                </ProtectedRoute>
              }
            />
          </Route>

          {/* Auth Route (No Layout) */}
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
