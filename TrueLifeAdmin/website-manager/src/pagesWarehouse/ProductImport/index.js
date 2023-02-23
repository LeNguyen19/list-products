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

  // Tự động cập nhật sản phẩm có số lượng tồn dưới 50 sản phẩm để khởi tạo danh sách sản phẩm cần nhập
  const [listProductNeedToEnte, setListProductNeedToEnte] = useState([
    {
      id: 1,
      nameProduct: "Sữa Dưỡng Thể Nivea Dưỡng Da Sáng Mịn 350ml",
      typeProduct: "	Dưỡng thể",
      trademark: "NIVEA",
      amount: 20,
    },
    {
      id: 2,
      nameProduct: "Sữa Dưỡng Thể Nivea Dưỡng Da Sáng Mịn 350ml",
      typeProduct: "	Dưỡng thể",
      trademark: "NIVEA",
      amount: 20,
    },
    {
      id: 3,
      nameProduct: "Sữa Dưỡng Thể Nivea Dưỡng Da Sáng Mịn 350ml",
      typeProduct: "	Dưỡng thể",
      trademark: "NIVEA",
      amount: 20,
    },
  ]);

  // Lọc sản phẩm cần nhập -------------------------------------------
  function FilerProductNeedToEnter() {
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
              <p>Sản phẩm cần nhập</p>
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
                onClick={() => FilerProductNeedToEnter()}
              >
                Lọc
              </button>
            </div>
            <div className="box">
              <div className="row-jcsb">
                <p>
                  Danh sách sản phẩm cần nhập <hr />
                </p>
                <Link to="/Warehouse/ProductImport/PlanningImportProduct">
                  <button className="button">Lập kế hoạch nhập hàng</button>
                </Link>
              </div>
              <div className="table">
                <table>
                  <tr>
                    <th className="nameProduct__productImport">Tên sản phẩm</th>
                    <th className="typeProduct__productImport">
                      Loại sản phẩm
                    </th>
                    <th className="trademarkProduct__productImport">
                      Thương hiệu
                    </th>
                    <th className="amountStock__productImport">Số lượng tồn</th>
                  </tr>
                  {listProductNeedToEnte.map((e) => (
                    <tr>
                      <td className="nameProduct__productImport">
                        {e.nameProduct}
                      </td>
                      <td className="typeProduct__productImport">
                        {e.typeProduct}
                      </td>
                      <td className="trademarkProduct__productImport">
                        {e.trademark}
                      </td>
                      <td className="amountStock__productImport">{e.amount}</td>
                    </tr>
                  ))}
                </table>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
