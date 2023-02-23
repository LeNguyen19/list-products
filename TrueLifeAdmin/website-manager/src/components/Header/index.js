import React from "react";
import "./style.css";
import avt from "../../assets/images/avt-user.png";
import iconBell from "../../assets/images/icon-bell.svg";

export default function index() {
  return (
    <div className="container__header row-jcsb">
      <img src={iconBell} alt="" />
      <div className="group__info row">
        <p>Tên người dùng nè hen</p>
        <img src={avt} alt="" />
      </div>
    </div>
  );
}
