import React from "react";

import './css/addreview.css'

export default function AddReview() {
  return (
    <div>
        <h1>Your Review Matters</h1>
      <form
        id="reviewForm"
        name="reviewForm"
        onsubmit=""
        action=""
        method=""
      >
        <label>
          Name: <input name="fname" type="text" placeholder="First Name" required/>
          &nbsp;
          <input name="lname" type="text" placeholder="Last Name" required />
        </label>
        <br />
        <br />
        <label>
          Mobile No: &nbsp;
          <input type="tel" defaultValue={"+91"} required />
        </label>
        <br />
        <br />
        <label>
          Email: &nbsp;
          <input type="email" required/>
        </label>
        <br />
        <br />
        <label>
          Select Branch: &nbsp;
          <select required> 
            <option>----Select----</option>
            <option>BIO</option>
            <option>CSE</option>
            <option>ECE</option>
            <option>EEE</option>
            <option>MECH</option>
            <option>IT</option>
          </select>
        </label>
        <br />
        <br />
        <label>
          Roll No: &nbsp;
          <input type="text" defaultValue={"UE"} required/>
        </label>
        <br/><br/>
        <label>
          Your message: &nbsp;
          <textarea
            name="message"
            rows={5} cols={30} maxLength={200}
            placeholder={"Type message here..."}
            required
          />
        </label>
        <br />
        <br />
        <button class="review-submit" type="submit">Submit</button>
      </form>
    </div>
  );
}
