import React, { useEffect, useState } from "react";
import "./style.css";
import Menu from "../../components/Menu/index";
import Header from "../../components/Header/index";
import NavInfoUser from "../../components/NavInfoUser/index";
import img from "../../assets/images/updatePass.png";
import Footer from "../../components/Footer/index";
import { useParams } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

export default function Index() {
  const userId = JSON.parse(localStorage.getItem("Auth:user")).userId;
  useEffect(() => {
    onGetDataUser({ userId });
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
  console.log("infoUser:", user);

  const [currentPass, setCurrentPass] = useState();
  const [pass, setPass] = useState();
  const [rePass, setRePass] = useState();

  async function handleClickUpdatePassword() {
    if (pass !== rePass) {
      swal({
        text: "Xác nhận mật khẩu mới chưa khớp. Vui lòng nhập lại!",
        icon: "warning",
      });
    } else if (pass === rePass) {
      try {
        const formData = {
          userId: user.userId,
          userName: user.userName,
          fullName: user.fullName,
          birthday: user.birthday,
          email: user.email,
          phone: user.phone,
          gender: user.gender,
          avatar: user.avatar,
          password: rePass,
        };
        const response = await axios.put(
          `http://171.244.57.150:8081/api/InfoUser/update`,
          formData
        );
        if (response.retCode !== 0) {
          swal({
            text: "Cập nhật mật khẩu thành công!",
            icon: "success",
          });
          return;
        }
        swal({
          text: "Cập nhật mật khẩu thất bại, vui lòng kiểm tra lại và thử lại sau!",
          icon: "warning",
        });
        console.log("response:", response);
      } catch (error) {
        console.log("error:", error);
      }
    }
  }

  return (
    <div>
      <Menu type="login" />
      <Header title="Hồ sơ" desBlack="Trang chủ " desPink=" Hồ sơ" />
      <div className="container__updatePass">
        <div className="content__infoUser">
          <div className="nav__infoUser">
            <NavInfoUser />
          </div>
          <div className="wrapper__information">
            <p>
              Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người
              khác
            </p>
            <hr />
            <div className="personal__information">
              <div className="table__information">
                <table>
                  {/* <tr>
                    <td className="title">Mật khẩu hiện tại</td>
                    <td className="space">
                      <p>:</p>
                    </td>
                    <td className="input__update__pass">
                      <input onChange={(e) => setCurrentPass(e.target.value)} />
                    </td>
                  </tr> */}
                  <tr>
                    <td className="title">Mật khẩu mới</td>
                    <td className="space">
                      <p>:</p>
                    </td>
                    <td className="input__update__pass">
                      <input onChange={(e) => setPass(e.target.value)} />
                    </td>
                  </tr>
                  <tr>
                    <td className="title">Xác nhận mật khẩu</td>
                    <td className="space">
                      <p>:</p>
                    </td>
                    <td className="input__update__pass">
                      <input onChange={(e) => setRePass(e.target.value)} />
                    </td>
                  </tr>
                  <tr></tr>
                  <tr></tr>
                  <tr>
                    <td className="title"></td>
                    <td className="space">
                      <p></p>
                    </td>
                    <td>
                      <button onClick={() => handleClickUpdatePassword()}>
                        Xác nhận
                      </button>
                    </td>
                  </tr>
                </table>
              </div>
              <div>
                <img src={img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
