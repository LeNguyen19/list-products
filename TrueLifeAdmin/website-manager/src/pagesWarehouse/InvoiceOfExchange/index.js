import React, { useState } from "react";
import "./style.css";
import Menu from "../../components/MenuWarehouse/index";
import Header from "../../components/Header/index";
import iconInvoice from "../../assets/images/icon-invoice.svg";
import IconDropdownGrey from "../../assets/images/dropdownGrey.svg";
import { Link, useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();
  // TRẠNG THÁI ----------------------------------------------------
  const [isActiveNature, setIsActiveNature] = useState(false);
  const [selectedNature, setSelectedNature] = useState();
  const [idNature, setIdNature] = useState();
  const listNature = [
    {
      id: 1,
      nameNature: "Tất cả",
    },
    {
      id: 2,
      nameNature: "Đã duyệt",
    },
    {
      id: 3,
      nameNature: "Chờ duyệt",
    },
  ];
  function dropdownNatureClick() {
    setIsActiveNature(!isActiveNature);
    document.getElementById("border__dropdown__Nature").style.border =
      "1px solid #FA748F";
  }
  function dropdownItemNatureClick(id) {
    setIdNature(id);
    setSelectedNature(listNature[id - 1].nameNature);
    setIsActiveNature(false);
    document.getElementById("border__dropdown__Nature").style.border =
      "1px solid #D9D9D9";
  }

  // Danh sách đơn hàng đổi trả -----------------------------------------
  const [infoInvoiceOfExchange, setInfoInvoiceOfExchange] = useState([
    {
      id: 1,
      nameClient: "Lê Nguyễn",
      dateOrder: "01/01/2001",
      address: "35/21A Trần Tấn, Tân Sơn Nhì, Tân Phú, TP Hồ Chí Minh",
      phone: "0834200776",
      total: "600.000đ",
      status: "Chờ duyệt",
    },
    {
      id: 2,
      nameClient: "Lê Nguyễn",
      dateOrder: "01/01/2001",
      address: "35/21A Trần Tấn, Tân Sơn Nhì, Tân Phú, TP Hồ Chí Minh",
      phone: "0834200776",
      total: "600.000đ",
      status: "Đã duyệt",
    },
  ]);

  // Nút lọc đơn hàng -----------------------------------------------------
  function filterInvoiceOfExchange() {
    console.log("Mã tính chất: ", idNature);
    console.log("Tên tính chất: ", listNature[idNature - 1].nameNature);
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
                <img src={iconInvoice} alt="" />
              </span>
              <p>Thông tin đơn hàng đổi trả</p>
            </div>
            <div className="box row-jcsb">
              <div className="group__input__nature__invoiceImport row-jcsb">
                <p>Trạng thái đơn hàng đổi trả:</p>
                <div className="input__choose__nature__invoiceImport">
                  <div className="dropdown">
                    <div
                      id="border__dropdown__Nature"
                      className="dropdown__btn"
                      onClick={() => dropdownNatureClick()}
                    >
                      <input
                        type="text"
                        value={selectedNature}
                        placeholder="Tất cả"
                        readOnly
                      />
                      <img src={IconDropdownGrey} alt="" />
                    </div>
                    {isActiveNature && (
                      <div className="dropdown__content">
                        {listNature.map((option) => (
                          <div
                            onClick={() => {
                              dropdownItemNatureClick(option.id);
                            }}
                            className="dropdown__item"
                          >
                            {option.nameNature}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <button
                className="button"
                onClick={() => filterInvoiceOfExchange()}
              >
                Lọc
              </button>
            </div>
            <div className="box">
              <p>
                Danh sách đơn hàng <hr />
              </p>
              <br />
              <div class="table">
                <table>
                  <tr>
                    <th className="code__browseOrder">Mã</th>
                    <th className="name__browseOrder">Tên khách hàng</th>
                    <th className="date__browseOrder">Ngày đặt</th>
                    <th className="address__browseOrder">Địa chỉ</th>
                    <th className="phone__browseOrder">Số điện thoại</th>
                    <th className="money__browseOrder">Tổng tiền</th>
                    <th className="status__browseOrder">Tình trạng</th>
                    <th className="seen__browseOrder">Xem</th>
                  </tr>
                  {infoInvoiceOfExchange.map((e) => (
                    <tr>
                      <td className="code__browseOrder">DH00{e.id}</td>
                      <td className="name__browseOrder">{e.nameClient}</td>
                      <td className="date__browseOrder">{e.dateOrder}</td>
                      <td className="address__browseOrder">{e.address}</td>
                      <td className="phone__browseOrder">{e.phone}</td>
                      <td className="money__browseOrder">{e.total}</td>
                      <td className="status__browseOrder">{e.status}</td>
                      <td className="seen__browseOrder">
                        <i
                          class="fa fa-eye"
                          onClick={() => {
                            navigate(
                              "/Warehouse/InvoiceOrder/DetailInvoiceOfExchange"
                            );
                          }}
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
    </div>
  );
}
