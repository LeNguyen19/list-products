import React, { useState } from "react";
import "./style.css";
import Menu from "../../components/MenuAdmin/index";
import Header from "../../components/Header/index";
import iconEvent from "../../assets/images/icon-event.svg";
import IconDropdownGrey from "../../assets/images/dropdownGrey.svg";

export default function Index() {
  const [isActiveDiscountOrder, setIsActiveDiscountOrder] = useState(false);
  const [selectedDiscountOrder, setSelectedDiscountOrder] = useState();
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

  function dropdownDiscountOrderClick() {
    setIsActiveDiscountOrder(!isActiveDiscountOrder);
    document.getElementById("border__dropdown__discountOrder").style.border =
      "1px solid #FA748F";
  }

  function dropdownItemDiscountOrderClick(id) {
    setSelectedDiscountOrder(listTypeDisCount[id - 1].nameTypeDiscount);
    setIsActiveDiscountOrder(false);
    document.getElementById("border__dropdown__discountOrder").style.border =
      "1px solid #D9D9D9";
  }
  function updateInvoiceDiscount() {}

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
          <div id="update__event__invoiceDiscount">
            <div className="box">
              <p>Chọn mặt hàng:</p>
              <div className="row-jcsb">
                <div className="input__valuePromotin">
                  <input
                    className="input"
                    placeholder="Nhập giá trị đơn hàng..."
                  />
                </div>
                <div className="input__promotionByProduct">
                  <div className="dropdown">
                    <div
                      id="border__dropdown__discountOrder"
                      className="dropdown__btn"
                      onClick={() => dropdownDiscountOrderClick()}
                    >
                      <input
                        type="text"
                        value={selectedDiscountOrder}
                        placeholder="Chọn loại khuyến mãi..."
                        readOnly
                      />
                      <img src={IconDropdownGrey} alt="" />
                    </div>
                    {isActiveDiscountOrder && (
                      <div className="dropdown__content">
                        {listTypeDisCount.map((option) => (
                          <div
                            onClick={() => {
                              dropdownItemDiscountOrderClick(option.id);
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
                <button className="button">Huỷ</button>
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
                  <th className="nameProduct__addEvent">Tổng hoá đơn</th>
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
                  <td className="nameProduct__addEvent">1.000.000đ</td>
                  <td className="discount__addEvent">10%</td>
                  <td className="discountMax__addEvent">100.000đ</td>
                  <td className="update__addEvent">
                    <i
                      class="fa fa-pencil"
                      onClick={() => updateInvoiceDiscount()}
                    ></i>
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
