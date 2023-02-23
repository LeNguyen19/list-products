import React, { useState } from "react";
import "./style.css";
import Menu from "../../components/MenuWarehouse/index";
import Header from "../../components/Header/index";
import iconProduct from "../../assets/images/icon-product.svg";
import IconDropdownGrey from "../../assets/images/dropdownGrey.svg";

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
          quantityInStock: 25,
          priceImport: 290000,
        },
        {
          id: 2,
          nameNature: "Đỏ Hồng",
          quantityInStock: 15,
          priceImport: 280000,
        },
        {
          id: 3,
          nameNature: "Đỏ Cam",
          quantityInStock: 35,
          priceImport: 250000,
        },
      ],
    },
    {
      id: 2,
      nameProduct: "Son 456",
      trademark: "456",
      listNature: [
        {
          id: 1,
          nameNature: "Cam đất",
          quantityInStock: 10,
          priceImport: 200000,
        },
        {
          id: 2,
          nameNature: "Cam cháy",
          quantityInStock: 20,
          priceImport: 150000,
        },
        {
          id: 3,
          nameNature: "Cam san hô",
          quantityInStock: 30,
          priceImport: 180000,
        },
      ],
    },
    {
      id: 3,
      nameProduct: "Son 789",
      trademark: "789",
      listNature: [
        {
          id: 1,
          nameNature: "Hồng nude",
          quantityInStock: 15,
          priceImport: 210000,
        },
        {
          id: 2,
          nameNature: "Hồng đất",
          quantityInStock: 22,
          priceImport: 180000,
        },
        {
          id: 3,
          nameNature: "Hồng cam",
          quantityInStock: 32,
          priceImport: 150000,
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
  const [valuePrice, setValuePrice] = useState();
  const [valueMountStock, setValueMountStock] = useState();
  const [valueMountBuy, setValueMountBuy] = useState();

  function dropdownNatureClick() {
    setIsActiveNature(!isActiveNature);
    document.getElementById("border__dropdown__Nature").style.border =
      "1px solid #FA748F";
  }
  function dropdownItemNatureClick(id) {
    setSelectedNature(
      listNameProduct[idNameProduct - 1].listNature[id - 1].nameNature
    );
    setValuePrice(
      listNameProduct[idNameProduct - 1].listNature[id - 1].priceImport
    );
    setValueMountStock(
      listNameProduct[idNameProduct - 1].listNature[id - 1].quantityInStock
    );
    setIsActiveNature(false);
    document.getElementById("border__dropdown__Nature").style.border =
      "1px solid #D9D9D9";
  }

  // Thêm vào danh sách sản phẩm cần nhập --------------------------
  function AddListProductToNeed() {
    if (
      selectedSupplier === undefined ||
      selectedTypeProduct === undefined ||
      selectedNameProduct === undefined ||
      selectedNature === undefined ||
      valueMountBuy === undefined
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
      console.log("Đơn giá: ", valuePrice);
      console.log("Số lượng nhập: ", valueMountBuy);
    }
  }

  // Danh sách sản phẩm trong bản kế hoạch nhập hàng ---------------
  const [listProductToNeed, setListProductToNeed] = useState([
    {
      id: 1,
      name: "Lancome La Vie Est Belle",
      trademark: "Lancome",
      nature: "Hồng đất",
      amountStock: 10,
      price: "210.000đ",
      amountImport: 100,
      total: "210.000.000đ",
    },
  ]);

  // Xoá 1 sản phẩm trong danh sách kế hoạch nhập hàng -------------
  function DeletedProductToNeed(id) {
    alert("Mã sản phẩm cần xoá: " + id);
  }

  // Gửi kế hoạch nhập hàng ----------------------------------------
  function SendImportPlan() {
    alert("Gửi cho quản lý cửa hàng kế hoạch nhập hàng");
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
              <p>Kế hoạch nhập hàng</p>
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
                  <p>Số lượng tồn:</p>
                  <div className="input__infoProduct__planImport">
                    <input className="input" readOnly value={valueMountStock} />
                  </div>
                </div>
                <div className="input__price__planImport row-jcsb">
                  <p>Giá nhập:</p>
                  <div className="input__infoProduct__planImport">
                    <input className="input" readOnly value={valuePrice} />
                  </div>
                </div>
                <div className="input__amountImport__planImport row-jcsb">
                  <p>Số lượng nhập:</p>
                  <div className="input__infoProduct__planImport">
                    <input
                      className="input"
                      placeholder="Nhập số lượng mua..."
                      onChange={(e) => setValueMountBuy(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <br />
              <div className="group__btn__planImport">
                <button
                  className="button"
                  onClick={() => AddListProductToNeed()}
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
                    <th>Tính chất</th>
                    <th className="amout__detailProduct">SL Tồn</th>
                    <th className="price__detailProduct">Đơn giá</th>
                    <th className="amout__detailProduct">SL Nhập</th>
                    <th className="price__detailProduct">Tổng tiền</th>
                    <th>Xoá</th>
                  </tr>
                  {listProductToNeed.map((e) => (
                    <tr>
                      <td className="name">{e.name}</td>
                      <td className="trademark">{e.trademark}</td>
                      <td>{e.nature}</td>
                      <td className="amout__detailProduct">{e.amountStock}</td>
                      <td className="price__detailProduct">{e.price}</td>
                      <td className="amout__detailProduct">{e.amountImport}</td>
                      <td className="price__detailProduct">{e.total}</td>
                      <td className="amout__detailProduct">
                        <i
                          class="fa fa-trash"
                          onClick={() => DeletedProductToNeed(e.id)}
                        />
                      </td>
                    </tr>
                  ))}
                </table>
                <hr />
              </div>
              <br />
              <div className="group__btn__planImport">
                <button className="button" onClick={() => SendImportPlan()}>
                  Gửi kế hoạch nhập hàng
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
