import React, { useState } from "react";
import "./style.css";
import Menu from "../../components/MenuWarehouse/index";
import Header from "../../components/Header/index";
import iconInvoice from "../../assets/images/icon-invoice.svg";
import { Link, useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();
  // Danh sách đơn hàng hoàn trả -----------------------------------------
  const [infoInvoiceNotReceived, setInfoInvoiceNotReceived] = useState([
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
              <p>Thông tin đơn hàng hoàn trả</p>
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
                    <th className="seen__browseOrder">Xem</th>
                  </tr>

                  {infoInvoiceNotReceived.map((e) => (
                    <tr>
                      <td className="code__browseOrder">DH00{e.id}</td>
                      <td className="name__browseOrder">{e.nameClient}</td>
                      <td className="date__browseOrder">{e.dateOrder}</td>
                      <td className="address__browseOrder">{e.address}</td>
                      <td className="phone__browseOrder">{e.phone}</td>
                      <td className="money__browseOrder">{e.total}</td>
                      <td className="seen__browseOrder">
                        <i
                          class="fa fa-eye"
                          onClick={() => {
                            navigate(
                              "/Warehouse/InvoiceOrder/DetailInvoiceNotReceived"
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
