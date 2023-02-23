import React, { useState } from "react";
import "./style.css";
import Menu from "../../components/MenuWarehouse/index";
import Header from "../../components/Header/index";
import iconProduct from "../../assets/images/icon-product.svg";

export default function Index() {
  //Dữ liệu
  const data = [
    {
      code: 1,
      date: "11/11/2022",
      name: "Sữa dưỡng thể Eucerin sáng da Spotless Brightening SPF7 250ml",
      nature: "null",
      amount: 2,
    },
    {
      code: 2,
      date: "15/11/2022",
      name:
        "Lăn Đặc Trị Khử Mùi Etiaxil Dành Cho Da Nhạy Cảm Aisselles Sensibles 15ml",
      nature: "null",
      amount: 1,
    },
    {
      code: 3,
      date: "23/11/2022",
      name: "Nước Hoa Bvlgari Rose Goldea Eau De Parfum",
      nature: "Hương hoa cỏ gỗ",
      amount: 1,
    },
    {
      code: 4,
      date: "11/11/2022",
      name: "Sữa dưỡng thể Eucerin sáng da Spotless Brightening SPF7 250ml",
      nature: "null",
      amount: 2,
    },
    {
      code: 5,
      date: "15/11/2022",
      name:
        "Lăn Đặc Trị Khử Mùi Etiaxil Dành Cho Da Nhạy Cảm Aisselles Sensibles 15ml",
      nature: "null",
      amount: 1,
    },
    {
      code: 6,
      date: "23/11/2022",
      name: "Nước Hoa Bvlgari Rose Goldea Eau De Parfum",
      nature: "Hương hoa cỏ gỗ",
      amount: 1,
    },
  ];
  var listid = [];

  function clickChecked(e) {
    listid.push(e.target.value);
    console.log(listid);
  }

  // Nút phân loại sản phẩm
  function classifyProduct() {
    var listIdProduct = Array.from(listid, function(index) {
      return Number(index);
    });
    console.log("List id product tái sử dụng nè:", listIdProduct);
  }

  return (
    <div>
      <div className="container">
        <div className="background">
          <Menu />
        </div>
        <div className="content">
          <Header />

          <div className="wrapper__content">
            <div className="title__content row">
              <span>
                <img src={iconProduct} alt="" />
              </span>
              <p>Danh sách sản phẩm hoàn trả</p>
            </div>
            <div className="box">
              <div className="row-jcsb">
                <div className="group__check__product__refund row-jcsb">
                  <div className="group__checkbox__product__refund row-jcsb">
                    <div className="check__reuse"></div>
                    <p>Tái sử dụng</p>
                  </div>
                  <div className="group__unCheckbox__product__refund row-jcsb">
                    <div className="check__unReuse"></div>
                    <p>Không tái sử dụng</p>
                  </div>
                </div>
                <button className="button" onClick={() => classifyProduct()}>
                  Phân loại sản phẩm
                </button>
              </div>
              <br />
              <div className="table">
                <table>
                  <tr>
                    <th></th>
                    <th className="info__product__refund">Mã hoá đơn</th>
                    <th className="info__product__refund">Ngày đặt</th>
                    <th className="name__product__refund">Tên sản phẩm</th>
                    <th className="nature__product__refund">Tính chất</th>
                    <th className="info__product__refund">Số lượng</th>
                  </tr>
                  {data.map((e) => (
                    <tr>
                      <td>
                        <div className="container__customCheckbox">
                          <input
                            type="checkbox"
                            value={e.code}
                            id={`checkbox` + e.code}
                            onChange={(e) => clickChecked(e)}
                          />
                          <label></label>
                        </div>
                      </td>
                      <td className="info__product__refund">HD{e.code}</td>
                      <td className="info__product__refund">{e.date}</td>
                      <td className="name__product__refund">{e.name}</td>
                      <td className="nature__product__refund">{e.nature}</td>
                      <td className="info__product__refund">{e.amount}</td>
                    </tr>
                  ))}
                </table>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
