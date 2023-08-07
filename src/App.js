import React, { useState, useEffect } from "react";
import "./App.scss";

import useMediaQuery from "./hooks/useMediaQuery";
import { DotGroup, Landing, Navbar, Projects } from "./pages";
import { motion } from "framer-motion";
import Skills from "./components/skills/Skills";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isDesktop && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("home")}
        >
          <Landing setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>

      <div className="w-5/6 mx-auto">
        <motion.div
          margin="0 0 0 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("skills")}
        >
          <Skills setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>

      <div className="w-5/6 mx-auto md:h-full">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("projects")}
        >
          <Projects setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>
    </div>
  );
}

export default App;
