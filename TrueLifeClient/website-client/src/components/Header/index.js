import React from "react";
import "./style.css";
import ImgHeader from "../../assets/images/img-header.png";

export default function Index({ title, desBlack, desPink }) {
  return (
    <div className="container__header">
      <div className="content__header">
        <img src={ImgHeader} alt="" />
        <div className="path__page">
          <h1>{title}</h1>
          <p>
            {desBlack}/<span>{desPink}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
