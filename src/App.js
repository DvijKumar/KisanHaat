import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
// import ParticleBg from './Components/ParticleBg/ParticleBg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RingLoader from "react-spinners/RingLoader";
import ProductPage from "./Pages/Product/ProductPage";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100vh",
          }}
        >
          <RingLoader color="#FF5F1F" />
        </div>
      ) : (
        <BrowserRouter>
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
          {/* <ParticleBg /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/product/:prodid" element={<ProductPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
