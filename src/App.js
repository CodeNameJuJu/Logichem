import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import background from './Background/d4f3c6a6-918c-431d-817d-b8c734bf5cc1.JPG';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div style={{ backgroundImage: `url(${background})` , backgroundrepeat: 'no-repeat'}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
