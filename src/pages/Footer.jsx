import React from "react";
import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 bg-red pt-10">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center">
          <p className="font-playfair font-semibold text-2xl text-yellow">
            Georges
          </p>
          <p>&#169;2022 Georges. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
