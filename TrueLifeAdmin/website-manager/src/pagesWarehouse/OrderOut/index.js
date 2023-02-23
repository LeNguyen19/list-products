import React, { useState } from "react";
import "./style.css";
import Menu from "../../components/MenuWarehouse/index";
import Header from "../../components/Header/index";
import iconInvoice from "../../assets/images/icon-invoice.svg";
import IconDropdownGrey from "../../assets/images/dropdownGrey.svg";
import { Link, useNavigate } from "react-router-dom";

export default function Index() {
  const data = [
    {
      code: 1,
      name: "Lê Nguyễn",
      date: "06/12/2022",
      address: "35/21A Trần Tấn, Tân Sơn Nhì, Tân Phú, TP Hồ Chí Minh",
      phone: "0834200776",
      price: 600000,
      status: "Đã duyệt",
    },
    {
      code: 2,
      name: "Tính Phạm",
      date: "21/11/2022",
      address: "35/21A Trần Tấn, Tân Sơn Nhì, Tân Phú, TP Hồ Chí Minh",
      phone: "0834200776",
      price: 600000,
      status: "Đang giao",
    },
    {
      code: 3,
      name: "True Life",
      date: "05/12/2022",
      address: "140 Lê Trọng Tấn,Tân Sơn Nhì , Tân Phú, TP Hồ Chí Minh",
      phone: "0834200776",
      price: 600000,
      status: "Đang chuẩn bị",
    },
    {
      code: 4,
      name: "Ngọc Nhi",
      date: "05/11/2022",
      address: "140 Lê Trọng Tấn,Tân Sơn Nhì , Tân Phú, TP Hồ Chí Minh",
      phone: "0834200776",
      price: 600000,
      status: "Đã nhận",
    },
  ];
  // TRẠNG THÁI ----------------------------------------------------
  const [isActiveNature, setIsActiveNature] = useState(false);
  const [selectedNature, setSelectedNature] = useState();
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
      nameNature: "Đang chuẩn bị",
    },
    {
      id: 4,
      nameNature: "Đã giao",
    },
    {
      id: 5,
      nameNature: "Đang giao",
    },
  ];
  function dropdownNatureClick() {
    setIsActiveNature(!isActiveNature);
    document.getElementById("border__dropdown__Nature").style.border =
      "1px solid #FA748F";
  }
  function dropdownItemNatureClick(id) {
    setSelectedNature(listNature[id - 1].nameNature);
    setIsActiveNature(false);
    document.getElementById("border__dropdown__Nature").style.border =
      "1px solid #D9D9D9";

    if (id === 2) {
      document.getElementById("btn__print__bill").style.display = "block";
    } else {
      document.getElementById("btn__print__bill").style.display = "none";
    }
  }

  //   Xử lý xem chi tiết đơn hàng-------------------------------------------------------
  const navigate = useNavigate();
  function seenDetailOrderOut(id) {
    if (data[id - 1].status === "Đang giao") {
      navigate("/Warehouse/OrderOut/DetailOrderDelivering");
    }
    if (data[id - 1].status === "Đã duyệt") {
      navigate("/Warehouse/OrderOut/DetailOrderApproved");
    }
    if (data[id - 1].status === "Đang chuẩn bị") {
      navigate("/Warehouse/OrderOut/DetailInvoicePreparing");
    }
    if (data[id - 1].status === "Đã nhận") {
      navigate("/Warehouse/OrderOut/DetailOrderWareHouse");
    }
  }

  // LỌC ĐƠN HÀNG BÁN --------------------------------------------------------------------
  const [valueFind, setValueFind] = useState();
  function FindOrderOut() {
    console.log("Trạng thái đơn hàng: ", selectedNature);
    console.log("Tên khách hàng: ", valueFind);
  }

  // XUẤT THÔNG TIN TẤT CẢ CÁC ĐƠN HÀNG ĐÃ DUYỆT ------------------------------------------
  function ExportAllOrder() {
    alert(
      "Xuất bill tất cả các đơn hàng đã duyệt để chuẩn bị hàng và chuyển trạng thái đơn hàng thành đang chuẩn bị"
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
                <img src={iconInvoice} alt="" />
              </span>
              <p>Thông tin đơn hàng</p>
            </div>
            <div className="box row-jcsb">
              <div className="group__status__orderOut row-jcsb">
                <p>Trạng thái đơn hàng:</p>
                <div className="input__choose__status__orderOut">
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
              <div className="group__find__orderOut row-jcsb">
                <input
                  className="input"
                  placeholder="Nhập tên khách hàng..."
                  onChange={(e) => setValueFind(e.target.value)}
                />
                <button className="button" onClick={() => FindOrderOut()}>
                  Tìm
                </button>
              </div>
            </div>
            <div className="box">
              <div className="row-jcsb">
                <p>
                  Danh sách đơn hàng <hr />
                </p>
                <button
                  className="button"
                  id="btn__print__bill"
                  onClick={() => ExportAllOrder()}
                >
                  Xuất thông tin tất cả đơn hàng
                </button>
              </div>
              <div className="table">
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
                    {data.map((e) => (
                      <tr>
                        <td className="code__browseOrder">HD{e.code}</td>
                        <td className="name__browseOrder">{e.name}</td>
                        <td className="date__browseOrder">{e.date}</td>
                        <td className="address__browseOrder">{e.address}</td>
                        <td className="phone__browseOrder">{e.phone}</td>
                        <td className="money__browseOrder">{e.price}</td>
                        <td className="status__browseOrder">{e.status}</td>
                        <td className="seen__browseOrder">
                          <i
                            class="fa fa-eye"
                            onClick={() => seenDetailOrderOut(e.code)}
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
    </div>
  );
}
