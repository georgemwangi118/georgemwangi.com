import React from "react";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../components/SocialMediaIcons";

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/**Image section */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px] before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]">
            <img
              src="images/coding.svg"
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
            />
          </div>
        ) : (
          <img
            src="images/coding.svg"
            alt="profile"
            className="z-10 w-full max-w-[400px] md:max-w-[600px]"
          />
        )}
      </div>

      {/**Main text */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/**Headings */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h4 className="font-playfair">hi there 👋 i'm</h4>
          <h1 className="text-3xl font-playfair">George Mwangi</h1>
          <h3 className="font-playfair mt-1 ">
            <u>Frontend React Developer</u>
          </h3>

          <p className="mt-3  font-playfair">
            I'm a professional and talented Software developer with full stack{" "}
            <span>
              <strong>MERN</strong>
            </span>{" "}
            development skills based in Nairobi, Kenya. I am passionate about
            leveraging problems and create delightful experiences.
          </p>
          <p className="font-playfair">
            I develop websites with{" "}
            <span>
              <strong>ReactJs, Redux, NodeJs, and MongoDB</strong>
            </span>
            . I have top skills in using <span>Figma, adobe Illustrator</span>,
            as a design tool.
          </p>
          <p className="font-playfair">
            Being a diligent, hardworking and result oriented man. I always work
            towards achieving best result on each project I lay my hands on.
          </p>
        </motion.div>

        {/**Call to action 
        <motion.div
          className="flex mt-3 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-4 font-semibold hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="https://twitter.com/georges_code"
            target="_blank"
          >
            Contact Me
          </AnchorLink>
        </motion.div>
*/}
        <motion.div
          className="flex mt-1 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
