import React from "react";
import "./skills.scss";
import html from "../../images/skills/html.png";
import css from "../../images/skills/css.png";
import javascript from "../../images/skills/javascript.png";
import bootstrap from "../../images/skills/bootstrap.png";
import sass from "../../images/skills/sass.png";
import react from "../../images/skills/react.png";
import redux from "../../images/skills/redux.png";
import typescript from "../../images/skills/typescript.png";
import node from "../../images/skills/nodejs.png";
import reactNative from "../../images/skills/reactNative.png";
import mongo from "../../images/skills/mongodb.png";
import figma from "../../images/skills/figma.png";

const Skills = () => {
  return (
    <div className="container" id="skills">
      <div className="images">
        <img className="image" src={figma} alt="" />
        <img className="image" src={html} alt="" />
        <img className="image" src={css} alt="" />
        <img className="image" src={javascript} alt="" />
        <img className="image" src={bootstrap} alt="" />
        <img className="image" src={sass} alt="" />
        <img className="image" src={react} alt="" />
        <img className="image" src={redux} alt="" />
        <img className="image" src={typescript} alt="" />
        <img className="image" src={node} alt="" />
        <img className="image" src={reactNative} alt="" />
        <img className="image" src={mongo} alt="" />
      </div>
    </div>
  );
};

export default Skills;
