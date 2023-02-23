import React, { useState } from "react";
import "./style.css";
import Menu from "../../components/MenuAdmin/index";
import Header from "../../components/Header/index";
import iconCensorship from "../../assets/images/icon-censorship.svg";
import { Link } from "react-router-dom";

export default function Index() {
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
              <img src={iconCensorship} alt="" />
            </span>
            <p>Kiểm duyệt đơn hàng</p>
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

                <tr>
                  <td className="code__browseOrder">DH001</td>
                  <td className="name__browseOrder">Lê Nguyễn</td>
                  <td className="date__browseOrder">19/01/2001</td>
                  <td className="address__browseOrder">
                    35/21A Trần Tấn, Tân Sơn Nhì, Tân Phú, TP Hồ Chí Minh
                  </td>
                  <td className="phone__browseOrder">0834200776</td>
                  <td className="money__browseOrder">600.000đ</td>
                  <td className="status__browseOrder">Chưa thanh toán</td>
                  <td className="seen__browseOrder">
                    <Link to="/Admin/BrowseOrder/DetailOrder">
                      <i class="fa fa-eye"></i>
                    </Link>
                  </td>
                </tr>
              </table>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
