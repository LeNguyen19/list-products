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
                    <th className="name">Tên sản phẩm</th>
                    <th className="trademark">Thương hiệu</th>
                    <th className="nature__detailProduct">Tính chất</th>
                    <th className="price__detailProduct">Đơn giá</th>
                    <th className="amout__detailProduct">Số lượng</th>
                    <th className="price__detailProduct">Tổng tiền</th>
                  </tr>

                  <tr>
                    <td className="name">Lancome La Vie Est Belle</td>
                    <td className="trademark">Lancome</td>
                    <td className="nature__detailProduct">Hồng đất</td>
                    <td className="price__detailProduct">210000đ</td>
                    <td className="amout__detailProduct">10</td>
                    <td className="price__detailProduct">210000đ</td>
                  </tr>
                  <tr>
                    <td className="name">Lancome La Vie Est Belle</td>
                    <td className="trademark">Lancome</td>
                    <td className="nature__detailProduct">Cam đào</td>
                    <td className="price__detailProduct">210000đ</td>
                    <td className="amout__detailProduct">10</td>
                    <td className="price__detailProduct">210000đ</td>
                  </tr>
                </table>
                <hr />
              </div>
              <hr />
            </div>
            <br />
            <div className="group__button__importGoods">
              <button className="button">Duyệt nhập hàng</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
