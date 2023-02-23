import React, { useState } from "react";
import "./style.css";
import Menu from "../../components/MenuAdmin/index";
import Header from "../../components/Header/index";
import iconStatistical from "../../assets/images/icon-statistical.svg";

export default function Index() {
  //DỮ LIỆU -------------------------------------------------------------------
  const [detailRevenue, setDetailRevenue] = useState([
    {
      id: 1,
      mouth: "1/2021",
      totalBill: "30",
      totalRevenue: "20.000.000đ",
      totalSpending: "1.000.000đ",
      totalProfit: "19.000.000đ",
    },
    {
      id: 2,
      mouth: "2/2021",
      totalBill: "30",
      totalRevenue: "20.000.000đ",
      totalSpending: "1.000.000đ",
      totalProfit: "19.000.000đ",
    },
    {
      id: 3,
      mouth: "3/2021",
      totalBill: "30",
      totalRevenue: "20.000.000đ",
      totalSpending: "1.000.000đ",
      totalProfit: "19.000.000đ",
    },
    {
      id: 4,
      mouth: "4/2021",
      totalBill: "30",
      totalRevenue: "20.000.000đ",
      totalSpending: "1.000.000đ",
      totalProfit: "19.000.000đ",
    },
    {
      id: 5,
      mouth: "5/2021",
      totalBill: "30",
      totalRevenue: "20.000.000đ",
      totalSpending: "1.000.000đ",
      totalProfit: "19.000.000đ",
    },
    {
      id: 6,
      mouth: "6/2021",
      totalBill: "30",
      totalRevenue: "20.000.000đ",
      totalSpending: "1.000.000đ",
      totalProfit: "19.000.000đ",
    },
    {
      id: 7,
      mouth: "7/2021",
      totalBill: "30",
      totalRevenue: "20.000.000đ",
      totalSpending: "1.000.000đ",
      totalProfit: "19.000.000đ",
    },
    {
      id: 8,
      mouth: "8/2021",
      totalBill: "30",
      totalRevenue: "20.000.000đ",
      totalSpending: "1.000.000đ",
      totalProfit: "19.000.000đ",
    },
    {
      id: 9,
      mouth: "9/2021",
      totalBill: "30",
      totalRevenue: "20.000.000đ",
      totalSpending: "1.000.000đ",
      totalProfit: "19.000.000đ",
    },
    {
      id: 10,
      mouth: "10/2021",
      totalBill: "30",
      totalRevenue: "20.000.000đ",
      totalSpending: "1.000.000đ",
      totalProfit: "19.000.000đ",
    },
    {
      id: 11,
      mouth: "11/2021",
      totalBill: "30",
      totalRevenue: "20.000.000đ",
      totalSpending: "1.000.000đ",
      totalProfit: "19.000.000đ",
    },
    {
      id: 12,
      mouth: "12/2021",
      totalBill: "30",
      totalRevenue: "20.000.000đ",
      totalSpending: "1.000.000đ",
      totalProfit: "19.000.000đ",
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
              <img src={iconStatistical} alt="" />
            </span>
            <p>Chi tiết thống kê doanh thu theo tháng</p>
          </div>
          <div className="box">
            <p>
              Chi tiết doanh thu
              <hr />
            </p>
            <br />
            <div class="table">
              <table>
                <tr>
                  <th>Tháng</th>
                  <th>Tổng hoá đơn</th>
                  <th>Tổng doanh thu</th>
                  <th>Tổng chi tiêu</th>
                  <th>Tổng lợi nhuận</th>
                </tr>

                {detailRevenue.map((e) => (
                  <tr>
                    <td>{e.mouth}</td>
                    <td>{e.totalBill}</td>
                    <td>{e.totalRevenue}</td>
                    <td>{e.totalSpending}</td>
                    <td>{e.totalProfit}</td>
                  </tr>
                ))}
              </table>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
