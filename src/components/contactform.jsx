import React from "react";
import "./css/contactform.css";

export default function ContactForm() {
    
  return (
    <div>
      {/* {alert("FILL THE FORM CAREFULLY")} */}

      <h1 className="header">CONTACT FORM</h1>
      <hr style={{ borderTop: "0.2em solid #f4a024", margin: "0 0 0 0" }} />

      <form name="myForm" onsubmit="return validateForm()" action="./index.html" method="" >
        <label>
          Name: <input name="fname" type="text" placeholder="First Name" />
          &nbsp;
          <input
            name="lname"
            type="text"
            placeholder="Last Name"
            required=""
          />
        </label>
        <br />
        <br />
        <label>
          Gender: <input type="radio" name="gender" /> Male
          <input type="radio" name="gender" /> Female
        </label>
        <br />
        <br />
        <label>
          Mobile No:
          <input type="tel" defaultValue={+91} />
        </label>
        <br />
        <br />
        <label>
          Email:
          <input type="email" />
        </label>
        <br />
        <br />
        <label>
          Select Department:
          <select>
            <option>----Select----</option>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
            <option>Option 4</option>
          </select>
        </label>
        <br />
        <br />
        <label>
          Roll No:
          <input type="text" />
        </label>
        <br />
        <br />
        <label>
          Date of Birth:
          <input type="date" />
        </label>
        <br />
        <br />
        Upload Resume: <input type="file" />
        <br />
        <br />
        <label>
          Queries:
          <textarea
            name="message"
            rows={4}
            cols={30}
            defaultValue={"You can type your queries here...\n"}
          />
        </label>
        <input
          type="submit"
          defaultValue="Submit"
          className="btn"
          id="btn"
          onclick="validateForm()"
        />
      </form>
    </div>
  );
}
