import React from "react";
import "./skills.scss";

import { skills } from "../../data/skills";

const Skills = () => {
  return (
    <div className="container" id="skills">
      <h4 className="text-center">My Skills</h4>
      <div className="images">
        {skills.map((skill, i) => (
          <img className="image" src={skill.image} alt={skill.name} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
