import React from "react";
import "./footer.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div className="container footer" id="footer">
      <div className="footer-logo">GM</div>
      <div className="copyright">
        <p>&copy; Copyright 2022. All right reserved</p>
      </div>
      <div className="icons">
        <a
          href="https://twitter.com/mr_robot118"
          target="_blank"
          rel="noreferrer"
        >
          <TwitterIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/george-mwangi-47057215b/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://github.com/georgemwangi118"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </a>
      </div>
    </div>
  );
};

export default Footer;
