import React from "react";
import "./style.css";
import Event1 from "../../assets/images/event1.png";
import Event2 from "../../assets/images/event2.png";
import Event3 from "../../assets/images/event3.png";

export default function index() {
  return (
    <div className="container__event">
      <div className="test">
        <img src={Event1} alt="" />
        <div className="figcaption">
          <h3></h3>
        </div>
      </div>
      <div className="test">
        <img src={Event2} alt="" />
        <div className="figcaption">
          <h2></h2>
        </div>
      </div>
      <div className="test">
        <img src={Event3} alt="" />
        <div className="figcaption">
          <h3></h3>
        </div>
      </div>
    </div>
  );
}
