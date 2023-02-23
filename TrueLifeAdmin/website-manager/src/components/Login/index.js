import React, { useState } from "react";
import "./style.css";
import Background from "../../assets/images/background-login.jpg";
import iconCloseEye from "../../assets/images/icon-closeEye.svg";
import iconOpenEye from "../../assets/images/icon-openEye.svg";

export default function Index() {
  const [showPass, setShowPass] = useState(false);
  return (
    <div className="container__login">
      <div className="wrapper__login">
        <h2>ĐĂNG NHẬP</h2>
        <div className="group__input__login">
          <input placeholder="Tên đăng nhập..." />
          <div className="input__password">
            <input
              type={showPass ? "text" : "password"}
              placeholder="Nhập mật khẩu..."
            />
            <span
              className="icon__eye"
              onClick={() => setShowPass((showPass) => !showPass)}
            >
             <img src={showPass ? iconOpenEye : iconCloseEye} alt="" />
            </span>
          </div>
        </div>
        <div className="group__error">
            <p>*Thông báo lỗi nè hen!</p>
        </div>
        <button>Đăng nhập</button>
      </div>
      <img src={Background} alt="" />
    </div>
  );
}
