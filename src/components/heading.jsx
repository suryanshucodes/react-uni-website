import React from "react";
import { Link } from "react-router-dom";

function Heading() {
  const logoURL = "./images/logo.png";
  return (
    <div>
      <nav>
        <div className="navbar-div">
          <div className="nav-items first">
            <Link to="#">Home</Link>
          </div>
          <div className="nav-items">
            <Link to="/about">About</Link>
          </div>
          <div className="nav-items">
            <Link to="/academics">Academics</Link>
          </div>
          <div className="nav-items">
            <a href="https://uiet.puchd.ac.in/?page_id=5555">Admissions</a>
          </div>
          <div className="nav-items">
            <Link to="/students">Students</Link>
          </div>
          <div className="nav-items">
            <a href="https://www.alumniaffairs.uietpu.in/">Alumni</a>
          </div>
          <div className="nav-items">
            <Link to="/contacts">Contact Us</Link>
          </div>
        </div>
      </nav>
      <hr style={{ borderTop: "0.2em solid gold", margin: 0 }} />
      <div className="banner">
        <div className="back-img" />
        <div className="logo-name">
          <div className="logo">
            <a href="index.html">
              <img
                className="logo"
                src={logoURL}
                alt="UIET Logo"
              />
            </a>
          </div>
          <div className="name">
            <strong className="uiet">
              University Institute of Engineering and Technology
            </strong>
            <div className="pu">PANJAB UNIVERSITY, CHANDIGARH (U.T) 160014</div>
          </div>
        </div>
      </div>
      <hr style={{ borderTop: "0.2em solid gold", margin: "0 0 1em 0" }} />
    </div>
  );
}
export default Heading;
