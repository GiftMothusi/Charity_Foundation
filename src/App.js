import React from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Causes from "./pages/Causes";
import Gallery from "./pages/Gallery";
import OurTeam from "./pages/OurTeam";
import News from "./pages/News";
import Events from "./pages/Events";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/pages/Home" element={<Home />} />
          <Route path="/pages/About" element={<About />} />
          <Route path="/pages/Causes" element={<Causes />} />
          <Route path="/pages/Gallery" element={<Gallery />} />
          <Route path="/pages/OurTeam" element={<OurTeam />} />
          <Route path="/pages/News" element={<News />} />
          <Route path="/pages/Events" element={<Events />} />
          <Route path="/pages/Donate" element={<Donate />} />
          <Route path="/pages/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
