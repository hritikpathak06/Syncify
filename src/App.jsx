import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import BackgroundRemoval from "./pages/BackgroundRemoval/BackgroundRemoval";
import ImageEnhancer from "./pages/ImageEnhancer/ImageEnhancer";
import GenerateImages from "./pages/GenerateImages/GenerateImages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/background-removal" element={<BackgroundRemoval />} />
        <Route path="/image-enhancer" element={<ImageEnhancer />} />
        <Route path="/generate-images" element={<GenerateImages />} />
      </Routes>
    </div>
  );
}

export default App;
