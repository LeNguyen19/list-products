import React, { useState } from "react";
import "./style.css";
import Menu from "../../components/MenuAdmin/index";
import Header from "../../components/Header/index";
import iconEvent from "../../assets/images/icon-event.svg";
import IconDropdownGrey from "../../assets/images/dropdownGrey.svg";
import { Link } from "react-router-dom";
import { DatePicker, Space } from "antd";
import "react-datepicker/dist/react-datepicker.css";

export default function Index() {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState();
  const [selectedDateStart, setSelectedDateStart] = useState();
  const [selectedDateEnd, setSelectedDateEnd] = useState();
  const [nameEvent, setNameEvent] = useState();
  const [desEvent, setDesEvent] = useState();
  const [erroDate, setErroDate] = useState(true);
  const [erroDateEnd, setErroDateEnd] = useState(true);
  const [erroNumber, setErroNumber] = useState(true);

  // Form1 _________________________________________________________________________________

  const [isActiveTypeProduct, setIsActiveTypeProduct] = useState(false);
  const [selectedTypeProduct, setSelectedTypeProduct] = useState();
  const [codeTypeProduct, setCodeTypeProduct] = useState(0);
  const [isActiveProduct, setIsActiveProduct] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState();
  const [idEvent, setIdEvent] = useState();

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
    {
      id: 3,
      nameForm: "Khuyến mãi theo hoá đơn",
    },
  ];

  function dropdownFormClick() {
    setIsActive(!isActive);
    document.getElementById("border__dropdown").style.border =
      "1px solid #FA748F";
  }

  function dropdownItemFormClick(id) {
    setIdEvent(id);
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
  // ----------------------------------------

  const listProduct = [
    {
      id: 1,
      nameProduct: "Son ABC",
      idTypeProduct: 1,
    },
    {
      id: 2,
      nameProduct: "Son JDU",
      idTypeProduct: 1,
    },
    {
      id: 3,
      nameProduct: "Nước hoa XYZ",
      idTypeProduct: 2,
    },
    {
      id: 4,
      nameProduct: "Nước hoa KVN",
      idTypeProduct: 2,
    },
    {
      id: 5,
      nameProduct: "Sữa tắm EHJ",
      listTypeProduct: 3,
    },
    {
      id: 6,
      nameProduct: "Sữa tắm AND",
      listTypeProduct: 3,
    },
  ];

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
    setSelectedProduct(listProduct[id - 1].nameProduct);
    setIsActiveProduct(false);
    document.getElementById("border__dropdown__product").style.border =
      "1px solid #D9D9D9";
  }

  //------------------------------------------
  const listTypeProduct = [
    {
      id: 1,
      nameTypeProduct: "Son",
    },
    {
      id: 2,
      nameTypeProduct: "Nước hoa",
    },
    {
      id: 3,
      nameTypeProduct: "Sữa tắm",
    },
  ];

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

  //------------------------------------------
  const listTypePromotion = [
    {
      id: 1,
      nameTypePromotion: "Son",
    },
    {
      id: 2,
      nameTypePromotion: "Nước hoa",
    },
    {
      id: 3,
      nameTypePromotion: "Phấn mắt",
    },
  ];

  function dropdownPromotionaTypelProductsClick() {
    setIsActivePromotionaTypelProducts(!isActivePromotionaTypelProducts);
    document.getElementById(
      "border__dropdown__promotionaTypelProducts"
    ).style.border = "1px solid #FA748F";
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

  //------------------------------------------
  const listPromotionProduct = [
    {
      id: 1,
      namePromotinonProduct: "Son 123",
    },
    {
      id: 2,
      namePromotinonProduct: "Son 456",
    },
    {
      id: 3,
      namePromotinonProduct: "Son 789",
    },
    {
      id: 4,
      namePromotinonProduct: "Nước hoa 123",
    },
    {
      id: 5,
      namePromotinonProduct: "Nước hoa 456",
    },
    {
      id: 6,
      namePromotinonProduct: "Nước hoa 789",
    },
  ];

  function dropdownPromotionProductClick() {
    if (codePromotionaTypelProducts === 0) {
      alert("Chưa chọn loại sản phẩm");
      setIsActivePromotionProduct(false);
    } else {
      setIsActivePromotionProduct(!isActivePromotionProduct);
      document.getElementById(
        "border__dropdown__promotionProduct"
      ).style.border = "1px solid #FA748F";
    }
  }

  function dropdownItemPromotionProductClick(id) {
    setSelectedPromotionProduct(
      listPromotionProduct[id - 1].namePromotinonProduct
    );
    setIsActivePromotionProduct(false);
    document.getElementById("border__dropdown__promotionProduct").style.border =
      "1px solid #D9D9D9";
    setIsActivePromotionProduct(false);
  }

  function saveform1() {
    if (
      nameEvent === undefined ||
      desEvent === undefined ||
      selectedDateStart === undefined ||
      selectedDateEnd === undefined ||
      selectedProduct === undefined ||
      amoutBuy === undefined ||
      selectedPromotionProduct === undefined ||
      amoutDonate === undefined ||
      selectedTypeProduct === undefined ||
      selectedPromotionaTypelProducts === undefined
    ) {
      alert("Vui lòng nhập đầy đủ thông tin!");
    } else {
      var day = new Date();
      var today = day.getDate();
      var currentMonth = day.getMonth() + 1;
      var currentYear = day.getFullYear();
      var dateStart = selectedDateStart.$D;
      var monthStart = selectedDateStart.$M + 1;
      var yearStart = selectedDateStart.$y;
      var dateEnd = selectedDateEnd.$D;
      var monthEnd = selectedDateEnd.$M + 1;
      var yearEnd = selectedDateEnd.$y;
      if (
        currentYear > yearStart ||
        (currentMonth > monthStart && currentYear === yearStart) ||
        (today > dateStart &&
          currentMonth === monthStart &&
          currentYear === yearStart)
      ) {
        setErroDate(false);
        setErroDateEnd(true);
      } else if (
        yearStart > yearEnd ||
        (monthStart > monthEnd && yearStart === yearEnd) ||
        (dateStart > dateEnd &&
          monthStart === monthEnd &&
          yearStart === yearEnd)
      ) {
        setErroDateEnd(false);
        setErroDate(true);
      } else if (isNaN(amoutBuy) === true || isNaN(amoutDonate) === true) {
        setErroNumber(false);
      } else {
        setErroNumber(true);
        setErroDate(true);
        setErroDateEnd(true);
        console.log("Tên chương trình khuyến mãi: ", nameEvent);
        console.log("Mô tả chương trình khuyến mãi: ", desEvent);
        console.log(
          "Ngày bắt đầu: ",
          dateStart + "/" + monthStart + "/" + yearStart
        );
        console.log(
          "Ngày kết thúc: ",
          dateEnd + "/" + monthEnd + "/" + yearEnd
        );
        console.log("Mã hình thức khuyến mãi: ", idEvent);
        console.log(
          "Tên hình thức khuyến mãi: ",
          listForm[idEvent - 1].nameForm
        );
        console.log("Sản phẩm mua: ", selectedProduct);
        console.log("SL mua: " + amoutBuy);
        console.log("Sản phẩm tặng: ", selectedPromotionProduct);
        console.log("SL tặng: " + amoutDonate);
      }
    }
  }

  function cancelForm1() {
    document.getElementById("form1").style.display = "none";
    document.getElementById("input__choose__form").value = "";
    document
      .querySelectorAll(".value__input__add__event")
      .forEach((input) => (input.value = ""));
    setAmoutDonate(undefined);
    setSelectedPromotionProduct(undefined);
    setAmoutBuy(undefined);
    setSelectedProduct(undefined);
    setSelectedPromotionaTypelProducts(undefined);
    setSelectedTypeProduct(undefined);
    setSelected(undefined);
  }

  // Form2 _________________________________________________________________________________

  const [isActiveTypeSale, setIsActiveTypeSale] = useState(false);
  const [isActiveProductSale, setIsActiveProductSale] = useState(false);
  const [selectedTypeSale, setSelectedTypeSale] = useState();
  const [selectedProductSale, setSelectedProductSale] = useState();
  const [codeTypeSale, setCodeTypeSale] = useState(0);

  const [isActiveTypeDiscount, setIsActiveTypeDiscount] = useState(false);
  const [selectedTypeDiscount, setSelectedTypeDiscount] = useState();

  const [valueSale, setValueSale] = useState();
  const [valueSaleMax, setValueSaleMax] = useState();

  const [erroSale, setErroSale] = useState(true);
  const [erroSaleMax, setErroSaleMax] = useState(true);
  const [valueDiscount, setValueDiscount] = useState(true);

  const listTypeDisCount = [
    {
      id: 1,
      nameTypeDiscount: "Giảm giá theo phần trăm",
    },
    {
      id: 2,
      nameTypeDiscount: "Giảm giá theo mệnh giá",
    },
  ];

  const listTypeSale = [
    {
      id: 1,
      nameTypeSale: "Son",
    },
    {
      id: 2,
      nameTypeSale: "Mặt nạ",
    },
    {
      id: 3,
      nameTypeSale: "Secrum dưỡng da",
    },
  ];

  const listProductSale = [
    {
      id: 1,
      nameSale: "Son 1",
      idTypeSale: 1,
    },
    {
      id: 2,
      nameSale: "Son 2",
      idTypeSale: 1,
    },
    {
      id: 3,
      nameSale: "Son 3",
      idTypeSale: 1,
    },
    {
      id: 4,
      nameSale: "Mặt nạ 1",
      idTypeSale: 2,
    },
    {
      id: 5,
      nameSale: "Mặt nạ 2",
      idTypeSale: 2,
    },
    {
      id: 6,
      nameSale: "Mặt nạ 3",
      idTypeSale: 2,
    },
    {
      nameSale: "Secrum 1",
      idTypeSale: 3,
    },
    {
      id: 7,
      nameSale: "Secrum 2",
      idTypeSale: 3,
    },
    {
      id: 8,
      nameSale: "Secrum 3",
      idTypeSale: 3,
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

  function dropdownItemProductSaleClick(id) {
    setSelectedProductSale(listProductSale[id - 1].nameSale);
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
    console.log(id);
    setSelectedTypeDiscount(listTypeDisCount[id - 1].nameTypeDiscount);
    setIsActiveTypeDiscount(false);
    document.getElementById("border__dropdown__TypeDiscount").style.border =
      "1px solid #D9D9D9";

    if (id === 1) {
      setValueDiscount(true);
    }
    if (id === 2) {
      setValueDiscount(false);
    }
  }

  // KIỂM TRA GIÁ TRỊ NHẬP -----------------------------------------------
  function checkInputSaleMax() {
    if (isNaN(valueSaleMax) || valueSaleMax.length < 3) {
      setErroSaleMax(false);
    } else {
      setErroSaleMax(true);
    }
  }

  function checkInputSale() {
    if (isNaN(valueSale) || valueSale.length < 3) {
      setErroSaleMax(false);
    } else {
      setErroSaleMax(true);
    }
  }

  function saveform2() {
    if (
      nameEvent === undefined ||
      desEvent === undefined ||
      selectedDateStart === undefined ||
      selectedDateEnd === undefined ||
      selectedTypeSale === undefined ||
      selectedProductSale === undefined ||
      selectedTypeDiscount === undefined ||
      valueSale === undefined ||
      valueSaleMax === undefined
    ) {
      alert("Vui lòng nhập đầy đủ thông tin!");
    } else {
      var day = new Date();
      var today = day.getDate();
      var currentMonth = day.getMonth() + 1;
      var currentYear = day.getFullYear();
      var dateStart = selectedDateStart.$D;
      var monthStart = selectedDateStart.$M + 1;
      var yearStart = selectedDateStart.$y;
      var dateEnd = selectedDateEnd.$D;
      var monthEnd = selectedDateEnd.$M + 1;
      var yearEnd = selectedDateEnd.$y;
      if (
        currentYear > yearStart ||
        (currentMonth > monthStart && currentYear === yearStart) ||
        (today > dateStart &&
          currentMonth === monthStart &&
          currentYear === yearStart)
      ) {
        setErroDate(false);
        setErroDateEnd(true);
      } else if (
        yearStart > yearEnd ||
        (monthStart > monthEnd && yearStart === yearEnd) ||
        (dateStart > dateEnd &&
          monthStart === monthEnd &&
          yearStart === yearEnd)
      ) {
        setErroDateEnd(false);
        setErroDate(true);
      } else if (isNaN(valueSale) === true) {
        setErroSale(false);
      } else {
        setErroSale(true);
        setErroDate(true);
        setErroDateEnd(true);
        console.log("Tên chương trình khuyến mãi: ", nameEvent);
        console.log("Mô tả chương trình khuyến mãi: ", desEvent);
        console.log(
          "Ngày bắt đầu: ",
          dateStart + "/" + monthStart + "/" + yearStart
        );
        console.log(
          "Ngày kết thúc: ",
          dateEnd + "/" + monthEnd + "/" + yearEnd
        );
        console.log("Mã hình thức khuyến mãi: ", idEvent);
        console.log(
          "Tên hình thức khuyến mãi: ",
          listForm[idEvent - 1].nameForm
        );
        console.log("Sản phẩm khuyến mãi: ", selectedProductSale);
        console.log("Loại khuyến mãi: ", selectedTypeDiscount);
        console.log("Giá trị khuyến mãi: ", valueSale);
        console.log("Giá trị khuyến mãi tối đa: ", valueSaleMax);
      }
    }
  }

  function cancelform2() {
    document.getElementById("form2").style.display = "none";
    document.getElementById("input__choose__form").value = "";
    document
      .querySelectorAll(".value__input__add__event")
      .forEach((input) => (input.value = ""));
    setSelected(undefined);
    setValueSaleMax(undefined);
    setValueSale(undefined);
    setSelectedTypeDiscount(undefined);
    setSelectedTypeSale(undefined);
    setSelectedProductSale(undefined);
  }

  // Form3 _________________________________________________________________________________
  const [isActiveDiscountOrder, setIsActiveDiscountOrder] = useState(false);
  const [selectedDiscountOrder, setSelectedDiscountOrder] = useState();
  const [valueOrder, setValueOrder] = useState();
  const [valuePromotion, setValuePromotion] = useState();
  const [valuePromotionMax, setValuePromotionMax] = useState();
  const [erroPromotion, setErroPromotion] = useState(true);
  const [erroPromotionMax, setErroPromotionMax] = useState(true);
  const [errPromotion, setErrPromotion] = useState(true);

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
    if (id === 1) {
      setErrPromotion(true);
    }
    if (id === 2) {
      setErrPromotion(false);
    }
  }

  // KIỂM TRA GIÁ TRỊ NHẬP -----------------------------------------------
  function checkInputPromotionMax() {
    if (isNaN(valuePromotionMax) || valuePromotionMax.length < 3) {
      setErroPromotionMax(false);
    } else {
      setErroPromotionMax(true);
    }
  }

  function checkInputOrder() {
    if (isNaN(valueOrder) || valueOrder.length < 3) {
      setErroPromotionMax(false);
    } else {
      setErroPromotionMax(true);
    }
  }

  function checkInputPromotion() {
    if (isNaN(valuePromotion) || valuePromotion.length < 3) {
      setErroPromotionMax(false);
    } else {
      setErroPromotionMax(true);
    }
  }

  function saveform3() {
    if (
      nameEvent === undefined ||
      desEvent === undefined ||
      selectedDateStart === undefined ||
      selectedDateEnd === undefined ||
      valueOrder === undefined ||
      selectedDiscountOrder === undefined ||
      valuePromotion === undefined ||
      valuePromotionMax === undefined
    ) {
      alert("Vui lòng nhập đầy đủ thông tin!");
    } else {
      var day = new Date();
      var today = day.getDate();
      var currentMonth = day.getMonth() + 1;
      var currentYear = day.getFullYear();
      var dateStart = selectedDateStart.$D;
      var monthStart = selectedDateStart.$M + 1;
      var yearStart = selectedDateStart.$y;
      var dateEnd = selectedDateEnd.$D;
      var monthEnd = selectedDateEnd.$M + 1;
      var yearEnd = selectedDateEnd.$y;
      if (
        currentYear > yearStart ||
        (currentMonth > monthStart && currentYear === yearStart) ||
        (today > dateStart &&
          currentMonth === monthStart &&
          currentYear === yearStart)
      ) {
        setErroDate(false);
        setErroDateEnd(true);
      } else if (
        yearStart > yearEnd ||
        (monthStart > monthEnd && yearStart === yearEnd) ||
        (dateStart > dateEnd &&
          monthStart === monthEnd &&
          yearStart === yearEnd)
      ) {
        setErroDateEnd(false);
        setErroDate(true);
      } else if (isNaN(valuePromotion) === true) {
        setErroPromotion(false);
      } else {
        setErroPromotion(true);
        setErroDate(true);
        setErroDateEnd(true);

        console.log("Tên chương trình khuyến mãi: ", nameEvent);
        console.log("Mô tả chương trình khuyến mãi: ", desEvent);
        console.log(
          "Ngày bắt đầu: ",
          dateStart + "/" + monthStart + "/" + yearStart
        );
        console.log(
          "Ngày kết thúc: ",
          dateEnd + "/" + monthEnd + "/" + yearEnd
        );
        console.log("Mã hình thức khuyến mãi: ", idEvent);
        console.log(
          "Tên hình thức khuyến mãi: ",
          listForm[idEvent - 1].nameForm
        );
        console.log("Giá trị đơn hàng: ", valueOrder);
        console.log("Loại khuyến mãi: ", selectedDiscountOrder);
        console.log("Giá trị khuyến mãi: ", valuePromotion);
        console.log("Giá trị khuyến mãi tối đa: ", valuePromotionMax);
      }
    }
  }

  function cancelForm3() {
    document.getElementById("form3").style.display = "none";
    document.getElementById("input__choose__form").value = "";
    document
      .querySelectorAll(".value__input__add__event")
      .forEach((input) => (input.value = ""));
    setSelected(undefined);
    setValuePromotionMax(undefined);
    setValuePromotion(undefined);
    setValueOrder(undefined);
    setSelectedDiscountOrder(undefined);
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
            <p>Thêm chương trình khuyến mãi</p>
          </div>
          <div className="box">
            <div className="row-jcsb">
              <div className="input__nameAddEvent">
                <input
                  className="input"
                  placeholder="Nhập tên chương trình khuyến mãi..."
                  onChange={(e) => setNameEvent(e.target.value)}
                />
              </div>
              <div className="input__desAddEvent">
                <input
                  className="input"
                  placeholder="Nhập mô tả chương trình khuyến mãi..."
                  onChange={(e) => setDesEvent(e.target.value)}
                />
              </div>
            </div>
            <br />
            <div className="row-jcsb">
              <div className="input__dateStart__addEvent">
                <Space direction="vertical">
                  <DatePicker
                    placeholder="Chọn ngày bắt đầu..."
                    selected={selectedDateStart}
                    onChange={(date) => setSelectedDateStart(date)}
                    format="DD/MM/YYYY"
                  />
                </Space>
              </div>
              <div className="input__dateEnd__addEvent">
                <Space direction="vertical">
                  <DatePicker
                    placeholder="Chọn ngày kết thúc..."
                    selected={selectedDateEnd}
                    onChange={(date) => setSelectedDateEnd(date)}
                    format="DD/MM/YYYY"
                  />
                </Space>
              </div>
              <div className="input__formEvent">
                <div className="dropdown">
                  <div
                    id="border__dropdown"
                    className="dropdown__btn"
                    onClick={() => dropdownFormClick()}
                  >
                    <input
                      id="input__choose__form"
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
            <div
              className="groupError"
              style={
                erroDate === true ? { display: "none" } : { display: "block" }
              }
            >
              <p>
                *Ngày/tháng/năm bắt đầu sự kiện phải sau ngày/tháng/năm hiện
                tại*
              </p>
            </div>
            <div
              className="groupError"
              style={
                erroDateEnd === true
                  ? { display: "none" }
                  : { display: "block" }
              }
            >
              <p>
                *Ngày/tháng/năm kết thúc sự kiện phải sau ngày/tháng/năm bắt đầu
                sự kiện*
              </p>
            </div>
          </div>
          <div id="form1">
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
                        className="value__input__add__event"
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
                        className="value__input__add__event"
                        type="text"
                        value={selectedProduct}
                        placeholder="Chọn sản phẩm mua..."
                        readOnly
                      />
                      <img src={IconDropdownGrey} alt="" />
                    </div>
                    {isActiveProduct && (
                      <div className="dropdown__content">
                        {listProduct.map((e) => (
                          <div
                            onClick={() => {
                              dropdownItemProductClick(e.id);
                            }}
                            className="dropdown__item"
                          >
                            {e.nameProduct}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <p>Số lượng:</p>
                <div className="input__amout__addEvent">
                  <input
                    className="input amount__input__addEvent value__input__add__event"
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
                        className="value__input__add__event"
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
                        className="value__input__add__event"
                        value={selectedPromotionProduct}
                        type="text"
                        placeholder="Chọn sản phẩm tặng..."
                        readOnly
                      />
                      <img src={IconDropdownGrey} alt="" />
                    </div>
                    {isActivePromotionProduct && (
                      <div className="dropdown__content">
                        {listPromotionProduct.map((e) => (
                          <div
                            onClick={() => {
                              dropdownItemPromotionProductClick(e.id);
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
                    className="input amount__input__addEvent value__input__add__event"
                    onChange={(e) => setAmoutDonate(e.target.value)}
                  />
                </div>
              </div>
              <br />
              <div
                className="groupError"
                style={
                  erroNumber === true
                    ? { display: "none" }
                    : { display: "block" }
                }
              >
                <p>*Giá trị số lượng phải là số nguyên dương*</p>
              </div>
              <div className="group__input__addEvent">
                <button className="button" onClick={() => saveform1()}>
                  Lưu thông tin
                </button>
                <button className="button" onClick={() => cancelForm1()}>
                  Huỷ
                </button>
              </div>
            </div>
          </div>
          {/* ------------------------------------------------------------------------------------- */}
          <div id="form3">
            <div className="box">
              <p>Nhập thông tin:</p>
              <div className="row-jcsb">
                <div className="input__valuePromotin">
                  <input
                    className="input value__input__add__event"
                    placeholder="Nhập giá trị đơn hàng..."
                    onChange={(e) => setValueOrder(e.target.value)}
                    onInput={() => checkInputOrder()}
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
                        className="value__input__add__event"
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
                    style={
                      errPromotion === false
                        ? { display: "none" }
                        : { display: "block" }
                    }
                    className="input"
                    placeholder="Nhập giá trị khuyến mãi..."
                    onChange={(e) => setValuePromotion(e.target.value)}
                  />
                  <input
                    style={
                      errPromotion === true
                        ? { display: "none" }
                        : { display: "block" }
                    }
                    className="input value__input__add__event"
                    placeholder="Nhập giá trị khuyến mãi..."
                    onChange={(e) => setValuePromotion(e.target.value)}
                    onInput={() => checkInputPromotion()}
                  />
                </div>
                <div className="input__valuePromotin">
                  <input
                    className="input value__input__add__event"
                    placeholder="Giá trị khuyến mãi tối đa..."
                    onChange={(e) => setValuePromotionMax(e.target.value)}
                    onInput={() => checkInputPromotionMax()}
                  />
                </div>
              </div>
              <br />
              <div
                className="groupError"
                style={
                  erroPromotionMax === true
                    ? { display: "none" }
                    : { display: "block" }
                }
              >
                <p>*Vui lòng nhập đúng mệnh giá tiền tệ hiện hành*</p>
              </div>
              <div
                className="groupError"
                style={
                  erroPromotion === true
                    ? { display: "none" }
                    : { display: "block" }
                }
              >
                <p>*Vui lòng nhập giá trị là số nguyên dương*</p>
              </div>
              <div className="group__btn__form3">
                <button className="button" onClick={() => saveform3()}>
                  Lưu thông tin
                </button>
                <button className="button" onClick={() => cancelForm3()}>
                  Huỷ
                </button>
              </div>
            </div>
          </div>
          {/* ----------------------------------------------------------------------------------- */}
          <div id="form2">
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
                        className="value__input__add__event"
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
                        className="value__input__add__event"
                        value={selectedProductSale}
                        type="text"
                        placeholder="Chọn sản phẩm..."
                        readOnly
                      />
                      <img src={IconDropdownGrey} alt="" />
                    </div>
                    {isActiveProductSale && (
                      <div className="dropdown__content">
                        {listProductSale.map((e) => (
                          <div
                            onClick={() => {
                              dropdownItemProductSaleClick(e.id);
                            }}
                            className="dropdown__item"
                          >
                            {e.nameSale}
                          </div>
                        ))}
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
                        className="value__input__add__event"
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
                    style={
                      valueDiscount === false
                        ? { display: "none" }
                        : { display: "block" }
                    }
                    className="input value__input__add__event"
                    placeholder="Nhập giá trị khuyến mãi..."
                    onChange={(e) => setValueSale(e.target.value)}
                  />
                  <input
                    style={
                      valueDiscount === true
                        ? { display: "none" }
                        : { display: "block" }
                    }
                    className="input value__input__add__event"
                    placeholder="Nhập giá trị khuyến mãi..."
                    onChange={(e) => setValueSale(e.target.value)}
                    onInput={() => checkInputSale()}
                  />
                </div>
                <div className="input__valuePromotin">
                  <input
                    className="input value__input__add__event"
                    placeholder="Giá trị khuyến mãi tối đa..."
                    onChange={(e) => setValueSaleMax(e.target.value)}
                    onInput={() => checkInputSaleMax()}
                  />
                </div>
              </div>
              <br />
              <div
                className="groupError"
                style={
                  erroSaleMax === true
                    ? { display: "none" }
                    : { display: "block" }
                }
              >
                <p>*Vui lòng nhập đúng mệnh giá tiền tệ hiện hành*</p>
              </div>
              <div
                className="groupError"
                style={
                  erroSale === true ? { display: "none" } : { display: "block" }
                }
              >
                <p>*Vui lòng nhập giá trị là số nguyên dương*</p>
              </div>
              <div className="group__btn__form3">
                <button className="button" onClick={() => saveform2()}>
                  Lưu thông tin
                </button>
                <button className="button" onClick={() => cancelform2()}>
                  Huỷ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
