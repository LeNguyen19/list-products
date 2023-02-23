import React from 'react';
import "./style.css";
import Ellipse from "../../assets/images/Ellipse.svg";

export default function index({url,title, describe}) {
  return (
    <div className="container__group__support">
      <div className="icon__support">
        <img src={Ellipse} alt="" />
        <div className="icon__children">
            <img src={url} alt="" />
        </div>
      </div>
      <div className="content__support">
        <h3>{title}</h3>
        <p>{describe}</p>
      </div>
    </div>
  )
}
