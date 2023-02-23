import React, { useState, useEffect } from "react";
import "./style.css";
import Menu from "../../components/Menu/index";
import Header from "../../components/Header/index";
import NavInfoUser from "../../components/NavInfoUser/index";
import Footer from "../../components/Footer/index";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Spin } from "antd";

import Product1 from "../../assets/images/product1.webp";
import Product2 from "../../assets/images/product2.webp";
import Product3 from "../../assets/images/product3.webp";
import Product4 from "../../assets/images/product4.webp";

export default function Index() {
  const [loading, setLoading] = useState(false);
  const { orderId } = useParams();
  console.log("id order: " + orderId);

  // const [detailOrder, setDetailOrder] = useState([
  //   {
  //     productName: "DIOR Miss Dior Eau de Parfum 2",
  //     avatar: Product1,
  //     prize: 2450000,
  //     amount: 2,
  //     money: 4900000,
  //   },
  //   {
  //     productName: "Nước hoa CHANEL COCO MADEMOISELLE",
  //     avatar: Product2,
  //     prize: 1000000,
  //     amount: 1,
  //     money: 1000000,
  //   },
  //   {
  //     productName: "BOBBI BROWN Beach Fragrance",
  //     avatar: Product3,
  //     prize: 640000,
  //     amount: 1,
  //     money: 640000,
  //   },
  //   {
  //     productName: "VIKTOR & ROLF Flowerbomb Hair Mist",
  //     avatar: Product4,
  //     prize: 1050000,
  //     amount: 1,
  //     money: 1050000,
  //   },
  // ]);

  const [detailOrder, setDetailOrder] = useState([]);

  useEffect(() => {
    onGetOrderDetail({ orderId });
  }, [orderId]);

  const onGetOrderDetail = async ({ orderId, ...body }) => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        "http://171.244.57.150:8081/api/InfoOrder/xem-chi-tiet-don-hang",
        body,
        { params: { orderId } }
      );
      setDetailOrder(data?.data);
    } catch (error) {
      console.log("error: ", error);
    } finally {
      setLoading(false);
    }
  };

  console.log("chi tiet don hang:", detailOrder);

  function formatCash(value) {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);
  }

  return (
    <Spin spinning={loading}>
      <div>
        <Menu type="login" />
        <Header title="Hồ sơ" desBlack="Trang chủ " desPink=" Hồ sơ" />
        <div className="container__yourOrder">
          <div className="content__infoUser">
            <div className="nav__infoUser">
              <NavInfoUser />
            </div>
            <div className="wrapper__information">
              <p>Đơn hàng của bạn</p>
              <hr />
              <div className="wrapper__listYourOder">
                <div className="title__listYourOder">
                  <div className="nameProduct">
                    <p>Tên sản phẩm</p>
                  </div>
                  <div className="imgProduct">
                    <p>Hình ảnh</p>
                  </div>
                  <div className="amountProduct">
                    <p>Số lượng</p>
                  </div>
                  <div className="priceProduct">
                    <p>Đơn giá</p>
                  </div>
                  <div className="moneyProduct">
                    <p>Thành tiền</p>
                  </div>
                </div>
                <hr />
                {detailOrder?.thongTinChiTietDonHangs?.map((e) => (
                  <>
                    <div className="list__detailOrder">
                      <div className="nameProduct">
                        <p>{e.productName}</p>
                      </div>
                      <div className="imgProduct">
                        <img src={e.avatar} alt="" />
                      </div>
                      <div className="amountProduct">
                        <p>{e.amount}</p>
                      </div>
                      <div className="priceProduct">
                        <p>{formatCash(e.prize)}</p>
                      </div>
                      <div className="moneyProduct">
                        <p>{formatCash(e.prize * e.amount)}</p>
                      </div>
                    </div>
                    <hr />
                  </>
                ))}
              </div>
              <br /> <br />
              {/* <button style={detailOrder.status === "DANGGIAO" ? {display:"block"} : {display:"none"}}>Xác nhận đã nhận hàng</button> */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Spin>
  );
}
