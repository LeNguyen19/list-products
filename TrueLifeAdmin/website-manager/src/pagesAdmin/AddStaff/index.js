import React, { useState } from "react";
import "./style.css";
import Menu from "../../components/MenuAdmin/index";
import Header from "../../components/Header/index";
import iconStaff from "../../assets/images/icon-staff.svg";
import IconDropdownGrey from "../../assets/images/dropdownGrey.svg";
import { Link } from "react-router-dom";
import FolderIcon from "../../assets/images/folder_icon_transparent.png";
import CloseIcon from "../../assets/images/CloseIcon.svg";
import { DatePicker, Space } from "antd";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import axios from "axios";
import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    onGetListCity();
    onGetListPositionStaff({
      page: 1,
      limit: 200,
    });

    onGetTypeStaff({
      page: 1,
      limit: 200,
    });
  }, []);

  // Ảnh --------------------------------------------------------------------
  const [image, setImage] = useState();
  const [isUploaded, setIsUploaded] = useState(false);
  const [typeFile, setTypeFile] = useState("");
  function handleImageChange(e) {
    if (e.target.files && e.target.files[0]) {
      setTypeFile(e.target.files[0].type);
      let reader = new FileReader();

      reader.onload = function (e) {
        setImage(e.target.result);
        setIsUploaded(true);
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  }

  // Loại nhân viên------------------------------------------------------------
  const [isActiveTypeStaff, setIsActiveTypeStaff] = useState(false);
  const [selectedTypeStaff, setSelectedTypeStaff] = useState();
  // const listTypeStaff = [
  //   {
  //     id: 1,
  //     nameTypeStaff: "Toàn thời gian",
  //   },
  //   {
  //     id: 2,
  //     nameTypeStaff: "Bán thời gian",
  //   },
  // ];
  function dropdownTypeStaffClick() {
    setIsActiveTypeStaff(!isActiveTypeStaff);
    document.getElementById("border__dropdown__TypeStaff").style.border =
      "1px solid #FA748F";
  }

  function dropdownItemTypeStaffClick(id) {
    setSelectedTypeStaff(
      listTypeStaff.find((item) => item.typeStaffId === id).typeStaffName
    );
    setIsActiveTypeStaff(false);
    document.getElementById("border__dropdown__TypeStaff").style.border =
      "1px solid #D9D9D9";
  }

  // Chức vụ ---------------------------------------------------------------------
  const [isActivePositionStaff, setIsActivePositionStaff] = useState(false);
  const [selectedPositionStaff, setSelectedPositionStaff] = useState();
  const [listTypeStaff, setListTypeStaff] = useState([]);
  const [listPositionStaff, setLisPositionStaff] = useState([]);
  // const listPositionStaff = [
  //   {
  //     id: 1,
  //     name: "Nhân viên thu ngân",
  //   },
  //   {
  //     id: 2,
  //     name: "Nhân viên tư vấn",
  //   },
  //   {
  //     id: 3,
  //     name: "Nhân viên kho",
  //   },
  // ];
  function dropdownPositionStaffClick() {
    setIsActivePositionStaff(!isActivePositionStaff);
    document.getElementById("border__dropdown__PositionStaff").style.border =
      "1px solid #FA748F";
  }

  function dropdownItemPositionStaffClick(id) {
    setSelectedPositionStaff(
      listPositionStaff.find((item) => item.positionStaffId === id)
        .positionStaffName
    );
    setIsActivePositionStaff(false);
    document.getElementById("border__dropdown__PositionStaff").style.border =
      "1px solid #D9D9D9";
  }

  const handleCityChange = ({ target: { value } }) => {
    console.log("value city changed", value);
  };

  //   Địa chỉ--------------------------------------------------------------------
  const [isActiveCity, setIsActiveCity] = useState(false);
  const [isActiveDistrict, setIsActiveDistrict] = useState(false);
  const [selectedCity, setSelectedCity] = useState();
  const [selectedDistrict, setSelectedDistrict] = useState();
  const [codecity, setCodecity] = useState(0);
  const [listCity, setListCity] = useState();
  const [listDistrict, setListDistrict] = useState([]);

  // const listCity = [
  //   {
  //     id: 1,
  //     name: "TP Hồ Chí Minh",
  //   },
  //   {
  //     id: 2,
  //     name: "Bạc Liêu",
  //   },
  //   {
  //     id: 3,
  //     name: "Đồng Tháp",
  //   },
  // ];

  // const listDistrict = [
  //   {
  //     id: 1,
  //     name: "Quận",
  //   },
  //   {
  //     id: 2,
  //     name: "Huyện",
  //   },
  // ];

  const onGetListCity = async () => {
    try {
      const { data } = await axios.get(
        "https://171.244.57.150:8081/api/Data/ShowProvinceAsync"
      );
      setListCity(data?.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  function dropdownCityClick() {
    setIsActiveCity(!isActiveCity);
    document.getElementById("border__dropdown__City").style.border =
      "1px solid #FA748F";
  }

  const onGetListDistrict = async (provinceId) => {
    try {
      const { data } = await axios.get(
        "http://171.244.57.150:8081/api/Data/ShowDistrictByProvinceAsync",
        {
          params: {
            proviceId: provinceId,
          },
        }
      );
      setListDistrict(data?.data);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const onGetListPositionStaff = async ({ page, limit, ...body }) => {
    try {
      const { data } = await axios.post(
        "https://localhost:44333/api/InfoPositionStaff/list",
        body,
        {
          page,
          limit,
        }
      );
      setLisPositionStaff(data?.data?.listData);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const onGetTypeStaff = async ({ page, limit, ...body }) => {
    try {
      const { data } = await axios.post(
        "https://171.244.57.150:8081/api/InfoTypeStaff/list",
        body,
        {
          params: { page, limit },
        }
      );
      setListTypeStaff(data?.data?.listData);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  function dropdownItemCityClick(id) {
    setSelectedDistrict(null);
    onGetListDistrict(id);
    setSelectedCity(listCity.find((item) => item.provinceId === id).name);
    setIsActiveCity(false);
    setCodecity(id);
    document.getElementById("border__dropdown__City").style.border =
      "1px solid #D9D9D9";
  }

  function dropdownDistrictClick() {
    if (codecity === 0) {
      alert("Chưa chọn tỉnh/thành phố");
      setIsActiveDistrict(false);
    } else {
      setIsActiveDistrict(!isActiveDistrict);
      document.getElementById("border__dropdown__District").style.border =
        "1px solid #FA748F";
    }
  }

  function dropdownItemDistrictClick(id) {
    setSelectedDistrict(
      listDistrict.find((item) => item.districtId === id).name
    );
    setIsActiveDistrict(false);
    document.getElementById("border__dropdown__District").style.border =
      "1px solid #D9D9D9";
    setIsActiveDistrict(false);
  }

  // KIỂM TRA DỮ LIỆU NHẬP VÀO ----------------------------------------------
  function checkInputPhoneAdd() {
    if (isNaN(phone) || phone.length !== 9) {
      document.getElementById("errorPhone").style.display = "block";
    } else {
      document.getElementById("errorPhone").style.display = "none";
    }
  }

  function checkInputEmailAdd() {
    var reg = /^\w+@[a-zA-Z]{3,}\w+\.co$/i;
    console.log(reg.test(mail));

    if (mail.match(reg)) {
      document.getElementById("errorEmail").style.display = "none";
    } else {
      document.getElementById("errorEmail").style.display = "block";
    }
  }

  // LƯU THÔNG TIN NHÂN VIÊN MỚI --------------------------------------------
  const [selectedDate, setSelectedDate] = useState();
  const [fullName, setFullName] = useState();
  const [nameUser, setNameUser] = useState();
  const [passUser, setPassUser] = useState();
  const [basicSalary, setBasicSalary] = useState();
  const [mail, setMail] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [sex, setSex] = useState();
  const [birthday, setBirthday] = useState();

  async function SaveInfoStaffNew() {
    console.log("selectedDate: " + selectedDate);
    // const birthday = moment()
    console.log("Họ và tên: ", fullName);
    console.log("Tên tài khoản: ", nameUser);
    console.log("Mật khẩu: ", passUser);
    console.log("Loại nhân viên: ", selectedTypeStaff);
    console.log("Chức vụ: ", selectedPositionStaff);
    console.log(
      "Địa chỉ: ",
      address + "," + selectedDistrict + "," + selectedCity
    );
    console.log("Lương cơ bản: ", basicSalary);
    console.log("Email: ", mail);
    console.log("Ngày sinh: ", birthday);
    console.log("Số điện thoại: ", phone);
    console.log("Giới tính: ", sex);
    console.log("Link ảnh: ", image);

    try {
      const formData = {
        staffName: nameUser,
        password: passUser,
        fullName,
        birthday,
        typeStaffId: listTypeStaff.find(
          (item) => item.typeStaffName === selectedTypeStaff
        ).typeStaffId,
        positionStaffId: listPositionStaff.find(
          (item) => item.positionStaffName === selectedPositionStaff
        ).positionStaffId,
        address,
        districtId: listDistrict.find((item) => item.name === selectedDistrict)
          .districtId,
        provinceId: listCity.find((item) => item.name === selectedCity)
          .provinceId,
        numberfactor: +basicSalary,
        email: mail,
        phone,
        gender: sex,
        avatar: image,
      };
      const response = await axios.post(
        `https://localhost:44333/api/InfoStaff/create`,
        formData,
        {
          params: {
            userId: 1,
          },
        }
      );
      console.log("response", response);
    } catch (error) {
      console.log("error:", error);
    }
    // if (
    //   selectedDate === undefined ||
    //   fullName === undefined ||
    //   nameUser === undefined ||
    //   passUser === undefined ||
    //   selectedTypeStaff === undefined ||
    //   selectedPositionStaff === undefined ||
    //   address === undefined ||
    //   selectedDistrict === undefined ||
    //   selectedCity === undefined ||
    //   basicSalary === undefined ||
    //   mail === undefined ||
    //   phone === undefined ||
    //   sex === undefined ||
    //   image === undefined
    // ) {
    //   alert("Vui lòng nhập đầy đủ thông tin");
    // } else {
    //   console.log("selectedDate: " + selectedDate);
    //   // const birthday = moment()
    //   console.log("Họ và tên: ", fullName);
    //   console.log("Tên tài khoản: ", nameUser);
    //   console.log("Mật khẩu: ", passUser);
    //   console.log("Loại nhân viên: ", selectedTypeStaff);
    //   console.log("Chức vụ: ", selectedPositionStaff);
    //   console.log(
    //     "Địa chỉ: ",
    //     address + "," + selectedDistrict + "," + selectedCity
    //   );
    //   console.log("Lương cơ bản: ", basicSalary);
    //   console.log("Email: ", mail);
    //   console.log("Ngày sinh: ", birthday);
    //   console.log("Số điện thoại: ", phone);
    //   console.log("Giới tính: ", sex);
    //   console.log("Link ảnh: ", image);

    //   try {
    //     const formData = {
    //       staffName: nameUser,
    //       password: passUser,
    //       fullName,
    //       birthday,
    //       typeStaffId: listTypeStaff.find(
    //         (item) => item.nameTypeStaff === selectedTypeStaff
    //       ).id,
    //       positionStaffId: listPositionStaff.find(
    //         (item) => item.name === selectedPositionStaff
    //       ).id,
    //       address,
    //       districtId: listDistrict.find(
    //         (item) => item.name === selectedDistrict
    //       ).id,
    //       provinceId: listCity.find((item) => item.name === selectedCity).id,
    //       numberfactor: basicSalary,
    //       email: mail,
    //       phone,
    //       gender: sex,
    //       avatar: image,
    //     };
    //     const response = await axios.post(
    //       `https://localhost:44333/api/InfoStaff/create`,
    //       formData
    //     );
    //     console.log("response", response);
    //   } catch (error) {
    //     console.log("error:", error);
    //   }

    // window.parent.location = window.parent.location.href;
    // }
  }

  const handleBirthdayChange = (valueFormat, value) => {
    const dateFormat = value
      .split("/")
      .reverse()
      .join("-")
      .concat("T00:00:00+07:00");
    setBirthday(dateFormat);
  };

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
            <p>Thêm nhân viên</p>
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
                          <input
                            className="input value__input__save__staff"
                            placeholder="Nhập họ và tên..."
                            onChange={(e) => setFullName(e.target.value)}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="title__detail__staff">Tên tài khoản</td>
                        <td>:</td>
                        <td className="content__detail__staff">
                          <input
                            className="input value__input__save__staff"
                            placeholder="Nhập tên tài khoản..."
                            onChange={(e) => setNameUser(e.target.value)}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="title__detail__staff">Mật khẩu</td>
                        <td>:</td>
                        <td className="content__detail__staff">
                          <input
                            className="input value__input__save__staff"
                            placeholder="Nhập mật khẩu..."
                            onChange={(e) => setPassUser(e.target.value)}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="title__detail__staff">Loại nhân viên</td>
                        <td>:</td>
                        <td className="content__detail__staff">
                          <div className="group__input__typeStaff ">
                            <div className="dropdown">
                              <div
                                id="border__dropdown__TypeStaff"
                                className="dropdown__btn"
                                onClick={() => dropdownTypeStaffClick()}
                              >
                                <input
                                  className="value__cbb__save__staff"
                                  type="text"
                                  value={selectedTypeStaff}
                                  placeholder="Chọn loại nhân viên..."
                                  readOnly
                                />
                                <img src={IconDropdownGrey} alt="" />
                              </div>
                              {isActiveTypeStaff && (
                                <div className="dropdown__content">
                                  {listTypeStaff.map((option, index) => (
                                    <div
                                      onClick={() => {
                                        dropdownItemTypeStaffClick(
                                          option.typeStaffId
                                        );
                                      }}
                                      className="dropdown__item"
                                    >
                                      {option.typeStaffName}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="title__detail__staff">Chức vụ:</td>
                        <td>:</td>
                        <td className="content__detail__staff">
                          <div className="group__input__positionStaff ">
                            <div className="dropdown">
                              <div
                                id="border__dropdown__PositionStaff"
                                className="dropdown__btn"
                                onClick={() => dropdownPositionStaffClick()}
                              >
                                <input
                                  className="value__cbb__save__staff"
                                  type="text"
                                  value={selectedPositionStaff}
                                  placeholder="Chọn chức vụ..."
                                  readOnly
                                />
                                <img src={IconDropdownGrey} alt="" />
                              </div>
                              {isActivePositionStaff && (
                                <div className="dropdown__content">
                                  {listPositionStaff.map((option) => (
                                    <div
                                      onClick={() => {
                                        dropdownItemPositionStaffClick(
                                          option.positionStaffId
                                        );
                                      }}
                                      className="dropdown__item"
                                    >
                                      {option.positionStaffName}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
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
                          <input
                            className="input value__input__save__staff"
                            placeholder="Nhập lương cơ bản..."
                            onChange={(e) => setBasicSalary(e.target.value)}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="title__detail__staff">Email</td>
                        <td>:</td>
                        <td className="content__detail__staff">
                          <input
                            className="input value__input__save__staff"
                            placeholder="Nhập email..."
                            onChange={(e) => setMail(e.target.value)}
                            onInput={() => checkInputEmailAdd()}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="title__detail__staff">Ngày sinh</td>
                        <td>:</td>
                        <td className="content__detail__staff">
                          <Space direction="vertical">
                            <DatePicker
                              placeholder="Chọn ngày..."
                              selected={selectedDate}
                              onChange={handleBirthdayChange}
                              format="DD/MM/YYYY"
                            />
                          </Space>
                        </td>
                      </tr>

                      <tr>
                        <td className="title__detail__staff">Số điện thoại</td>
                        <td>:</td>
                        <td className="content__detail__staff">
                          <input
                            className="input value__input__save__staff"
                            placeholder="Nhập số điện thoại..."
                            onChange={(e) => setPhone(e.target.value)}
                            onInput={() => checkInputPhoneAdd()}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="title__detail__staff">Giới tính</td>
                        <td>:</td>
                        <td className="content__detail__staff">
                          <div className="row-jcsb">
                            <div className="container__customRadio">
                              <label className="radio">
                                Nam
                                <input
                                  type="radio"
                                  name="sex"
                                  value="Nam"
                                  onChange={(e) => setSex(e.target.value)}
                                />
                                <span></span>
                              </label>
                            </div>
                            <div className="container__customRadio">
                              <label className="radio">
                                Nữ
                                <input
                                  type="radio"
                                  name="sex"
                                  value="Nữ"
                                  onChange={(e) => setSex(e.target.value)}
                                />
                                <span></span>
                              </label>
                            </div>
                            <div className="container__customRadio">
                              <label className="radio">
                                Khác
                                <input
                                  type="radio"
                                  name="sex"
                                  value="Khác"
                                  onChange={(e) => setSex(e.target.value)}
                                />
                                <span></span>
                              </label>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
                <table>
                  <tr>
                    <td className="title__detail__address__addStaff">
                      Địa chỉ
                    </td>
                    <td>:</td>
                    <td className="content__detail__address__addStaff">
                      <div className="row-gap15 ">
                        <div className="dropdown">
                          <div
                            id="border__dropdown__City"
                            className="dropdown__btn"
                            onClick={() => dropdownCityClick()}
                          >
                            <input
                              className="value__cbb__save__staff"
                              type="text"
                              value={selectedCity}
                              placeholder="Chọn tỉnh/thành phố..."
                              readOnly
                            />
                            <img src={IconDropdownGrey} alt="" />
                          </div>
                          {isActiveCity && (
                            <div className="dropdown__content">
                              {listCity.map((option) => (
                                <div
                                  onClick={() => {
                                    dropdownItemCityClick(option.provinceId);
                                  }}
                                  className="dropdown__item"
                                >
                                  {option.name}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                        <div className="dropdown">
                          <div
                            id="border__dropdown__District"
                            className="dropdown__btn"
                            onClick={() => dropdownDistrictClick()}
                          >
                            <input
                              className="value__cbb__save__staff"
                              type="text"
                              value={selectedDistrict}
                              placeholder="Chọn huyện/quận..."
                              readOnly
                            />
                            <img src={IconDropdownGrey} alt="" />
                          </div>
                          {isActiveDistrict && (
                            <div className="dropdown__content">
                              {listDistrict.map((option) => (
                                <div
                                  onClick={() => {
                                    dropdownItemDistrictClick(
                                      option.districtId
                                    );
                                  }}
                                  className="dropdown__item"
                                >
                                  {option.name}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        <input
                          className="input value__input__save__staff"
                          placeholder="Nhập số nhà - xã/đường - phường..."
                          style={{ width: "300px" }}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
              <div>
                <div className="Layout">
                  <div className="Container">
                    <div className="BoxUpload">
                      <div className="image-upload">
                        {!isUploaded ? (
                          <>
                            <label htmlFor="upload-input">
                              <img
                                src={FolderIcon}
                                draggable={"false"}
                                alt="placeholder"
                                style={{ width: 100, height: 100 }}
                              />
                              <p style={{ color: "#444" }}>Chọn ảnh</p>
                            </label>

                            <input
                              id="upload-input"
                              type="file"
                              accept=".jpg,.jpeg,.gif,.png,.mov,.mp4"
                              onChange={handleImageChange}
                            />
                          </>
                        ) : (
                          <div className="ImagePreview">
                            <img
                              className="close-icon"
                              src={CloseIcon}
                              alt="CloseIcon"
                              onClick={() => {
                                setIsUploaded(false);
                                setImage(null);
                              }}
                            />
                            {typeFile.includes("video") ? (
                              <video
                                id="uploaded-image"
                                src={image}
                                draggable={false}
                                controls
                                autoPlay
                                alt="uploaded-img"
                              />
                            ) : (
                              <img
                                id="uploaded-image"
                                src={image}
                                draggable={false}
                                alt="uploaded-img"
                              />
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="groupError">
              <p id="errorPhone">*Vui lòng nhập đúng cú pháp số điện thoại*</p>
              <p id="errorEmail">*Vui lòng nhập đúng cú pháp Email*</p>
            </div>
            <div className="group__btn__addStaff">
              <button className="button" onClick={() => SaveInfoStaffNew()}>
                Lưu thông tin
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
