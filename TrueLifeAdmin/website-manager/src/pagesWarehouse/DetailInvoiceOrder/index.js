import React, { useState } from "react";
import "./style.css";
import Menu from "../../components/MenuWarehouse/index";
import Header from "../../components/Header/index";
import iconInvoice from "../../assets/images/icon-invoice.svg";
import { Link } from "react-router-dom";

export default function Index() {
  const [infoInvoiceOrder, setInfoInvoiceOrder] = useState({
    nature: "Chờ duyệt",
    listProductImport: [
      {
        id: 1,
        nameProduct: "Lancome La Vie Est Belle",
        trademark: "Lancome",
        nature: "Hồng đất",
        price: "210.000đ",
        amount: 10,
        total: "210000đ",
      },
      {
        id: 2,
        nameProduct: "Lancome La Vie Est Belle",
        trademark: "Lancome",
        nature: "Cam cháy",
        price: "210.000đ",
        amount: 10,
        total: "210000đ",
      },
    ],
  });

  function SendOrderInformation() {
    alert(
      "Nhấn vô rồi gửi mail cho nhà cung cấp danh sách sản phẩm cần nhập nè"
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
            <p>Chi tiết kế hoạch nhập hàng</p>
          </div>
          <div className="box">
            <p>
              Danh sách sản phẩm <hr />
            </p>
            <br />

            <div class="table">
              <table>
                <tr>
                  <th className="name">Tên sản phẩm</th>
                  <th className="trademark">Thương hiệu</th>
                  <th className="nature__detailProduct">Tính chất</th>
                  <th className="price__detailProduct">Đơn giá</th>
                  <th className="amout__detailProduct">Số lượng</th>
                  <th className="price__detailProduct">Tổng tiền</th>
                </tr>
                {infoInvoiceOrder.listProductImport.map((e) => (
                  <tr>
                    <td className="name">{e.nameProduct}</td>
                    <td className="trademark">{e.trademark}</td>
                    <td className="nature__detailProduct">{e.nature}</td>
                    <td className="price__detailProduct">{e.price}</td>
                    <td className="amout__detailProduct">{e.amount}</td>
                    <td className="price__detailProduct">{e.total}</td>
                  </tr>
                ))}
              </table>
              <hr />
            </div>

            <br />
            <div className="group__button__importGoods">
              <button
                className="button"
                style={
                  infoInvoiceOrder.nature === "Chờ duyệt"
                    ? { display: "none" }
                    : { display: "block" }
                }
                onClick={() => SendOrderInformation()}
              >
                Gửi thông tin đặt hàng
              </button>
              <button
                className="btn__grey"
                style={
                  infoInvoiceOrder.nature === "Chờ duyệt"
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                Gửi thông tin đặt hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
