import React from "react";
import { GitHub, Twitter, LinkedIn } from "@mui/icons-material";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://twitter.com/georges_code"
        target="_blank"
        rel="noreferrer"
      >
        <Twitter />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/george-mwangi-47057215b/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedIn />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/georgemwangi118"
        target="_blank"
        rel="noreferrer"
      >
        <GitHub />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
