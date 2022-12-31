import React from "react";
import CTA from "./CTA";
import HerderSocials from "./HerderSocials";
import './header.css';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Pranudech Reungwijit</h1>
        <h5 className="text-light">Fullstack Developer===</h5>
        <CTA />
        <HerderSocials/>

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
