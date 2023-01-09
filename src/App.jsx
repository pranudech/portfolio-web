import React, { useState, useEffect } from "react";

import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Service from "./components/service/Service";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  const [activeNav, setactiveNav] = useState("#");
  window.addEventListener("scroll", () => {
    if (window.scrollY === 0) {
      setactiveNav("#");
    } else if (window.scrollY >= 311 && window.scrollY <= 1355) {
      setactiveNav("#about");
    } else if (window.scrollY >= 1356 && window.scrollY <= 2172) {
      setactiveNav("#experience");
    } else if (window.scrollY >= 2173 && window.scrollY <= 2959) {
      setactiveNav("#service");
    } else if (window.scrollY > 2960) {
      setactiveNav("#contact");
    }
  });

  return (
    <>
      <Header />
      <Nav activeNav={activeNav} setactiveNav={setactiveNav} />
      <About />
      <Experience />
      <Service />
      {/* <Portfolio /> */}
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default App;
