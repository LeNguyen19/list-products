import React, { useEffect, useState } from "react";
import "./style.css";
import Menu from "../../components/Menu/index";
import Header from "../../components/Header/index";
import NavInfoUser from "../../components/NavInfoUser/index";
import Footer from "../../components/Footer/index";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Spin } from "antd";
import { ORDER_STATUS } from "../../utility/constants";

export default function Index() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const userData = JSON.parse(localStorage.getItem("Auth:user"));
  console.log("userData", userData);

  const [order, setOrder] = useState([
    // {
    //   id: 1,
    //   orderId: "DH12345",
    //   createAt: "10/09/2022",
    //   orderAddress: "140 Lê Trọng Tấn, Tây Thạnh, Tân Phú, TP Hồ Chí Minh",
    //   orderValue: "2000000đ",
    //   status: "CHUADUYET",
    // },
    // {
    //   id: 2,
    //   orderId: "DH22222",
    //   createAt: "25/09/2022",
    //   orderAddress: "36/21A Trần Tấn, Tân Sơn Nhì, Tân Phú, TP Hồ Chí Minh",
    //   orderValue: "900000đ",
    //   status: "DADUYET",
    // },
    // {
    //   id: 3,
    //   orderId: "DH44444",
    //   createAt: "13/10/2022",
    //   orderAddress: "Định Thành, Đông Hải, Bạc Liêu",
    //   orderValue: "1800000đ",
    //   status: "DANGGIAO",
    // },
  ]);

  function formatCash(value) {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);
  }

  useEffect(() => {
    onGetListOrder({
      page: 1,
      limit: 50,
      userId: userData?.userId,
    });
  }, [userData?.userId]);

  const onGetListOrder = async ({ page, limit, userId, ...body }) => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        "http://171.244.57.150:8081/api/User/lay-danh-sach-don-hang",
        body,
        { params: { page, limit, userId } }
      );
      setOrder(data?.data?.listData);
    } catch (error) {
      console.log("error: " + error);
    } finally {
      setLoading(false);
    }
  };

  console.log("listOder: ", order);

  // function handleArrowLeft() {
  //   page === 1 ? setPage(1) : setPage(page - 1);
  //   alert(page === 1 ? page : page - 1);
  // }

  // function handleArrowRight() {
  //   page === listPage.length ? setPage(listPage.length) : setPage(page + 1);
  //   alert(page === 5 ? page : page + 1);
  // }

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
                  <div className="orderID">
                    <p>Mã đơn hàng</p>
                  </div>
                  <div className="orderDate">
                    <p>Ngày đặt</p>
                  </div>
                  <div className="deliveryAddress">
                    <p>Địa chỉ nhận hàng</p>
                  </div>
                  <div className="orderValue">
                    <p>Giá trị</p>
                  </div>
                  <div className="statusOrder">
                    <p>Tình trạng</p>
                  </div>
                  <div className="seeDetail">
                    <p>Hành động</p>
                  </div>
                </div>
                <hr />
                {order.map((e) => (
                  <div>
                    <div className="table__listYourOder">
                      <div className="orderID">
                        <p>DH{e.orderId}</p>
                      </div>
                      <div className="orderDate">
                        <p>{e.createAt.slice(0, 10)}</p>
                      </div>
                      <div className="deliveryAddress">
                        <p>
                          {e.infoAddressDeliveryUser.address +
                            `, ` +
                            e.infoAddressDeliveryUser.districtName +
                            `, ` +
                            e.infoAddressDeliveryUser.provinceName}
                        </p>
                      </div>
                      <div className="orderValue">
                        <p>{formatCash(e.total)}</p>
                      </div>
                      <div className="statusOrder">
                        <p>
                          {
                            ORDER_STATUS.find(
                              (item) => item.values === e.status
                            ).title
                          }
                        </p>
                      </div>
                      <div className="seeDetail">
                        <Link to={`/detailOrder/${e.orderId}`}>
                          <p>Xem chi tiết</p>
                        </Link>
                      </div>
                    </div>
                    {/* <div>
                      <br />
                    </div> */}
                    <hr />
                  </div>
                ))}
              </div>
              <br /> <br />
              {/* <div className="paging">
                <div></div>
                <div className="group__paging">
                  <div
                    className="arrowLeft"
                    onClick={() => handleArrowLeft()}
                  ></div>
                  <p>{page}</p>/<p>{listPage.length}</p>
                  <div
                    className="arrowRight"
                    onClick={() => handleArrowRight()}
                  ></div>
                </div>
                <div></div>
              </div> */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Spin>
  );
}
