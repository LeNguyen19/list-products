import React, { useState, useEffect } from "react";
import Menu from "../../components/MenuAdmin/index";
import Header from "../../components/Header/index";
import "./style.css";
import iconProduct from "../../assets/images/icon-product.svg";
import IconDropdownGrey from "../../assets/images/dropdownGrey.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Index() {
  useEffect(() => {
    onGetNatureProduct({
      page: 1,
      limit: 200,
    });

    onGetListNatureProduct({
      page: 1,
      limit: 200,
    });
  }, []);

  const [valueDisplay, setValueDisplay] = useState(true);
  const [isActiveTypeNature, setIsActiveTypeNature] = useState(false);
  const [selectedTypeNature, setSelectedTypeNature] = useState();
  const [isActiveUpdateTypeNature, setIsActiveUpdateTypeNature] =
    useState(false);
  const [selectedUpdateTypeNature, setSelectedUpdateTypeNature] = useState();
  const [listTypeNature, setListTypeNature] = useState([]);

  const onGetNatureProduct = async ({ page, limit, ...body }) => {
    try {
      const { data } = await axios.post(
        "https://localhost:44333/api/InfoTypeNature/list",
        body,
        {
          params: { page, limit },
        }
      );
      setListTypeNature(data?.data?.listData);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  function dropdownTypeNatureClick() {
    setIsActiveTypeNature(!isActiveTypeNature);
    document.getElementById("border__dropdown__TypeNature").style.border =
      "1px solid #FA748F";
  }

  function dropdownItemTypeNatureClick(id) {
    setSelectedTypeNature(
      listTypeNature.find((item) => item.typeNatureId === id).typeNatureName
    );
    setIsActiveTypeNature(false);
    document.getElementById("border__dropdown__TypeNature").style.border =
      "1px solid #D9D9D9";
  }

  function dropdownUpdateTypeNatureClick() {
    setIsActiveUpdateTypeNature(!isActiveUpdateTypeNature);
    document.getElementById("border__dropdown__UpdateTypeNature").style.border =
      "1px solid #FA748F";
  }

  function dropdownItemUpdateTypeNatureClick(id) {
    setSelectedUpdateTypeNature(
      listTypeNature.find((item) => item.typeNatureId === id).typeNatureName
    );
    setIsActiveUpdateTypeNature(false);
    document.getElementById("border__dropdown__UpdateTypeNature").style.border =
      "1px solid #D9D9D9";
  }

  // DATA ---------------------------------------------------------------------------------
  const [listNature, setListNature] = useState([]);
  const onGetListNatureProduct = async ({ page, limit, ...body }) => {
    try {
      const { data } = await axios.post(
        "https://localhost:44333/api/InfoNature/list",
        body,
        {
          params: { page, limit },
        }
      );
      setListNature(data?.data?.listData);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  // THÊM TÍNH CHẤT SẢN PHẨM --------------------------------------------------------------
  const [addContentNature, setAddContentNature] = useState();

  function AddNatureProduct() {
    if (selectedTypeNature === undefined || addContentNature === undefined) {
      alert("Vui lòng nhập đầy đủ thông tin");
    } else {
      document
        .querySelectorAll(".value__input__add__natureProduct")
        .forEach((input) => (input.value = ""));
      document
        .querySelectorAll(".value__cbb__add__natureProduct")
        .forEach((input) => (input.value = ""));
      console.log("Loại tính chất nè: ", selectedTypeNature);
      console.log("Nội dung tính chất: ", addContentNature);
      setSelectedTypeNature(undefined);
      setAddContentNature(undefined);
    }
  }

  // SỬA TÍNH CHẤT SẢN PHẨM ----------------------------------------------------------------
  const [updateContentNature, setUpdateContentNature] = useState();
  const [updateTypeNature, setUpdateTypeNature] = useState();

  function UpdateNatureProduct(id) {
    setValueDisplay(false);
    setUpdateContentNature(listNature[id - 1].nameNature);
    setUpdateTypeNature(listNature[id - 1].typeNature);
  }

  // LƯU THÔNG TIN TÍNH CHẤT SẢN PHẨM ------------------------------------------------------
  const [saveContentNature, setSaveContentNature] = useState();
  function SaveNatureProduct() {
    if (
      selectedUpdateTypeNature === undefined ||
      saveContentNature === undefined
    ) {
      alert("Vui lòng thay đổi ít nhất một thông tin");
    } else {
      console.log(
        "Loại tính chất: ",
        selectedUpdateTypeNature === undefined
          ? updateTypeNature
          : selectedUpdateTypeNature
      );
      console.log(
        "Tên tính chất: ",
        saveContentNature === undefined
          ? updateContentNature
          : saveContentNature
      );
      document
        .querySelectorAll(".value__input__save__natureProduct")
        .forEach((input) => (input.value = ""));
      document
        .querySelectorAll(".value__cbb__save__natureProduct")
        .forEach((input) => (input.value = ""));
      setUpdateTypeNature(undefined);
      setSaveContentNature(undefined);
      setValueDisplay(true);
    }
  }

  // HUỶ SỬA TÍNH CHẤT SẢN PHẨM ------------------------------------------------------------
  function CancelNatureProduct() {
    document
      .querySelectorAll(".value__input__save__natureProduct")
      .forEach((input) => (input.value = ""));
    document
      .querySelectorAll(".value__cbb__save__natureProduct")
      .forEach((input) => (input.value = ""));
    setUpdateTypeNature(undefined);
    setSaveContentNature(undefined);
    setValueDisplay(true);
  }

  // XOÁ TÍNH CHẤT SẢN PHẨM ----------------------------------------------------------------
  function DeletedNatureProduct(id) {
    alert("Mã tính chất cần xoá là: " + id);
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
              <img src={iconProduct} alt="" />
            </span>
            <p>Tính chất sản phẩm</p>
          </div>
          <div className="box row-jcsb">
            <div className="row-jcsb group__nature__natureProduct">
              <p>Chọn loại tính chất:</p>
              <div className="cbb__choose__typeNature__natureProduct">
                <div
                  className="dropdown"
                  style={
                    valueDisplay === false
                      ? { display: "none" }
                      : { display: "block" }
                  }
                >
                  <div
                    id="border__dropdown__TypeNature"
                    className="dropdown__btn"
                    onClick={() => dropdownTypeNatureClick()}
                  >
                    <input
                      className="value__cbb__add__natureProduct"
                      type="text"
                      value={selectedTypeNature}
                      placeholder="Chọn loại tính chất..."
                      readOnly
                    />
                    <img src={IconDropdownGrey} alt="" />
                  </div>
                  {isActiveTypeNature && (
                    <div className="dropdown__content">
                      {listTypeNature.map((option) => (
                        <div
                          onClick={() => {
                            dropdownItemTypeNatureClick(option.typeNatureId);
                          }}
                          className="dropdown__item"
                        >
                          {option.typeNatureName}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <input
                  style={
                    valueDisplay === true
                      ? { display: "none" }
                      : { display: "block" }
                  }
                  className="input value__input__save__natureProduct"
                  placeholder={updateTypeNature}
                  onChange={(e) => setSaveContentNature(e.target.value)}
                  readOnly
                />
                {/* <div
                  className="dropdown"
                  style={
                    valueDisplay === true
                      ? { display: "none" }
                      : { display: "block" }
                  }
                >
                 
                  <div
                    id="border__dropdown__UpdateTypeNature"
                    className="dropdown__btn"
                    onClick={() => dropdownUpdateTypeNatureClick()}
                  >
                    <input
                      className="value__cbb__save__natureProduct"
                      type="text"
                      value={selectedUpdateTypeNature}
                      placeholder={updateTypeNature}
                      readOnly
                    />
                    <img src={IconDropdownGrey} alt="" />
                  </div>
                  {isActiveUpdateTypeNature && (
                    <div className="dropdown__content">
                      {listTypeNature.map((option) => (
                        <div
                          onClick={() => {
                            dropdownItemUpdateTypeNatureClick(option.typeNatureId);
                          }}
                          className="dropdown__item"
                        >
                          {option.typeNatureName}
                        </div>
                      ))}
                    </div>
                  )}
                </div> */}
              </div>
            </div>
            <div className="row-jcsb group__nature__natureProduct">
              <p>Nhập nội dung:</p>
              <div className="input__name__nature__natureProduct">
                <input
                  style={
                    valueDisplay === false
                      ? { display: "none" }
                      : { display: "block" }
                  }
                  className="input value__input__add__natureProduct"
                  placeholder="Nhập nội dung..."
                  onChange={(e) => setAddContentNature(e.target.value)}
                />
                <input
                  style={
                    valueDisplay === true
                      ? { display: "none" }
                      : { display: "block" }
                  }
                  className="input value__input__save__natureProduct"
                  placeholder={updateContentNature}
                  onChange={(e) => setSaveContentNature(e.target.value)}
                />
              </div>
            </div>
            <button
              style={
                valueDisplay === false
                  ? { display: "none" }
                  : { display: "block" }
              }
              className="button"
              onClick={() => AddNatureProduct()}
            >
              Thêm tính chất
            </button>
            <button
              style={
                valueDisplay === true
                  ? { display: "none" }
                  : { display: "block" }
              }
              className="button"
              onClick={() => SaveNatureProduct()}
            >
              Lưu thông tin
            </button>
            <button
              style={
                valueDisplay === true
                  ? { display: "none" }
                  : { display: "block" }
              }
              className="button"
              onClick={() => CancelNatureProduct()}
            >
              Huỷ
            </button>
          </div>
          <div className="box">
            <p>
              Danh sách tính chất <hr />
            </p>
            <br />
            <div className="table">
              <table>
                <tr>
                  <th className="code__natureProduct">Mã</th>
                  <th className="type__natureProduct">Loại tính chất</th>
                  <th className="name__natureProduct">Tên tính chất</th>
                  <th className="code__natureProduct">Sửa</th>
                  <th className="code__natureProduct">Xoá</th>
                </tr>
                {listNature.map((e) => (
                  <tr>
                    <td className="code__natureProduct">TC00{e.natureId}</td>
                    <td className="type__natureProduct">{e.typeNatureId}</td>
                    <td className="name__natureProduct">{e.natureName}</td>
                    <td className="code__natureProduct">
                      <i
                        className="fa fa-pencil"
                        onClick={() => UpdateNatureProduct(e.natureId)}
                      />
                    </td>
                    <td className="code__natureProduct">
                      <i
                        className="fa fa-trash"
                        onClick={() => DeletedNatureProduct(e.natureId)}
                      />
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
