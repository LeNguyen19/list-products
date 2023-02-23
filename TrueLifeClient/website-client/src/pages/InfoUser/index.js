import React, { useEffect, useState } from "react";
import "./style.css";
import Menu from "../../components/Menu/index";
import Header from "../../components/Header/index";
import NavInfoUser from "../../components/NavInfoUser/index";
import avtUser from "../../assets/images/avt.png";
import Footer from "../../components/Footer/index";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { Spin } from "antd";

export default function Index() {
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState({
    // nameLogin: "Người dùng",
    // avt: avtUser,
    // fullname: "Tên người dùng nè",
    // Email: "nguoidung@123.com",
    // phone: "0123456789",
    // sex: "Khác",
    // date: "01/01/2001",
  });

  const { userId } = useParams();
  console.log(userId);

  useEffect(() => {
    onGetDataUser({ userId });
  }, [userId]);

  const onGetDataUser = async ({ userId, ...body }) => {
    try {
      setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <Spin spinning={loading}>
      <div>
        <Menu type="login" />
        <Header title="Hồ sơ" desBlack="Trang chủ " desPink=" Hồ sơ" />
        <div className="container__infoUser">
          <div className="content__infoUser">
            <div className="nav__infoUser">
              <NavInfoUser userId={userId} />
            </div>
            <div className="wrapper__information">
              <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
              <hr />
              <div className="personal__information">
                <div className="table__information">
                  <table>
                    <tr>
                      <td className="title">Tên đăng nhập</td>
                      <td className="space">
                        <p>:</p>
                      </td>
                      <td>{user.userName}</td>
                    </tr>
                    <tr>
                      <td className="title">Họ và tên</td>
                      <td className="space">
                        <p>:</p>
                      </td>
                      <td>{user.fullName}</td>
                    </tr>
                    <tr>
                      <td className="title">Email</td>
                      <td className="space">
                        <p>:</p>
                      </td>
                      <td>{user.email}</td>
                    </tr>
                    <tr>
                      <td className="title">Số điện thoại</td>
                      <td className="space">
                        <p>:</p>
                      </td>
                      <td>{user.phone}</td>
                    </tr>
                    <tr>
                      <td className="title">Giới tính</td>
                      <td className="space">
                        <p>:</p>
                      </td>
                      <td>{user.gender}</td>
                    </tr>
                    <tr>
                      <td className="title">Ngày sinh</td>
                      <td className="space">
                        <p>:</p>
                      </td>
                      <td>{user.birthday}</td>
                    </tr>
                  </table>
                </div>
                <div className="avt__information">
                  <img className="img__avt__user" src={user.avatar} alt="" />
                </div>
              </div>
              <br/>
              <div className="button__information">
                <Link to={`/updateInfoUser/${userId}`}>
                  <button>Chỉnh sửa</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Spin>
  );
}
