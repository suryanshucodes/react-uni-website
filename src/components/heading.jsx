import React from "react";

function Heading() {
  return (
    <div>
      <nav>
        <div className="navbar-div">
          <div className="nav-items first">
            <a href="#">Home</a>
          </div>
          <div className="nav-items">
            <a href="../public/pages/about.html">About</a>
          </div>
          <div className="nav-items">
            <a href="academics.html">Academics</a>
          </div>
          <div className="nav-items">
            <a href="https://uiet.puchd.ac.in/?page_id=5555">Admissions</a>
          </div>
          <div className="nav-items">
            <a href="https://uiet.puchd.ac.in/?page_id=678">Student</a>
          </div>
          <div className="nav-items">
            <a href="#">Placements</a>
          </div>
          <div className="nav-items">
            <a href="../public/pages/contacts.html">Contact Us</a>
          </div>
        </div>
      </nav>
      <hr style={{ borderTop: "0.2em solid gold", margin: 0 }} />
      <div className="banner">
        <div className="back-img" />
        <div className="logo-name">
          <div className="logo">
            <a href="index.html">
              <img className="logo" src={"..//..//public/images/logo.png"} alt="UIET Logo" />
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