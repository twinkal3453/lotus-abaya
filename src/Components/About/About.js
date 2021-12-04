import React from "react";
import "./about.css";
import visions from "../../assets/visions.jpg";
import approach from "../../assets/approach.jpg";
import process from "../../assets/process.jpg";

const About = () => {
  return (
    <div className="about__background">
      <div className="container">
        <div className="about__text">
          <i className="fas fa-user-friends"></i>
          <h1>About Us</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="about__vision">
          <div className="vision__content">
            <h3>Our Vision</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium doloremque laudantium quidem rerum consequatur
              blanditiis dicta, commodi reprehenderit ipsa tempore quibusdam
              exercitationem veniam fugit eveniet incidunt delectus voluptate
              aliquam eum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur debitis veniam maiores aperiam, modi fugit blanditiis
              officia similique exercitationem, officiis error. Nostrum non
              dolorum ea?
            </p>
          </div>
          <img src={visions} alt="" />
        </div>
        <div className="about__vision1">
          <img src={approach} alt="" />
          <div className="vision__content">
            <h3>Our Approach</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium doloremque laudantium quidem rerum consequatur
              blanditiis dicta, commodi reprehenderit ipsa tempore quibusdam
              exercitationem veniam fugit eveniet incidunt delectus voluptate
              aliquam eum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur debitis veniam maiores aperiam, modi fugit blanditiis
              officia similique exercitationem, officiis error. Nostrum non
              dolorum ea?
            </p>
          </div>
        </div>
        <div className="about__vision">
          <div className="vision__content">
            <h3>Our Process</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium doloremque laudantium quidem rerum consequatur
              blanditiis dicta, commodi reprehenderit ipsa tempore quibusdam
              exercitationem veniam fugit eveniet incidunt delectus voluptate
              aliquam eum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur debitis veniam maiores aperiam, modi fugit blanditiis
              officia similique exercitationem, officiis error. Nostrum non
              dolorum ea?
            </p>
          </div>
          <img src={process} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
