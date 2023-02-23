import React, { useState } from "react";
import "./style.css";
import Menu from "../../components/MenuAdmin/index";
import Header from "../../components/Header/index";
import iconProduct from "../../assets/images/icon-product.svg";
import IconDropdownGrey from "../../assets/images/dropdownGrey.svg";
import Product1 from "../../assets/images/product1.webp";
import Product2 from "../../assets/images/product3.webp";
import { Link, useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();
  const [isActiveFindTypeProduct, setIsActiveFindTypeProduct] = useState(false);
  const [selectedFindTypeProduct, setSelectedFindTypeProduct] = useState();
  const listTypeProduct = [
    {
      id: 1,
      nameType: "Son",
    },
    {
      id: 2,
      nameType: "Nước hoa",
    },
    {
      id: 3,
      nameType: "Mặt nạ",
    },
  ];
  function dropdownFindTypeProductClick() {
    setIsActiveFindTypeProduct(!isActiveFindTypeProduct);
    document.getElementById("border__dropdown__FindTypeProduct").style.border =
      "1px solid #FA748F";
  }

  function dropdownItemFindTypeProductClick(id) {
    setSelectedFindTypeProduct(listTypeProduct[id - 1].nameType);
    setIsActiveFindTypeProduct(false);
    document.getElementById("border__dropdown__FindTypeProduct").style.border =
      "1px solid #D9D9D9";
  }

  const [isActiveSupplier, setIsActiveSupplier] = useState(false);
  const [selectedSupplier, setSelectedSupplier] = useState();
  const listSupplier = [
    {
      id: 1,
      nameSupplier: "Nhà cung cấp A",
    },
    {
      id: 2,
      nameSupplier: "Nhà cung cấp B",
    },
    {
      id: 3,
      nameSupplier: "Nhà cung cấp C",
    },
  ];
  function dropdownSupplierClick() {
    setIsActiveSupplier(!isActiveSupplier);
    document.getElementById("border__dropdown__Supplier").style.border =
      "1px solid #FA748F";
  }

  function dropdownItemSupplierClick(id) {
    setSelectedSupplier(listSupplier[id - 1].nameSupplier);
    setIsActiveSupplier(false);
    document.getElementById("border__dropdown__Supplier").style.border =
      "1px solid #D9D9D9";
  }

  //Danh sách sản phẩm của cửa hàng ------------------------------------------------------
  const [infoProduct, setInfoProduct] = useState([
    {
      id: 1,
      img: Product1,
      name: "Nước Hoa Miss Dior Eau De Parfum",
      type: "Nước hoa",
      trademark: "Thương hiệu",
      supplier: "Nhà cung cấp",
      amount: 100,
    },
    {
      id: 2,
      img: Product2,
      name: "Nước Hoa Miss Dior Eau De Parfum",
      type: "Nước hoa",
      trademark: "Thương hiệu",
      supplier: "Nhà cung cấp",
      amount: 100,
    },
  ]);

  // Xoá 1 sản phẩm khỏi danh sách sản phẩm của cửa hàng ---------------------------------
  function DeletedProduct(id) {
    alert("Mã sản phẩm cần xoá: " + id);
  }

  // Tìm kiếm ----------------------------------------------------------------------------
  const [contentFind, setContentFind] = useState();

  function FindProduct() {
    if (contentFind === undefined) {
      alert("Vui lòng nhập nội dung cần tìm");
    } else {
      console.log(
        "Loại sản phẩm: ",
        selectedFindTypeProduct === undefined
          ? "Tất cả"
          : selectedFindTypeProduct
      );
      console.log(
        "Nhà cung cấp: ",
        selectedSupplier === undefined ? "Tất cả" : selectedSupplier
      );
      console.log("Nội dung cần tìm: ", contentFind);
    }
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
              <img src={iconProduct} alt="" />
            </span>
            <p>Sản phẩm</p>
          </div>
          <div className="box row-jcsb">
            <div className="row-jcsb group__findSelect__product">
              <p>Loại sản phẩm:</p>
              <div className="group__select__product ">
                <div className="dropdown">
                  <div
                    id="border__dropdown__FindTypeProduct"
                    className="dropdown__btn"
                    onClick={() => dropdownFindTypeProductClick()}
                  >
                    <input
                      type="text"
                      value={selectedFindTypeProduct}
                      placeholder="Tất cả"
                      readOnly
                    />
                    <img src={IconDropdownGrey} alt="" />
                  </div>
                  {isActiveFindTypeProduct && (
                    <div className="dropdown__content">
                      {listTypeProduct.map((option) => (
                        <div
                          onClick={() => {
                            dropdownItemFindTypeProductClick(option.id);
                          }}
                          className="dropdown__item"
                        >
                          {option.nameType}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="row-jcsb group__findSelect__product">
              <p>Nhà cung cấp:</p>
              <div className="group__select__product ">
                <div className="dropdown">
                  <div
                    id="border__dropdown__Supplier"
                    className="dropdown__btn"
                    onClick={() => dropdownSupplierClick()}
                  >
                    <input
                      type="text"
                      value={selectedSupplier}
                      placeholder="Tất cả"
                      readOnly
                    />
                    <img src={IconDropdownGrey} alt="" />
                  </div>
                  {isActiveSupplier && (
                    <div className="dropdown__content">
                      {listSupplier.map((option) => (
                        <div
                          onClick={() => {
                            dropdownItemSupplierClick(option.id);
                          }}
                          className="dropdown__item"
                        >
                          {option.nameSupplier}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="group__findInput__product row-jcsb">
              <input
                className="input"
                placeholder="Nhập tên sản phẩm cần tìm..."
                onChange={(e) => setContentFind(e.target.value)}
              />
              <button className="button" onClick={() => FindProduct()}>
                Tìm kiếm
              </button>
            </div>
          </div>
          <div className="box">
            <div className="row-jcsb">
              <p>
                Danh sách sản phẩm <hr />
              </p>
              <Link to="/Admin/Products/AddProduct">
                <button className="button">Thêm sản phẩm</button>
              </Link>
            </div>
            <div class="table">
              <table>
                <tr>
                  <th className="code__product">Mã</th>
                  <th className="avt__product">Ảnh</th>
                  <th className="name__product">Tên</th>
                  <th className="type__product">Loại</th>
                  <th className="trademark__product">Thương hiệu</th>
                  <th className="supplier__product">Nhà cung cấp</th>
                  <th className="amout__product">Số lượng</th>
                  <th className="seen__product">Xem</th>
                  <th className="deleted__product">Xoá</th>
                </tr>

                {infoProduct.map((e) => (
                  <tr>
                    <td className="code__product">PN00{e.id}</td>
                    <td className="avt__product">
                      <img src={e.img} alt="" />
                    </td>
                    <td className="name__product">{e.name}</td>
                    <td className="type__product">{e.type}</td>
                    <td className="trademark__product">{e.trademark}</td>
                    <td className="supplier__product">{e.supplier}</td>
                    <td className="amout__product">{e.amount}</td>
                    <td className="seen__product">
                      <i
                        class="fa fa-eye"
                        onClick={() => {
                          navigate("/Admin/Products/DetailProduct");
                        }}
                      ></i>
                    </td>
                    <td className="deleted__product">
                      <i
                        class="fa fa-trash"
                        onClick={() => DeletedProduct(e.id)}
                      ></i>
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
