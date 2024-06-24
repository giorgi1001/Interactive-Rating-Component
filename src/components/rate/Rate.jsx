import React from "react";
import starImg from "/icon-star.svg";
import "./rate.css";

export default function Rate() {
  const buttons = [1, 2, 3, 4, 5];
  return (
    <div className="box-rate">
      <div className="img-circle">
        <img src={starImg} alt="star-icon" />
      </div>
      <h1>How did we do?</h1>
      <p className="description">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <div className="buttons-div">
        {buttons.map((element) => (
          <button key={element}>{element}</button>
        ))}
      </div>
      <button
        style={{
          display: "block",
          width: "100%",
          padding: "1.2rem 0 1.2rem",
          borderRadius: "2.25rem",
          backgroundColor: "#FC7614",
          border: "none",
        }}
      >
        SUBMIT
      </button>
    </div>
  );
}
