import React, { useState } from "react";
import "./style.css";
import Menu from "../../components/MenuWarehouse/index";
import Header from "../../components/Header/index";
import iconSupplier from "../../assets/images/icon-supplier.svg";

export default function Index() {
  const [infoSupplier, setInfoSupplier] = useState([
    {
      id: 1,
      name: "Nhà cung cấp A",
      address: "140 Lê Trọng Tấn",
      district: "Tây Thạnh",
      city: "Tân Phú",
      email: "truelife@gmail.com",
      phone: "0123456789",
    },
    {
      id: 1,
      name: "Nhà cung cấp A",
      address: "140 Lê Trọng Tấn",
      district: "Tây Thạnh",
      city: "Tân Phú",
      email: "truelife@gmail.com",
      phone: "0123456789",
    },
    {
      id: 1,
      name: "Nhà cung cấp B",
      address: "140 Lê Trọng Tấn",
      district: "Tây Thạnh",
      city: "Tân Phú",
      email: "truelife@gmail.com",
      phone: "0123456789",
    },
    {
      id: 1,
      name: "Nhà cung cấp B",
      address: "140 Lê Trọng Tấn",
      district: "Tây Thạnh",
      city: "Tân Phú",
      email: "truelife@gmail.com",
      phone: "0123456789",
    },
  ]);
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
                <img src={iconSupplier} alt="" />
              </span>
              <p>Nhà cung cấp</p>
            </div>
            <div className="box">
              <p>
                Danh sách nhà cung cấp <hr />
              </p>

              <br />
              <div class="table">
                <table>
                  <tr>
                    <th className="code__supplier">Mã</th>
                    <th className="name__supplier">Tên nhà cung cấp</th>
                    <th className="address__supplier">Địa chỉ</th>
                    <th className="email__supplier">Email</th>
                    <th className="phone__supplier">Số điện thoại</th>
                    <th className="productType__supplier">Loại hàng</th>
                  </tr>
                  {infoSupplier.map((e) => (
                    <tr>
                      <td className="code__supplier">{e.id}</td>
                      <td className="name__supplier">{e.name}</td>
                      <td className="address__supplier">
                        {e.address}, {e.district}, {e.city}
                      </td>
                      <td className="email__supplier">{e.email}</td>
                      <td className="phone__supplier">{e.phone}</td>
                      <td className="produstType__supplier"></td>
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
