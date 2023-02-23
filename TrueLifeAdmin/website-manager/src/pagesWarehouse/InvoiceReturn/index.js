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
    {
      id: 4,
      nameNature: "Đã trả",
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

  //Dữ liệu ----------------------------------------------------------------
  const [invoiceReturn, setInvoiceReturn] = useState([
    {
      id: 1,
      date: "01/01/2001",
      nameSupplier: "Nhà cung cấp A",
      amount: 100,
      total: "20.000.000đ",
      status: "Đã duyệt",
    },
    {
      id: 2,
      date: "01/01/2001",
      nameSupplier: "Nhà cung cấp B",
      amount: 100,
      total: "20.000.000đ",
      status: "Chờ duyệt",
    },
    {
      id: 3,
      date: "01/01/2001",
      nameSupplier: "Nhà cung cấp C",
      amount: 100,
      total: "20.000.000đ",
      status: "Đã trả",
    },
  ]);

  // LỌC TRẠNG THÁI KẾ HOẠCH TRẢ HÀNG --------------------------------------
  function FilterInvoiceReturn() {
    console.log("Mã trạng thái: ", idNature);
    console.log("Tên trạng thái: ", listNature[idNature - 1].nameNature);
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
              <p>Thông tin trả hàng nhà cung cấp</p>
            </div>
            <div className="box row-jcsb">
              <div className="group__input__nature__invoiceImport row-jcsb">
                <p>Trạng thái kế hoạch trả hàng:</p>
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
              <button className="button" onClick={() => FilterInvoiceReturn()}>
                Lọc
              </button>
            </div>
            <div className="box">
              <p>
                Danh sách kế hoạch trả hàng <hr />
              </p>
              <br />
              <div className="table">
                <table>
                  <tr>
                    <th className="code__browseGoods">Mã phiếu</th>
                    <th className="status__browseGoods">Ngày lập</th>
                    <th className="nameSupplier__browseGoods">
                      Tên nhà cung cấp
                    </th>
                    <th className="amount__browseGoods">Số lượng</th>
                    <th className="money__browseGoods">Tổng tiền</th>
                    <th className="status__browseGoods">Trạng thái</th>
                    <th className="code__browseGoods">Xem</th>
                  </tr>
                  {invoiceReturn.map((e) => (
                    <tr>
                      <td className="code__browseGoods">PNH00{e.id}</td>
                      <td className="status__browseGoods">{e.date}</td>
                      <td className="nameSupplier__browseGoods">
                        {e.nameSupplier}
                      </td>
                      <td className="amount__browseGoods">{e.amount}</td>
                      <td className="money__browseGoods">{e.total}</td>
                      <td className="status__browseGoods">{e.status}</td>
                      <td className="code__browseGoods">
                        <i
                          class="fa fa-eye"
                          onClick={() => {
                            navigate("/Warehouse/InvoiceReturn/DetailInvoiceReturn");
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
