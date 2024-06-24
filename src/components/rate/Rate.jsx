import React, { useState } from "react";
import starImg from "/icon-star.svg";
import "./rate.css";

export default function Rate() {
  const buttons = [1, 2, 3, 4, 5];
  const [rate, setRate] = useState();

  console.log(rate);
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
          <button
            key={element}
            onClick={() => setRate(element)}
            style={{
              backgroundColor: rate === element ? "#7C8798" : "",
              color: rate === element ? "#FFFFFF" : "",
            }}
          >
            {element}
          </button>
        ))}
      </div>
      <button className="submit">SUBMIT</button>
    </div>
  );
}
