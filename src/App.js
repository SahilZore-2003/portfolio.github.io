import React from "react";
import { Routes, Route } from "react-router";

import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./contact";
import Navbar from "./Navbar";

const App = () => {
  return (
    <>
      <Navbar />
    
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/service" element={<Service/>} />
      </Routes>
    </>
  );
};

export default App;
