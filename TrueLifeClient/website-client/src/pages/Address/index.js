import React, { useState, useEffect } from "react";
import "./style.css";
import Menu from "../../components/Menu/index";
import Header from "../../components/Header/index";
import NavInfoUser from "../../components/NavInfoUser/index";
import Footer from "../../components/Footer/index";
import IconDropdownGrey from "../../assets/images/dropdownGrey.svg";
import axios from "axios";
import swal from "sweetalert";
import { Link, useParams } from "react-router-dom";
import { Spin } from "antd";

export default function Index() {
  const userId = JSON.parse(localStorage.getItem("Auth:user")).userId;
  const [loading, setLoading] = useState(false);
  const [isActiveCity, setIsActiveCity] = useState(false);
  const [selectedCity, setSelectedCity] = useState();
  const [listCity, setListCity] = useState();
  const [codecity, setCodecity] = useState(0);
  useEffect(() => {
    onGetListCity();
    onGetAddressUser({ userId });
  }, []);
  const onGetListCity = async () => {
    try {
      const { data } = await axios.get(
        "http://171.244.57.150:8081/api/Data/ShowProvinceAsync"
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

  function dropdownItemCityClick(id) {
    setSelectedDistrict(null);
    onGetListDistrict(id);
    setCodecity(id);
    setSelectedCity(listCity.find((item) => item.provinceId === id).name);
    setIsActiveCity(false);
    document.getElementById("border__dropdown__City").style.border =
      "1px solid #D9D9D9";
  }

  const [isActiveDistrict, setIsActiveDistrict] = useState(false);
  const [selectedDistrict, setSelectedDistrict] = useState();
  const [listDistrict, setListDistrict] = useState([]);

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
  }

  const [addressUser, setAddressUser] = useState([]);

  const onGetAddressUser = async ({ userId, ...body }) => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        "http://171.244.57.150:8081/api/AddressDeliveryUser/ListInfoAddressDeliveryUser",
        body,
        { params: { id: userId } }
      );
      setAddressUser(data.data);
    } catch (error) {
      console.log("error: ", error);
    } finally {
      setLoading(false);
    }
  };

  console.log("data;", addressUser);

  return (
    <Spin spinning={loading}>
      <div>
        <Menu type="login" />
        <Header title="Địa chỉ" desBlack="Trang chủ " desPink=" Địa chỉ" />
        <div className="container__address">
          <div className="content__infoUser">
            <div className="nav__infoUser">
              <NavInfoUser userId={userId} />
            </div>
            <div className="wrapper__information">
              <p>Địa chỉ nhận hàng</p>

              <hr />
               {addressUser.map((e) => (
                <>
                  <div className="row">
                    <p className="text__address">{e.address + `, ` + e.districtName + `, ` + e.provinceName}</p>
                    <button className="btn__delete__address">Xoá</button>
                  </div>
                  <hr />
                </>
              ))} 

              {/* <div className="row">
                <p className="text__address">dfgfh</p>
                <button>Xoá</button>
              </div> */}
              <br />
              <p>Nhập thông tin địa chỉ mới:</p>
              <div className="group__add__address">
                <div className="dropdown">
                  <div
                    id="border__dropdown__City"
                    className="dropdown__btn"
                    onClick={() => dropdownCityClick()}
                  >
                    <input
                      type="text"
                      value={selectedCity}
                      placeholder="Chọn tỉnh/thành phố"
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
                      type="text"
                      value={selectedDistrict}
                      placeholder="Chọn quận/huyện"
                      readOnly
                    />
                    <img src={IconDropdownGrey} alt="" />
                  </div>
                  {isActiveDistrict && (
                    <div className="dropdown__content">
                      {listDistrict.map((option) => (
                        <div
                          onClick={() => {
                            dropdownItemDistrictClick(option.districtId);
                          }}
                          className="dropdown__item"
                        >
                          {option.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <input className="input__add__address"></input>
              </div>
              <br />
              <div className="button__add__address">
                <button>Thêm địa chỉ mới</button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Spin>
  );
}
