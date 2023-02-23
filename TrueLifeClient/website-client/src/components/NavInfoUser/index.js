import React, { useState } from "react";
import "./style.css";
import avtUser from "../../assets/images/avtUser.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

export default function Index() {
  const userId = JSON.parse(localStorage.getItem("Auth:user")).userId;
  useEffect(() => {
    onGetDataUser({ userId });
    onGetAddressUser({ userId });
  }, [userId]);
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const onGetDataUser = async ({ userId, ...body }) => {
    try {
      const { data } = await axios.post(
        "http://171.244.57.150:8081/api/User/DetailInfoUserAsync",
        body,
        {
          params: { userId },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      setUser(data.data);
    } catch (error) {
      console.log("error: ", error);
    }
  };
  const [addressUser, setAddressUser] = useState();
  const onGetAddressUser = async ({ userId, ...body }) => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        "http://171.244.57.150:8081/api/AddressDeliveryUser/ListInfoAddressDeliveryUser",
        body,
        { params: { id: userId } }
      );
      setAddressUser(data.data);
    } catch (error) {
      console.log("error: ", error);
    } finally {
      setLoading(false);
    }
  };

  console.log("data;", addressUser);
  return (
    <div className="container__navInfoUser">
      <div className="group__InfoUser">
        <img src={user.avatar} alt="" />
        <div className="title__info">
          <p>{user.fullName}</p>
          <p className="light__title">True Life xin chào!</p>
        </div>
      </div>
      <hr />
      <Link to={`/infoUser/${userId}`}>
        <p>Hồ sơ</p>
      </Link>
      <Link to={`/address/${userId}`}>
        <p>Địa chỉ</p>
      </Link>
      <Link to="/updatePass">
        <p>Đổi mật khẩu</p>
      </Link>
      <Link to="/yourOrder">
        <p>Đơn hàng của bạn</p>
      </Link>
    </div>
  );
}
