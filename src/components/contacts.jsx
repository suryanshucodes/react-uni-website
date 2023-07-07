import React from "react";
import "./css/contacts.css";
import $ from "jquery";

export default function Contacts() {
  
  $(document).ready(function () {
    $(".flex-item").slideDown(1000);
    $("#contact-details").css({
      "padding-left": "4em",
      color: "#00387d",
      "font-size": "2em",
      margin: "1em 0 0.5em 0",
    });
  });

  // let usr_name = prompt("What is your name?");
  // let msg = "Hi " + usr_name + "! you can contact us through the following options";
  // console.log(msg);
  // document.getElementById("name").innerHTML = msg;

  return (
    <div>
      <h1>CONTACT US</h1>
      <hr style={{ borderTop: "0.2em solid #f4a024", margin: "0 0 0 0" }} />
      <p id="contact-details">You can contact us @ </p>
      <div className="ct-container">
        <div className="contact-container">
          <div className="flex-item">
            <a href="mailto: uiet@pu.ac.in">
              Email : <em>uiet@pu.ac.in</em>
            </a>
          </div>
          <div className="flex-item">Phone : 0172-2541242</div>
          <div className="flex-item">
            <a href="https://www.facebook.com/uietpuofficial">Facebook</a>
          </div>
          <div className="flex-item">
            <a href="https://www.alumniaffairs.uietpu.in/">
              UIET Alumni Affairs
            </a>
          </div>
          <div className="flex-item">
            Address:
            <br />
            Sector-25, South Campus
            <br />
            Chandigarh - 160014 <br />
            INDIA
          </div>
        </div>
        <div className="contacts-map">
          <iframe
            scrolling="yes"
            marginHeight={0}
            marginWidth={0}
            src="https://maps.google.com/maps?q=UIET%2C%20Sector%2025&t=m&z=14&output=embed&iwloc=near"
            aria-label="UIET, Sector 25"
          />
        </div>
      </div>
    </div>
  );
}
