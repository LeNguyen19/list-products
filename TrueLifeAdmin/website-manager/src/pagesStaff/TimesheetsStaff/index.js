import React, { useState, useEffect } from "react";
import "./style.css";
import MenuStaff from "../../components/MenuStaff/index";
import MenuCashier from "../../components/MenuCashier/index";
import MenuWarehouse from "../../components/MenuWarehouse/index";
import Header from "../../components/Header/index";
import iconTimesheets from "../../assets/images/icon-timesheets.svg";
import { DatePicker, Space } from "antd";

export default function Index() {
  const [selectedDate, setSelectedDate] = useState();
  // Lọc ca làm theo tháng
  function FindShiftInMouth() {
    var mouth = selectedDate.$M + 1;
    var year = selectedDate.$y;
    alert("Lọc ca làm của người dùng này trong tháng: " + mouth + "/" + year);
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
              <img src={iconTimesheets} alt="" />
            </span>
            <p>Bảng chấm công</p>
          </div>
          <div className="box row-jcsb">
            <div className="group__choose__time__timeSheetsStaff row-jcsb">
              <p>Chọn tháng:</p>
              <div className="input__choose__date__timeSheetsStaff">
                <Space direction="vertical">
                  <DatePicker
                    placeholder="Chọn tháng"
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    picker="month"
                    format="MM/YYYY"
                  />
                </Space>
              </div>
            </div>
            <button className="button" onClick={() => FindShiftInMouth()}>
              Lọc
            </button>
          </div>
          <div className="box">
            <div className="table">
              <table>
                <tr>
                  <th>Ngày làm</th>
                  <th>Ca làm</th>
                  <th>Đăng nhập</th>
                  <th>Đăng xuất</th>
                  <th>Số giờ làm</th>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </table>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
