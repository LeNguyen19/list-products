import React, { useState } from "react";
import "./style.css";
import Menu from "../../components/MenuStaff/index";
import Header from "../../components/Header/index";
import iconEvent from "../../assets/images/icon-event.svg";
import IconDropdownGrey from "../../assets/images/dropdownGrey.svg";
import { Link, useNavigate } from "react-router-dom";

export default function Index() {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState();
  const navigate = useNavigate();

  const listEffect = [
    {
      id: 1,
      nameEffect: "Tất cả",
    },
    {
      id: 2,
      nameEffect: "Còn hiệu lực",
    },
    {
      id: 3,
      nameEffect: "Hết hiệu lực",
    },
    {
      id: 4,
      nameEffect: "Chưa kích hoạt",
    },
  ];

  const listEvent = [
    {
      id: 1,
      name: "Mừng sinh nhật True Life",
      dateStart: "01/01/2001",
      dateEnd: "01/01/2001",
      form: "Tặng hàng",
      effect: "Còn hiệu lực",
    },
    {
      id: 2,
      name: "Mừng sinh nhật True Life",
      dateStart: "01/01/2001",
      dateEnd: "01/01/2001",
      form: "Khuyến mãi theo sản phẩm",
      effect: "Còn hiệu lực",
    },
    {
      id: 3,
      name: "Mừng sinh nhật True Life",
      dateStart: "01/01/2001",
      dateEnd: "01/01/2001",
      form: "Khuyến mãi theo hoá đơn",
      effect: "Còn hiệu lực",
    },
  ];

  function dropdownEffectClick() {
    setIsActive(!isActive);
    document.getElementById("border__dropdown__city").style.border =
      "1px solid #FA748F";
  }

  function dropdownItemEffectClick(id) {
    setSelected(listEffect[id - 1].nameEffect);
    setIsActive(false);
    document.getElementById("border__dropdown__city").style.border =
      "1px solid #D9D9D9";
  }

  function SeenDetail(id) {
    if (listEvent[id - 1].form === "Tặng hàng") {
      navigate("/DetailSeeEventBonus");
    }
    if (listEvent[id - 1].form === "Khuyến mãi theo sản phẩm") {
      navigate("/DetailSeeEventDiscount");
    }
    if (listEvent[id - 1].form === "Khuyến mãi theo hoá đơn") {
      navigate("/DetailSeeEventInvoiceDiscount");
    }
  }

  // Tìm kiếm
  const [contentFind, setContenFind] = useState();
  function FindEvent() {
    console.log("Hiệu lực: ", selected);
    console.log("Tên chương trình: ", contentFind);
  }

  return (
    <div className="container">
      <div className="background">
        <Menu />
      </div>
      <div className="content">
        <Header />
        <div className="wrapper__content">
          <div className="title__content row">
            <span>
              <img src={iconEvent} alt="" />
            </span>
            <p>Khuyến mãi</p>
          </div>
          <div className="box">
            <div className="row-jcsb">
              <div className="group__effect row-jcsb">
                <p>Hiệu lực:</p>
                <div className="input__effect">
                  <div className="dropdown" id="value__chooseCategory">
                    <div
                      id="border__dropdown__city"
                      className="dropdown__btn"
                      onClick={() => dropdownEffectClick()}
                    >
                      <input
                        type="text"
                        value={selected}
                        placeholder="Tất cả"
                        readOnly
                      />
                      <img src={IconDropdownGrey} alt="" />
                    </div>
                    {isActive && (
                      <div className="dropdown__content">
                        {listEffect.map((option) => (
                          <div
                            onClick={() => {
                              dropdownItemEffectClick(option.id);
                            }}
                            className="dropdown__item"
                          >
                            {option.nameEffect}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="group__input row-jcsb">
                <div className="input__find">
                  <input
                    className="input"
                    placeholder="Nhập nội dung tìm kiếm..."
                    onChange={(e) => setContenFind(e.target.value)}
                  />
                </div>
                <button className="button" onClick={() => FindEvent()}>
                  Tìm kiếm
                </button>
              </div>
            </div>
            <div></div>
          </div>
          <div className="box">
            <div className="row-jcsb">
              <p>
                Danh sách sự kiện <hr />
              </p>
            </div>
            <div class="table">
              <table>
                <tr>
                  <th className="name__event">Tên chương trình</th>
                  <th className="start__event">Ngày bắt đầu</th>
                  <th className="end__event">Ngày kết thúc</th>
                  <th className="type__event">Hình thức</th>
                  <th className="effect__event">Hiệu lực</th>
                  <th className="deleted__event">Xem</th>
                </tr>
                {listEvent.map((e) => (
                  <tr>
                    <td className="name__event">{e.name}</td>
                    <td className="start__event">{e.dateStart}</td>
                    <td className="end__event">{e.dateEnd}</td>
                    <td className="type__event">{e.form}</td>
                    <td className="effect__event">{e.effect}</td>
                    <td className="seen__event">
                      <i class="fa fa-eye" onClick={() => SeenDetail(e.id)}></i>
                    </td>
                  </tr>
                ))}
              </table>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
