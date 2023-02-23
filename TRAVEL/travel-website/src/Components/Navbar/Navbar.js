import React from "react";
import "./navbar.css";
import { MdOutlineTravelExplore } from "react-icons/md";
import { CgMenuGridR } from "react-icons/cg";
import { AiFillCloseCircle } from "react-icons/ai";

export default function Navbar() {
  const nav = document.getElementById("menuInFly");
  function handleClickOpen() {
    nav.style.display = "block";
  }
  function handleClickClose() {
    nav.style.display = "none";
  }

  return (
    <div className="navBar container row">
      <div className="logo">
        <MdOutlineTravelExplore className="icon icon--logo"></MdOutlineTravelExplore>
        <h1>TRAVEL.</h1>
      </div>
      <div className="menu row--menu">
        <ul className="row--menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Packages</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Pages</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <button className="btn">BOOK NOW</button>
      </div>
      <div className="icon--navbar">
        <CgMenuGridR onClick={handleClickOpen} className="icon"></CgMenuGridR>
      </div>
      <div id="menuInFly">
        <div className="wrapperMenuFly">
          <AiFillCloseCircle
            onClick={handleClickClose}
            className="icon-close"
          ></AiFillCloseCircle>
          <ul className="col">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Packages</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Pages</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <button className="btn">BOOK NOW</button>
        </div>
      </div>
    </div>
  );
}
