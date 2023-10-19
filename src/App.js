import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import ParticleBg from './Components/ParticleBg/ParticleBg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RingLoader from "react-spinners/RingLoader";

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
          <ParticleBg />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
