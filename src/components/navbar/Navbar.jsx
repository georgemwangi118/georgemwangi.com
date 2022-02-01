import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="container-fluid topnav">
      <nav className="nav">
        <div className="left">
          <h1>
            <Link className="link" to="/">
              GM
            </Link>
          </h1>
        </div>
        <div className="right">
          <ul>
            <li>
              <a href="/#home" className="link">
                Home
              </a>
            </li>
            <li>
              <a href="/#about" className="link">
                About
              </a>
            </li>
            <li>
              <a href="/#skills" className="link caseStudy">
                Skills
              </a>
            </li>
            <li>
              <a href="/#portfolio" className="link">
                Portfolio
              </a>
            </li>
            <li>
              <a href="/#contact" className="link">
                Contact Me
              </a>
            </li>
            <li>
              <a href="/#contact" className="link caseStudy">
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
