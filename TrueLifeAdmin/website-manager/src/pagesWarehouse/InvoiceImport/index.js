import React, { useState } from "react";
import "./style.css";
import Menu from "../../components/MenuWarehouse/index";
import Header from "../../components/Header/index";
import iconProduct from "../../assets/images/icon-product.svg";
import IconDropdownGrey from "../../assets/images/dropdownGrey.svg";
import { Link, useNavigate } from "react-router-dom";

export default function Index() {
  // TRẠNG THÁI ----------------------------------------------------
  const navigate = useNavigate();
  const [isActiveNature, setIsActiveNature] = useState(false);
  const [selectedNature, setSelectedNature] = useState();
  const [codeNature, setCodeNature] = useState();
  const listNature = [
    {
      id: 1,
      nameNature: "Tất cả",
    },
    {
      id: 2,
      nameNature: "Đang giao",
    },
    {
      id: 3,
      nameNature: "Đã nhập",
    },
  ];
  function dropdownNatureClick() {
    setIsActiveNature(!isActiveNature);
    document.getElementById("border__dropdown__Nature").style.border =
      "1px solid #FA748F";
  }
  function dropdownItemNatureClick(id) {
    setCodeNature(id);
    setSelectedNature(listNature[id - 1].nameNature);
    setIsActiveNature(false);
    document.getElementById("border__dropdown__Nature").style.border =
      "1px solid #D9D9D9";
  }

  // LỌC HOÁ ĐƠN NHẬP HÀNG -----------------------------------------
  function FindInvoiceImport() {
    console.log("Mã trạng thái kế hoạch đặt hàng cần lọc: ", codeNature);
    console.log("Trạng thái kế hoạch đặt hàng cần lọc: ", selectedNature);
  }

  // DỮ LIỆU ĐẦU VÀO ------------------------------------------------
  const [infoInvoiceImport, setInfoInvoiceImport] = useState([
    {
      id: 1,
      dateFounded: "01/01/2021",
      nameSupplier: "Nhà cung cấp A",
      amount: 100,
      total: "20.000.000đ",
      nature: "Đang giao",
    },
    {
      id: 2,
      dateFounded: "01/01/2021",
      nameSupplier: "Nhà cung cấp B",
      amount: 100,
      total: "20.000.000đ",
      nature: "Đã nhập",
    },
  ]);

  // XEM CHI TIẾT HOÁ ĐƠN NHẬP HÀNG ---------------------------------
  function DetailInvoiceImport(id) {
    var data = id + 1;
    if (data === 2) {
      navigate("/Warehouse/InvoiceImport/DetailInvoiceImport");
    }
    if (data === 3) {
      navigate("/Warehouse/InvoiceImport/DetailInvoiceEntered");
    }
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
              <p>Thông tin nhập hàng nhà cung cấp</p>
            </div>
            <div className="box row-jcsb">
              <div className="group__input__nature__invoiceImport row-jcsb">
                <p>Trạng thái phiếu nhập hàng:</p>
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
              <button className="button" onClick={() => FindInvoiceImport()}>
                Lọc
              </button>
            </div>
            <div className="box">
              <p>
                Danh sách phiếu nhập hàng <hr />
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
                  {infoInvoiceImport.map((e) => (
                    <tr>
                      <td className="code__browseGoods">PNH00{e.id}</td>
                      <td className="status__browseGoods">{e.dateFounded}</td>
                      <td className="nameSupplier__browseGoods">
                        {e.nameSupplier}
                      </td>
                      <td className="amount__browseGoods">{e.amount}</td>
                      <td className="money__browseGoods">{e.total}</td>
                      <td className="status__browseGoods">{e.nature}</td>
                      <td className="code__browseGoods">
                        {/* <Link to="/DetailInvoiceImport">
                          <i class="fa fa-eye"></i>
                        </Link> */}
                        <i
                          class="fa fa-eye"
                          onClick={() => DetailInvoiceImport(e.id)}
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
