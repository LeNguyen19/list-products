import React, { useState } from "react";
import "./style.css";
import Menu from "../../components/MenuAdmin/index";
import Header from "../../components/Header/index";
import iconStaff from "../../assets/images/icon-staff.svg";
import avt from "../../assets/images/avt-user.png";

export default function Index() {
  // THÔNG TIN CHI TIẾT NHÂN VIÊN-----------------------------------------------
  const [infoStaff, setInfoStaff] = useState({
    id: 2,
    avt: avt,
    fullName: "Phan Nguyễn Thanh Hà",
    nameUserL: "Hà Thanh",
    typeStaff: "Toàn thời gian",
    passWork: "jhxcbjvh8e798530",
    basicSalary: "5.000.000đ",
    birthday: "05/09/2001",
    sex: "Nữ",
    phone: "0123456789",
    email: "hathanh@gmail.com",
    address: "Đường gì đó, Phường 3, Quận Phú Nhuận, TP.Hồ Chí Minh",
    position: "Nhân viên tư vấn",
  });

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
            <p>Chi tiết nhân viên</p>
          </div>
          <div className="box">
            <p>
              Thông tin cá nhân <hr />
            </p>
            <br />
            <div className="row-jcsb">
              <div className="group__info__detail__staff">
                <div className="row-jcsb">
                  <div className="info__detail__staff">
                    <table>
                      <tr>
                        <td className="title__detail__staff">Họ và tên</td>
                        <td>:</td>
                        <td className="content__detail__staff">
                          {infoStaff.fullName}
                        </td>
                      </tr>
                      <tr>
                        <td className="title__detail__staff">Tên tài khoản</td>
                        <td>:</td>
                        <td className="content__detail__staff">
                          {infoStaff.nameUserL}
                        </td>
                      </tr>
                      <tr>
                        <td className="title__detail__staff">Mật khẩu</td>
                        <td>:</td>
                        <td className="content__detail__staff">
                          {infoStaff.passWork}
                        </td>
                      </tr>
                      <tr>
                        <td className="title__detail__staff">Loại nhân viên</td>
                        <td>:</td>
                        <td className="content__detail__staff">
                          {infoStaff.typeStaff}
                        </td>
                      </tr>
                      <tr>
                        <td className="title__detail__staff">Chức vụ:</td>
                        <td>:</td>
                        <td className="content__detail__staff">
                          {infoStaff.position}
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div div className="info__detail__staff">
                    <table>
                      <tr>
                        <td className="title__detail__staff">Lương cơ bản</td>
                        <td>:</td>
                        <td className="content__detail__staff">
                          {infoStaff.basicSalary}
                        </td>
                      </tr>
                      <tr>
                        <td className="title__detail__staff">Email</td>
                        <td>:</td>
                        <td className="content__detail__staff">
                          {infoStaff.email}
                        </td>
                      </tr>
                      <tr>
                        <td className="title__detail__staff">Ngày sinh</td>
                        <td>:</td>
                        <td className="content__detail__staff">
                          {infoStaff.birthday}
                        </td>
                      </tr>

                      <tr>
                        <td className="title__detail__staff">Số điện thoại</td>
                        <td>:</td>
                        <td className="content__detail__staff">
                          {infoStaff.phone}
                        </td>
                      </tr>
                      <tr>
                        <td className="title__detail__staff">Giới tính</td>
                        <td>:</td>
                        <td className="content__detail__staff">
                          {infoStaff.sex}
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
                <table>
                  <tr>
                    <td className="title__detail__address__staff">Địa chỉ</td>
                    <td>:</td>
                    <td className="content__detail__address__staff">
                      {infoStaff.address}
                    </td>
                  </tr>
                </table>
              </div>
              <div className="group__avt__staff">
                <img src={infoStaff.avt} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
