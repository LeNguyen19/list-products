import React from "react";
import "./style.css";

export default function index({ url, titleNews }) {
  return (
    <div className="container__group__news">
      <div className="img__zoom">
        <img src={url} alt="" />
      </div>
      <h3>{titleNews}</h3>
      <p>Ngày đăng: 20/11/2022</p>
    </div>
  );
}
