import React, { useState } from "react";
import "./style.css";
import Avt1 from "../../assets/images/imgUser1.jpg";
import Avt2 from "../../assets/images/imgUser2.jpg";
import { FaStar } from "react-icons/fa";
import ListReview from "../ListReview/index";

const color = {
  orange: "#ffba5a",
  grey: "#a9a9a9",
};

export default function Index() {
  const [listReview, setListReview] = useState([
    // {
    //   avt: Avt1,
    //   name: "Người ta đánh giá",
    //   day: "13/10/2022",
    //   star: 4,
    // },
    // {
    //   avt: Avt2,
    //   name: "Tui thích đánh giá",
    //   day: "10/11/2022",
    //   star: 3,
    // },
  ]);
  const stars = Array(5).fill(0);

  const [currentValue, setCurrentValue] = useState(0);

  const handleClick = (currentValue) => {
    setCurrentValue(currentValue);
    console.log(currentValue);
  };

  return (
    <div className="container__comment">
      {listReview.map((e) => (
        <ListReview avt={e.avt} name={e.name} day={e.day} star={e.star} />
      ))}
    
      <hr />
      <div className="wrapper__comment">
        <img src={Avt2} alt="" />
        <div className="input__comment input__review">
          {stars.map((_, index) => {
            return (
              <FaStar
                key={index}
                size={40}
                style={{
                  marginRight: 10,
                  marginTop:-2
                }}
                color={currentValue > index ? color.orange : color.grey}
                onClick={() => handleClick(index + 1)}
              />
            );
          })}
          <button>Gửi đánh giá</button>
        </div>
      </div>
    </div>
  );
}
