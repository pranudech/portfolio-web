import React from "react";
import CTA from "./CTA";
import HerderSocials from "./HerderSocials";
import Typed from "react-typed";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        {/* <h1>Pranudech Reungwijit</h1> */}
        <Typed
          className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
          strings={["Tom", "Pranudech Reungwijit", ":)"]}
          typeSpeed={100}
          backSpeed={10}
          loop
        />
        <h1 className="text-light">Frontend Developer</h1>
        <CTA />
        <HerderSocials />

        <div className="me">
          <img src="assets/tom.png" alt="" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
