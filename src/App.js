// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import HowToExplore from './pages/How';
import MakeADifference from "./pages/MakeADifference";
import OurStory from "./pages/OurStory";
import WhatsAppChat from "./components/WhatsAppChat";


function App() {
  return (
    <div className="app">
      <Navbar />
      <WhatsAppChat />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/how" element={<HowToExplore />} />
        <Route path="/makeadifference" element={<MakeADifference />} />
        <Route path="/ourstory" element={<OurStory />} />
      </Routes>
    </div>
  );
}

export default App;
