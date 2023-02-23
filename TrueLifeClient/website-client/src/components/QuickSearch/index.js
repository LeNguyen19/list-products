import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function index({ url, title, link, type = "small" }) {
  switch(type){
    case "big":
    return (
      <div className="container__quickSearch">
        <div className="backgruond__quickSearch">
          <img src={url} alt="" />
        </div>
        <div className="title__quickSearch">
          <p>{title}</p>
          <Link to={link}>XEM THÊM</Link>
        </div>
      </div>
    );
    default:
      return (
        <div className="container__quickSearch">
          <div className="backgruond__quickSearch">
            <img src={url} alt="" />
          </div>
          <div className="title__quickSearch__small">
            <p>{title}</p>
            <Link to={link}>XEM THÊM</Link>
          </div>
        </div>
      );
  }
  
}
