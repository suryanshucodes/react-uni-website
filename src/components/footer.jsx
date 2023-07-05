import React from "react";

setInterval(Footer, 1000);

function Footer() {

    const time = new Date().toString();

  return (
    <div>
      <footer>
        <div className="foot-item">Copyright ©</div>
        <div className="foot-item">Contact Us</div>
        <div className="foot-item">RTI-UIET</div>
      </footer>
      <div className="time" id="time-div">{time}</div>
    </div>
  );
}

export default Footer;
