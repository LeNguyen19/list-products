import React from "react";
import "./style.css";

import Brand1 from "../../assets/images/brand1.png";
import Brand2 from "../../assets/images/brand2.png";
import Brand3 from "../../assets/images/brand3.png";
import Brand4 from "../../assets/images/brand4.png";
import Brand5 from "../../assets/images/brand5.png";

export default function index() {
  return (
    <div className="brand">
      <img src={Brand1} alt="" />
      <img src={Brand2} alt="" />
      <img src={Brand3} alt="" />
      <img src={Brand4} alt="" />
      <img src={Brand5} alt="" />
    </div>
  );
}
