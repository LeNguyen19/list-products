import React, { useState } from "react";
import "./style.css";
import Menu from "../../components/MenuAdmin/index";
import Header from "../../components/Header/index";
import iconCensorship from "../../assets/images/icon-censorship.svg";
import Product1 from "../../assets/images/product1.webp";
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
            <p>Chi tiết đơn hàng</p>
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

                <tr>
                  <td className="code__browseOrder">SP01</td>
                  <td className="img__browseOrder">
                    <img src={Product1} alt="" />
                  </td>
                  <td>
                    Sữa Dưỡng Thể Aveeno Active Naturals Daily Moisturizing
                    Lotion Giữ Ẩm Hàng Ngày 354ml
                  </td>
                  <td className="price__browseOrder">290.000đ</td>
                  <td className="amount__browseOrder">1</td>
                  <td className="sumPrice__browseOrder">290.000đ</td>
                </tr>
                <tr>
                  <td className="code__browseOrder">SP02</td>
                  <td className="img__browseOrder">
                    <img src={Product1} alt="" />
                  </td>
                  <td>
                    Bút Kẻ Mắt Nước Sắc Nét, Lâu Trôi Vacosi 24h Waterproof Pen
                    0.05mm 2g
                  </td>
                  <td className="price__browseOrder">160.000đ</td>
                  <td className="amount__browseOrder">1</td>
                  <td className="sumPrice__browseOrder">160.000đ</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="amount__browseOrder text__weight__browseOrder">
                    Số lượng: 2
                  </td>
                  <td className="sumPrice__browseOrder text__weight__browseOrder">
                    Tổng tiền: 450.000đ
                  </td>
                </tr>
              </table>
              <hr />
              <br />
              <div className="group__btn__browseOrder">
                <button className="button">Duyệt đơn hàng</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
