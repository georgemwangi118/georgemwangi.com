import React from "react";
import "./hero.scss";
import image from "./../../images/coding.svg";

const Hero = () => {
  return (
    <div className="container hero" id="home">
      <div className="intro_container">
        <div className="intro">
          <h4>hi there 👋 i'm</h4>
          <h1>George Mwangi</h1>
          <h3>ui/ux designer + developer </h3>
          <p>
            I'm a professional UI/UX designer with full stack{" "}
            <span className="skill">
              <strong>MERN</strong>
            </span>{" "}
            development skills based in Nairobi, Kenya.
          </p>
          <a href="/#contact" className="hireMe_link">
            Hire Me
          </a>
        </div>
        <div className="hero_img">
          <img src={image} alt="coding img" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
