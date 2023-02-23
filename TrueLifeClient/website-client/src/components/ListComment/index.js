import React from "react";
import "./style.css";

export default function index({ avt, name, day, content }) {
  return (
    <div>
      <div className="list__comment">
        <div className="imgUser__comment">
          <img src={avt} alt="" />
        </div>
        <div className="info__comment">
          <p className="nameUser__comment">{name}</p>
          <p className="day__comment">{day}</p>
          <p className="content__comment">{content}</p>
        </div>
      </div>
    </div>
  );
}
