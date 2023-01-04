import React from "react";
import "./service.css";
import { BiCheck } from "react-icons/bi";

const Service = () => {
  return (
    <section id="service">
      <h5>EMPLOYMENT HISTORY</h5>
      <h2>HISTORY</h2>

      <div className="container service__container">
        {/* 1 */}
        <article className="service">
          <div className="service__header">
            <h3>Sense-InfoTech Co., Ltd. (Mar. 2020 - Present)</h3>
            <h2>Position :  Full Stack Developer</h2>
            <h2>Responsibility/Contribution:</h2>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Build user interfaces with Reactjs</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Build RESTful APIs, integrate APIs with another service with
                Swagger API & Graphql
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Create the technical component of a frontend project</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                ever done a project government attorney general, department of
                lands, MWA
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Used to create a WMS using GeoServer in a landmap project</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Deploy project on Docker</p>
            </li>
          </ul>
        </article>

        {/* 2 */}
        <article className="service">
          <div className="service__header">
            <h3>Nimseeseng Transport 1988 Co., Ltd. (Nov. 2017 - Mar. 2020)</h3>
            <h2>Position :  Programmer</h2>
            <h2>Responsibility/Contribution:</h2>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Frontend design with system analysts
</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Development web logistics system by Java (J2EE)</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Use language coding by ZK Framework, Spring JDBC, Spring hibernate, wicket and ajax</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Deploy project on tomcat server</p>
            </li>
          </ul>
        </article>

        {/* 3 */}
        <article className="service">
          <div className="service__header">
            <h3>Netbay Public Co., Ltd. (Jan. 2017 - Apr. 2017)</h3>
            <h2>Position :  Internship </h2>
            <h2>Responsibility/Contribution:</h2>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Development web logistics system by PHP Angularjs and java </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Service;
