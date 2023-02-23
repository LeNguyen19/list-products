import React, { useState } from "react";
import "./style.css";
import Menu from "../../components/MenuAdmin/index";
import Header from "../../components/Header/index";
import iconProduct from "../../assets/images/icon-product.svg";
import IconDropdownGrey from "../../assets/images/dropdownGrey.svg";

export default function Index() {
  const [isActiveAdd, setIsActiveAdd] = useState(false);
  const [selectedAdd, setSelectedAdd] = useState();
  const [isActiveUpdate, setIsActiveUpdate] = useState(false);
  const [selectedUpdate, setSelectedUpdate] = useState();
  const [nameType, setNameType] = useState();
  const [category, setCategory] = useState();

  // DATA ----------------------------------------------------------------------------------
  const listCategory = [
    {
      id: 1,
      nameCategory: "Trang điểm",
    },
    {
      id: 2,
      nameCategory: "Dưỡng da",
    },
    {
      id: 3,
      nameCategory: "Chăm sóc cơ thể",
    },
  ];

  const [productType, setProductType] = useState([
    {
      id: 1,
      nameType: "Son",
      nameCategory: "Trang điểm",
    },
    {
      id: 2,
      nameType: "Công cụ trang điểm",
      nameCategory: "Trang điểm",
    },
    {
      id: 3,
      nameType: "Mặt nạ",
      nameCategory: "Dưỡng da",
    },
    {
      id: 4,
      nameType: "Sữa rửa mặt",
      nameCategory: "Dưỡng da",
    },
    {
      id: 5,
      nameType: "Nước hoa",
      nameCategory: "Chăm sóc cơ thể",
    },
    {
      id: 6,
      nameType: "Sữa tắm",
      nameCategory: "Chăm sóc cơ thể",
    },
  ]);

  function dropdownCategoryClick() {
    setIsActiveAdd(!isActiveAdd);
    document.getElementById("border__dropdown__addType").style.border =
      "1px solid #FA748F";
  }

  function dropdownItemCategoryClick(id) {
    setSelectedAdd(listCategory[id - 1].nameCategory);
    setIsActiveAdd(false);
    document.getElementById("border__dropdown__addType").style.border =
      "1px solid #D9D9D9";
  }

  function dropdownCategoryUpdateClick() {
    setIsActiveUpdate(!isActiveUpdate);
    document.getElementById("border__dropdown__updateType").style.border =
      "1px solid #FA748F";
  }

  function dropdownItemCategoryUpdateClick(id) {
    setSelectedUpdate(listCategory[id - 1].nameCategory);
    setIsActiveUpdate(false);
    document.getElementById("border__dropdown__updateType").style.border =
      "1px solid #D9D9D9";
  }

  // THÊM LOẠI SẢN PHẨM ---------------------------------------------------------------------
  const [addNameType, setAddNameType] = useState();

  function AddTypeProduct() {
    if (addNameType === undefined || selectedAdd === undefined) {
      alert("Vui lòng nhập đầy đủ thông tin");
    } else {
      document.getElementById("input__add__nameType").value = "";
      document.getElementById("input__add__nameCategory").value = "";
      console.log("Tên loại nè:  ", addNameType);
      console.log("Tên danh mục nè:  ", selectedAdd);
      setAddNameType(undefined);
      setSelectedAdd(undefined);
    }
  }

  // XOÁ LOẠI SẢN PHẨM ----------------------------------------------------------------------
  function deletedTypeProduct(id) {
    alert("Mã loại sản phẩm nè:  " + id);
  }

  // SỬA LOẠI SẢN PHẨM ----------------------------------------------------------------------
  const [idTypeProduct, setIdTypeProduct] = useState();

  function updateProductType(id) {
    setNameType(productType[id - 1].nameType);
    setCategory(productType[id - 1].nameCategory);
    setIdTypeProduct(id);

    document.getElementById("value__nameType").style.display = "none";
    document.getElementById("update__nameType").style.display = "block";
    document.getElementById("value__chooseCategory").style.display = "none";
    document.getElementById("update__chooseCategory").style.display = "block";
    document.getElementById("group__save__cancel__productType").style.display =
      "block";
    document.getElementById("add__info__productType").style.display = "none";
  }

  // LƯU THAY ĐỔI LOẠI SẢN PHẨM --------------------------------------------------------------------------
  const [saveNameType, setSaveNameType] = useState();

  function SaveUpdateType() {
    if (saveNameType === undefined && selectedUpdate === undefined) {
      alert("Vui lòng thay đổi ít nhất một thông tin");
    } else {
      document.getElementById("input__update__nameType").value = "";
      document.getElementById("input__update__nameCategory").value = "";
      document.getElementById("value__nameType").style.display = "block";
      document.getElementById("update__nameType").style.display = "none";
      document.getElementById("value__chooseCategory").style.display = "block";
      document.getElementById("update__chooseCategory").style.display = "none";
      document.getElementById(
        "group__save__cancel__productType"
      ).style.display = "none";
      document.getElementById("add__info__productType").style.display = "block";

      console.log("Id loại sản phẩm cần sửa: ", idTypeProduct);
      console.log(
        "Tên loại nè:  ",
        saveNameType === undefined
          ? productType[idTypeProduct - 1].nameType
          : saveNameType
      );
      console.log(
        "Tên danh mục nè:  ",
        selectedUpdate === undefined
          ? productType[idTypeProduct - 1].nameCategory
          : selectedUpdate
      );
    }
  }

  // HUỶ SỬA LOẠI SẢN PHẨM -------------------------------------------------------------------------------
  function CancelUpdateType() {
    document.getElementById("input__update__nameType").value = "";
    document.getElementById("input__update__nameCategory").value = "";
    document.getElementById("value__nameType").style.display = "block";
    document.getElementById("update__nameType").style.display = "none";
    document.getElementById("value__chooseCategory").style.display = "block";
    document.getElementById("update__chooseCategory").style.display = "none";
    document.getElementById("group__save__cancel__productType").style.display =
      "none";
    document.getElementById("add__info__productType").style.display = "block";
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
            <p>Loại sản phẩm</p>
          </div>
          <div className="box row-jcsb content__productType">
            <div className="input__nameType" id="value__nameType">
              <input
                id="input__add__nameType"
                className="input"
                placeholder="Nhập tên loại..."
                onChange={(e) => setAddNameType(e.target.value)}
              />
            </div>
            <div className="input__nameType" id="update__nameType">
              <input
                id="input__update__nameType"
                className="input"
                placeholder={nameType}
                onChange={(e) => setSaveNameType(e.target.value)}
              />
            </div>
            <div className="input__chooseCategory">
              <div className="dropdown" id="value__chooseCategory">
                <div
                  id="border__dropdown__addType"
                  className="dropdown__btn"
                  onClick={() => dropdownCategoryClick()}
                >
                  <input
                    id="input__add__nameCategory"
                    type="text"
                    value={selectedAdd}
                    placeholder="Chọn danh mục..."
                    readOnly
                  />
                  <img src={IconDropdownGrey} alt="" />
                </div>
                {isActiveAdd && (
                  <div className="dropdown__content">
                    {listCategory.map((option) => (
                      <div
                        onClick={() => {
                          dropdownItemCategoryClick(option.id);
                        }}
                        className="dropdown__item"
                      >
                        {option.nameCategory}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="dropdown" id="update__chooseCategory">
                <div
                  id="border__dropdown__updateType"
                  className="dropdown__btn"
                  onClick={() => dropdownCategoryUpdateClick()}
                >
                  <input
                    id="input__update__nameCategory"
                    type="text"
                    value={selectedUpdate}
                    placeholder={category}
                    readOnly
                  />
                  <img src={IconDropdownGrey} alt="" />
                </div>
                {isActiveUpdate && (
                  <div className="dropdown__content">
                    {listCategory.map((option) => (
                      <div
                        onClick={() => {
                          dropdownItemCategoryUpdateClick(option.id);
                        }}
                        className="dropdown__item"
                      >
                        {option.nameCategory}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <button
              className="button"
              id="add__info__productType"
              onClick={() => AddTypeProduct()}
            >
              Thêm loại sản phẩm
            </button>
            <div id="group__save__cancel__productType">
              <button className="button" onClick={() => SaveUpdateType()}>
                Lưu thay đổi
              </button>
              <button className="button" onClick={() => CancelUpdateType()}>
                Huỷ
              </button>
            </div>
          </div>
          <div className="box">
            <p>
              Danh sách loại sản phẩm
              <hr />
            </p>
            <br />
            <div class="table">
              <table>
                <tr>
                  <th className="code__productType">Mã</th>
                  <th className="name____productType">Tên loại sản phẩm</th>
                  <th className="name__categoryType">Tên danh mục</th>
                  <th className="uadate__productType">Sửa</th>
                  <th className="deleted__productType">Xoá</th>
                </tr>
                {productType.map((e) => (
                  <tr>
                    <td className="code__productType">LSP00{e.id}</td>
                    <td className="name____productType">{e.nameType}</td>
                    <td className="name__categoryType">{e.nameCategory}</td>
                    <td className="uadate__productType">
                      <i
                        class="fa fa-pencil"
                        onClick={() => updateProductType(e.id)}
                      ></i>
                    </td>
                    <td className="deleted__productType">
                      <i
                        class="fa fa-trash"
                        onClick={() => deletedTypeProduct(e.id)}
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
