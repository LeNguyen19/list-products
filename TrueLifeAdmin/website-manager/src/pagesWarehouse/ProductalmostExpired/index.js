import React, { useState } from "react";
import "./style.css";
import Menu from "../../components/MenuWarehouse/index";
import Header from "../../components/Header/index";
import iconProduct from "../../assets/images/icon-product.svg";
import IconDropdownGrey from "../../assets/images/dropdownGrey.svg";
import { Link } from "react-router-dom";

export default function Index() {
  // LOẠI THỜI GIAN ----------------------------------------------------
  const [isActiveTime, setIsActiveTime] = useState(false);
  const [selectedTime, setSelectedTime] = useState();
  const listTime = [
    {
      id: 1,
      nameTime: "Dưới 6 tháng",
    },
    {
      id: 2,
      nameTime: "Từ 6 tháng đến 1 năm",
    },
  ];
  function dropdownTimeClick() {
    setIsActiveTime(!isActiveTime);
    document.getElementById("border__dropdown__Time").style.border =
      "1px solid #FA748F";
  }
  function dropdownItemTimeClick(id) {
    setSelectedTime(listTime[id - 1].nameTime);
    setIsActiveTime(false);
    document.getElementById("border__dropdown__Time").style.border =
      "1px solid #D9D9D9";

    if (id === 1) {
      document.getElementById("add__return").style.display = "block";
      document.getElementById("product__return").style.display = "block";
      document.getElementById("add__promotion").style.display = "none";
      document.getElementById("product__promotion").style.display = "none";
      document.getElementById("listProduct").style.display = "none";
    }
    if (id === 2) {
      document.getElementById("add__return").style.display = "none";
      document.getElementById("product__return").style.display = "none";
      document.getElementById("add__promotion").style.display = "block";
      document.getElementById("product__promotion").style.display = "block";
      document.getElementById("listProduct").style.display = "none";
    }
  }

  // Danh sách sản phẩm dưới 6 tháng ------------------------------------
  const [listProductBelow6Mouth, setListProductBelow6Mouth] = useState([
    {
      id: 1,
      name: "Son Givenchy Le Rouge Deep Velvet 19 Rouge Santal",
      nature: "Đỏ gạch",
      dateImport: "01/01/2022",
      expiry: "3 tháng",
      amount: 60,
    },
    {
      id: 2,
      name: "Son Givenchy Le Rouge Deep Velvet 19 Rouge Santal",
      nature: "Đỏ cam",
      dateImport: "01/01/2022",
      expiry: "5 tháng",
      amount: 50,
    },
  ]);

  // Danh sách sản phẩm từ 6 đến 1 năm ----------------------------------
  const [listProductAbove6Mouth, setListProductAbove6Mouth] = useState([
    {
      id: 1,
      name: "Son Givenchy Le Rouge Deep Velvet 19 Rouge Santal",
      nature: "Cam đất",
      dateImport: "01/01/2022",
      expiry: "36 tháng",
      amount: 60,
    },
    {
      id: 2,
      name: "Son Givenchy Le Rouge Deep Velvet 19 Rouge Santal",
      nature: "Cam đào",
      dateImport: "01/01/2022",
      expiry: "25 tháng",
      amount: 50,
    },
  ]);

  // Thêm vào danh sách cần trả -----------------------------------------
  function AddListProductToReturn() {
    alert("Thêm các sản phẩm dưới 6 tháng vào danh sách sản phẩm cần trả");
  }

  // Thêm vào danh sách khuyến mãi -----------------------------------------
  function AddListProductPromotion() {
    alert(
      "Thêm các sản phẩm từ 6 tháng đến 12 tháng vào danh sách sản phẩm khuyến mãi"
    );
  }

  return (
    <div>
      <div className="container">
        <div className="background">
          <Menu />
        </div>
        <div className="content">
          <Header />
          <div className="wrapper__content">
            <div className="title__content row">
              <span>
                <img src={iconProduct} alt="" />
              </span>
              <p>Sản phẩm gần hết hạn</p>
            </div>
            <div className="box row-jcsb">
              <div className="row-jcsb group__choose__expiry">
                <p>Chọn hạn sử dụng:</p>
                <div className="input__choose__expiry">
                  <div className="dropdown">
                    <div
                      id="border__dropdown__Time"
                      className="dropdown__btn"
                      onClick={() => dropdownTimeClick()}
                    >
                      <input
                        type="text"
                        value={selectedTime}
                        placeholder="Tất cả"
                        readOnly
                      />
                      <img src={IconDropdownGrey} alt="" />
                    </div>
                    {isActiveTime && (
                      <div className="dropdown__content">
                        {listTime.map((option) => (
                          <div
                            onClick={() => {
                              dropdownItemTimeClick(option.id);
                            }}
                            className="dropdown__item"
                          >
                            {option.nameTime}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <button
                id="add__promotion"
                className="button"
                onClick={() => AddListProductPromotion()}
              >
                Thêm vào danh sách khuyến mãi
              </button>
              <button
                id="add__return"
                className="button"
                onClick={() => AddListProductToReturn()}
              >
                Thêm vào danh sách cần trả
              </button>
            </div>
            <div id="listProduct" className="box">
              <p>
                Danh sách sản phẩm <hr />
              </p>
              <br />
              <div className="table">
                <table>
                  <tr>
                    <th className="name__almostExpired">Tên sản phẩm</th>
                    <th className="nature__almostExpired">Tính chất</th>
                    <th className="expired__almostExpired">Ngày nhập</th>
                    <th className="expired__almostExpired">Hạn sử dụng</th>
                    <th className="amount__almostExpired">Số lượng</th>
                  </tr>
                  <tr>
                    <td className="name__almostExpired">
                      Son Givenchy Le Rouge Deep Velvet 19 Rouge Santal
                    </td>
                    <td className="nature__almostExpired">Đỏ gạch</td>
                    <td className="expired__almostExpired">01/01/2022</td>
                    <td className="expired__almostExpired">36 tháng</td>
                    <td className="amount__almostExpired">100</td>
                  </tr>
                  <tr>
                    <td className="name__almostExpired">
                      Son Givenchy Le Rouge Deep Velvet 19 Rouge Santal
                    </td>
                    <td className="nature__almostExpired">Đỏ gạch</td>
                    <td className="expired__almostExpired">01/01/2022</td>
                    <td className="expired__almostExpired">36 tháng</td>
                    <td className="amount__almostExpired">100</td>
                  </tr>
                </table>
              </div>
            </div>
            <div id="product__return" className="box">
              <p>
                Danh sách sản phẩm <hr />
              </p>
              <br />
              <div className="table">
                <p>sản phẩm cần trả</p>
                <table>
                  <tr>
                    <th className="name__almostExpired">Tên sản phẩm</th>
                    <th className="nature__almostExpired">Tính chất</th>
                    <th className="expired__almostExpired">Ngày nhập</th>
                    <th className="expired__almostExpired">Hạn sử dụng</th>
                    <th className="amount__almostExpired">Số lượng</th>
                  </tr>
                  {listProductBelow6Mouth.map((e) => (
                    <tr>
                      <td className="name__almostExpired">{e.name}</td>
                      <td className="nature__almostExpired">{e.nature}</td>
                      <td className="expired__almostExpired">{e.dateImport}</td>
                      <td className="expired__almostExpired">{e.expiry}</td>
                      <td className="amount__almostExpired">{e.amount}</td>
                    </tr>
                  ))}
                </table>
              </div>
            </div>
            <div id="product__promotion" className="box">
              <p>
                Danh sách sản phẩm <hr />
              </p>
              <br />
              <div className="table">
                <p>sản phẩm khuyến mẫi</p>
                <table>
                  <tr>
                    <th className="name__almostExpired">Tên sản phẩm</th>
                    <th className="nature__almostExpired">Tính chất</th>
                    <th className="expired__almostExpired">Ngày nhập</th>
                    <th className="expired__almostExpired">Hạn sử dụng</th>
                    <th className="amount__almostExpired">Số lượng</th>
                  </tr>
                  {listProductAbove6Mouth.map((e) => (
                    <tr>
                      <td className="name__almostExpired">{e.name}</td>
                      <td className="nature__almostExpired">{e.nature}</td>
                      <td className="expired__almostExpired">{e.dateImport}</td>
                      <td className="expired__almostExpired">{e.expiry}</td>
                      <td className="amount__almostExpired">{e.amount}</td>
                    </tr>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
