import React from "react";
import { BsLinkedin, BsGithub, BsYoutube } from 'react-icons/bs'

const HerderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/pranudech-reungwijit-4b9448243/" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/pranudech" target="_blank"><BsGithub/></a>
      {/* <a href="https://github.com/pranudech" target="_blank"><BsYoutube/></a> */}
    </div>
  );
};

export default HerderSocials;
