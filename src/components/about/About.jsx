import React from "react";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src="assets/tom2.png" alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <div class="flex justify-center">
                <FaAward className="about__icon" />
              </div>
              <h5>Experience</h5>
              <small>5+ Years Working</small>
            </article>
            {/* <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article> */}
            {/* <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article> */}
          </div>
          <p>
                        A young, dynamic person seeking challenging positions in
            the field of Information Technology world where I can learn and grow
            my skills. I am a mature, positive and hardworking individual, who
            always strives to achieve the highest standard possible, at any
            given task. I posses excellent communication skills and I have the
            ability and experience to relate to a software development for 5
            year. I enjoy learning new things, I can work very well under
            pressure.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
