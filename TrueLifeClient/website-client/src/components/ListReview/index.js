import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const color = {
  orange: "#ffba5a",
  grey: "#a9a9a9",
};

export default function Index({ avt, name, day, star }) {
  const listStars = Array(5).fill(0);
  const currentValue = star;
  console.log(currentValue);
  return (
    <div>
      <div className="list__comment">
        <div className="imgUser__comment">
          <img src={avt} alt="" />
        </div>
        <div className="info__comment">
          <p className="nameUser__comment">{name}</p>
          <p className="day__comment">{day}</p>
          <div>
            {listStars.map((_, index) => {
              return (
                <FaStar
                  key={index}
                  size={24}
                  style={{
                    marginRight: 10,
                    marginTop:5,
                  }}
                  color={currentValue > index ? color.orange : color.grey}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
