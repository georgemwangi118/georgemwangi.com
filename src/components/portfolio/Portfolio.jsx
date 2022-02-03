import React from "react";
import "./portfolio.scss";
import { projects } from "../../data/projects";
import image from "../../images/projects/uberEat.png";
import GitHubIcon from "@mui/icons-material/GitHub";

const Portfolio = () => {
  return (
    <div className="container" id="portfolio">
      <h4 className="text-center mt-3">Some Projects</h4>
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {projects.map((project, index) => (
          <div
            className="card"
            style={{ width: "18rem", margin: 10 }}
            key={index}
          >
            <img className="card-img-top" src={image} alt={project.alt} />
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
      <div className="text-center mb-4">
        <a
          className="p-2"
          href="https://github.com/georgemwangi118"
          target="_blank"
          rel="noreferrer"
          style={{
            color: "#000",
            textDecoration: "none",
            background: "#00ffbb",
            borderRadius: 10,
          }}
        >
          <GitHubIcon /> More Project
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
