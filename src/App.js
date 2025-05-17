// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";


// import Footer from "./components/Footer";
import Inquiries from "./pages/Inquiries";
import LandingPage from "./pages/LandingPage";
import WhenAndWhere from "./pages/WhenAndWhere";
import Amboseli from "./pages/Amboseli";
import Tsavo from "./pages/Tsavo National Parks"; // Import the Tsavo component
import LakeNakuru from "./pages/Lake Nakuru National Park"; // Import the Lake Nakuru component
import Samburu from "./pages/Samburu National Reserve"; // Import the Samburu component
import Nairobi from "./pages/Nairobi National Park "; // Import the Nairobi component
import Meru  from "./pages/Meru National Park"; // Import the Meru component
import OlPejeta from "./pages/OlPejeta Conservancy"; // Import the Ol Pejeta component
import MaasaiMara from "./pages/MaasaiMara National Reserve"; // Import the Maasai Mara component
import Lamu from "./pages/Lamu"; // Import the Lamu component
import Watamu from "./pages/Watamu"; // Import the Watamu component
import Kilifi from "./pages/Kilifi"; // Import the Kilifi component
import Diani from "./pages/Diani"; // Import the Diani component


function App() {
  return (
    <div className="app">
      <Navbar />
      <WhatsAppChat />
      <Routes>
        <Route path="/Inquiries" element={<Inquiries />} />
        <Route path="/" element={<LandingPage />} />

    
      </Routes>
    </div>
  );
}

export default App;