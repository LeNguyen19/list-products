import React, { useState } from "react";
import "./style.css";
import Menu from "../../components/MenuWarehouse/index";
import Header from "../../components/Header/index";
import iconInvoice from "../../assets/images/icon-invoice.svg";
import { Link, useNavigate } from "react-router-dom";
import { DatePicker, Space } from "antd";

export default function Index() {
  const navigate = useNavigate();
  const [listProductImport, setListProductImport] = useState([
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
  ]);

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
            <p>Chi tiết phiếu nhập hàng</p>
          </div>
          <div className="box">
            <p>
              Danh sách sản phẩm dự kiến
              <hr />
            </p>
            <br />
            <div class="table">
              <table>
                <tr>
                  <th className="name">Tên sản phẩm</th>
                  <th className="trademark">Thương hiệu</th>
                  <th className="nature__detailProductImport">Tính chất</th>
                  <th className="price__detailProduct">Đơn giá</th>
                  <th className="amout__detailProduct">Số lượng</th>
                  <th className="price__detailProduct">Tổng tiền</th>
                </tr>
                {listProductImport.map((e) => (
                  <tr>
                    <td className="name">{e.nameProduct}</td>
                    <td className="trademark">{e.trademark}</td>
                    <td className="nature__detailProductImport">{e.nature}</td>
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
                onClick={() => {
                  navigate("/Warehouse/InvoiceImport/ImportFeedback");
                }}
              >
                Phản hồi nhà cung cấp
              </button>

              <button
                className="button"
                onClick={() => {
                  navigate("/Warehouse/InvoiceImport/ImportGoodsFromSuppliers");
                }}
              >
                Tiến hành nhập hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
