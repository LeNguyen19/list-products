import React, { useState, useEffect } from "react";
import "./style.css";
import Menu from "../../components/MenuAdmin/index";
import Header from "../../components/Header/index";
import iconStaff from "../../assets/images/icon-staff.svg";
import IconDropdownGrey from "../../assets/images/dropdownGrey.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import ColumnGroup from "antd/es/table/ColumnGroup";


export default function Index() {
  const [isActiveTypeStaff, setIsActiveTypeStaff] = useState(false);
  const [selectedTypeStaff, setSelectedTypeStaff] = useState();

  const listTypeStaff = [
    {
      id: 1,
      nameTypeStaff: "Nhân viên thu ngân",
    },
    {
      id: 2,
      nameTypeStaff: "Nhân viên tư vấn",
    },
    {
      id: 3,
      nameTypeStaff: "Nhân viên kho",
    },
    {
      id: 4,
      nameTypeStaff: "Quản lý kho",
    },
  ];

  function dropdownTypeStaffClick() {
    setIsActiveTypeStaff(!isActiveTypeStaff);
    document.getElementById("border__dropdown__TypeStaff").style.border =
      "1px solid #FA748F";
  }

  function dropdownItemTypeStaffClick(id) {
    setSelectedTypeStaff(listTypeStaff[id - 1].nameTypeStaff);
    setIsActiveTypeStaff(false);
    document.getElementById("border__dropdown__TypeStaff").style.border =
      "1px solid #D9D9D9";
  }

  // THÔNG TIN TẤT CẢ NHÂN VIÊN -------------------------------------------------------------------
  const [staffAll, setStaffAll] = useState([
    // {
    //   id: 1,
    //   fullName: "Lê Huỳnh Nam",
    //   birthday: "10/01/2001",
    //   sex: "Nam",
    //   phone: "0123456789",
    //   email: "huynhnam@gmail.com",
    //   address: "Đường gì đó, Phường 5, Quận 6, TP.Hồ Chí Minh",
    //   position: "Nhân viên tư vấn",
    // },
    // {
    //   id: 2,
    //   fullName: "Phan Nguyễn Thanh Hà",
    //   birthday: "05/09/2001",
    //   sex: "Nữ",
    //   phone: "0123456789",
    //   email: "hathanh@gmail.com",
    //   address: "Đường gì đó, Phường 3, Quận Phú Nhuận, TP.Hồ Chí Minh",
    //   position: "Nhân viên tư vấn",
    // },
    // {
    //   id: 3,
    //   fullName: "Phạm Ngọc Nhi",
    //   birthday: "07/08/2001",
    //   sex: "Nữ",
    //   phone: "0123456789",
    //   email: "nhipham@gmail.com",
    //   address: "Đường gì đó, Phường Tân Sơn Nhì, Quận Tân Phú, TP.Hồ Chí Minh",
    //   position: "Nhân viên tư vấn",
    // },
  ]);

  useEffect (()=>{
    async function getStaff(){
      const response = await axios.post('https://localhost:44333/api/InfoStaff/list?page=1&limit=25')
      setStaffAll(response.data.data.listData)
    }
    getStaff();
  }, [])

  // TÌM KIẾM NHÂN VIÊN ---------------------------------------------------------------------------
  const [contentFind, setContentFind] = useState();

  function FindStaff() {
    console.log("Loại nhân viên: ", selectedTypeStaff);
    console.log("Nội dung tìm kiếm: ", contentFind);
  }

  // XOÁ NHÂN VIÊN --------------------------------------------------------------------------------
  function DeleteStaff(id) {
    alert("Mã nhân viên cần xoá: " + id);
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
            <p>Nhân viên</p>
          </div>
          <div className="box">
            <div className="row-jcsb">
              <div className="group__type__client row-jcsb">
                <p>Loại nhân viên:</p>
                <div className="input__type__client">
                  <div className="dropdown">
                    <div
                      id="border__dropdown__TypeStaff"
                      className="dropdown__btn"
                      onClick={() => dropdownTypeStaffClick()}
                    >
                      <input
                        type="text"
                        value={selectedTypeStaff}
                        placeholder="Tất cả"
                        readOnly
                      />
                      <img src={IconDropdownGrey} alt="" />
                    </div>
                    {isActiveTypeStaff && (
                      <div className="dropdown__content">
                        {listTypeStaff.map((option) => (
                          <div
                            onClick={() => {
                              dropdownItemTypeStaffClick(option.id);
                            }}
                            className="dropdown__item"
                          >
                            {option.nameTypeStaff}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="group__find__client row-jcsb">
                <div className="input__find">
                  <input
                    className="input"
                    placeholder="Nhập tên nhân viên cần tìm kiếm..."
                    onChange={(e) => setContentFind(e.target.value)}
                  />
                </div>
                <button className="button" onClick={() => FindStaff()}>
                  Tìm kiếm
                </button>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="row-jcsb ">
              <p>
                Danh sách sản phẩm khuyến mãi <hr />
              </p>
              <Link to="/Admin/Staff/AddStaff">
                <button className="button">Thêm nhân viên</button>
              </Link>
            </div>
            <div className="table">
              <table>
                <tr>
                  <th className="name__client">Họ và tên</th>
                  <th className="dateBirth__client">Ngày sinh</th>
                  <th className="gender__client">Giới tính</th>
                  <th className="phone__client">Số điện thoại</th>
                  <th className="email__client">Email</th>
                  <th className="adress__staff">Địa chỉ</th>
                  <th className="position__staff">Chức vụ</th>
                  <th className="icon__table__staff">Xem</th>
                  <th className="icon__table__staff">Xoá</th>
                </tr>
                {staffAll.map((e) => {
                  const objAddress = {
                     address: e.address,
                   district: e.districtName,
                   province: e.provinceName,
                  };
                  const listElementAddress = [];
                  const listKey = Object.keys(objAddress);
                  
                  listKey.forEach((key) => {
                    if(!!objAddress[key]) {
                      listElementAddress.push(objAddress[key]);
                    }
                  })

                  const customAddress = listElementAddress.join(', ');

                  return (
                    (
                  <tr>
                    <td className="name__client">{e.fullName}</td>
                    <td className="dateBirth__client">{moment(e.birthday).format(`DD/MM/YYYY`)}</td>
                    <td className="gender__client">{e.gender}</td>
                    <td className="phone__client">{e.phone}</td>
                    <td className="email__client">{e.email}</td>
                    <td className="adress__staff">{customAddress}</td>
                    <td className="position__staff">{e.positionStaffName}</td>
                    <td className="icon__table__staff">
                      <Link to="/Admin/Staff/StaffDetail">
                        <i class="fa fa-eye"></i>
                      </Link>
                    </td>
                    <td className="icon__table__staff">
                      <i
                        class="fa fa-trash"
                        onClick={() => DeleteStaff(e.staffId)}
                      ></i>
                    </td>
                  </tr>
                )
                  )
                })}
              </table>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
