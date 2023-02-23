import React, { useState } from "react";
import "./style.css";
import Menu from "../../components/MenuAdmin/index";
import Header from "../../components/Header/index";
import iconSupplier from "../../assets/images/icon-supplier.svg";
import IconDropdownGrey from "../../assets/images/dropdownGrey.svg";
import imgSupplier from "../../assets/images/img-supplier.jpeg";

export default function Index() {
  // THÔNG TIN NHÀ CUNG CẤP
  const [infoSupplier, setInfoSupplier] = useState([
    {
      id: 1,
      name: "Nhà cung cấp A",
      address: "140 Lê Trọng Tấn",
      district: "Tây Thạnh",
      city: "Tân Phú",
      email: "truelife@gmail.com",
      phone: "0123456789",
      nameProductType: "Son môi",
    },
    {
      id: 2,
      name: "Nhà cung cấp A",
      address: "140 Lê Trọng Tấn",
      district: "Tây Thạnh",
      city: "Tân Phú",
      email: "truelife@gmail.com",
      phone: "0123456789",
      nameProductType: "Trang điểm mắt",
    },
    {
      id: 3,
      name: "Nhà cung cấp B",
      address: "140 Lê Trọng Tấn",
      district: "Tây Thạnh",
      city: "Tân Phú",
      email: "truelife@gmail.com",
      phone: "0123456789",
      nameProductType: "Dưỡng ẩm",
    },
    {
      id: 4,
      name: "Nhà cung cấp B",
      address: "140 Lê Trọng Tấn",
      district: "Tây Thạnh",
      city: "Tân Phú",
      email: "truelife@gmail.com",
      phone: "0123456789",
      nameProductType: "Nước hoa hồng",
    },
  ]);

  // DATA THÊM THÔNG TIN ----------------------------------------------------------------------
  const [isActiveProductType, setIsActiveProductType] = useState(false);
  const [selectedProductType, setSelectedProductType] = useState();
  const [isActiveCity, setIsActiveCity] = useState(false);
  const [isActiveDistrict, setIsActiveDistrict] = useState(false);
  const [selectedCity, setSelectedCity] = useState();
  const [selectedDistrict, setSelectedDistrict] = useState();
  const [codecity, setCodecity] = useState(0);
  const [valueDisplay, setValueDisplay] = useState(true);

  const listProductType = [
    {
      id: 1,
      nameProductType: "Son môi",
    },
    {
      id: 2,
      nameProductType: "Trang điểm mắt",
    },
    {
      id: 3,
      nameProductType: "Dưỡng ẩm",
    },
    {
      id: 4,
      nameProductType: "Mặt nạ",
    },
    {
      id: 5,
      nameProductType: "Sữa tắm",
    },
    {
      id: 6,
      nameProductType: "Nước hoa",
    },
    {
      id: 7,
      nameProductType: "Nước hoa hồng",
    },
    {
      id: 8,
      nameProductType: "Tẩy trang",
    },
  ];

  function dropdownProductTypeClick() {
    setIsActiveProductType(!isActiveProductType);
    document.getElementById("border__dropdown__productType").style.border =
      "1px solid #FA748F";
  }

  function dropdownItemProductTypeClick(id) {
    setSelectedProductType(listProductType[id - 1].nameProductType);
    setIsActiveProductType(false);
    document.getElementById("border__dropdown__productType").style.border =
      "1px solid #D9D9D9";
  }

  const listCity = [
    {
      id: 1,
      tenTinh: "TP Hồ Chí Minh",
    },
    {
      id: 2,
      tenTinh: "Bạc Liêu",
    },
    {
      id: 3,
      tenTinh: "Đồng Tháp",
    },
  ];

  const listDistrict = [
    {
      id: 1,
      tenQuan: "Tân Phú",
    },
    {
      id: 2,
      tenQuan: "Đông Hải",
    },
    {
      id: 3,
      tenQuan: "Hồng Dân",
    },
  ];

  function dropdownCityClick() {
    setIsActiveCity(!isActiveCity);
    document.getElementById("border__dropdown__city").style.border =
      "1px solid #FA748F";
  }

  function dropdownDistrictClick() {
    if (codecity === 0) {
      alert("Chưa chọn tỉnh/thành phố");
      setIsActiveDistrict(false);
    } else {
      setIsActiveDistrict(!isActiveDistrict);
      document.getElementById("border__dropdown__district").style.border =
        "1px solid #FA748F";
    }
  }

  function dropdownItemCityClick(id) {
    setSelectedCity(listCity[id - 1].tenTinh);
    setIsActiveCity(false);
    setCodecity(id);
    document.getElementById("border__dropdown__city").style.border =
      "1px solid #D9D9D9";
  }

  function dropdownItemDistrictClick(data) {
    setSelectedDistrict(data);
    setIsActiveDistrict(false);
    document.getElementById("border__dropdown__district").style.border =
      "1px solid #D9D9D9";
    setIsActiveDistrict(false);
  }

  // DATA CẬP NHẬT THÔNG TIN ----------------------------------------------------------------------
  const [isActiveUpdateCity, setIsActiveUpdateCity] = useState(false);
  const [selectedUpdateCity, setSelectedUpdateCity] = useState();
  const [isActiveUpdateDistrict, setIsActiveUpdateDistrict] = useState(false);
  const [selectedUpdateDistrict, setSelectedUpdateDistrict] = useState();
  const [isActiveUpdateTypeProduct, setIsActiveUpdateTypeProduct] =
    useState(false);
  const [selectedUpdateTypeProduct, setSelectedUpdateTypeProduct] = useState();

  function dropdownUpdateCityClick() {
    setIsActiveUpdateCity(!isActiveUpdateCity);
    document.getElementById("border__dropdown__UpdateCity").style.border =
      "1px solid #FA748F";
  }

  function dropdownItemUpdateCityClick(id) {
    setSelectedUpdateCity(listCity[id - 1].tenTinh);
    setIsActiveUpdateCity(false);
    document.getElementById("border__dropdown__UpdateCity").style.border =
      "1px solid #D9D9D9";
  }

  function dropdownUpdateDistrictClick() {
    setIsActiveUpdateDistrict(!isActiveUpdateDistrict);
    document.getElementById("border__dropdown__UpdateDistrict").style.border =
      "1px solid #FA748F";
  }

  function dropdownItemUpdateDistrictClick(id) {
    setSelectedUpdateDistrict(listDistrict[id - 1].tenQuan);
    setIsActiveUpdateDistrict(false);
    document.getElementById("border__dropdown__UpdateDistrict").style.border =
      "1px solid #D9D9D9";
  }

  function dropdownUpdateTypeProductClick() {
    setIsActiveUpdateTypeProduct(!isActiveUpdateTypeProduct);
    document.getElementById(
      "border__dropdown__UpdateTypeProduct"
    ).style.border = "1px solid #FA748F";
  }

  function dropdownItemUpdateTypeProductClick(id) {
    setSelectedUpdateTypeProduct(listProductType[id - 1].nameProductType);
    setIsActiveUpdateTypeProduct(false);
    document.getElementById(
      "border__dropdown__UpdateTypeProduct"
    ).style.border = "1px solid #D9D9D9";
  }

  // THÊM NHÀ CUNG CẤP ----------------------------------------------------------------------------
  const [addNameSupplier, setAddNameSupplier] = useState();
  const [addPhoneSupplier, setAddPhoneSupplier] = useState();
  const [addAddressSupplier, setAddAddressSupplier] = useState();
  const [addMailSupplier, setAddMailSupplier] = useState();

  function AddSupplier() {
    if (
      addNameSupplier === undefined ||
      addPhoneSupplier === undefined ||
      addAddressSupplier === undefined ||
      addMailSupplier === undefined ||
      selectedCity === undefined ||
      selectedDistrict === undefined ||
      selectedProductType === undefined
    ) {
      alert("Vui lòng nhập đầy đủ thông tin");
    } else {
      document.getElementById("input__add__typeproduct__supplier").value = "";
      document.getElementById("input__add__city__supplier").value = "";
      document.getElementById("input__add__district__supplier").value = "";
      document
        .querySelectorAll(".value__input__add__supplier")
        .forEach((input) => (input.value = ""));
      console.log("Tên nhà cung cấp: ", addNameSupplier);
      console.log("Số điện thoại nhà cung cấp: ", addPhoneSupplier);
      console.log("Tỉnh: ", selectedCity);
      console.log("Quận: ", selectedDistrict);
      console.log("Địa chỉ: ", addAddressSupplier);
      console.log("Email nhà cung cấp: ", addMailSupplier);
      console.log("Loại sản phẩm: ", selectedProductType);
      setAddNameSupplier(undefined);
      setAddPhoneSupplier(undefined);
      setSelectedCity(undefined);
      setSelectedDistrict(undefined);
      setAddAddressSupplier(undefined);
      setAddMailSupplier(undefined);
      setSelectedProductType(undefined);
    }
  }

  // KIỂM TRA DỮ LIỆU NHẬP KHI THÊM ---------------------------------------------------------------------
  function checkInputPhoneAdd() {
    if (isNaN(addPhoneSupplier) || addPhoneSupplier.length !== 9) {
      document.getElementById("errorPhone").style.display = "block";
    } else {
      document.getElementById("errorPhone").style.display = "none";
    }
  }

  function checkInputEmailAdd() {
    var reg = /^\w+@[a-zA-Z]{3,}\w+\.co$/i;
    console.log(reg.test(addMailSupplier));

    if (addMailSupplier.match(reg)) {
      document.getElementById("errorEmail").style.display = "none";
    } else {
      document.getElementById("errorEmail").style.display = "block";
    }
  }

  // SỬA THÔNG TIN NHÀ CUNG CẤP --------------------------------------------------------------------
  const [updateName, setUpdateName] = useState();
  const [updatePhone, setUpdatePhone] = useState();
  const [updateCity, setUpdateCity] = useState();
  const [updateDistrict, setUpdateDistrict] = useState();
  const [updateAddress, setUpdateAddress] = useState();
  const [updateMail, setUpdateMail] = useState();
  const [updateTypeProduct, setUpdateTypeProduct] = useState();
  const [idSupplier, setIdSupplier] = useState();

  function UpdateSupplier(id) {
    setValueDisplay(false);
    setIdSupplier(id);
    setUpdateName(infoSupplier[id - 1].name);
    setUpdatePhone(infoSupplier[id - 1].phone);
    setUpdateCity(infoSupplier[id - 1].city);
    setUpdateDistrict(infoSupplier[id - 1].district);
    setUpdateAddress(infoSupplier[id - 1].address);
    setUpdateMail(infoSupplier[id - 1].email);
    setUpdateTypeProduct(infoSupplier[id - 1].nameProductType);
  }

  // HUỶ CẬP NHẬT THÔNG TIN NHÀ CUNG CẤP --------------------------------------------------------------------
  function CancelUpdateSupplier() {
    document
      .querySelectorAll(".value__cbb__save__supplier")
      .forEach((input) => (input.value = ""));
    document
      .querySelectorAll(".value__input__save__supplier")
      .forEach((input) => (input.value = ""));

    setSelectedUpdateTypeProduct(undefined);
    setSelectedUpdateCity(undefined);
    setSelectedUpdateDistrict(undefined);
    setSaveName(undefined);
    setSavePhone(undefined);
    setSaveMail(undefined);
    setSaveAddress(undefined);
    setValueDisplay(true);
    setValueDisplay(true);
  }

  // LƯU THÔNG TIN SAU KHI CẬP NHẬT -------------------------------------------------------------------
  const [saveName, setSaveName] = useState();
  const [savePhone, setSavePhone] = useState();
  const [saveAddress, setSaveAddress] = useState();
  const [saveMail, setSaveMail] = useState();

  function SaveUpdateSupplier() {
    if (
      saveName === undefined &&
      savePhone === undefined &&
      saveMail === undefined &&
      saveAddress === undefined &&
      selectedUpdateCity === undefined &&
      selectedUpdateDistrict === undefined &&
      selectedUpdateTypeProduct === undefined
    ) {
      alert("Vui lòng thay đổi ít nhất một thông tin");
    } else {
      console.log("Mã nhà cung cấp cần sửa nè: ", idSupplier);
      console.log(
        "Tên nhà cung cấp cần sửa nè: ",
        saveName === undefined ? updateName : saveName
      );
      console.log(
        "Số điện thoại nhà cung cấp cần sửa nè: ",
        savePhone === undefined ? updatePhone : savePhone
      );
      console.log(
        "Tỉnh/thành phố nhà cung cấp cần sửa nè: ",
        selectedUpdateCity === undefined ? updateCity : selectedUpdateCity
      );
      console.log(
        "Huyện/Quận nhà cung cấp cần sửa nè: ",
        selectedUpdateDistrict === undefined
          ? updateDistrict
          : selectedUpdateDistrict
      );
      console.log(
        "Địa chỉ nhà cung cấp cần sửa nè: ",
        saveAddress === undefined ? updateAddress : saveAddress
      );
      console.log(
        "Email nhà cung cấp nè: ",
        saveMail === undefined ? updateMail : saveMail
      );
      console.log(
        "Loại sản phẩm cần sửa nè: ",
        selectedUpdateTypeProduct === undefined
          ? updateTypeProduct
          : selectedUpdateTypeProduct
      );
      document
        .querySelectorAll(".value__cbb__save__supplier")
        .forEach((input) => (input.value = ""));
      document
        .querySelectorAll(".value__input__save__supplier")
        .forEach((input) => (input.value = ""));

      setSelectedUpdateTypeProduct(undefined);
      setSelectedUpdateCity(undefined);
      setSelectedUpdateDistrict(undefined);
      setSaveName(undefined);
      setSavePhone(undefined);
      setSaveMail(undefined);
      setSaveAddress(undefined);
      setValueDisplay(true);
    }
  }

  // KIỂM TRA DỮ LIỆU KHI SỬA ---------------------------------------------------------------------
  function checkInputPhoneUpdate() {
    if (isNaN(savePhone) || savePhone.length !== 9) {
      document.getElementById("errorPhone").style.display = "block";
    } else {
      document.getElementById("errorPhone").style.display = "none";
    }
  }

  function checkInputEmailUpdate() {
    var reg = /^\w+@[a-zA-Z]{3,}\w+\.co$/i;
    console.log(reg.test(saveMail));

    if (saveMail.match(reg)) {
      document.getElementById("errorEmail").style.display = "none";
    } else {
      document.getElementById("errorEmail").style.display = "block";
    }
  }

  // XOÁ THÔNG TIN NHÀ CUNG CẤP -------------------------------------------------------------------
  function DeletedSupplier(id) {
    alert("Mã nhà cung cấp cần xoà nè: " + id);
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
              <img src={iconSupplier} alt="" />
            </span>
            <p>Nhà cung cấp</p>
          </div>
          <div className="box">
            <div className="row-jcsb">
              <div className="info__supplier">
                <div className="row-jcsb">
                  <div className="input__nameSupplier">
                    <input
                      style={
                        valueDisplay === false
                          ? { display: "none" }
                          : { display: "block" }
                      }
                      className="input value__input__add__supplier"
                      placeholder="Nhập tên nhà cung cấp..."
                      onChange={(e) => setAddNameSupplier(e.target.value)}
                    />
                    <input
                      style={
                        valueDisplay === true
                          ? { display: "none" }
                          : { display: "block" }
                      }
                      className="input value__input__save__supplier"
                      placeholder={updateName}
                      onChange={(e) => setSaveName(e.target.value)}
                    />
                  </div>
                  <div className="input__phoneSupplier">
                    <input
                      style={
                        valueDisplay === false
                          ? { display: "none" }
                          : { display: "block" }
                      }
                      className="input value__input__add__supplier"
                      placeholder="Nhập số điện thoại nhà cung cấp..."
                      onChange={(e) => setAddPhoneSupplier(e.target.value)}
                      onInput={() => checkInputPhoneAdd()}
                    />
                    <input
                      style={
                        valueDisplay === true
                          ? { display: "none" }
                          : { display: "block" }
                      }
                      className="input value__input__save__supplier"
                      placeholder={updatePhone}
                      onChange={(e) => setSavePhone(e.target.value)}
                      onInput={() => checkInputPhoneUpdate()}
                    />
                  </div>
                </div>
                <br />
                <div className="row-jcsb">
                  <div className="input__citySupplier">
                    <div
                      className="dropdown"
                      style={
                        valueDisplay === false
                          ? { display: "none" }
                          : { display: "block" }
                      }
                    >
                      <div
                        id="border__dropdown__city"
                        className="dropdown__btn"
                        onClick={() => dropdownCityClick()}
                      >
                        <input
                          id="input__add__city__supplier"
                          type="text"
                          value={selectedCity}
                          placeholder="Chọn thành phố / tỉnh..."
                          readOnly
                        />
                        <img src={IconDropdownGrey} alt="" />
                      </div>
                      {isActiveCity && (
                        <div className="dropdown__content">
                          {listCity.map((option) => (
                            <div
                              onClick={() => {
                                dropdownItemCityClick(option.id);
                              }}
                              className="dropdown__item"
                            >
                              {option.tenTinh}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div
                      className="dropdown"
                      style={
                        valueDisplay === true
                          ? { display: "none" }
                          : { display: "block" }
                      }
                    >
                      <div
                        id="border__dropdown__UpdateCity"
                        className="dropdown__btn"
                        onClick={() => dropdownUpdateCityClick()}
                      >
                        <input
                          className="value__cbb__save__supplier"
                          type="text"
                          value={selectedUpdateCity}
                          placeholder={updateCity}
                          readOnly
                        />
                        <img src={IconDropdownGrey} alt="" />
                      </div>
                      {isActiveUpdateCity && (
                        <div className="dropdown__content">
                          {listCity.map((option) => (
                            <div
                              onClick={() => {
                                dropdownItemUpdateCityClick(option.id);
                              }}
                              className="dropdown__item"
                            >
                              {option.tenTinh}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="input__districtSupplier">
                    <div
                      className="dropdown"
                      style={
                        valueDisplay === false
                          ? { display: "none" }
                          : { display: "block" }
                      }
                    >
                      <div
                        id="border__dropdown__district"
                        className="dropdown__btn"
                        onClick={() => dropdownDistrictClick()}
                      >
                        <input
                          id="input__add__district__supplier"
                          value={selectedDistrict}
                          type="text"
                          placeholder="Chọn quận / huyện..."
                          readOnly
                        />
                        <img src={IconDropdownGrey} alt="" />
                      </div>
                      {isActiveDistrict && (
                        <div className="dropdown__content">
                          {listDistrict.map((e) => (
                            <div
                              onClick={() => {
                                dropdownItemDistrictClick(e.tenQuan);
                              }}
                              className="dropdown__item"
                            >
                              {e.tenQuan}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div
                      className="dropdown"
                      style={
                        valueDisplay === true
                          ? { display: "none" }
                          : { display: "block" }
                      }
                    >
                      <div
                        id="border__dropdown__UpdateDistrict"
                        className="dropdown__btn"
                        onClick={() => dropdownUpdateDistrictClick()}
                      >
                        <input
                          className="value__cbb__save__supplier"
                          type="text"
                          value={selectedUpdateDistrict}
                          placeholder={updateDistrict}
                          readOnly
                        />
                        <img src={IconDropdownGrey} alt="" />
                      </div>
                      {isActiveUpdateDistrict && (
                        <div className="dropdown__content">
                          {listDistrict.map((option) => (
                            <div
                              onClick={() => {
                                dropdownItemUpdateDistrictClick(option.id);
                              }}
                              className="dropdown__item"
                            >
                              {option.tenQuan}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="input__addressSupplier">
                    <input
                      style={
                        valueDisplay === false
                          ? { display: "none" }
                          : { display: "block" }
                      }
                      className="input value__input__add__supplier"
                      placeholder="Nhập số nhà - đường / ấp - xã..."
                      onChange={(e) => setAddAddressSupplier(e.target.value)}
                    />
                    <input
                      style={
                        valueDisplay === true
                          ? { display: "none" }
                          : { display: "block" }
                      }
                      className="input value__input__save__supplier"
                      placeholder={updateAddress}
                      onChange={(e) => setSaveAddress(e.target.value)}
                    />
                  </div>
                </div>
                <br />
                <div className="row-jcsb">
                  <div className="input__nameSupplier">
                    <input
                      style={
                        valueDisplay === false
                          ? { display: "none" }
                          : { display: "block" }
                      }
                      className="input value__input__add__supplier"
                      placeholder="Nhập email nhà cung cấp..."
                      onChange={(e) => setAddMailSupplier(e.target.value)}
                      onInput={() => checkInputEmailAdd()}
                    />
                    <input
                      style={
                        valueDisplay === true
                          ? { display: "none" }
                          : { display: "block" }
                      }
                      className="input value__input__save__supplier"
                      placeholder={updateMail}
                      onChange={(e) => setSaveMail(e.target.value)}
                      onInput={() => checkInputEmailUpdate()}
                    />
                  </div>
                  <div className="input__phoneSupplier">
                    <div className="choose__productType">
                      <div
                        className="dropdown"
                        style={
                          valueDisplay === false
                            ? { display: "none" }
                            : { display: "block" }
                        }
                      >
                        <div
                          id="border__dropdown__productType"
                          className="dropdown__btn"
                          onClick={() => dropdownProductTypeClick()}
                        >
                          <input
                            id="input__add__typeproduct__supplier"
                            type="text"
                            value={selectedProductType}
                            placeholder="Chọn loại sản phẩm..."
                            readOnly
                          />
                          <img src={IconDropdownGrey} alt="" />
                        </div>
                        {isActiveProductType && (
                          <div className="dropdown__content">
                            {listProductType.map((option) => (
                              <div
                                onClick={() => {
                                  dropdownItemProductTypeClick(option.id);
                                }}
                                className="dropdown__item"
                              >
                                {option.nameProductType}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      <div
                        className="dropdown"
                        style={
                          valueDisplay === true
                            ? { display: "none" }
                            : { display: "block" }
                        }
                      >
                        <div
                          id="border__dropdown__UpdateTypeProduct"
                          className="dropdown__btn"
                          onClick={() => dropdownUpdateTypeProductClick()}
                        >
                          <input
                            className="value__cbb__save__supplier"
                            type="text"
                            value={selectedUpdateTypeProduct}
                            placeholder={updateTypeProduct}
                            readOnly
                          />
                          <img src={IconDropdownGrey} alt="" />
                        </div>
                        {isActiveUpdateTypeProduct && (
                          <div className="dropdown__content">
                            {listProductType.map((option) => (
                              <div
                                onClick={() => {
                                  dropdownItemUpdateTypeProductClick(option.id);
                                }}
                                className="dropdown__item"
                              >
                                {option.nameProductType}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group__button__supplier col">
                <img src={imgSupplier} alt="" />
                <div className="jcc-horizontal">
                  <button
                    className="button"
                    style={
                      valueDisplay === false
                        ? { display: "none" }
                        : { display: "block" }
                    }
                    onClick={() => AddSupplier()}
                  >
                    Thêm nhà cung cấp
                  </button>
                  <div
                    className="group__btn__save__cancel__supplier"
                    style={
                      valueDisplay === true
                        ? { display: "none" }
                        : { display: "block" }
                    }
                  >
                    <button
                      className="button btn__save__info__supplier"
                      onClick={() => SaveUpdateSupplier()}
                    >
                      Lưu thông tin
                    </button>
                    <button
                      className="button"
                      onClick={() => CancelUpdateSupplier()}
                    >
                      Huỷ
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="groupError">
              <p id="errorPhone">*Vui lòng nhập đúng cú pháp số điện thoại*</p>
              <p id="errorEmail">*Vui lòng nhập đúng cú pháp Email*</p>
            </div>
          </div>
          <div className="box">
            <p>
              Danh sách Các nhà cung cấp
              <hr />
            </p>
            <br />
            <div class="table">
              <table>
                <tr>
                  <th className="code__supplier">Mã</th>
                  <th className="name__supplier">Tên nhà cung cấp</th>
                  <th className="address__supplier">Địa chỉ</th>
                  <th className="email__supplier">Email</th>
                  <th className="phone__supplier">Số điện thoại</th>
                  <th className="productType__supplier">Loại hàng</th>
                  <th className="update__supplier">Sửa</th>
                  <th className="deleted__supplier">Xoá</th>
                </tr>
                {infoSupplier.map((e) => (
                  <tr>
                    <td className="code__supplier">{e.id}</td>
                    <td className="name__supplier">{e.name}</td>
                    <td className="address__supplier">
                      {e.address}, {e.district}, {e.city}
                    </td>
                    <td className="email__supplier">{e.email}</td>
                    <td className="phone__supplier">{e.phone}</td>
                    <td className="productType__supplier">
                      {e.nameProductType}
                    </td>
                    <td className="update__supplier">
                      <i
                        class="fa fa-pencil"
                        onClick={() => UpdateSupplier(e.id)}
                      ></i>
                    </td>
                    <td className="deleted__supplier">
                      <i
                        class="fa fa-trash"
                        onClick={() => DeletedSupplier(e.id)}
                      ></i>
                    </td>
                  </tr>
                ))}
              </table>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
