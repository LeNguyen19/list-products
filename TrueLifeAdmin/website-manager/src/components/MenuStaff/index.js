import React from "react";
import "./style.css";
import Logo from "../../assets/images/logo.jpg";
import iconHome from "../../assets/images/icon-home.svg";
import iconProduct from "../../assets/images/icon-product.svg";
import iconAttendance from "../../assets/images/icon-attendance.svg";
import iconTimesheets from "../../assets/images/icon-timesheets.svg";
import iconCalendar from "../../assets/images/icon-calendar.svg";
import iconEvent from "../../assets/images/icon-event.svg";
import iconRegister from "../../assets/images/icon-register.svg";

import { Link } from "react-router-dom";

export default function index() {
  return (
    <div>
      <div className="navmenu">
        <img src={Logo} alt="" />
        <hr />
        <div className="menu">
          <ul>
            <Link to="/Emloyee">
              <li>
                <img src={iconHome} alt="" />
                Tổng quan
              </li>
            </Link>
            <Link to="/RollCall">
              <li>
                <img src={iconAttendance} alt="" />
                Điểm danh
              </li>
            </Link>
            <Link to="/TimesheetsStaff">
              <li>
                <img src={iconTimesheets} alt="" /> Bảng chấm công
              </li>
            </Link>
            <Link to="">
              <li>
                <img src={iconRegister} alt="" /> Đăng ký ca
              </li>
            </Link>
            <Link to="">
              <li>
                <img src={iconCalendar} alt="" /> Lịch làm việc
              </li>
            </Link>
            <Link to="/ProductAll">
              <li>
                <img src={iconProduct} alt="" /> Sản phẩm
              </li>
            </Link>
            <Link to="/SeeEvent">
              <li>
                <img src={iconEvent} alt="" /> Khuyến mãi
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
