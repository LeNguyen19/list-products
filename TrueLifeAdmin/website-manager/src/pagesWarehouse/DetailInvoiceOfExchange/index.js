import React, { useState } from "react";
import "./style.css";
import Menu from "../../components/MenuWarehouse/index";
import Header from "../../components/Header/index";
import iconInvoice from "../../assets/images/icon-invoice.svg";
import Product1 from "../../assets/images/product1.webp";

export default function Index() {
  // Data ----------------------------------------------------------------
  const [detailInvoiceOfExchange, setDetailInvoiceOfExchange] = useState({
    status: "Chờ duyệt",
    quantity: 2,
    money: "580.000đ",
    listProduct: [
      {
        id: 1,
        img: Product1,
        name: "	Sữa Dưỡng Thể Aveeno Active Naturals Daily Moisturizing Lotion Giữ Ẩm Hàng Ngày 354ml",
        price: "290.000đ",
        amount: 1,
        total: "290.000đ",
      },
      {
        id: 2,
        img: Product1,
        name: "	Sữa Dưỡng Thể Aveeno Active Naturals Daily Moisturizing Lotion Giữ Ẩm Hàng Ngày 354ml",
        price: "290.000đ",
        amount: 1,
        total: "290.000đ",
      },
    ],
  });

  // Nút xuất thông tin đơn hàng đổi trả
  function ExportReturnOrder() {
    alert("Gửi mail xác nhận đổi hàng cho khách hàng và xuất bill đơn hàng");
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
              <p>Chi tiết đơn hàng đổi trả</p>
            </div>
            <div className="box">
              <p>
                Danh sách sản phẩm <hr />
              </p>

              <br />
              <div class="table">
                <table>
                  <tr>
                    <th className="code__browseOrder">Mã</th>
                    <th className="img__browseOrder">Ảnh</th>
                    <th>Tên sản phẩm</th>
                    <th className="price__browseOrder">Đơn giá</th>
                    <th className="amount__browseOrder">Số lượng</th>
                    <th className="sumPrice__browseOrder">Thành tiền</th>
                  </tr>

                  {detailInvoiceOfExchange.listProduct.map((e) => (
                    <tr>
                      <td className="code__browseOrder">SP0{e.id}</td>
                      <td className="img__browseOrder">
                        <img src={Product1} alt="" />
                      </td>
                      <td className="nameProduct__OrderApproved">{e.name}</td>
                      <td className="price__browseOrder">{e.price}</td>
                      <td className="amount__browseOrder">{e.amount}</td>
                      <td className="sumPrice__browseOrder">{e.total}</td>
                    </tr>
                  ))}

                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="amount__browseOrder text__weight__browseOrder">
                      Số lượng:{" " + detailInvoiceOfExchange.quantity}
                    </td>
                    <td className="sumPrice__browseOrder text__weight__browseOrder">
                      Tổng tiền:{" " + detailInvoiceOfExchange.money}
                    </td>
                  </tr>
                </table>
                <hr />
                <br />
                <div className="group__btn__detailOrderWarehouse">
                  <button
                    style={
                      detailInvoiceOfExchange.status === "Đã duyệt"
                        ? { display: "block" }
                        : { display: "none" }
                    }
                    className="button"
                    onClick={() => ExportReturnOrder()}
                  >
                    Xuất thông tin đơn hàng đổi trả
                  </button>
                  <button
                    style={
                      detailInvoiceOfExchange.status === "Chờ duyệt"
                        ? { display: "block" }
                        : { display: "none" }
                    }
                    className="btn__grey"
                  >
                    Xuất thông tin đơn hàng đổi trả
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
