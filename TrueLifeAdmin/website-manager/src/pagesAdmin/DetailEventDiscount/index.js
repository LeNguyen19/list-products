import React, { useState } from "react";
import "./style.css";
import Menu from "../../components/MenuAdmin/index";
import Header from "../../components/Header/index";
import iconEvent from "../../assets/images/icon-event.svg";
import IconDropdownGrey from "../../assets/images/dropdownGrey.svg";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Index() {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState();
  const [selectedDateStart, setSelectedDateStart] = useState();
  const [selectedDateEnd, setSelectedDateEnd] = useState();

  const listForm = [
    {
      id: 1,
      nameForm: "Tặng hàng",
    },
    {
      id: 2,
      nameForm: "Khuyến mãi theo sản phẩm",
    },
    // {
    //   id: 3,
    //   nameForm: "Khuyến mãi theo hoá đơn",
    // },
  ];

  function dropdownFormClick() {
    setIsActive(!isActive);
    document.getElementById("border__dropdown").style.border =
      "1px solid #FA748F";
  }

  function dropdownItemFormClick(id) {
    setSelected(listForm[id - 1].nameForm);
    setIsActive(false);
    document.getElementById("border__dropdown").style.border =
      "1px solid #D9D9D9";
    if (id === 1) {
      document.getElementById("form" + id).style.display = "block";
      document.getElementById("form2").style.display = "none";
      document.getElementById("form3").style.display = "none";
    }
    if (id === 2) {
      document.getElementById("form" + id).style.display = "block";
      document.getElementById("form1").style.display = "none";
      document.getElementById("form3").style.display = "none";
    }
    if (id === 3) {
      document.getElementById("form" + id).style.display = "block";
      document.getElementById("form2").style.display = "none";
      document.getElementById("form1").style.display = "none";
    }
  }

  const [isActiveTypeSale, setIsActiveTypeSale] = useState(false);
  const [isActiveProductSale, setIsActiveProductSale] = useState(false);
  const [selectedTypeSale, setSelectedTypeSale] = useState();
  const [selectedProductSale, setSelectedProductSale] = useState();
  const [codeTypeSale, setCodeTypeSale] = useState(0);

  const [isActiveTypeDiscount, setIsActiveTypeDiscount] = useState(false);
  const [selectedTypeDiscount, setSelectedTypeDiscount] = useState();

  const listTypeDisCount = [
    {
      id: 1,
      nameTypeDiscount: "Giảm giá theo phần trăm (%)",
    },
    {
      id: 2,
      nameTypeDiscount: "Giảm giá theo mệnh giá (VNĐ)",
    },
  ];

  const listTypeSale = [
    {
      id: 1,
      nameTypeSale: "Son",
      listProductSale: [
        {
          nameSale: "Son 1",
        },
        {
          nameSale: "Son 2",
        },
        {
          nameSale: "Son 3",
        },
      ],
    },
    {
      id: 2,
      nameTypeSale: "Mặt nạ",
      listProductSale: [
        {
          nameSale: "Mặt nạ 1",
        },
        {
          nameSale: "Mặt nạ 2",
        },
        {
          nameSale: "Mặt nạ 3",
        },
      ],
    },
    {
      id: 3,
      nameTypeSale: "Secrum dưỡng da",
      listProductSale: [
        {
          nameSale: "Secrum 1",
        },
        {
          nameSale: "Secrum 2",
        },
        {
          nameSale: "Secrum 3",
        },
      ],
    },
  ];

  function dropdownTypeSaleClick() {
    setIsActiveTypeSale(!isActiveTypeSale);
    document.getElementById("border__dropdown__TypeSale").style.border =
      "1px solid #FA748F";
  }

  function dropdownProductSaleClick() {
    if (codeTypeSale === 0) {
      alert("Chưa chọn tỉnh/thành phố");
      setIsActiveProductSale(false);
    } else {
      setIsActiveProductSale(!isActiveProductSale);
      document.getElementById("border__dropdown__ProductSale").style.border =
        "1px solid #FA748F";
    }
  }

  function dropdownItemTypeSaleClick(id) {
    setSelectedTypeSale(listTypeSale[id - 1].nameTypeSale);
    setIsActiveTypeSale(false);
    setCodeTypeSale(id);
    document.getElementById("border__dropdown__TypeSale").style.border =
      "1px solid #D9D9D9";
  }

  function dropdownItemProductSaleClick(data) {
    setSelectedProductSale(data);
    setIsActiveProductSale(false);
    document.getElementById("border__dropdown__ProductSale").style.border =
      "1px solid #D9D9D9";
    setIsActiveProductSale(false);
  }

  function dropdownTypeDiscountClick() {
    setIsActiveTypeDiscount(!isActiveTypeDiscount);
    document.getElementById("border__dropdown__TypeDiscount").style.border =
      "1px solid #FA748F";
  }

  function dropdownItemTypeDiscountClick(id) {
    setSelectedTypeDiscount(listTypeDisCount[id - 1].nameTypeDiscount);
    setIsActiveTypeDiscount(false);
    document.getElementById("border__dropdown__TypeDiscount").style.border =
      "1px solid #D9D9D9";
  }

  function updateEventBonus() {
    document.getElementById("update__eventDiscount").style.display = "block";
  }

  function cancelEventBonus() {
    document.getElementById("update__eventDiscount").style.display = "none";
    document
      .querySelectorAll(".amount__input__addEvent")
      .forEach((input) => (input.value = ""));
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
            <p>Chi tiết chương trình khuyến mãi</p>
          </div>
          <div id="update__eventDiscount">
            <div className="box">
              <div className="row-jcsb">
                <div className="input__nameAddEvent">
                  <input
                    className="input"
                    placeholder="Nhập tên chương trình khuyến mãi..."
                  />
                </div>
                <div className="input__desAddEvent">
                  <input
                    className="input"
                    placeholder="Nhập mô tả chương trình khuyến mãi..."
                  />
                </div>
              </div>
              <br />
              <div className="row-jcsb">
                <div className="input__dateStart__addEvent">
                  <DatePicker
                    placeholderText="Chọn ngày bắt đầu..."
                    selected={selectedDateStart}
                    onChange={(date) => setSelectedDateStart(date)}
                    dateFormat="dd/MM/yyyy"
                    showYearDropdown
                    scrollableMonthYearDropdown
                  />
                </div>
                <div className="input__dateEnd__addEvent">
                  <DatePicker
                    placeholderText="Chọn ngày kết thúc..."
                    selected={selectedDateEnd}
                    onChange={(date) => setSelectedDateEnd(date)}
                    dateFormat="dd/MM/yyyy"
                    showYearDropdown
                    scrollableMonthYearDropdown
                  />
                </div>
                <div className="input__formEvent">
                  <div className="dropdown">
                    <div
                      id="border__dropdown"
                      className="dropdown__btn"
                      onClick={() => dropdownFormClick()}
                    >
                      <input
                        type="text"
                        value={selected}
                        placeholder="Chọn hình thức..."
                        readOnly
                      />
                      <img src={IconDropdownGrey} alt="" />
                    </div>
                    {isActive && (
                      <div className="dropdown__content">
                        {listForm.map((option) => (
                          <div
                            onClick={() => {
                              dropdownItemFormClick(option.id);
                            }}
                            className="dropdown__item"
                          >
                            {option.nameForm}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="box">
              <p>Chọn mặt hàng:</p>
              <div className="row-jcsb">
                <div className="input__promotionByProduct">
                  <div className="dropdown">
                    <div
                      id="border__dropdown__TypeSale"
                      className="dropdown__btn"
                      onClick={() => dropdownTypeSaleClick()}
                    >
                      <input
                        type="text"
                        value={selectedTypeSale}
                        placeholder="Chọn loại sản phẩm..."
                        readOnly
                      />
                      <img src={IconDropdownGrey} alt="" />
                    </div>
                    {isActiveTypeSale && (
                      <div className="dropdown__content">
                        {listTypeSale.map((option) => (
                          <div
                            onClick={() => {
                              dropdownItemTypeSaleClick(option.id);
                            }}
                            className="dropdown__item"
                          >
                            {option.nameTypeSale}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="input__promotionByProduct">
                  <div className="dropdown">
                    <div
                      id="border__dropdown__ProductSale"
                      className="dropdown__btn"
                      onClick={() => dropdownProductSaleClick()}
                    >
                      <input
                        value={selectedProductSale}
                        type="text"
                        placeholder="Chọn sản phẩm..."
                        readOnly
                      />
                      <img src={IconDropdownGrey} alt="" />
                    </div>
                    {isActiveProductSale && (
                      <div className="dropdown__content">
                        {listTypeSale[codeTypeSale - 1].listProductSale.map(
                          (e) => (
                            <div
                              onClick={() => {
                                dropdownItemProductSaleClick(e.nameSale);
                              }}
                              className="dropdown__item"
                            >
                              {e.nameSale}
                            </div>
                          )
                        )}
                      </div>
                    )}
                  </div>
                </div>
                <div className="input__promotionByProduct">
                  <div className="dropdown">
                    <div
                      id="border__dropdown__TypeDiscount"
                      className="dropdown__btn"
                      onClick={() => dropdownTypeDiscountClick()}
                    >
                      <input
                        type="text"
                        value={selectedTypeDiscount}
                        placeholder="Chọn loại khuyến mãi..."
                        readOnly
                      />
                      <img src={IconDropdownGrey} alt="" />
                    </div>
                    {isActiveTypeDiscount && (
                      <div className="dropdown__content">
                        {listTypeDisCount.map((option) => (
                          <div
                            onClick={() => {
                              dropdownItemTypeDiscountClick(option.id);
                            }}
                            className="dropdown__item"
                          >
                            {option.nameTypeDiscount}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="input__valuePromotin">
                  <input
                    className="input"
                    placeholder="Nhập giá trị khuyến mãi..."
                  />
                </div>
                <div className="input__valuePromotin">
                  <input
                    className="input"
                    placeholder="Giá trị khuyến mãi tối đa..."
                  />
                </div>
              </div>
              <br />
              <div className="group__btn__form3">
                <button className="button">Lưu thông tin</button>
                <button className="button" onClick={()=>cancelEventBonus()}>Huỷ</button>
              </div>
            </div>
          </div>
          <div className="box">
            <p>
              Danh sách sản phẩm khuyến mãi <hr />
            </p>
            <br />
            <div class="table">
              <table>
                <tr>
                  <th className="nameEvent__addEvent">Tên chương trình</th>
                  <th className="desEvent__addEvent">Mô tả</th>
                  <th className="dateStart__addEvent">Bắt đầu</th>
                  <th className="dateEnd__addEvent">Kết thúc</th>
                  <th className="nameProduct__addEvent">Tên sản phẩm</th>
                  <th className="discount__addEvent">Giảm giá</th>
                  <th className="discountMax__addEvent">Tối đa</th>
                  <th className="update__addEvent">Sửa</th>
                  <th className="deleted__addEvent">Xoá</th>
                </tr>
                <tr>
                  <td className="nameEvent__addEvent">
                    Mừng sinh nhật True Life
                  </td>
                  <td className="desEvent__addEvent">
                    Khuyến mãi chương trình mừng sinh nhật
                  </td>
                  <td className="dateStart__addEvent">01/01/2023</td>
                  <td className="dateEnd__addEvent">02/02/2023</td>
                  <td className="nameProduct__addEvent">Son 123</td>
                  <td className="discount__addEvent">10%</td>
                  <td className="discountMax__addEvent">100.000đ</td>
                  <td className="update__addEvent">
                    <i class="fa fa-pencil" onClick={()=>updateEventBonus()}></i>
                  </td>
                  <td className="deleted__addEvent">
                    <i class="fa fa-trash"></i>
                  </td>
                </tr>
              </table>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
