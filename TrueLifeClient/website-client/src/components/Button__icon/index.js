import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function index({ url1, url2, id }) {
  return (
    <div className="container__groupbtnIcon">
      <div className="container__btnIcon">
        <div className="group__btnIcon">
          <img src={url1} alt="" />
        </div>
        <div className="icon__ring">
          <div></div>
        </div>
      </div>
      <div className="container__btnIcon">
        <div className="group__btnIcon">
          <img src={url2} alt="" />
        </div>
        <div className="icon__ring">
          <Link to={`/product/${id}/detailProduct`}>
            <div></div>
          </Link>
        </div>
      </div>
    </div>
  );
}
