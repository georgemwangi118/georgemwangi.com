import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="container" id="footer">
      <div className="footer">
        <div className="c">GM</div>
        <div className="c">
          <p>&copy; Copyright 2022. All right reserved</p>
        </div>
        <div className="icons">
          <a
            href="https://twitter.com/mr_robot118"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/george-mwangi-47057215b/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://github.com/georgemwangi118"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
