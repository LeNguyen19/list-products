import React, { useState, useEffect } from "react";
import background from "../../assets/images/background.png";
import iconUser from "../../assets/images/icon-user.svg";
import iconPass from "../../assets/images/icon-pass.svg";
import iconCloseEye from "../../assets/images/icon-closeEye.svg";
import iconOpenEye from "../../assets/images/icon-openEye.svg";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";

import "./style.css";

export default function Index() {
  const [showPass, setShowPass] = useState(false);
  const [user, setUser] = useState([]);
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const [herf, setHerf] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      const result = await axios({
        method: "POST",
        url: "http://171.244.57.150:8081/api/User/Login",
        data: {
          userName: userName,
          password: pass,
        },
      });
      if (result.data.retText === "Đăng nhập thành công.") {
        document.location.href = "/home";
      } else {
        swal({
          text: result.data.retText,
          icon: "warning",
        });
      }
      if (result.data.data !== null) {
        if (result.data.data.token !== null) {
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${result.data.data.token}`;
          console.log("result.data.data.data: ", result.data.data.data);
          const { userName, userId, fullName, token } = result.data.data;
          localStorage.setItem("accessToken", token);
          localStorage.setItem(
            "Auth:user",
            JSON.stringify({ userName, userId, fullName })
          );
        }
      }
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container__login">
      <img src={background} alt="" />
      <div className="background__login"></div>
      <div className="wrapper__login">
        <h1>ĐĂNG NHẬP</h1>
        <div className="input__user">
          <input
            type="text"
            value={userName}
            placeholder="Nhập tên tài khoản..."
            onChange={(e) => setUserName(e.target.value)}
          />
          <div className="icon__login">
            <img src={iconUser} alt="" />
          </div>
        </div>
        <div className="input__enterPass">
          <input
            type={showPass ? "text" : "password"}
            value={pass}
            placeholder="Nhập mật khẩu..."
            onChange={(e) => setPass(e.target.value)}
          />
          <div className="icon__login">
            <img src={iconPass} alt="" />
          </div>
          <span
            className="icon__eye"
            onClick={() => setShowPass((showPass) => !showPass)}
          >
            <img src={showPass ? iconOpenEye : iconCloseEye} alt="" />
          </span>
        </div>
        <button onClick={() => login()}>
          <Link>ĐĂNG NHẬP</Link>
        </button>
        <p>
          Bạn chưa có tài khoản?   <Link to={"/register"}><span>Đăng ký ngay</span></Link> 
        </p>
      </div>
    </div>
  );
}
