import React, { useState } from "react";
import "./style.css";
import Menu from "../../components/MenuWarehouse/index";
import Header from "../../components/Header/index";
import iconCensorship from "../../assets/images/icon-censorship.svg";

export default function Index() {
  const [detailProduct, setDetailProduct] = useState([
    {
      id: 1,
      mouth: "1/2022",
      amountImport: 1000,
      amountSell: 900,
      amountReturn: 100,
      amountExpired: 100,
      amountInventory: 100,
    },
    {
      id: 2,
      mouth: "2/2022",
      amountImport: 1000,
      amountSell: 900,
      amountReturn: 100,
      amountExpired: 100,
      amountInventory: 100,
    },
    {
      id: 3,
      mouth: "3/2022",
      amountImport: 1000,
      amountSell: 900,
      amountReturn: 100,
      amountExpired: 100,
      amountInventory: 100,
    },
    {
      id: 4,
      mouth: "4/2022",
      amountImport: 1000,
      amountSell: 900,
      amountReturn: 100,
      amountExpired: 100,
      amountInventory: 100,
    },
    {
      id: 5,
      mouth: "5/2022",
      amountImport: 1000,
      amountSell: 900,
      amountReturn: 100,
      amountExpired: 100,
      amountInventory: 100,
    },
    {
      id: 6,
      mouth: "6/2022",
      amountImport: 1000,
      amountSell: 900,
      amountReturn: 100,
      amountExpired: 100,
      amountInventory: 100,
    },
    {
      id: 7,
      mouth: "7/2022",
      amountImport: 1000,
      amountSell: 900,
      amountReturn: 100,
      amountExpired: 100,
      amountInventory: 100,
    },
    {
      id: 8,
      mouth: "8/2022",
      amountImport: 1000,
      amountSell: 900,
      amountReturn: 100,
      amountExpired: 100,
      amountInventory: 100,
    },
    {
      id: 9,
      mouth: "9/2022",
      amountImport: 1000,
      amountSell: 900,
      amountReturn: 100,
      amountExpired: 100,
      amountInventory: 100,
    },
    {
      id: 10,
      mouth: "10/2022",
      amountImport: 1000,
      amountSell: 900,
      amountReturn: 100,
      amountExpired: 100,
      amountInventory: 100,
    },
    {
      id: 11,
      mouth: "11/2022",
      amountImport: 1000,
      amountSell: 900,
      amountReturn: 100,
      amountExpired: 100,
      amountInventory: 100,
    },
    {
      id: 12,
      mouth: "12/2022",
      amountImport: 1000,
      amountSell: 900,
      amountReturn: 100,
      amountExpired: 100,
      amountInventory: 100,
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
                <img src={iconCensorship} alt="" />
              </span>
              <p>Chi ti???t th???ng k?? s???n ph???m theo n??m</p>
            </div>
            <div className="box">
              <div class="table">
                <table>
                  <tr>
                    <th>Th??ng</th>
                    <th>S??? l?????ng nh???p v??o</th>
                    <th>S??? l?????ng b??n ra</th>
                    <th>S??? l?????ng tr??? v???</th>
                    <th>S??? l?????ng h???t h???n</th>
                    <th>S??? l?????ng t???n kho</th>
                  </tr>
                  {detailProduct.map((e) => (
                    <tr>
                      <td>{e.mouth}</td>
                      <td>{e.amountImport}</td>
                      <td>{e.amountSell}</td>
                      <td>{e.amountReturn}</td>
                      <td>{e.amountExpired}</td>
                      <td>{e.amountInventory}</td>
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
