import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/Home";
// import Fullmenu from "./pages/Fullmenu";
import Menu from "./components/menu/Menu";
import About from "./components/About";
import Contact from "./components/Contact";
import Signup from "./components/Signup";
import Cart from "./pages/Cart";
import Placeorder from "./pages/Placeorder";
import Layout from "./layout";
import { CartProvider } from "./pages/CartContext";
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
                <ProtectedRoute>
                  <Menu />
                </ProtectedRoute>
              }
            />

            <Route
              path="/about"
              element={
                <ProtectedRoute>
                  <About />
                </ProtectedRoute>
              }
            />

            <Route
              path="/contact"
              element={
                <ProtectedRoute>
                  <Contact />
                </ProtectedRoute>
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
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
