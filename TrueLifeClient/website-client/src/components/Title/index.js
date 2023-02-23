import React from "react";
import "./style.css";
import Line1 from "../../assets/images/line1.png";
import Line2 from "../../assets/images/line2.png";

export default function index({ title, type = "none" }) {
  switch (type) {
    case "product":
      return (
        <div className="group__title">
          <div className="container__title">
            <h1>{title}</h1>
          </div>
          <img src={Line1} alt="" />
        </div>
      );
    case "pages":
      return (
        <div className="group__title__pages">
          <img src={Line2} alt="" />
          <div className="container__title__pages">
            <h1>{title}</h1>
          </div>
        </div>
      );
    default:
      return <></>;
  }
}
