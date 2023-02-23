import React, { useState } from "react";
import background from "../../assets/images/background.png";
import iconUser from "../../assets/images/icon-user.svg";
import iconMail from "../../assets/images/icon-email.svg";
import iconPhone from "../../assets/images/icon-phone.svg";
import iconPass from "../../assets/images/icon-pass.svg";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Index() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
  const [rePass, setRePass] = useState("");
  const navigate = useNavigate();

  const handleSubmitRegister = () => {
    pass === rePass ? alert("Thành công") : alert("Thất bại");
  };

  const register = async () => {
    try {
      const result = await axios({
        method: "POST",
        url: "http://171.244.57.150:8081/api/User/Register",
        data: {
          userName: name,
          email: email,
          phone: phone,
          password: pass,
          confirmPassword: rePass,
        },
      });
      console.log(result.data.retText);
      alert(result.data.retText);
      if (result.data.data !== null) {
        navigate("/login");
      }
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container__register">
      <img src={background} alt="" />
      <div className="background__register"></div>
      <div className="wrapper__register">
        <h1>ĐĂNG KÝ</h1>
        <div className="input__icon">
          <input
            type="text"
            placeholder="Tên tài khoản"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <img src={iconUser} alt="" />
        </div>
        <div className="input__icon">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <img src={iconMail} alt="" />
        </div>
        <div className="input__icon">
          <input
            type="text"
            placeholder="Số điện thoại"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <img src={iconPhone} alt="" />
        </div>
        <div className="input__icon">
          <input
            type="password"
            placeholder="Mật khẩu"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <img src={iconPass} alt="" />
        </div>
        <div className="input__icon">
          <input
            type="password"
            placeholder="Xác nhận mật khẩu"
            value={rePass}
            onChange={(e) => setRePass(e.target.value)}
          />
          <img src={iconPass} alt="" />
        </div>
        <button onClick={register}>ĐĂNG KÝ</button>
        {/* <div id="erro" className="erro__message">
          <p>
            Vui lòng nhập xác nhận mật khẩu chính xác
          </p>
        </div> */}
        <p>
          Bạn đã có tài khoản?{" "}
          <Link to={"/login"}>
            <span>Đăng nhập ngay</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
