import React, { useState } from "react";
import "./style.css";
import Menu from "../../components/MenuWarehouse/index";
import Header from "../../components/Header/index";
import iconInvoice from "../../assets/images/icon-invoice.svg";
import Product1 from "../../assets/images/product1.webp";

export default function Index() {
  // Data ----------------------------------------------------------------
  const [detailInvoiceNotReceived, setDetailInvoiceNotReceived] = useState({
    quantity: 2,
    money: "580.000đ",
    listProduct: [
      {
        id: 1,
        img: Product1,
        name: "	Sữa Dưỡng Thể Aveeno Active Naturals Daily Moisturizing Lotion Giữ Ẩm Hàng Ngày 354ml",
        price: "290.000đ",
        amount: 1,
        total: "290.000đ",
      },
      {
        id: 2,
        img: Product1,
        name: "	Sữa Dưỡng Thể Aveeno Active Naturals Daily Moisturizing Lotion Giữ Ẩm Hàng Ngày 354ml",
        price: "290.000đ",
        amount: 1,
        total: "290.000đ",
      },
    ],
  });

  // Nút thêm vào danh sách sản phẩm hoàn về ------------------------------
  function AddListProductNotReceived() {
    alert(
      "Thêm các sản phẩm trong đơn hàng này vào danh sách sản phẩm hoàn về"
    );
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
                <img src={iconInvoice} alt="" />
              </span>
              <p>Chi tiết đơn hàng đổi trả</p>
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

                  {detailInvoiceNotReceived.listProduct.map((e) => (
                    <tr>
                      <td className="code__browseOrder">SP0{e.id}</td>
                      <td className="img__browseOrder">
                        <img src={Product1} alt="" />
                      </td>
                      <td className="nameProduct__OrderApproved">{e.name}</td>
                      <td className="price__browseOrder">{e.price}</td>
                      <td className="amount__browseOrder">{e.amount}</td>
                      <td className="sumPrice__browseOrder">{e.total}</td>
                    </tr>
                  ))}

                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="amount__browseOrder text__weight__browseOrder">
                      Số lượng:{" " + detailInvoiceNotReceived.quantity}
                    </td>
                    <td className="sumPrice__browseOrder text__weight__browseOrder">
                      Tổng tiền:{" " + detailInvoiceNotReceived.money}
                    </td>
                  </tr>
                </table>
                <hr />
                <br />
                <div className="group__btn__detailOrderWarehouse">
                  <button
                    className="button"
                    onClick={() => AddListProductNotReceived()}
                  >
                    Thêm vào danh sách sản phẩm hoàn về
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
