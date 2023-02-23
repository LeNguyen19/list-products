import React, { useState } from "react";
import "./style.css";
import Menu from "../../components/MenuAdmin/index";
import Header from "../../components/Header/index";
import iconStaff from "../../assets/images/icon-staff.svg";
import { DatePicker, Space } from "antd";

export default function Index() {
  const [selectedMonth, setSelectedMonth] = useState();

  // LỌC BẢNG CHẤM CÔNG THEO THÁNG --------------------------------------------------------
  function FilterMounth() {
    var month = selectedMonth.$M + 1;
    var year = selectedMonth.$y;
    console.log("Tháng cần lọc: ", month);
    console.log("Năm cần lọc: ", year);
    console.log("Tháng/năm cần lọc: ", month + "/" + year);
  }

  // DỮ LIỆU ĐẦU VÀO -----------------------------------------------------------------------

  const [infoTimesheet, setInfoTimesheet] = useState([
    {
      id: 1,
      nameStaff: "Lê Huỳnh Nam",
      dateWork: "26/11/2022",
      shift: 1,
      login: "08:55",
      logout: "13:10",
      workingHours: "4 giờ",
    },
    {
      id: 2,
      nameStaff: "Phạm Châu Thạch",
      dateWork: "26/11/2022",
      shift: 2,
      login: "12:40",
      logout: "17:02",
      workingHours: "4 giờ",
    },
    {
      id: 3,
      nameStaff: "Huỳnh Hoa Thám",
      dateWork: "26/11/2022",
      shift: 3,
      login: "17:58",
      logout: "21:05",
      workingHours: "4 giờ",
    },
  ]);

  // XUẤT FILE EXCEL -----------------------------------------------------------------------
  function exportExcel() {
    if (selectedMonth === undefined) {
      alert("Vui lòng chọn tháng cần xuất bảng lương");
    } else {
      var month = selectedMonth.$M + 1;
      var year = selectedMonth.$y;
      console.log("Xuất bảng lương nhân viên tháng: ", month + "/" + year);
    }
  }

  return (
    <div className="container">
      <div className="background">
        <Menu />
      </div>
      <div className="content">
        <Header />
        <div className="wrapper__content">
          <div className="title__content row">
            <span>
              <img src={iconStaff} alt="" />
            </span>
            <p>Bảng chấm công nhân viên</p>
          </div>
          <div className="box row-jcsb">
            <div className="row-jcsb group__choose__month__timeSheets">
              <p>Chọn tháng:</p>
              <div className="input__choose__month__timeSheets">
                <Space direction="vertical">
                  <DatePicker
                    placeholder="Chọn tháng"
                    selected={selectedMonth}
                    onChange={(month) => setSelectedMonth(month)}
                    picker="month"
                    format="MM/YYYY"
                  />
                </Space>
              </div>
            </div>
            <button className="button" onClick={() => FilterMounth()}>
              Lọc
            </button>
          </div>
          <div className="box">
            <div className="table">
              <table>
                <tr>
                  <th>Mã</th>
                  <th className="nameStaff__timesheets">Tên nhân viên</th>
                  <th>Ngày làm</th>
                  <th>Ca làm</th>
                  <th>Đăng nhập</th>
                  <th>Đăng xuất</th>
                  <th>Số giờ làm</th>
                </tr>
                {infoTimesheet.map((e) => (
                  <tr>
                    <td>CCNV00{e.id}</td>
                    <td className="nameStaff__timesheets">{e.nameStaff}</td>
                    <td>{e.dateWork}</td>
                    <td>{e.shift}</td>
                    <td>{e.login}</td>
                    <td>{e.logout}</td>
                    <td>{e.workingHours}</td>
                  </tr>
                ))}
              </table>
              <hr />
            </div>
            <br />
            <div className="btn__timesheets">
              <button className="button" onClick={() => exportExcel()}>
                Xuất excel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
