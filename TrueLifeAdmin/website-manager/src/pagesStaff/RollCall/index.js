import React, { useState, useEffect } from "react";
import "./style.css";
import MenuStaff from "../../components/MenuStaff/index";
import MenuCashier from "../../components/MenuCashier/index";
import MenuWarehouse from "../../components/MenuWarehouse/index";

import Header from "../../components/Header/index";
import iconAttendance from "../../assets/images/icon-attendance.svg";
import BGLogin from "../../assets/images/background-login.png";
import Avt from "../../assets/images/avt-user.png";
import ButtonLogin from "../../assets/images/btn-login.svg";
import ButtonLogout from "../../assets/images/btn-logout.svg";

export default function Index() {
  var day = new Date();
  const defaultDateStart = localStorage.getItem("timeWorkStart");
  const defaultDateEnd = localStorage.getItem("timeWorkEnd");
  const [timeIn, setTimeIn] = useState(defaultDateStart ? JSON.parse(defaultDateStart) : " null");
  const [timeEnd, setTimeEnd] = useState(defaultDateEnd ? JSON.parse(defaultDateEnd) : " null");

  console.log('defaultDateStart: ' + defaultDateStart);
  console.log('defaultDatee: ' + defaultDateEnd);

  useEffect(() => {
    if(timeIn && timeIn !== "null") {
      document.getElementById("btn__login").style.display = "none";
      document.getElementById("btn__logout").style.display = "block";
      document.getElementById("show-time-start").style.display = "block";
      document.getElementById("show-time-start").innerHTML =
        "Ngày làm: " + timeIn.date + " - " + "Giờ vào: " + timeIn.time;
    } else {
      document.getElementById("btn__login").style.display = "block";
      document.getElementById("btn__logout").style.display = "none";
      document.getElementById("show-time-start").style.display = "none";
    }
  }, [])

  function handleTimeStart() {
    document.getElementById("btn__login").style.display = "none";
    document.getElementById("btn__logout").style.display = "block";
    let h = day.getHours();
    let m = day.getMinutes();
    let s = day.getSeconds();
    let d = day.getDate();
    let t = day.getMonth() + 1;
    let y = day.getFullYear();
    var time = h + ":" + m + ":" + s;
    var date = d + "/" + t + "/" + y;
    setTimeIn(time);
    setTimeEnd("null");
    localStorage.setItem("timeWorkStart", JSON.stringify({date, time}));
    localStorage.setItem("timeWorkEnd", "null");
    document.getElementById("show-time-start").style.display = "block";
    document.getElementById("show-time-start").innerHTML =
      "Ngày làm: " + date + " - " + "Giờ vào: " + time;
  }

  function handleTimeEnd() {
    document.getElementById("btn__login").style.display = "block";
    document.getElementById("btn__logout").style.display = "none";
    let h = day.getHours();
    let m = day.getMinutes();
    let s = day.getSeconds();
    let d = day.getDate();
    let t = day.getMonth() + 1;
    let y = day.getFullYear();
    var time = h + ":" + m + ":" + s;
    var date = d + "/" + t + "/" + y;
    setTimeEnd(date);
    localStorage.setItem("timeWorkEnd", JSON.stringify({date, time}));
    localStorage.setItem("timeWorkStart", "null");
    setTimeIn("null");
    document.getElementById("show-time-start").style.display = "none";
    console.log("Ngày nè:", date);
    console.log("Giờ vào:", timeIn);
    console.log("Giờ ra:", time);
  }

  return (
    <div className="container">
      <div className="background">
        {/* CHỖ NÀY KIỂM TRA TÀI KHOẢN ĐĂNG NHẬP THUỘC LOẠI NÀO ĐỂ DÙNG MENU CHO ĐÚNG NÈ */}
        {/* NẾU LÀ QUẢN LÝ KHO THÌ DÙNG <MenuWarehouse /> */}
        {/* NẾU LÀ NHÂN VIÊN TƯ VẤN HOẶC NHÂN VIÊN KHO THÌ DÙNG <MenuStaff /> */}
        {/* NẾU LÀ NHÂN VIÊN THU NGÂN THÌ DÙNG <MenuCashier /> */}
      </div>
      <div className="content">
        <Header />
        <div className="wrapper__content">
          <div className="title__content row">
            <span>
              <img src={iconAttendance} alt="" />
            </span>
            <p>Điểm danh</p>
          </div>
          <div className="from__login">
            <img src={BGLogin} alt="" />
          </div>
          <div className="content__from__login">
            <img className="img__avt__from__login" src={Avt} alt="" />
            <p className="title__name">Tên người dùng</p>
            <div className="img__btn__login" id="btn__login">
              <img src={ButtonLogin} alt="" onClick={() => handleTimeStart()} />
            </div>
            <div className="img__btn__login" id="btn__logout">
              <img src={ButtonLogout} alt="" onClick={() => handleTimeEnd()} />
            </div>
            <p id="show-time-start"></p>
          </div>
        </div>
      </div>
    </div>
  );
}
