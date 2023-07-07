import React, { useState } from "react";

function Footer() {
  const time = new Date().toString();
  // const [newTime, setTime] = useState(time);

  function callTime() {
    // setTime(Date().toString());
    return time;
  }

  setInterval(callTime, 1000);

  return (
    <div>
      <hr style={{ borderTop: "0.2em solid #f4a024", margin: "0 0 0 0" }} />
      <footer>
        <div className="foot-item">Copyright ©</div>
        <div className="foot-item">Contact Us</div>
        <div className="foot-item">RTI-UIET</div>
      </footer>
      <div className="time" id="time-div">
        {callTime()}
      </div>
    </div>
  );
}
export default Footer;
