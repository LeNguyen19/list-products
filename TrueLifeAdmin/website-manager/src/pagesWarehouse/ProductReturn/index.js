import React, { useState } from "react";
import "./style.css";
import Menu from "../../components/MenuWarehouse/index";
import Header from "../../components/Header/index";
import iconProduct from "../../assets/images/icon-product.svg";
import IconDropdownGrey from "../../assets/images/dropdownGrey.svg";

import { Link } from "react-router-dom";

export default function Index() {
  // LOẠI SẢN PHẨM----------------------------------------------------
  const [isActiveTypeProduct, setIsActiveTypeProduct] = useState(false);
  const [selectedTypeProduct, setSelectedTypeProduct] = useState();
  const listTyperoduct = [
    {
      id: 1,
      tenTypeProduct: "Son",
    },
    {
      id: 2,
      tenTypeProduct: "Phấn mắt",
    },
    {
      id: 3,
      tenTypeProduct: "Công cụ trang điểm",
    },
  ];
  function dropdownTypeProductClick() {
    setIsActiveTypeProduct(!isActiveTypeProduct);
    document.getElementById("border__dropdown__TypeProduct").style.border =
      "1px solid #FA748F";
  }
  function dropdownItemTypeProductClick(id) {
    setSelectedTypeProduct(listTyperoduct[id - 1].tenTypeProduct);
    setIsActiveTypeProduct(false);
    document.getElementById("border__dropdown__TypeProduct").style.border =
      "1px solid #D9D9D9";
  }

  // THƯƠNG HIỆU ----------------------------------------------------
  const [isActiveTrademark, setIsActiveTrademark] = useState(false);
  const [selectedTrademark, setSelectedTrademark] = useState();
  const listTrademark = [
    {
      id: 1,
      nameTrademark: "DIOR",
    },
    {
      id: 2,
      nameTrademark: "NIVEA",
    },
    {
      id: 3,
      nameTrademark: "SHU",
    },
  ];
  function dropdownTrademarkClick() {
    setIsActiveTrademark(!isActiveTrademark);
    document.getElementById("border__dropdown__Trademark").style.border =
      "1px solid #FA748F";
  }
  function dropdownItemTrademarkClick(id) {
    setSelectedTrademark(listTrademark[id - 1].nameTrademark);
    setIsActiveTrademark(false);
    document.getElementById("border__dropdown__Trademark").style.border =
      "1px solid #D9D9D9";
  }

  // Danh sách sản phẩm cần trả -------------------------------------
  const [listProductNeedToReturn, setListProductNeedToReturn] = useState([
    {
      id: 1,
      nameProduct: "Son Givenchy Le Rouge Deep Velvet 19 Rouge Santal",
      nature: "Đỏ gạch",
      typeProduct: "Son",
      trademark: "Rouge",
      dateImport: "01/01/2022",
      expiry: "5 tháng",
      amount: 50,
    },
    {
      id: 2,
      nameProduct: "Son Givenchy Le Rouge Deep Velvet 19 Rouge Santal",
      nature: "Đỏ cam",
      typeProduct: "Son",
      trademark: "Rouge",
      dateImport: "01/01/2022",
      expiry: "6 tháng",
      amount: 60,
    },
  ]);

  // Lọc sản phẩm cần trả -------------------------------------------
  function FilerProductNeedToReturn() {
    console.log(
      "Loại sản phẩm: ",
      selectedTypeProduct === undefined ? "Tất cả" : selectedTypeProduct
    );
    console.log(
      "selectedTrademark: ",
      selectedTrademark === undefined ? "Tất cả" : selectedTrademark
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
              <p>Sản phẩm cần trả</p>
            </div>
            <div className="box row-jcsb">
              <div className="input__type__product__productImport row-jcsb">
                <p>Loại sản phẩm:</p>
                <div className="input__choose__typeProduct__productImport">
                  <div className="dropdown">
                    <div
                      id="border__dropdown__TypeProduct"
                      className="dropdown__btn"
                      onClick={() => dropdownTypeProductClick()}
                    >
                      <input
                        type="text"
                        value={selectedTypeProduct}
                        placeholder="Tất cả"
                        readOnly
                      />
                      <img src={IconDropdownGrey} alt="" />
                    </div>
                    {isActiveTypeProduct && (
                      <div className="dropdown__content">
                        {listTyperoduct.map((option) => (
                          <div
                            onClick={() => {
                              dropdownItemTypeProductClick(option.id);
                            }}
                            className="dropdown__item"
                          >
                            {option.tenTypeProduct}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="input__trademark__product__productImport row-jcsb">
                <p>Thương hiệu:</p>
                <div className="input__choose__trademark__productImport">
                  <div className="dropdown">
                    <div
                      id="border__dropdown__Trademark"
                      className="dropdown__btn"
                      onClick={() => dropdownTrademarkClick()}
                    >
                      <input
                        type="text"
                        value={selectedTrademark}
                        placeholder="Tất cả"
                        readOnly
                      />
                      <img src={IconDropdownGrey} alt="" />
                    </div>
                    {isActiveTrademark && (
                      <div className="dropdown__content">
                        {listTrademark.map((option) => (
                          <div
                            onClick={() => {
                              dropdownItemTrademarkClick(option.id);
                            }}
                            className="dropdown__item"
                          >
                            {option.nameTrademark}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <button
                className="button"
                onClick={() => FilerProductNeedToReturn()}
              >
                Lọc
              </button>
            </div>
            <div className="box">
              <div className="row-jcsb">
                <p>
                  Danh sách sản phẩm <hr />
                </p>
                <Link to="/Warehouse/ProductReturn/PlanningReturnProduct">
                  <button className="button">Lập kế hoạch trả hàng</button>
                </Link>
              </div>
              <div className="table">
                <table>
                  <tr>
                    <th className="name__almostExpired">Tên sản phẩm</th>
                    <th className="nature__almostExpired">Tính chất</th>
                    <th className="typeProduct__productReturn">
                      Loại sản phẩm
                    </th>
                    <th className="typeProduct__productReturn">Thương hiệu</th>
                    <th className="expired__productReturn">Ngày nhập</th>
                    <th className="expired__productReturn">Hạn sử dụng</th>
                    <th className="amount__almostExpired">Số lượng</th>
                  </tr>
                  {listProductNeedToReturn.map((e) => (
                    <tr>
                      <td className="name__almostExpired">{e.nameProduct}</td>
                      <td className="nature__almostExpired">{e.nature}</td>
                      <td className="typeProduct__productReturn">
                        {e.typeProduct}
                      </td>
                      <td className="typeProduct__productReturn">
                        {e.trademark}
                      </td>
                      <td className="expired__productReturn">{e.dateImport}</td>
                      <td className="expired__productReturn">{e.expiry}</td>
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
