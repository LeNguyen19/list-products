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

  // TÊN SẢN PHẨM----------------------------------------------------
  const [isActiveNameProduct, setIsActiveNameProduct] = useState(false);
  const [selectedNameProduct, setSelectedNameProduct] = useState();
  const [idNameProduct, setIdNameProduct] = useState();

  const listNameProduct = [
    {
      id: 1,
      nameProduct: "Son 3CE",
      trademark: "3CE",
      listNature: [
        {
          id: 1,
          nameNature: "Đỏ cherry",
          expiry: "5 tháng",
          amoutStock: 20,
          dateImport: "10/01/2022",
        },
        {
          id: 2,
          nameNature: "Đỏ Hồng",
          expiry: "2 tháng",
          amoutStock: 30,
          dateImport: "10/01/2022",
        },
        {
          id: 3,
          nameNature: "Đỏ Cam",
          expiry: "3 tháng",
          amoutStock: 40,
          dateImport: "10/01/2022",
        },
      ],
    },
    {
      id: 2,
      nameProduct: "Son NeHen",
      trademark: "NeHen",
      listNature: [
        {
          id: 1,
          nameNature: "Cam đất",
          expiry: "5 tháng",
          amoutStock: 20,
          dateImport: "10/01/2022",
        },
        {
          id: 2,
          nameNature: "Cam cháy",
          expiry: "2 tháng",
          amoutStock: 30,
          dateImport: "10/01/2022",
        },
        {
          id: 3,
          nameNature: "Cam San Hô",
          expiry: "3 tháng",
          amoutStock: 40,
          dateImport: "10/01/2022",
        },
      ],
    },
  ];
  function dropdownNameProductClick() {
    setSelectedNature("");
    setIsActiveNameProduct(!isActiveNameProduct);
    document.getElementById("border__dropdown__NameProduct").style.border =
      "1px solid #FA748F";
  }

  function dropdownItemNameProductClick(id) {
    setIdNameProduct(id);
    setSelectedNameProduct(listNameProduct[id - 1].nameProduct);
    setIsActiveNameProduct(false);
    document.getElementById("border__dropdown__NameProduct").style.border =
      "1px solid #D9D9D9";
  }

  // NHÀ CUNG CẤP ----------------------------------------------------
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

  // TÍNH CHẤT ----------------------------------------------------
  const [isActiveNature, setIsActiveNature] = useState(false);
  const [selectedNature, setSelectedNature] = useState();
  const [valueExpiry, setValueExpiry] = useState();
  const [valueMountStock, setValueMountStock] = useState();
  const [valueDateImport, setValueDateImport] = useState();

  function dropdownNatureClick() {
    setIsActiveNature(!isActiveNature);
    document.getElementById("border__dropdown__Nature").style.border =
      "1px solid #FA748F";
  }
  function dropdownItemNatureClick(id) {
    setSelectedNature(
      listNameProduct[idNameProduct - 1].listNature[id - 1].nameNature
    );
    setValueExpiry(
      listNameProduct[idNameProduct - 1].listNature[id - 1].expiry
    );
    setValueMountStock(
      listNameProduct[idNameProduct - 1].listNature[id - 1].amoutStock
    );
    setValueDateImport(
      listNameProduct[idNameProduct - 1].listNature[id - 1].dateImport
    );
    setIsActiveNature(false);
    document.getElementById("border__dropdown__Nature").style.border =
      "1px solid #D9D9D9";
  }

  // Thêm vào danh sách sản phẩm trong kế hoạch trả hàng nhà cung cấp
  function AddListPlanningReturnProduct() {
    if (
      selectedSupplier === undefined ||
      selectedTypeProduct === undefined ||
      selectedNameProduct === undefined ||
      selectedNature === undefined
    ) {
      alert("Vui lòng nhập đầy đủ thông tin");
    } else {
      console.log("Nhà cung cấp: ", selectedSupplier);
      console.log("Loại sản phẩm: ", selectedTypeProduct);
      console.log("Tên sản phẩm: ", selectedNameProduct);
      console.log(
        "Thương hiệu: ",
        listNameProduct[idNameProduct - 1].trademark
      );
      console.log("Tính chất: ", selectedNature);
      console.log("Số lượng tồn: ", valueMountStock);
      console.log("Hạn sử dụng: ", valueExpiry);
      console.log("Ngày nhập: ", valueDateImport);
    }
  }

  // Danh sách sản phẩm trong bản kế hoạch trả hàng ---------------
  const [listProductToReturn, setListProductToReturn] = useState([
    {
      id: 1,
      name: "Lancome La Vie Est Belle",
      trademark: "Lancome",
      nature: "Hồng đất",
      dateImport: "01/01/2022",
      expiry: "5 tháng",
      price: "210.000đ",
      amountStock: 10,
      total: "210.000.000đ",
    },
  ]);

  // Xoá 1 sản phẩm trong danh sách kế hoạch trả hàng -------------
  function DeletedProductToReturn(id) {
    alert("Mã sản phẩm cần xoá: " + id);
  }

  // Gửi kế hoạch trả hàng ----------------------------------------
  function SendReturnPlan() {
    alert("Gửi cho quản lý cửa hàng kế hoạch trả hàng");
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
              <p>Lập kế hoạch trả hàng</p>
            </div>
            <div className="box">
              <div className="row-jcsb">
                <div className="input__supplier__planImport row-jcsb">
                  <p>Nhà cung cấp:</p>
                  <div className="input__choose__supplier__planImport">
                    <div className="dropdown">
                      <div
                        id="border__dropdown__Supplier"
                        className="dropdown__btn"
                        onClick={() => dropdownSupplierClick()}
                      >
                        <input
                          type="text"
                          value={selectedSupplier}
                          placeholder="Chọn nhà cung cấp..."
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
                <div className="input__type__product__planImport row-jcsb">
                  <p>Loại sản phẩm:</p>
                  <div className="input__choose__typeProduct__planImport">
                    <div className="dropdown">
                      <div
                        id="border__dropdown__TypeProduct"
                        className="dropdown__btn"
                        onClick={() => dropdownTypeProductClick()}
                      >
                        <input
                          type="text"
                          value={selectedTypeProduct}
                          placeholder="Chọn loại sản phẩm..."
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
              </div>
              <br />
              <div className="row-jcsb">
                <div className="input__name__product__planImport row-jcsb">
                  <p>Tên sản phẩm:</p>
                  <div className="input__choose__nameProduct__planImport">
                    <div className="dropdown">
                      <div
                        id="border__dropdown__NameProduct"
                        className="dropdown__btn"
                        onClick={() => dropdownNameProductClick()}
                      >
                        <input
                          type="text"
                          value={selectedNameProduct}
                          placeholder="Chọn tên sản phẩm..."
                          readOnly
                        />
                        <img src={IconDropdownGrey} alt="" />
                      </div>
                      {isActiveNameProduct && (
                        <div className="dropdown__content">
                          {listNameProduct.map((option) => (
                            <div
                              onClick={() => {
                                dropdownItemNameProductClick(option.id);
                              }}
                              className="dropdown__item"
                            >
                              {option.nameProduct}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="input__nature__planImport row-jcsb">
                  <p>Tính chất:</p>
                  <div className="input__choose__nature__planImport">
                    <div className="dropdown">
                      <div
                        id="border__dropdown__Nature"
                        className="dropdown__btn"
                        onClick={() => dropdownNatureClick()}
                      >
                        <input
                          type="text"
                          value={selectedNature}
                          placeholder="Chọn tính chất sản phẩm..."
                          readOnly
                        />
                        <img src={IconDropdownGrey} alt="" />
                      </div>
                      {isActiveNature && (
                        <div className="dropdown__content">
                          {listNameProduct[idNameProduct - 1].listNature.map(
                            (option) => (
                              <div
                                onClick={() => {
                                  dropdownItemNatureClick(option.id);
                                }}
                                className="dropdown__item"
                              >
                                {option.nameNature}
                              </div>
                            )
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div className="row-jcsb">
                <div className="input__amountStock__planImport row-jcsb">
                  <p>Hạn sử dụng:</p>
                  <div className="input__infoProduct__planImport">
                    <input className="input" readOnly value={valueExpiry} />
                  </div>
                </div>
                <div className="input__price__planImport row-jcsb">
                  <p>Số lượng tồn:</p>
                  <div className="input__infoProduct__planImport">
                    <input className="input" readOnly value={valueMountStock} />
                  </div>
                </div>
                <div className="input__amountImport__planImport row-jcsb">
                  <p>Ngày nhập:</p>
                  <div className="input__infoProduct__planImport">
                    <input className="input" readOnly value={valueDateImport} />
                  </div>
                </div>
              </div>
              <br />
              <div className="group__btn__planImport">
                <button
                  className="button"
                  onClick={() => AddListPlanningReturnProduct()}
                >
                  Thêm vào danh sách
                </button>
              </div>
            </div>
            <div className="box">
              <div class="table">
                <table>
                  <tr>
                    <th className="name">Tên sản phẩm</th>
                    <th className="trademark">Thương hiệu</th>
                    <th className="nature__detailProduct">Tính chất</th>
                    <th className="price__detailProduct">Ngày nhập</th>
                    <th className="price__detailProduct">Hạn sử dụng</th>
                    <th className="price__detailProduct">Giá nhập</th>
                    <th className="amout__detailProduct">Số lượng tồn</th>
                    <th className="price__detailProduct">Tổng tiền</th>
                    <th>Xoá</th>
                  </tr>
                  {listProductToReturn.map((e) => (
                    <tr>
                      <td className="name">{e.name}</td>
                      <td className="trademark">{e.trademark}</td>
                      <td className="nature__detailProduct">{e.nature}</td>
                      <td className="price__detailProduct">{e.dateImport}</td>
                      <td className="price__detailProduct">{e.expiry}</td>
                      <td className="price__detailProduct">{e.price}</td>
                      <td className="amout__detailProduct">{e.amountStock}</td>
                      <td className="price__detailProduct">{e.total}</td>
                      <td className="amout__detailProduct">
                        <i
                          class="fa fa-trash"
                          onClick={() => DeletedProductToReturn(e.id)}
                        />
                      </td>
                    </tr>
                  ))}
                </table>
                <hr />
              </div>
              <br />
              <div className="group__btn__planImport">
                <button className="button" onClick={() => SendReturnPlan()}>
                  Gửi kế hoạch trả hàng
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
