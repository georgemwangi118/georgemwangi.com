import React from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/**Headings */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
        </div>
      </motion.div>

      {/**Projects */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, i) => (
            <div
              className="max-w-sm rounded overflow-hidden shadow-lg mr-3"
              key={i}
            >
              <img className="w-full" src={project.image} alt={project.alt} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 font-playfair">
                  {project.name}
                </div>
                <p className="text-sm font-opensans">{project.desc}</p>
                <div className="pt-4">
                  <a
                    className="bg-red inline-block border rounded py-2 px-4 mr-2 mb-2 hover:border-transparent hover:text-teal-500 hover:bg-white text-blue-700 font-semibold"
                    target="_blank"
                    rel="noreferrer"
                    href={project.demo}
                  >
                    Live Demo
                  </a>
                  <a
                    className="bg-red inline-block border rounded py-2 px-4 mb-2 hover:border-transparent hover:text-teal-500 hover:bg-white text-blue-700 font-semibold"
                    target="_blank"
                    rel="noreferrer"
                    href={project.github}
                  >
                    Git Repo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
