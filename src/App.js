import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Services from './Components/Services/Services';
import Store from './Components/Store/Store';
import Contact from './Components/Contact/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import background from './Background/drawing.png';

function App() {
  return (
    <div class="bg-white">
      <BrowserRouter>
        <Navbar />
        <div style={{ backgroundImage: `url(${background})` , backgroundrepeat: 'no-repeat'}}>
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
