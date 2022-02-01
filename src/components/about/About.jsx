import React from "react";
import "./about.scss";
import { saveAs } from "file-saver";
import image from "./../../images/me.jpg";

const About = () => {
  const saveFile = () => {
    saveAs(
      "https://drive.google.com/file/d/1MJUvW9brvhTVJr0q4K2jBRWtu44b25p8/view?usp=sharing",
      "resume.pdf"
    );
  };
  return (
    <div className="container" id="about">
      <div className="about row">
        <div className="img_container col-sm-6">
          <img src={image} alt="me sitted on a chair" />
        </div>
        <div className="desc_container col-sm-6">
          <div className="desc">
            <h3>Who I am</h3>
            <h1>About Me</h1>
            <p>
              I'm George Mwangi, a professional and talented Software Developer
              with full stack{" "}
              <span className="skills">
                <strong>MERN</strong>
              </span>{" "}
              development skills. I am passionate about leveraging problems and
              create delightful experiences.
            </p>
            <p>
              I develop websites with{" "}
              <span className="skills">
                <strong>ReactJs, Redux, NodeJs, and MongoDB</strong>
              </span>
              . I have top skills in using <span className="skills">Figma</span>
              , a design software.
            </p>
            <p>
              Being a diligent, hardworking and result oriented man. I always
              work towards achieving best result on each project I lay my hands
              on.
            </p>

            <button className="btn" onClick={saveFile}>
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
