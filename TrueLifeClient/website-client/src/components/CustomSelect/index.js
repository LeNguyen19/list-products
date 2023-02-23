import React, { useState } from "react";
import "./style.css";
import IconDropdown from "../../assets/images/icon-dropdown.svg";
import IconDropdownGrey from "../../assets/images/dropdownGrey.svg";

export default function Index({ selected, setSelected, listOptions, type }) {
  const [isActive, setIsActive] = useState(false);
  const options = listOptions;

  switch (type) {
    case "pink":
      return (
        <div className="dropdown">
          <div
            id="border__dropdown"
            className="dropdown__btn"
            onClick={(e) => setIsActive(!isActive)}
          >
            <input type="text" value={selected} placeholder="Tất cả" readOnly />
            <img src={IconDropdown} alt="" />
          </div>
          {isActive && (
            <div className="dropdown__content">
              {options.map((option) => (
                <div
                  onClick={(e) => {
                    setSelected(option);
                    setIsActive(false);
                  }}
                  className="dropdown__item"
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      );
    case "grey":
      return (
        <div className="dropdown">
          <div
            id="border__dropdown"
            className="dropdown__btn dropdown__btn__grey"
            onClick={(e) => setIsActive(!isActive)}
          >
            <input
              type="text"
              value={selected}
              placeholder="Vui lòng chọn loại sản phẩm"
              readOnly
            />
            <img src={IconDropdownGrey} alt="" />
          </div>
          {isActive && (
            <div className="dropdown__content dropdown__content__grey">
              {options.map((option) => (
                <div
                  onClick={(e) => {
                    setSelected(option);
                    setIsActive(false);
                  }}
                  className="dropdown__item"
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      );
    default:
      return <></>;
  }
}
