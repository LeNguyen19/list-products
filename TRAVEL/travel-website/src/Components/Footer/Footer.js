import React from "react";
import "./footer.css";
import video from "../../Assets/footer.mp4";
import { TiSocialTwitter } from "react-icons/ti";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__body">
        <div className="footer__content">
          <div className="footer__contact row--footer">
            <div className="footer__contact--title">
              <p>KEEP IN TOUCH</p>
              <h2>Travel with us</h2>
            </div>
            <div className="footer__contact--input">
              <input type="text" placeholder="Enter email address..." />
            </div>
            <div className="footer__contact--btn">
              <button className="btn">SEND</button>
            </div>
          </div>
          <div className="footer__cart">
            <div className="cart__heading row--footer">
              <div className="footer__intro">
                <h2>Travel.</h2>
                <p>
                  Lorem ipsum dolar sit amet, consectetur adipisicing edit.
                  Ullam inventore eos fuga hic cum voluptatem minima, tempore
                  non odio provident nobis ipsam at, doloremque sed cupoditate
                  ipsum in, atque soluta?
                </p>
                <div className="footer__listSocial">
                  <TiSocialTwitter className="icon-social"></TiSocialTwitter>
                  <AiFillYoutube className="icon-social"></AiFillYoutube>
                  <AiFillInstagram className="icon-social"></AiFillInstagram>
                </div>
              </div>
              <div className="list__footer__menu">
                <div className="footer__menu">
                  <h4>OUR AGENCY</h4>
                  <p>Services</p>
                  <p>Insurance</p>
                  <p>Agency</p>
                  <p>Tourism</p>
                  <p>Payment</p>
                </div>
                <div className="footer__menu">
                  <h4>OUR AGENCY</h4>
                  <p>Services</p>
                  <p>Insurance</p>
                  <p>Agency</p>
                  <p>Tourism</p>
                  <p>Payment</p>
                </div>
                <div className="footer__menu">
                  <h4>OUR AGENCY</h4>
                  <p>Services</p>
                  <p>Insurance</p>
                  <p>Agency</p>
                  <p>Tourism</p>
                  <p>Payment</p>
                </div>
              </div>
            </div>
            <div className="cart__bottom row--footer">
              <p>BEST TRAVEL WEBSITE THEME</p>
              <p>COPYRIGHTS RESERVED - ISRATECH 2022</p>
            </div>
          </div>
        </div>
      </div>

      <video
        className="footer__video"
        src={video}
        muted
        autoPlay
        loop
        type="video/mp4"
      ></video>
    </div>
  );
}
