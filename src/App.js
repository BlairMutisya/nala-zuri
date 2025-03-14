// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
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
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/when-and-where" element={<WhenAndWhere />} />
        <Route path="/amboseli" element={<Amboseli />} />
        <Route path="/tsavo" element={<Tsavo />} />
        <Route path="/lake-nakuru" element={<LakeNakuru />} />
        <Route path="/samburu" element={<Samburu />} />
        <Route path="/nairobi" element={<Nairobi />} />
        <Route path="/meru" element={<Meru />} />
        <Route path="/olpejeta" element={<OlPejeta />} />
        <Route path="/maasai-mara" element={<MaasaiMara />} />
        <Route path="/lamu" element={<Lamu />} />
        <Route path="/watamu" element={<Watamu />} />
        <Route path="/kilifi" element={<Kilifi />} />
        <Route path="/diani" element={<Diani />} /> 
        {/* <Route path="/about" element={<AboutPage />} /> */}
        {/* <Route path="/contact" element={<ContactPage />} /> */}
        {/* <Route path="/tickets" element={<TicketsPage />} /> */}
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;