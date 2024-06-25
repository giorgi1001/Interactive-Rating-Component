import React from "react";
import "../result/result.css";
import thanksImg from "/illustration-thank-you.svg";

export default function Result({ rate }) {
  return (
    <div className="box-result">
      <img src={thanksImg} alt="thanks img " />
      <div className="your-rate">
        <span>You selected {rate} out of 5</span>
      </div>
      <h2>Thank you!</h2>
      <p className="result-description">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
