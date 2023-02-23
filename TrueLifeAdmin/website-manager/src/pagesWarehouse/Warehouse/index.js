import React, { useState, useEffect } from "react";
import "./style.css";
import Menu from "../../components/MenuWarehouse/index";
import Header from "../../components/Header/index";
import iconHome from "../../assets/images/icon-home.svg";
import staff from "../../assets/images/img-staff.png";
import client from "../../assets/images/img-client.png";
import product from "../../assets/images/img-product.png";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Tháng 1",
    DonHang: 3000,
    DoanhThu: 1398,
    amt: 2210,
  },
  {
    name: "Tháng 2",
    DonHang: 3000,
    DoanhThu: 1398,
    amt: 2210,
  },
  {
    name: "Tháng 3",
    DonHang: 2000,
    DoanhThu: 9800,
    amt: 2290,
  },
  {
    name: "Tháng 4",
    DonHang: 2780,
    DoanhThu: 3908,
    amt: 2000,
  },
  {
    name: "Tháng 5",
    DonHang: 1890,
    DoanhThu: 4800,
    amt: 2181,
  },
  {
    name: "Tháng 6",
    DonHang: 2390,
    DoanhThu: 3800,
    amt: 2500,
  },
  {
    name: "Tháng 7",
    DonHang: 3490,
    DoanhThu: 4300,
    amt: 2100,
  },
  {
    name: "Tháng 8",
    DonHang: 3000,
    DoanhThu: 1398,
    amt: 2210,
  },
  {
    name: "Tháng 9",
    DonHang: 3000,
    DoanhThu: 1398,
    amt: 2210,
  },
  {
    name: "Tháng 10",
    DonHang: 2000,
    DoanhThu: 9800,
    amt: 2290,
  },
  {
    name: "Tháng 11",
    DonHang: 2780,
    DoanhThu: 3908,
    amt: 2000,
  },
  {
    name: "Tháng 12",
    DonHang: 1890,
    DoanhThu: 4800,
    amt: 2181,
  },
];
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
              <img src={iconHome} alt="" />
            </span>
            <p>Tổng quan</p>
          </div>
          <div className="row-jcsb">
            <div className=" box info__generality">
              <p>Biểu đồ</p>
              <br />
              <div>
                <BarChart
                  width={830}
                  height={320}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="DonHang" fill="#fa748f" />
                  <Bar dataKey="DoanhThu" fill="#333333" />
                </BarChart>
              </div>
            </div>
            <div className="info__shop col ">
              <div className="box row-jcsb amount__staff">
                <p className="col-gap15">
                  Nhân viên <span>24</span>
                </p>
                <img src={staff} alt="" />
              </div>
              <div className="box row-jcsb amount__client">
                <p className="col-gap15">
                  Khách hàng <span>100</span>
                </p>
                <img src={client} alt="" />
              </div>
              <div className="box row-jcsb amount__product">
                <p className="col-gap15">
                  Sản phẩm <span>200</span>
                </p>
                <img src={product} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
