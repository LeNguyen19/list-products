import React, { useState } from "react";
import "./style.css";
import Menu from "../../components/MenuWarehouse/index";
import Header from "../../components/Header/index";
import iconInvoice from "../../assets/images/icon-invoice.svg";
import { Link } from "react-router-dom";
import { DatePicker, Space } from "antd";
import IconDropdownGrey from "../../assets/images/dropdownGrey.svg";

export default function Index() {
  // Ngày tháng---------------------------------------------------------------
  const [selectedDateStart, setSelectedDateStart] = useState();
  const [selectedDateEnd, setSelectedDateEnd] = useState();

  // LIST TÊN SẢN PHẨM CẦN NHẬP  -------------------------------------------------------
  const [isActiveNameProduct, setIsActiveNameProduct] = useState(false);
  const [selectedNameProduct, setSelectedNameProduct] = useState();
  const [isActiveNature, setIsActiveNature] = useState(false);
  const [selectedNature, setSelectedNature] = useState();
  const [idNameProduct, setIdNameProduct] = useState();

  //DATA
  const listProductImport = [
    {
      id: 1,
      name: "Lancome La Vie Est Belle",
      listNature: [
        {
          id: 1,
          nameNature: "Hồng đất",
          price: 210000,
          amount: 10,
        },
        {
          id: 2,
          nameNature: "Cam cháy",
          price: 210000,
          amount: 10,
        },
        {
          id: 3,
          nameNature: "Đỏ cherry",
          price: 210000,
          amount: 10,
        },
      ],
      trademark: "Lancome",
    },
    {
      id: 2,
      name: "Kem Dưỡng Da Roche-Posay",
      listNature: [
        {
          id: 1,
          nameNature: "50ml",
          price: 210000,
          amount: 10,
        },
        {
          id: 2,
          nameNature: "100ml",
          price: 210000,
          amount: 10,
        },
        {
          id: 3,
          nameNature: "500ml",
          price: 210000,
          amount: 10,
        },
      ],
      trademark: "Roche-Posay",
    },
    {
      id: 3,
      name: "Armaf Club De Nuit Women",
      listNature: [
        {
          id: 1,
          nameNature: "Hương nước hoa 1",
          price: 210000,
          amount: 10,
        },
        {
          id: 2,
          nameNature: "Hương nước hoa 2",
          price: 210000,
          amount: 10,
        },
        {
          id: 3,
          nameNature: "Hương nước hoa 3",
          price: 210000,
          amount: 10,
        },
      ],
      trademark: "Armaf",
    },
  ];
  const [valuePrice, setValuePrice] = useState();
  const [valueAmount, setValueAmount] = useState();
  const [valueTrademark, setValueTrademark] = useState();
  const [valueTotal, setValueTotal] = useState();
  const [valueQuantity, setValueQuantity] = useState();
  const [updateAmount, setUpdateAmount] = useState();

  // COMBOBOX
  function dropdownNameProductClick() {
    setIsActiveNameProduct(!isActiveNameProduct);
    document.getElementById("border__dropdown__NameProduct").style.border =
      "1px solid #FA748F";
  }
  function dropdownItemNameProductClick(id) {
    setIdNameProduct(id);
    setSelectedNameProduct(listProductImport[id - 1].name);
    setIsActiveNameProduct(false);
    document.getElementById("border__dropdown__NameProduct").style.border =
      "1px solid #D9D9D9";
    setValueTrademark(listProductImport[id - 1].trademark);
  }
  function dropdownNatureClick() {
    setIsActiveNature(!isActiveNature);
    document.getElementById("border__dropdown__Nature").style.border =
      "1px solid #FA748F";
  }
  function dropdownItemNatureClick(id) {
    setSelectedNature(
      listProductImport[idNameProduct - 1].listNature[id - 1].nameNature
    );
    setIsActiveNature(false);
    document.getElementById("border__dropdown__Nature").style.border =
      "1px solid #D9D9D9";
    setValuePrice(
      listProductImport[idNameProduct - 1].listNature[id - 1].price
    );
    setValueAmount(
      listProductImport[idNameProduct - 1].listNature[id - 1].amount
    );
    setValueQuantity(valueAmount);
  }

  // CẬP NHẬT SỐ LƯỢNG SẢN PHẨM --------------------------------------------------------------
  const [erroDate, setErroDate] = useState(true);
  const [erroDateEnd, setErroDateEnd] = useState(true);
  function updateProduct() {
    var date = new Date();
    var currentYear = date.getFullYear();
    if (
      selectedNameProduct === undefined ||
      selectedNature === undefined ||
      selectedDateStart === undefined ||
      selectedDateEnd === undefined
    ) {
      alert("Vui lòng nhập đầy đủ thông tin!");
    } else {
      var dateStart = selectedDateStart.$D;
      var monthStart = selectedDateStart.$M + 1;
      var yearStart = selectedDateStart.$y;
      var dateEnd = selectedDateEnd.$D;
      var monthEnd = selectedDateEnd.$M + 1;
      var yearEnd = selectedDateEnd.$y;
      if (yearEnd - currentYear < 2) {
        setErroDate(false);
        setErroDateEnd(true);
      } else if (
        yearStart > yearEnd ||
        (monthStart > monthEnd && yearStart === yearEnd)
      ) {
        setErroDateEnd(false);
        setErroDate(true);
      } else {
        setErroDate(true);
        setErroDateEnd(true);
        console.log("Tên sản phẩm: ", selectedNameProduct);
        console.log("Thương hiệu: ", valueTrademark);
        console.log("Tính chất: ", selectedNature);
        console.log("Đơn giá: ", valuePrice);
        console.log(
          "Số lượng: ",
          updateAmount === undefined ? valueAmount : updateAmount
        );
        console.log(
          "Ngày sản xuất: ",
          dateStart + "/" + monthStart + "/" + yearStart
        );
        console.log("Hạn sử dụng: ", dateEnd + "/" + monthEnd + "/" + yearEnd);
      }
    }
  }

  // SẢN PHẨM VỪA NHẬP -----------------------------------------------------------------------
  const [listProductImported, setListProductImported] = useState([
    {
      id: 1,
      name: "Lancome La Vie Est Belle",
      trademark: "	Lancome",
      nature: "Hồng đất",
      price: 210000,
      amount: 100,
      dateStart: "16/11/2021",
      dateEnd: "16/11/2023",
    },
    {
      id: 2,
      name: "Lancome La Vie Est Belle",
      trademark: "Lancome",
      nature: "Cam cháy",
      price: 210000,
      amount: 100,
      dateStart: "16/11/2021",
      dateEnd: "16/11/2023",
    },
  ]);

  // XOÁ SẢN PHẨM VỪA NHẬP -------------------------------------------------------------------
  function DeletedProduct(id) {
    alert("Mã sản phẩm vừa nhập cần xoá: " + id);
  }

  // NÚT GỬI DANH SÁCH SẢN PHẨM VỪA NHẬP CHO THU NGÂN ĐỂ THU NGÂN THANH TOÁN VỚI NHÀ CUNG CẤP
  function orderConfirmation() {
    alert(
      "GỬI DANH SÁCH SẢN PHẨM VỪA NHẬP CHO THU NGÂN ĐỂ THU NGÂN THANH TOÁN VỚI NHÀ CUNG CẤP"
    );
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
              <img src={iconInvoice} alt="" />
            </span>
            <p>Nhập hàng nhà cung cấp</p>
          </div>
          <div className="box" id="update__invoiceImport">
            <div className="row-jcsb">
              <div className="row-jcsb group__info__invoiceImport">
                <p>Tên sản phẩm:</p>
                <div className="input__info__invoiceImport">
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
                        {listProductImport.map((option) => (
                          <div
                            onClick={() => {
                              dropdownItemNameProductClick(option.id);
                            }}
                            className="dropdown__item"
                          >
                            {option.name}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="row-jcsb group__info__invoiceImport">
                <p>Tính chất:</p>
                <div className="input__info__invoiceImport">
                  <div className="dropdown">
                    <div
                      id="border__dropdown__Nature"
                      className="dropdown__btn"
                      onClick={() => dropdownNatureClick()}
                    >
                      <input
                        type="text"
                        value={selectedNature}
                        placeholder="Chọn nội dung nè"
                        readOnly
                      />
                      <img src={IconDropdownGrey} alt="" />
                    </div>
                    {isActiveNature && (
                      <div className="dropdown__content">
                        {listProductImport[idNameProduct - 1].listNature.map(
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
              <div className="row-jcsb group__info__invoiceImport">
                <p>Đơn giá:</p>
                <div className="input__info__invoiceImport">
                  <input className="input" readOnly value={valuePrice} />
                </div>
              </div>
              <div className="row-jcsb group__info__invoiceImport">
                <p>Số lượng:</p>
                <div className="input__info__invoiceImport">
                  <input
                    className="input"
                    placeholder={valueAmount}
                    onChange={(e) => setUpdateAmount(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <br />
            <div className="row-jcsb">
              <div className="row-jcsb group__info__invoiceImport">
                <p>Ngày sản xuất:</p>
                <div className="input__info__invoiceImport">
                  <Space direction="vertical">
                    <DatePicker
                      placeholder="Chọn ngày..."
                      selected={selectedDateStart}
                      onChange={(date) => setSelectedDateStart(date)}
                      format="DD/MM/YYYY"
                    />
                  </Space>
                </div>
              </div>
              <div className="row-jcsb group__info__invoiceImport">
                <p>Hạn sử dụng:</p>
                <div className="input__info__invoiceImport">
                  <Space direction="vertical">
                    <DatePicker
                      placeholder="Chọn ngày..."
                      selected={selectedDateEnd}
                      onChange={(date) => setSelectedDateEnd(date)}
                      format="DD/MM/YYYY"
                    />
                  </Space>
                </div>
              </div>
            </div>
            <br />
            <div
              className="groupError"
              style={
                erroDate === true ? { display: "none" } : { display: "block" }
              }
            >
              <p>
                *Sản phẩm đã hết hạn sử dụng. Vui lòng nhập sản phẩm còn hạn sử
                dụng ít nhất 2 năm*
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
              <p>*Vui lòng kiểm tra lại ngày sản xuất và hạn sử dụng*</p>
            </div>
            <div className="group__btn__invoiceImport">
              <button className="button" onClick={() => updateProduct()}>
                Thêm sản phẩm
              </button>
            </div>
          </div>
          <div className="box">
            <p>
              Danh sách sản phẩm <hr />
            </p>

            <br />
            <div class="table">
              <div class="table">
                <table>
                  <tr>
                    <th className="name__detailInvoiceImport">Tên sản phẩm</th>
                    <th className="trademark__detailInvoiceImport">
                      Thương hiệu
                    </th>
                    <th className="nature__detailInvoiceImport">Tính chất</th>
                    <th className="date__detailInvoiceImport">Đơn giá</th>
                    <th className="date__detailInvoiceImport">Số lượng</th>
                    <th className="date__detailInvoiceImport">Tổng tiền</th>
                    <th className="date__detailInvoiceImport">NSX</th>
                    <th className="date__detailInvoiceImport">HSD</th>
                    <th className="btn__update__detailInvoiceImport">Xoá</th>
                  </tr>
                  {listProductImported.map((e) => (
                    <tr>
                      <td className="name__detailInvoiceImport">{e.name}</td>
                      <td className="trademark__detailInvoiceImport">
                        {e.trademark}
                      </td>
                      <td className="nature__detailInvoiceImport">
                        {e.nature}
                      </td>
                      <td className="date__detailInvoiceImport">{e.price}đ</td>
                      <td className="date__detailInvoiceImport">{e.amount}</td>
                      <td className="date__detailInvoiceImport">
                        {e.price * e.amount}đ
                      </td>
                      <td className="date__detailInvoiceImport">
                        {e.dateStart}
                      </td>
                      <td className="date__detailInvoiceImport">{e.dateEnd}</td>
                      <td className="btn__update__detailInvoiceImport">
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
              <hr />
            </div>
            <br />
            <div className="group__button__importGoods">
              <button className="button" onClick={() => orderConfirmation()}>
                Xác nhận nhập hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
