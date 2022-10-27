import React from "react";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../components/SocialMediaIcons";

const About = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="about"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/**Image Section */}
      <div>
        {isAboveLarge ? (
          <div>
            <img src="images/me.png" alt="pic" />
          </div>
        ) : (
          <img src="images/me.png" alt="pic" />
        )}
      </div>

      {/** Main Text */}
    </section>
  );
};

export default About;
