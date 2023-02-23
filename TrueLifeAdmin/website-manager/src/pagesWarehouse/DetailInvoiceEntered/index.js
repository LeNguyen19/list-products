import React, { useState } from "react";
import "./style.css";
import Menu from "../../components/MenuWarehouse/index";
import Header from "../../components/Header/index";
import iconInvoice from "../../assets/images/icon-invoice.svg";
import { Link } from "react-router-dom";
import { DatePicker, Space } from "antd";

export default function Index() {
  // DANH SÁCH SẢN PHẨM ĐÃ NHẬP ----------------------------------------------
  const [listProductImported, setListProductImported] = useState([
    {
      id: 1,
      name: "Lancome La Vie Est Belle",
      trademark: "	Lancome",
      nature: "Hồng đất",
      price: "210.000đ",
      amount: 100,
      total: "2.100.000đ",
      dateStart: "16/11/2021",
      dateEnd: "16/11/2023",
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
                      <td className="date__detailInvoiceImport">{e.price}</td>
                      <td className="date__detailInvoiceImport">{e.amount}</td>
                      <td className="date__detailInvoiceImport">{e.total}</td>
                      <td className="date__detailInvoiceImport">
                        {e.dateStart}
                      </td>
                      <td className="date__detailInvoiceImport">{e.dateEnd}</td>
                    </tr>
                  ))}
                </table>
                <hr />
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
