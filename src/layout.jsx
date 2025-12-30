// layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> {/* This is where child routes will render */}
      </main>
      <Footer />
    </>
  );
}
