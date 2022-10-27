import React from "react";
import "./about.scss";
import { saveAs } from "file-saver";
import image from "./../../images/profile.png";
import { Email, GitHub, Twitter, LinkedIn } from "@mui/icons-material";

const About = () => {
  const saveFile = () => {
    saveAs(
      "https://drive.google.com/file/d/1cwaldPOUygmoCQEP8LFjUh-Uf6SL8Ul6/view?usp=sharing",
      "resume.pdf"
    );
  };
  return (
    <div className="container" id="about">
      <div className="about row">
        <div className="img_container col-sm-6">
          <img src={image} alt="me" />
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

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "10px",
              }}
            >
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                <Email /> : <span>geomwans@gmail.com</span>
              </a>
              <a
                href="https://twitter.com/georges_code"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                <Twitter /> : <span>I tweet about Javascript</span>
              </a>
              <a
                href="https://www.linkedin.com/in/george-mwangi-47057215b/"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                <LinkedIn /> : <span>Keeping up with the world</span>
              </a>
              <a
                href="https://github.com/georgemwangi118"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                <GitHub /> : <span>See my projects</span>
              </a>
            </div>
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
