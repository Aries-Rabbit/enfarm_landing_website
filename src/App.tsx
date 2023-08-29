import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import About from "./pages/About";
import { Header } from "./layouts/Header/Header";
import Footer from "./layouts/Footer";
import Contact from "./layouts/Contact";
import { Knowledge } from "./pages/Knowledge";
import { Product } from "./pages/Product";
import { useDispatch } from "react-redux";
import { setActivePage } from "./redux/layoutSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (window.location.pathname.includes("/")) {
      dispatch(setActivePage(0));
    }
    if (window.location.pathname.includes("/about")) {
      dispatch(setActivePage(1));
    }
    if (window.location.pathname.includes("/product")) {
      dispatch(setActivePage(2));
    }
    if (window.location.pathname.includes("/knowledge")) {
      dispatch(setActivePage(3));
    }
  }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/knowledge" element={<Knowledge />} />
      </Routes>
      {/* <Contact /> */}
      <Footer />
    </>
  );
}

export default App;
