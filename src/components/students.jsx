import React from "react";

import "./css/students.css";
import review from "./reviews.js";

import AddReview from "./addreview.jsx";
import Card from "./card.jsx";

function createCard(review) {
  return (
    <Card
      name={review.name}
      branch={review.branch}
      batch={review.batch}
      message={review.message}
    />
  );
}

export default function Students() {
  document.title = "UIET Students";
  return (
    <div>
      <h1 className="students-h1">Students Speak ! ! !</h1>
      <hr style={{ borderTop: "0.2em solid #f4a024", margin: "0 0 0 0" }} />
      <div className="overflow-container">
        <div className="student-cards">{review.map(createCard)}</div>
      </div>
      <AddReview />
    </div>
  );
}
