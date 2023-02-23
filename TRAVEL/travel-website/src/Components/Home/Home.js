import React from "react";
import "./home.css";
import video from "../../Assets/home.mp4";
import { GrLocation } from "react-icons/gr";
import { MdOutlinePriceChange } from "react-icons/md";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { SlSocialTwitter } from "react-icons/sl";

export default function Home() {

 


  return (
    <div className="home">
      <div className="wrapper__content__home">
        <div className="home__content">
          <div className="home__content--title">
            <p>OUR PACKAGES</p>
            <h1>
              Search Your <span>Holiday</span>{" "}
            </h1>
          </div>
          <div className="home__content--search ">
            <div className="groundSreach row--home">
              <div className="searchItem">
                <p>Sreach your destination:</p>
                <input type="text" placeholder="Enter name here..." />
                <GrLocation className="icon--address"></GrLocation>
              </div>
              <div className="searchItem">
                <p>Select your date:</p>
                <input type="date" />
              </div>
              <div className="searchItem">
                <p>Max price:</p>
                <input type="text" placeholder="Enter price here..." />
                <MdOutlinePriceChange className="icon--address"></MdOutlinePriceChange>
              </div>
            </div>
            <div className="btn--filters">
              <button className="btn">MORE FILTERS</button>
            </div>
          </div>
          <div className="home__content--social">
            <FiFacebook className="icon--social"></FiFacebook>
            <FiInstagram className="icon--social"></FiInstagram>
            <SlSocialTwitter className="icon--social"></SlSocialTwitter>
          </div>
        </div>
      </div>

      <video
        className="home__video"
        src={video}
        muted
        autoPlay
        loop
        type="video/mp4"
      ></video>
    </div>
  );
}

