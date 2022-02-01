import React from "react";
import "./contact.scss";

const Contact = () => {
  return (
    <div className="container" id="contact">
      <div className="contact_container">
        <div className="contact_header text-center">
          <h3>Contact me</h3>
          <h1>Get In Touch</h1>
          <p>
            I am available to work on your projects and bring your ideas to
            life. I am just a click away.
          </p>
        </div>
        <div className="contact_forms">
          <div className="left_form">
            <div className="reachMe">
              <p>
                Location: <span>Nairobi, Kenya</span>
              </p>
            </div>
            <div className="reachMe">
              <p>
                email: <span>geomwans@gmail.com</span>
              </p>
            </div>
            <div className="reachMe">
              <p>
                direct contact: <span>+254 741433059</span>
              </p>
            </div>
          </div>
          <div className="right_form">
            <form action="">
              <div className="form">
                <input type="text" placeholder="Full Name" />
                <div className="email-tel">
                  <input type="email" placeholder="Email" />
                  <input type="tel" placeholder="Phone Number" />
                </div>
                <textarea
                  placeholder="Enter your message"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
                <button className="btn btn-success">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
