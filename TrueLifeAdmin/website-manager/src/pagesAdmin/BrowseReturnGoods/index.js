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
            <p>Kiểm duyệt trả hàng nhà cung cấp</p>
          </div>
          <div className="box">
            <p>
              Danh sách sản phẩm <hr />
            </p>

            <br />
            <div class="table">
              <table>
                <tr>
                  <th className="code__browseGoods">Mã phiếu</th>
                  <th className="amount__browseGoods">Ngày lập</th>

                  <th className="nameSupplier__browseGoods">
                    Tên nhà cung cấp
                  </th>
                  <th className="amount__browseGoods">Số lượng</th>
                  <th className="money__browseGoods">Tổng tiền</th>
                  <th className="status__browseGoods">Trạng thái</th>
                  <th className="seen__browseGoods">Xem</th>
                </tr>

                <tr>
                  <td className="code__browseGoods">PTH001</td>
                  <td className="amount__browseGoods">dd/mm/yyyy</td>

                  <td className="nameSupplier__browseGoods">Nhà cung cấp A</td>
                  <td className="amount__browseGoods">100</td>
                  <td className="money__browseGoods">20.000.000đ</td>
                  <td className="status__browseGoods">Chờ duyệt</td>
                  <td className="seen__browseGoods">
                    <Link to="/Admin/BrowseReturnGoods/DetailReturnGoods">
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
