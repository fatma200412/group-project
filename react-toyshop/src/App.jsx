import { useState } from "react";
Navbar;
import "./App.css";
import Navbar from "./layout/navbar";
import Footer from "./layout/footer";
import Home from "./pages/home";
import "./grid.css";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
