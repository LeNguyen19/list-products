import React, { useState } from "react";
import "./style.css";
import Menu from "../../components/MenuStaff/index";
import Header from "../../components/Header/index";
import iconEvent from "../../assets/images/icon-event.svg";
import IconDropdownGrey from "../../assets/images/dropdownGrey.svg";
import { Link, useNavigate } from "react-router-dom";

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
              <img src={iconEvent} alt="" />
            </span>
            <p>Chi tiết chương trình khuyến mãi</p>
          </div>
          <div className="box">
            <p>
              Danh sách sản phẩm khuyến mãi <hr />
            </p>
            <br />
            <div class="table">
              <table>
                <tr>
                  <th className="nameEvent__addEvent">Tên chương trình</th>
                  <th className="desEvent__addEvent">Mô tả</th>
                  <th className="dateStart__addEvent">Bắt đầu</th>
                  <th className="dateEnd__addEvent">Kết thúc</th>
                  <th className="buy__addEvent">Mua</th>
                  <th className="amout__addEvent">SL</th>
                  <th className="donate__addEvent">Tặng</th>
                  <th className="amout__addEvent">SL</th>
                </tr>
                <tr>
                  <td className="nameEvent__addEvent">
                    Mừng sinh nhật True Life
                  </td>
                  <td className="desEvent__addEvent">
                    Khuyến mãi chương trình mừng sinh nhật
                  </td>
                  <td className="dateStart__addEvent">01/01/2023</td>
                  <td className="dateEnd__addEvent">02/02/2023</td>
                  <td className="buy__addEvent">Son 123</td>
                  <td className="amout__addEvent">1</td>
                  <td className="donate__addEvent">Son ABC</td>
                  <td className="amout__addEvent">2</td>
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
