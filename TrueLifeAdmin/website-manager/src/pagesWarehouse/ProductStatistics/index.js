import React, { useState } from "react";
import "./style.css";
import Menu from "../../components/MenuWarehouse/index";
import Header from "../../components/Header/index";
import iconCensorship from "../../assets/images/icon-censorship.svg";
import { DatePicker, Space } from "antd";
import IconDropdownGrey from "../../assets/images/dropdownGrey.svg";
import { useNavigate } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function Index() {
  const navigate = useNavigate();
  // LOẠI THỜI GIAN ----------------------------------------------------
  const [isActiveTime, setIsActiveTime] = useState(false);
  const [selectedTime, setSelectedTime] = useState();
  const [valueDisplay, setValueDisplay] = useState(true);

  const listTime = [
    {
      id: 1,
      nameTime: "Theo tháng",
    },
    {
      id: 2,
      nameTime: "Theo năm",
    },
  ];

  function dropdownTimeClick() {
    setIsActiveTime(!isActiveTime);
    document.getElementById("border__dropdown__Time").style.border =
      "1px solid #FA748F";
  }
  function dropdownItemTimeClick(id) {
    setSelectedTime(listTime[id - 1].nameTime);
    setIsActiveTime(false);
    document.getElementById("border__dropdown__Time").style.border =
      "1px solid #D9D9D9";
    if (id === 1) {
      setValueDisplay(false);
    }
    if (id === 2) {
      setValueDisplay(true);
    }
  }

  // COMBOBOX ngày tháng---------------------------------------------------------------
  const [selectedDateStart, setSelectedDateStart] = useState();
  const [selectedDateEnd, setSelectedDateEnd] = useState();
  const [selectedYear, setSelectedYear] = useState();
  var d = new Date();
  var currentMonth = d.getMonth() + 1;
  var currentYear = d.getFullYear();
  var prevYear = d.getFullYear() - 1;

  // SỰ KIỆN LỌC THEO THÁNG ----------------------------------------------------------------
  const [erroDate, setErroDate] = useState(true);
  const [erroDateEnd, setErroDateEnd] = useState(true);

  function statisticalFilterMonth() {
    if (selectedDateStart === undefined || selectedDateEnd === undefined) {
      alert("Vui lòng nhập đầy đủ thông tin!");
    } else {
      var monthStart = selectedDateStart.$M + 1;
      var yearStart = selectedDateStart.$y;
      var monthEnd = selectedDateEnd.$M + 1;
      var yearEnd = selectedDateEnd.$y;
      if (currentYear < yearEnd || currentMonth === monthEnd) {
        setErroDate(false);
        setErroDateEnd(true);
      } else if (
        yearStart > yearEnd ||
        (monthStart > monthEnd && yearStart === yearEnd)
      ) {
        setErroDateEnd(false);
        setErroDate(true);
      } else {
        setErroDate(true);
        setErroDateEnd(true);
        console.log("Loại thời gian:", selectedTime);
        console.log("Từ tháng:", monthStart + "/" + yearStart);
        console.log("Đến tháng:", monthEnd + "/" + yearEnd);
      }
    }
  }

  // DỮ LIỆU THEO THÁNG ------------------------------------------------------------
  const [dataMouth, setDataMouth] = useState([
    {
      name: "1/2021",
      SLBan: 1000,
      SLNhap: 1398,
      SLTra: 2210,
      SLHetHan: 139,
    },
    {
      name: "2/2021",
      SLBan: 3000,
      SLNhap: 3570,
      SLTra: 2210,
      SLHetHan: 294,
    },
    {
      name: "3/2021",
      SLBan: 2000,
      SLNhap: 2700,
      SLTra: 2290,
      SLHetHan: 375,
    },
    {
      name: "4/2021",
      SLBan: 2780,
      SLNhap: 3908,
      SLTra: 2000,
      SLHetHan: 128,
    },
    {
      name: "5/2021",
      SLBan: 1890,
      SLNhap: 2030,
      SLTra: 2181,
      SLHetHan: 254,
    },
    {
      name: "6/2021",
      SLBan: 1890,
      SLNhap: 2030,
      SLTra: 2181,
      SLHetHan: 254,
    },
    {
      name: "7/2021",
      SLBan: 3490,
      SLNhap: 4300,
      SLTra: 2100,
      SLHetHan: 194,
    },
    {
      name: "8/2021",
      SLBan: 2920,
      SLNhap: 3398,
      SLTra: 2210,
      SLHetHan: 278,
    },
    {
      name: "9/2021",
      SLBan: 3000,
      SLNhap: 3898,
      SLTra: 2210,
      SLHetHan: 335,
    },
    {
      name: "10/2021",
      SLBan: 2000,
      SLNhap: 2800,
      SLTra: 2290,
      SLHetHan: 191,
    },
    {
      name: "11/2021",
      SLBan: 2780,
      SLNhap: 3108,
      SLTra: 2000,
      SLHetHan: 268,
    },
    {
      name: "12/2021",
      SLBan: 3890,
      SLNhap: 4800,
      SLTra: 2181,
      SLHetHan: 364,
    },
  ]);

  // SỰ KIỆN LỌC THEO NĂM ----------------------------------------------------------------

  function statisticalFilterYear() {
    console.log("Loại thời gian:", selectedTime);
    console.log(
      "Năm:",
      selectedYear === undefined ? d.getFullYear() : selectedYear.$y
    );
  }

  // DỮ LIỆU THEO NĂM ------------------------------------------------------------
  const [dataYear, setDataYear] = useState([
    {
      name: "Tháng 1",
      SLBan: 1000,
      SLNhap: 1398,
      SLTra: 2210,
      SLHetHan: 139,
    },
    {
      name: "Tháng 2",
      SLBan: 3000,
      SLNhap: 3570,
      SLTra: 2210,
      SLHetHan: 294,
    },
    {
      name: "Tháng 3",
      SLBan: 2000,
      SLNhap: 2700,
      SLTra: 2290,
      SLHetHan: 375,
    },
    {
      name: "Tháng 4",
      SLBan: 2780,
      SLNhap: 3908,
      SLTra: 2000,
      SLHetHan: 128,
    },
    {
      name: "Tháng 5",
      SLBan: 1890,
      SLNhap: 2030,
      SLTra: 2181,
      SLHetHan: 254,
    },
    {
      name: "Tháng 6",
      SLBan: 1890,
      SLNhap: 2030,
      SLTra: 2181,
      SLHetHan: 254,
    },
    {
      name: "Tháng 7",
      SLBan: 3490,
      SLNhap: 4300,
      SLTra: 2100,
      SLHetHan: 194,
    },
    {
      name: "Tháng 8",
      SLBan: 2920,
      SLNhap: 3398,
      SLTra: 2210,
      SLHetHan: 278,
    },
    {
      name: "Tháng 9",
      SLBan: 3000,
      SLNhap: 3898,
      SLTra: 2210,
      SLHetHan: 335,
    },
    {
      name: "Tháng 10",
      SLBan: 2000,
      SLNhap: 2800,
      SLTra: 2290,
      SLHetHan: 191,
    },
    {
      name: "Tháng 11",
      SLBan: 2780,
      SLNhap: 3108,
      SLTra: 2000,
      SLHetHan: 268,
    },
    {
      name: "Tháng 12",
      SLBan: 3890,
      SLNhap: 4800,
      SLTra: 2181,
      SLHetHan: 364,
    },
  ]);

  return (
    <div>
      <div className="container">
        <div className="background">
          <Menu />
        </div>
        <div className="content">
          <Header />
          <div className="wrapper__content">
            <div className="title__content row">
              <span>
                <img src={iconCensorship} alt="" />
              </span>
              <p>Thống kê</p>
            </div>
            <div className="box">
              <div className="row-jcsb">
                <div className="input__type__time row-jcsb">
                  <p>Loại thời gian:</p>
                  <div className="input__choose__type__time">
                    <div className="dropdown">
                      <div
                        id="border__dropdown__Time"
                        className="dropdown__btn"
                        onClick={() => dropdownTimeClick()}
                      >
                        <input
                          type="text"
                          value={selectedTime}
                          placeholder="Theo năm"
                          readOnly
                        />
                        <img src={IconDropdownGrey} alt="" />
                      </div>
                      {isActiveTime && (
                        <div className="dropdown__content">
                          {listTime.map((option) => (
                            <div
                              onClick={() => {
                                dropdownItemTimeClick(option.id);
                              }}
                              className="dropdown__item"
                            >
                              {option.nameTime}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div
                  id="group__dateTime"
                  style={
                    valueDisplay === true
                      ? { display: "none" }
                      : { display: "block" }
                  }
                >
                  <div className="row-jcsb">
                    <div className="row-jcsb dateTime__start">
                      <p>Từ tháng:</p>
                      <div className="input__choose__date">
                        <Space direction="vertical">
                          <DatePicker
                            placeholder="Chọn tháng/năm..."
                            selected={selectedDateStart}
                            onChange={(date) => setSelectedDateStart(date)}
                            picker="month"
                            format="MM/YYYY"
                          />
                        </Space>
                      </div>
                    </div>
                    <div className="row-jcsb dateTime__end">
                      <p>Đến tháng:</p>
                      <div className="input__choose__date">
                        <Space direction="vertical">
                          <DatePicker
                            placeholder="Chọn tháng/năm..."
                            selected={selectedDateEnd}
                            onChange={(date) => setSelectedDateEnd(date)}
                            picker="month"
                            format="MM/YYYY"
                          />
                        </Space>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="group__year"
                  style={
                    valueDisplay === false
                      ? { display: "none" }
                      : { display: "block" }
                  }
                >
                  <div className="row-jcsb">
                    <p>Chọn năm:</p>
                    <div className="input__choose__date">
                      <Space direction="vertical">
                        <DatePicker
                          placeholder={d.getFullYear()}
                          selected={selectedYear}
                          onChange={(year) => setSelectedYear(year)}
                          picker="year"
                        />
                      </Space>
                    </div>
                  </div>
                </div>
                <button
                  style={
                    valueDisplay === true
                      ? { display: "none" }
                      : { display: "block" }
                  }
                  id="FilterMonth"
                  className="button"
                  onClick={() => statisticalFilterMonth()}
                >
                  Lọc
                </button>
                <button
                  style={
                    valueDisplay === false
                      ? { display: "none" }
                      : { display: "block" }
                  }
                  id="FilterYear"
                  className="button"
                  onClick={() => statisticalFilterYear()}
                >
                  Lọc
                </button>
              </div>

              <div
                className="groupError"
                style={
                  erroDate === true ? { display: "none" } : { display: "block" }
                }
              >
                <p>*Vui lòng chọn khoảng thời gian trước thời gian hiện tại*</p>
              </div>
              <div
                className="groupError"
                style={
                  erroDateEnd === true
                    ? { display: "none" }
                    : { display: "block" }
                }
              >
                <p>
                  *Vui lòng chọn tháng/năm kết thúc phải sau tháng/năm bắt đầu*
                </p>
              </div>
            </div>
            <div className="box">
              <p>
                Số lượng sản phẩm <hr />
              </p>
              <br />
              <LineChart
                style={
                  valueDisplay === false
                    ? { display: "none" }
                    : { display: "block" }
                }
                width={830}
                height={320}
                data={dataYear}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="SLNhap"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="SLBan" stroke="#82ca9d" />
                <Line type="monotone" dataKey="SLTra" stroke="#FF914D" />
                <Line type="monotone" dataKey="SLHetHan" stroke="#38B6FF" />
              </LineChart>
              <LineChart
                style={
                  valueDisplay === true
                    ? { display: "none" }
                    : { display: "block" }
                }
                width={830}
                height={320}
                data={dataMouth}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="SLNhap"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="SLBan" stroke="#82ca9d" />
                <Line type="monotone" dataKey="SLTra" stroke="#FF914D" />
                <Line type="monotone" dataKey="SLHetHan" stroke="#38B6FF" />
              </LineChart>
              <br />
              <div
                className="group__btn__statistical"
                style={
                  valueDisplay === true
                    ? { display: "none" }
                    : { display: "block" }
                }
              >
                <button
                  className="button"
                  onClick={() => {
                    navigate(
                      "/Warehouse/ProductStatistics/DetailProductStatisticsByMouth"
                    );
                  }}
                >
                  Xem chi tiết
                </button>
              </div>
              <div
                className="group__btn__statistical"
                style={
                  valueDisplay === false
                    ? { display: "none" }
                    : { display: "block" }
                }
              >
                <button
                  className="button"
                  onClick={() => {
                    navigate(
                      "/Warehouse/ProductStatistics/DetailProductStatisticsByYear"
                    );
                  }}
                >
                  Xem chi tiết
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
