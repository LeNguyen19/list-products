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

  // Form1 _________________________________________________________________________________

  const [isActiveTypeProduct, setIsActiveTypeProduct] = useState(false);
  const [selectedTypeProduct, setSelectedTypeProduct] = useState();
  const [codeTypeProduct, setCodeTypeProduct] = useState(0);
  const [isActiveProduct, setIsActiveProduct] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState();

  const [isActivePromotionaTypelProducts, setIsActivePromotionaTypelProducts] =
    useState(false);
  const [isActivePromotionProduct, setIsActivePromotionProduct] =
    useState(false);
  const [selectedPromotionaTypelProducts, setSelectedPromotionaTypelProducts] =
    useState();
  const [selectedPromotionProduct, setSelectedPromotionProduct] = useState();
  const [codePromotionaTypelProducts, setCodePromotionaTypelProducts] =
    useState(0);

  const [amoutBuy, setAmoutBuy] = useState();
  const [amoutDonate, setAmoutDonate] = useState();

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

  const listTypeProduct = [
    {
      id: 1,
      nameTypeProduct: "Son",
      listProduct: [
        {
          id: 1,
          nameProduct: "Son ABC",
        },
        {
          id: 2,
          nameProduct: "Son JDU",
        },
      ],
    },
    {
      id: 2,
      nameTypeProduct: "Nước hoa",
      listProduct: [
        {
          id: 3,
          nameProduct: "Nước hoa XYZ",
        },
        {
          id: 4,
          nameProduct: "Nước hoa KVN",
        },
      ],
    },
    {
      id: 3,
      nameTypeProduct: "Sữa tắm",
      listProduct: [
        {
          id: 5,
          nameProduct: "Sữa tắm EHJ",
        },
        {
          id: 6,
          nameProduct: "Sữa tắm AND",
        },
      ],
    },
  ];

  const listTypePromotion = [
    {
      id: 1,
      nameTypePromotion: "Son",
      listPromotionProduct: [
        {
          namePromotinonProduct: "Son 123",
        },
        {
          namePromotinonProduct: "Son 456",
        },
        {
          namePromotinonProduct: "Son 789",
        },
      ],
    },
    {
      id: 2,
      nameTypePromotion: "Nước hoa",
      listPromotionProduct: [
        {
          namePromotinonProduct: "Nước hoa 123",
        },
        {
          namePromotinonProduct: "Nước hoa 456",
        },
        {
          namePromotinonProduct: "Nước hoa 789",
        },
      ],
    },
    {
      id: 3,
      nameTypePromotion: "Phấn mắt",
      listPromotionProduct: [
        {
          namePromotinonProduct: "Phấn mắt 123",
        },
        {
          namePromotinonProduct: "Phấn mắt 456",
        },
        {
          namePromotinonProduct: "Phấn mắt 789",
        },
      ],
    },
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

  function dropdownProductClick() {
    if (codeTypeProduct === 0) {
      alert("Chưa chọn loại sản phẩm");
      setIsActiveTypeProduct(false);
    } else {
      setIsActiveProduct(!isActiveProduct);
      document.getElementById("border__dropdown__product").style.border =
        "1px solid #FA748F";
    }
  }

  function dropdownItemProductClick(id) {
    setSelectedProduct(id);
    setIsActiveProduct(false);
    document.getElementById("border__dropdown__product").style.border =
      "1px solid #D9D9D9";
  }

  function dropdownTypeProductClick() {
    setIsActiveTypeProduct(!isActiveTypeProduct);
    document.getElementById("border__dropdown__typeProduct").style.border =
      "1px solid #FA748F";
  }

  function dropdownItemTypeProductClick(id) {
    setSelectedTypeProduct(listTypeProduct[id - 1].nameTypeProduct);
    setIsActiveTypeProduct(false);
    setCodeTypeProduct(id);
    document.getElementById("border__dropdown__typeProduct").style.border =
      "1px solid #D9D9D9";
  }

  function dropdownPromotionaTypelProductsClick() {
    setIsActivePromotionaTypelProducts(!isActivePromotionaTypelProducts);
    document.getElementById(
      "border__dropdown__promotionaTypelProducts"
    ).style.border = "1px solid #FA748F";
  }

  function dropdownPromotionProductClick() {
    if (codePromotionaTypelProducts === 0) {
      alert("Chưa chọn tỉnh/thành phố");
      setIsActivePromotionProduct(false);
    } else {
      setIsActivePromotionProduct(!isActivePromotionProduct);
      document.getElementById(
        "border__dropdown__promotionProduct"
      ).style.border = "1px solid #FA748F";
    }
  }

  function dropdownItemPromotionaTypelProductsClick(id) {
    setSelectedPromotionaTypelProducts(
      listTypePromotion[id - 1].nameTypePromotion
    );
    setIsActivePromotionaTypelProducts(false);
    setCodePromotionaTypelProducts(id);
    document.getElementById(
      "border__dropdown__promotionaTypelProducts"
    ).style.border = "1px solid #D9D9D9";
  }

  function dropdownItemPromotionProductClick(data) {
    setSelectedPromotionProduct(data);
    setIsActivePromotionProduct(false);
    document.getElementById("border__dropdown__promotionProduct").style.border =
      "1px solid #D9D9D9";
    setIsActivePromotionProduct(false);
  }

  function saveform1() {
    setSelectedTypeProduct("");
    setSelectedProduct("");
    setSelectedPromotionProduct("");
    setSelectedPromotionaTypelProducts("");
    document
      .querySelectorAll(".amount__input__addEvent")
      .forEach((input) => (input.value = ""));

    console.log("SL mua:" + amoutBuy);
    console.log("SL tặng:" + amoutDonate);
  }

  function updateEventBonus() {
    document.getElementById("update__eventBonus").style.display = "block";
  }

  function cancelEventBonus() {
    document.getElementById("update__eventBonus").style.display = "none";
    setSelectedTypeProduct("");
    setSelectedProduct("");
    setSelectedPromotionProduct("");
    setSelectedPromotionaTypelProducts("");
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
          <div id="update__eventBonus">
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
            <div className="box ">
              <p>Sản phẩm mua:</p>
              <div className="row-jcsb title__input">
                <p>Loại sản phẩm:</p>
                <div className="input__typeProducts__addEvent">
                  <div className="dropdown">
                    <div
                      id="border__dropdown__typeProduct"
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
                        {listTypeProduct.map((option) => (
                          <div
                            onClick={() => {
                              dropdownItemTypeProductClick(option.id);
                            }}
                            className="dropdown__item"
                          >
                            {option.nameTypeProduct}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <p>Sản phẩm:</p>
                <div className="input__product__addEvent">
                  <div className="dropdown">
                    <div
                      id="border__dropdown__product"
                      className="dropdown__btn"
                      onClick={() => dropdownProductClick()}
                    >
                      <input
                        type="text"
                        value={selectedProduct}
                        placeholder="Chọn sản phẩm mua..."
                        readOnly
                      />
                      <img src={IconDropdownGrey} alt="" />
                    </div>
                    {isActiveProduct && (
                      <div className="dropdown__content">
                        {listTypeProduct[codeTypeProduct - 1].listProduct.map(
                          (e) => (
                            <div
                              onClick={() => {
                                dropdownItemProductClick(e.nameProduct);
                              }}
                              className="dropdown__item"
                            >
                              {e.nameProduct}
                            </div>
                          )
                        )}
                      </div>
                    )}
                  </div>
                </div>
                <p>Số lượng:</p>
                <div className="input__amout__addEvent">
                  <input
                    className="input amount__input__addEvent"
                    onChange={(e) => setAmoutBuy(e.target.value)}
                  />
                </div>
              </div>
              <br />
              <p>Sản phẩm tặng:</p>
              <div className="row-jcsb title__input">
                <p>Loại sản phẩm:</p>
                <div className="input__typeProducts__addEvent">
                  <div className="dropdown">
                    <div
                      id="border__dropdown__promotionaTypelProducts"
                      className="dropdown__btn"
                      onClick={() => dropdownPromotionaTypelProductsClick()}
                    >
                      <input
                        type="text"
                        value={selectedPromotionaTypelProducts}
                        placeholder="Chọn loại sản phẩm..."
                        readOnly
                      />
                      <img src={IconDropdownGrey} alt="" />
                    </div>
                    {isActivePromotionaTypelProducts && (
                      <div className="dropdown__content">
                        {listTypePromotion.map((option) => (
                          <div
                            onClick={() => {
                              dropdownItemPromotionaTypelProductsClick(
                                option.id
                              );
                            }}
                            className="dropdown__item"
                          >
                            {option.nameTypePromotion}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <p>Sản phẩm:</p>
                <div className="input__product__addEvent">
                  <div className="dropdown">
                    <div
                      id="border__dropdown__promotionProduct"
                      className="dropdown__btn"
                      onClick={() => dropdownPromotionProductClick()}
                    >
                      <input
                        value={selectedPromotionProduct}
                        type="text"
                        placeholder="Chọn sản phẩm tặng..."
                        readOnly
                      />
                      <img src={IconDropdownGrey} alt="" />
                    </div>
                    {isActivePromotionProduct && (
                      <div className="dropdown__content">
                        {listTypePromotion[
                          codePromotionaTypelProducts - 1
                        ].listPromotionProduct.map((e) => (
                          <div
                            onClick={() => {
                              dropdownItemPromotionProductClick(
                                e.namePromotinonProduct
                              );
                            }}
                            className="dropdown__item"
                          >
                            {e.namePromotinonProduct}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <p>Số lượng:</p>
                <div className="input__amout__addEvent">
                  <input
                    className="input amount__input__addEvent"
                    onChange={(e) => setAmoutDonate(e.target.value)}
                  />
                </div>
              </div>
              <br />
              <div className="group__input__addEvent">
                <button className="button" onClick={() => saveform1()}>
                  Lưu thông tin
                </button>
                <button className="button" onClick={() => cancelEventBonus()}>
                  Huỷ
                </button>
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
                  <th className="buy__addEvent">Mua</th>
                  <th className="amout__addEvent">SL</th>
                  <th className="donate__addEvent">Tặng</th>
                  <th className="amout__addEvent">SL</th>
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
                  <td className="buy__addEvent">Son 123</td>
                  <td className="amout__addEvent">1</td>
                  <td className="donate__addEvent">Son ABC</td>
                  <td className="amout__addEvent">2</td>
                  <td className="update__addEvent">
                    <i
                      class="fa fa-pencil"
                      onClick={() => updateEventBonus()}
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
