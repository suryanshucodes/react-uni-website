import React from "react";
import "./css/card.css";

export default function Card(props) {
  return (
    <div className="card-container">
      <div className="card-message">{"\""+ props.message + "\""}</div>
      <div className="credentials">
        <div className="name-batch">
          <div className="name-cls">{props.name}</div><br/>
          <div className="branch-cls">{"Branch - "+props.branch}</div>
        </div>
        <div className="batch-cls">{props.batch}</div>
      </div>
    </div>
  );
}
