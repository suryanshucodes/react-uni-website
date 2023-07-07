import React, {useState} from "react";
import {Link} from 'react-router-dom';

function Main() {

    const blockDisplay = {display : 'none'}

    let btn = "Show Less";
    const [toggleState, setState] = useState(false);

    function togglePara(){
        if(toggleState) {
            setState(false);
            btn = "Show More";
        }
        else {
            setState(true);
            btn = "Show less";
        }
    }
    
  return (
    <div>
      <div className="main-container">
        <div className="video">
          <iframe
            className="firstvideo"
            width={560}
            height={315}
            src="https://www.youtube.com/embed/mIewXo41ynk"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
          <div className="main-content">
            <span className="heading">
              The University Institute of Engineering and Technology was
              established in 2002 and is an in-campus Department of Panjab
              University, Chandigarh.
            </span>
            <br />
            <br />
            The institute has maintained high quality in technical education.
            The well qualified faculty is the backbone of the institute. Well
            equipped laboratories provide the exposure to the students towards
            practical aspects of engineering. State-of-art computing facilities
            and internet connectivity through 1Gbps National Knowledge Network
            (NKN) provide ample scope for students to learn round the clock. The
            whole campus is Wi-Fi enabled and students having laptops avail this
            facility in the institute as well as in the hostels. With the
            regular revision of syllabi, more industry oriented programme and
            open Electives have been introduced in the curriculum. 
            <p id="toggle-content" style={ toggleState? blockDisplay : null}>
              UIET is spread over 10.5 acres of land with lush greenery. It has
              two academic blocks which include labs, office, library, and
              lecture halls. There are blocks for mechanical labs and workshops.
              There is a branch of State Bank of India and an ATM of State Bank
              of India on the campus. Students take admission from all parts of
              the country and few of them from Abroad too. Admitted students
              includes day scholars as well as large number of out station ones
              who avail hostel facility which completely facilitates needs of
              the residential.
              <br />
              <br />
              University Institute of Engineering &amp; Technology (UIET) is a
              institute of Panjab University which has prospered by leaps &amp;
              bounds over the years achieving great academic heights besides
              foraying into the top 50 Engineering Colleges of the Country. UIET
              offers 06 Undergraduate (B.E.) courses, 09 Postgraduate
              (M.E./M.Tech. degree) courses and Doctoral courses in all
              constituent fields being pursued. Many Post Graduate candidates
              with nation scholarship join this Institute. UIET has unique
              distinction of having been awarded TEQIP-II and TEQIP-III, DIC,
              DBT-Builder Grant, Feast Grant by Government of India, besides
              funding of large number of Research Projects and consultancy
              projects. The faculty of UIET have many patents to the credit
              beside many other already applied in the pipeline.
              <br />
            </p>
            <button className="main-btn" id="btn" onClick={togglePara}>
              {btn}
            </button>
          </div>
        </div>
        <div className="imp-links">
          <div className="link-item first-link">
            <strong>
              Important links <br />▼
            </strong>
          </div>
          <div className="link-item">
            <Link to="/contactform">Contact Form</Link>
          </div>
          <div className="link-item">
            <a href="https://puchd.ac.in/">
              Panjab University (Official Website)
            </a>
          </div>
          <div className="link-item">
            <a href>News and Notices</a>
          </div>
          <div className="link-item">
            <a href>Web Portal</a>
          </div>
        </div>
      </div>
      <div className="second-container main-content">
        <h3>Vision</h3>
        To be the Front runner in Engineering Education and Research.
      </div>
      <div className="second-container main-content mission">
        <h3>Mission</h3>
        <ul>
          <li>
            To produce professionally competent students for a career in
            engineering and technology by providing value-based quality
            education.
          </li>
          <li>
            To provide the readily acceptable quality trained manpower to meet
            the requirements of the National and International industry in the
            emerging areas of engineering and technology as well as for research
            and design.
          </li>
          <li>
            To develop strong collaboration with academic and research
            institutes as well as the industry in the country and abroad.
          </li>
          <li>
            To provide world level consultancy to generate wealth through
            services and new product design.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Main;