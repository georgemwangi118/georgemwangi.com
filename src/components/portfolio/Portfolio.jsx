import React from "react";
import "./portfolio.scss";
import { projects } from "../../data/projects";

const Portfolio = () => {
  return (
    <div className="container" id="portfolio">
      <div style={{ display: "flex" }}>
        {projects.map((project, index) => (
          <div
            className="card"
            style={{ width: "18rem", margin: 10 }}
            key={index}
          >
            <img className="card-img-top" src={project.image} alt="img here" />
            <div className="card-body">
              <h5 className="card-title" style={{ color: "#000" }}>
                {project.name}
              </h5>
              <a
                href={`${project.codepen}`}
                target="_blank"
                rel="noreferrer"
                className="card-link"
                style={{ textDecoration: "none", color: "#000" }}
              >
                CodePen
              </a>
              <a
                href={`${project.github}`}
                target="_blank"
                rel="noreferrer"
                className="card-link"
                style={{ textDecoration: "none", color: "#000" }}
              >
                Github
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
