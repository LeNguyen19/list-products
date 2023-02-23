import React from "react";
import "./style.css";
import bgSupport from "../../assets/images/bg-support.png";
import GroupSupport from "../Group__support/index";
import iconPlane from "../../assets/images/icon-plane.svg";
import iconHead from "../../assets/images/icon_headphone.svg";
import iconGift from "../../assets/images/icon-gift.svg";

export default function index() {
  return (
    <div className="container__support">
      <div className="info__support">
        <div className="wrapper__info__sopport">
          <GroupSupport
            url={iconPlane}
            title="Giao hàng toàn quốc"
            describe="Giao hàng toàn quốc với 
mức phí ưu đãi nhất"
          />
          <GroupSupport
            url={iconHead}
            title="Hỗ trợ khách hàng"
            describe="Hỗ trợ khách hàng 24/7 
Hãy gọi cho chúng tôi"
          />
          <GroupSupport
            url={iconGift}
            title="Mua hàng giá ưu đãi"
            describe="Cơ hội nhận khuyến mãi & 
giá sốc cuối tuần"
          />
        </div>
      </div>
      <img src={bgSupport} alt="" />
    </div>
  );
}
