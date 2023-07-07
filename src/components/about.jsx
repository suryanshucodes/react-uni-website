import React from "react";
import "./css/about.css";

function About() {
  document.title = "About UIET";
  return (
    <div>
      <h1 className="about-h1">About Panjab University</h1>
      <hr style={{ borderTop: "0.2em solid #f4a024", margin: "0 0 0 0" }} />
      <div class="about-main-container">
        <img
          className="about-img1"
          src="./images/gandhi_bhawan.jpeg"
          alt="gandhi bhawan"
        />
        <div class="about-second container about-content">
          The layout of two campuses of the University has been conceived to
          meet the academic, administrative, sports/recreational, residential
          and other requirements of a growing University. To make it
          self-contained, infrastructural facilities like its own Shopping
          Centre, Health Centre, Bank, Post office, Swimming Pool, Gymnasium,
          Sports Grounds, Botanical Gardens, well maintained parks, Open Air
          Theatre, Guest Houses, Faculty House, Seminar Complexes, Alumni House,
          Community Centre and a school, have been provided. Besides these
          facilities, the University Campus has 8 hostels for boys, 9 hostels
          for girls, a Working Women Hostel and 2 sports hostels.
        </div>
        <div class="about-third about-content">
          A cluster of prominent buildings like the Gandhi Bhawan, the Fine Arts
          Museum, the University Library and the Student Centre form the hub of
          social interaction. The three-winged structure of the Gandhi Bhawan,
          considered the pride of the University, is its most artistic building.
          The Fine Arts Museum, with its series of small galleries arranged
          around a courtyard, each gallery having a hyperbolic paraboloid roof
          (umbrella shaped), is not only an architectural but a structural
          marvel as well. The University Library, another key building, in the
          Sector 14 Campus is an RCC framed structure with red sandstone
          veneers. The Student Centre, with its circular base and a ramp
          pulsating around its cylindrical body, is another landmark building.
          <br />
          <img className="about-img2" src="./images/stuc_pu.jpeg" alt="stuc" />
          <br />
          Chandigarh, the dream city of India’s first Prime Minister, Sh.
          Jawahar Lal Nehru, was planned by the famous French architect Le
          Corbusier. Picturesquely located at the foothills of Shivaliks, it is
          known as one of the best experiments in urban planning and modern
          architecture in the twentieth century in India.Chandigarh derives its
          name from the temple of “Chandi Mandir” located in the vicinity of the
          site selected for the city. The deity ‘Chandi’, the goddess of power
          and a fort of ‘garh’ laying beyond the temple gave the city its name
          “Chandigarh-The City Beautiful”.
        </div>
        <div class="about-fourth about-content">
          In March, 1948, the Government of Punjab, in consultation with the
          Government of India, approved the area of the foothills of the
          Shivaliks as the site for the new capital. The location of the city
          site was a part of the erstwhile Ambala district as per the 1892-93
          gazetteer of District Ambala. The foundation stone of the city was
          laid in 1952. Subsequently, at the time of reorganization of the state
          on 01.11.1966 into Punjab, Haryana and Himachal Pardesh, the city
          assumed the unique distinction of being the capital city of both,
          Punjab and Haryana while it itself was declared as a Union Territory
          and under the direct control of the Central Government.
          <br />
          <br />
          The Union Territory of Chandigarh is located in the foothills of the
          Shivalik hill ranges in the north, which form a part of the fragile
          Himalayan ecosystem. It is occupied by Kandi (Bhabhar) in the north
          east and Sirowal (Tarai) and alluvial plains in the remaining part.
          The subsurface formation comprises of beds of boulders, pebbles,
          gravel, sand, silt, clays and some kankar. The area is drained by two
          seasonal rivulets viz. Sukhna Choe in the east and Patiala-Ki-Rao Choe
          in the west. The central part forms a surface water divide and has two
          minor streams. The stream passing through the central part is called
          N-Choe and the other is Choe Nala which initiates at Sector 29.
        </div>
      </div>
    </div>
  );
}

export default About;
