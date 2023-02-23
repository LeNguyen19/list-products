import React from "react";
import "./style.css";
import ButtonIcon from "../Button__icon/index";
import { Link } from "react-router-dom";
import Zoom from "../../assets/images/zoom.svg";
import Cart from "../../assets/images/cart.svg";

export default function index({
  url,
  name,
  price,
  cost,
  type = "none",
  discount,
  id,
}) {
  function formatCash(value) {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);
  }
  switch (type) {
    case "sale":
      return (
        <div className="container__info__product__sale">
          <div className="group__info__product__sale">
            <div className="image__product">
              <img src={url} alt="" />
            </div>
            <div className="content__info__product__sale">
              <div className="title__product">
                <p>{name}</p>
              </div>
              <div className="sale">
                  <p>{formatCash(price)}</p>
                </div>
                <div className="cost">
                  <p>{formatCash(cost)}</p>
                </div>
              {/* <div className="price__product__sale">
                
              </div> */}
            </div>
            <div className="percent__discount">
              <p>{discount}</p>
            </div>
          </div>
          <div className="group__info__product__sale__hover"></div>
          <div className="group__icon">
            {/* <div className="icons__product">
              <ButtonIcon url1={Zoom} id={id} url2={Cart} />
            </div> */}
            <Link to={`/product/${id}/detailProduct`}>
              <p><span>Xem chi tiết</span></p>
            </Link>
          </div>
        </div>
      );
    default:
      return (
        <div className="container__info__product">
          <div className="group__info__product">
            <div className="image__product">
              <img src={url} alt="" />
            </div>
            <div className="title__product">
              <p>{name}</p>
            </div>
            <div className="price__product">
              <p>{formatCash(price)}</p>
              {/* <div className="cost__product">
              <p>{formatCash(cost)}</p>
            </div> */}
            </div>
          
          </div>
          <div className="group__info__product__hover"></div>
          <div className="group__icon">
            {/* <div className="icons__product">
              <ButtonIcon url1={Zoom} id={id} url2={Cart} />
            </div> */}
              <Link to={`/product/${id}/detailProduct`}>
                <p><span>Xem chi tiết</span></p>
              </Link>
          </div>
        </div>
      );
  }
}
