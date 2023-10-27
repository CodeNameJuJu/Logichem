import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Views/Home';
import Projects from './Views/Projects';
import Services from './Views/Services';
import Store from './Views/Store';
import Contact from './Views/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="bg-white">
      <BrowserRouter>
        <Navbar />
        <div >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Store" element={<Store />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
