import React from "react";
import { useEffect, useState } from "react";
import "./style.css";
import Header from "../../components/Header/index";
import Menu from "../../components/Menu/index";
import Title from "../../components/Title/index";
import ListProducts from "../../components/ListProducts/index";
import axios from "axios";
import Footer from "../../components/Footer/index";
import { Link, useParams } from "react-router-dom";
import Product1 from "../../assets/images/product1.webp";
import Product2 from "../../assets/images/product2.webp";
import Product3 from "../../assets/images/product3.webp";
import Product4 from "../../assets/images/product4.webp";
import { Spin } from "antd";

export default function Index() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [refreshData, setRefreshData] = useState(false);

  const onRefreshData = () => setRefreshData(!refreshData);

  function formatCash(value) {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);
  }

  const userId = JSON.parse(localStorage.getItem("Auth:user")).userId;

  useEffect(() => {
    onGetProductCart({ userId });
  }, [refreshData]);

  const onGetProductCart = async ({
    userId,
    page = 1,
    limit = 25,
    ...body
  }) => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        "http://171.244.57.150:8081/api/Data/ListCartByUser",
        body,
        { params: { usreId: userId, page, limit } }
      );
      setProducts(data.data.listData);
    } catch (error) {
      console.log("error: ", error);
    } finally {
      setLoading(false);
    }
  };

  var amount = products.map((e) => e.quantity);
  var money = products.map((e) => e.total);

  function sumArray(mang) {
    let sum = 0;
    let i = 0;
    while (i < mang.length) {
      sum += mang[i];
      i++;
    }
    return sum;
  }

  const sumAmount = sumArray(amount);
  const sumMoney = sumArray(money);

  return (
    <Spin spinning={loading}>
      <div>
        <div>
          <Menu type="login" />
          <Header title="Giỏ hàng" desBlack="Trang chủ " desPink=" Giỏ hàng" />
          <div className="container__cart">
            <Title type="pages" title="Giỏ hàng của bạn" />
            <div className="row-jcsb">
              <div className="list__products">
                <div className="container__list title__listProducts">
                  <div className="title__image__products">
                    <p>Ảnh sản phẩm</p>
                  </div>
                  <div className="title__name__products">
                    <p>Tên sản phẩm</p>
                  </div>
                  <div className="title__price__products">
                    <p>Đơn giá</p>
                  </div>
                  <div className="title__number__products">
                    <p>Số lượng</p>
                  </div>
                  <div className="title__price__products">
                    <p>Thành tiền</p>
                  </div>
                  <div className="title__icon__deleted__products">
                    <p>Xoá</p>
                  </div>
                </div>
                <hr />
                {products.map((e) => (
                  <ListProducts
                    type="cart"
                    image={e.avatar}
                    name={e.productName}
                    price={formatCash(e.productPrice)}
                    id={e.cartId}
                    amount={e.quantity}
                    money={formatCash(e.total)}
                    loading={loading}
                    setLoading={setLoading}
                    onRefreshData={onRefreshData}
                  />
                ))}
              </div>
              <div className="info__oder">
                <p>Thông tin đơn hàng</p>
                <hr />
                <table>
                  <tr>
                    <td>Tống số lượng</td>
                    <td>: {sumAmount}</td>
                  </tr>
                  <tr>
                    <td>Tổng tiền</td>
                    <td>
                      :{" "}
                      <span className="into__money">
                        {formatCash(sumMoney)}
                      </span>
                    </td>
                  </tr>
                </table>
                <Link to="/order">
                  <button>Tiến hành thanh toán</button>
                </Link>
                <Link to="/products">
                  <button>Tiếp tục mua hàng</button>
                </Link>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </Spin>
  );
}
