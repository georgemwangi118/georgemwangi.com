import React from "react";

import { skills } from "../data/skills";

const MySkills = () => {
  return (
    <section id="skills" className="mt-48">
      <h4 className="text-center font-bold font-playfair">My Skills</h4>
      <div className="flex mt-4">
        {skills.map((skill, i) => (
          <div key={i} className="mr-2">
            <img src={skill.image} alt={skill.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MySkills;
