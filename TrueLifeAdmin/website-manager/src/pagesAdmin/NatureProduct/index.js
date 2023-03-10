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

  // TH??M T??NH CH???T S???N PH???M --------------------------------------------------------------
  const [addContentNature, setAddContentNature] = useState();

  function AddNatureProduct() {
    if (selectedTypeNature === undefined || addContentNature === undefined) {
      alert("Vui l??ng nh???p ?????y ????? th??ng tin");
    } else {
      document
        .querySelectorAll(".value__input__add__natureProduct")
        .forEach((input) => (input.value = ""));
      document
        .querySelectorAll(".value__cbb__add__natureProduct")
        .forEach((input) => (input.value = ""));
      console.log("Lo???i t??nh ch???t n??: ", selectedTypeNature);
      console.log("N???i dung t??nh ch???t: ", addContentNature);
      setSelectedTypeNature(undefined);
      setAddContentNature(undefined);
    }
  }

  // S???A T??NH CH???T S???N PH???M ----------------------------------------------------------------
  const [updateContentNature, setUpdateContentNature] = useState();
  const [updateTypeNature, setUpdateTypeNature] = useState();

  function UpdateNatureProduct(id) {
    setValueDisplay(false);
    setUpdateContentNature(listNature[id - 1].nameNature);
    setUpdateTypeNature(listNature[id - 1].typeNature);
  }

  // L??U TH??NG TIN T??NH CH???T S???N PH???M ------------------------------------------------------
  const [saveContentNature, setSaveContentNature] = useState();
  function SaveNatureProduct() {
    if (
      selectedUpdateTypeNature === undefined ||
      saveContentNature === undefined
    ) {
      alert("Vui l??ng thay ?????i ??t nh???t m???t th??ng tin");
    } else {
      console.log(
        "Lo???i t??nh ch???t: ",
        selectedUpdateTypeNature === undefined
          ? updateTypeNature
          : selectedUpdateTypeNature
      );
      console.log(
        "T??n t??nh ch???t: ",
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

  // HU??? S???A T??NH CH???T S???N PH???M ------------------------------------------------------------
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

  // XO?? T??NH CH???T S???N PH???M ----------------------------------------------------------------
  function DeletedNatureProduct(id) {
    alert("M?? t??nh ch???t c???n xo?? l??: " + id);
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
            <p>T??nh ch???t s???n ph???m</p>
          </div>
          <div className="box row-jcsb">
            <div className="row-jcsb group__nature__natureProduct">
              <p>Ch???n lo???i t??nh ch???t:</p>
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
                      placeholder="Ch???n lo???i t??nh ch???t..."
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
              <p>Nh???p n???i dung:</p>
              <div className="input__name__nature__natureProduct">
                <input
                  style={
                    valueDisplay === false
                      ? { display: "none" }
                      : { display: "block" }
                  }
                  className="input value__input__add__natureProduct"
                  placeholder="Nh???p n???i dung..."
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
              Th??m t??nh ch???t
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
              L??u th??ng tin
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
              Hu???
            </button>
          </div>
          <div className="box">
            <p>
              Danh s??ch t??nh ch???t <hr />
            </p>
            <br />
            <div className="table">
              <table>
                <tr>
                  <th className="code__natureProduct">M??</th>
                  <th className="type__natureProduct">Lo???i t??nh ch???t</th>
                  <th className="name__natureProduct">T??n t??nh ch???t</th>
                  <th className="code__natureProduct">S???a</th>
                  <th className="code__natureProduct">Xo??</th>
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
