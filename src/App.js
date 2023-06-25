import './style.css'

function App() {
  return (
      <div>
        <nav>
          <div className="navbar-div">
            <div className="nav-items first"><a href="#">Home</a></div>
            <div className="nav-items"><a href="../public/pages/about.html">About</a></div>
            <div className="nav-items"><a href="../public/pages/academics.html">Academics</a></div>
            <div className="nav-items">
              <a href="https://uiet.puchd.ac.in/?page_id=5555">Admissions</a>
            </div>
            <div className="nav-items">
              <a href="https://uiet.puchd.ac.in/?page_id=678">Student</a>
            </div>
            <div className="nav-items"><a href="#">Placements</a></div>
            <div className="nav-items"><a href="../public/pages/contacts.html">Contact Us</a></div>
          </div>
        </nav>
        <hr style={{borderTop: '0.2em solid gold', margin: 0}} />
        <div className="banner">
          <div className="back-img" />
          <div className="logo-name">
            <div className="logo">
              <a href="index.html">
                <img className="logo" src="./images/logo.png" alt="UIET Logo" />
              </a>
            </div>
            <div className="name">
              <strong className="uiet">University Institute of Engineering and Technology</strong>
              <div className="pu">PANJAB UNIVERSITY, CHANDIGARH (U.T) 160014</div>
            </div>
          </div>
        </div>
        <hr style={{borderTop: '0.2em solid gold', margin: '0 0 1em 0'}} />
        <div className="main-container">
          <div className="video">
            <iframe className="firstvideo" width={560} height={315} src="https://www.youtube.com/embed/mIewXo41ynk" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            <div className="main-content">
              <span className="heading">The University Institute of Engineering and Technology was established
                in 2002 and is an in-campus Department of Panjab University,
                Chandigarh.</span>
              <br /><br />
              The institute has maintained high quality in technical
              education. The well qualified faculty is the backbone of the
              institute. Well equipped laboratories provide the exposure to the
              students towards practical aspects of engineering. State-of-art
              computing facilities and internet connectivity through 1Gbps National
              Knowledge Network (NKN) provide ample scope for students to learn
              round the clock. The whole campus is Wi-Fi enabled and students having
              laptops avail this facility in the institute as well as in the
              hostels. With the regular revision of syllabi, more industry oriented
              programme and open Electives have been introduced in the curriculum.
              <p id="toggle-content">
                UIET is spread over 10.5 acres of land with lush greenery. It has two
                academic blocks which include labs, office, library, and lecture
                halls. There are blocks for mechanical labs and workshops. There is a
                branch of State Bank of India and an ATM of State Bank of India on the
                campus. Students take admission from all parts of the country and few
                of them from Abroad too. Admitted students includes day scholars as
                well as large number of out station ones who avail hostel facility
                which completely facilitates needs of the residential. 
                <br /><br />
                University Institute of Engineering &amp; Technology (UIET) is a institute of Panjab
                University which has prospered by leaps &amp; bounds over the years
                achieving great academic heights besides foraying into the top 50
                Engineering Colleges of the Country. UIET offers 06 Undergraduate
                (B.E.) courses, 09 Postgraduate (M.E./M.Tech. degree) courses and
                Doctoral courses in all constituent fields being pursued. Many Post
                Graduate candidates with nation scholarship join this Institute. UIET
                has unique distinction of having been awarded TEQIP-II and TEQIP-III,
                DIC, DBT-Builder Grant, Feast Grant by Government of India, besides
                funding of large number of Research Projects and consultancy projects.
                The faculty of UIET have many patents to the credit beside many other
                already applied in the pipeline.
                <br />
              </p>
              <button className="btn" id="btn" onclick="togglehide()">Show less</button>
            </div>
          </div>
          <div className="imp-links">
            <div className="link-item first-link">
              <strong>Important links <br />▼</strong>
            </div>
            <div className="link-item"><a href="../public/pages/contactform.html">Contact Form</a></div>
            <div className="link-item">
              <a href="https://puchd.ac.in/">Panjab University (Official Website)</a>
            </div>
            <div className="link-item"><a href>News and Notices</a></div>
            <div className="link-item"><a href>Web Portal</a></div>
          </div>
        </div>
        <div className="second-container main-content">
          <h3>Vision</h3>
          To be the Front runner in Engineering Education and Research.
        </div>
        <div className="second-container main-content mission">
          <h3>Mission</h3>
          <ul>
            <li>To produce professionally competent students for a career in engineering and technology by providing value-based quality education.</li>
            <li>To provide the readily acceptable quality trained manpower to meet the requirements of the National and International industry in the emerging areas of engineering and technology as well as for research and design.</li>
            <li>To develop strong collaboration with academic and research institutes as well as the industry in the country and abroad.</li>
            <li>To provide world level consultancy to generate wealth through services and new product design.</li>
          </ul>
        </div>
        <hr style={{borderTop: '0.2em solid #f4a024', margin: '0 0 0 0'}} />
        <footer>
          <div className="foot-item">Copyright ©</div>
          <div className="foot-item">Contact Us</div>
          <div className="foot-item">RTI-UIET</div>
        </footer>
        <div className="time" id="time-div" />
      </div>
    );
  }
export default App;