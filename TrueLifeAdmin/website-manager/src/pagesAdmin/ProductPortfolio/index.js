import React, { useState, useEffect } from "react";
import "./style.css";
import Menu from "../../components/MenuAdmin/index";
import Header from "../../components/Header/index";
import iconProduct from "../../assets/images/icon-product.svg";
import axios from "axios";

export default function Index() {

  useEffect(() => {
    onGetPortfolio({
      page: 1,
      limit: 200,
    });
  }, []);

  // DATA -------------------------------------------------------------------
  const [category, setCategory] = useState([]);

  const onGetPortfolio = async ({ page, limit, ...body }) => {
    try {
      const { data } = await axios.post(
        "https://localhost:44333/api/InfoProductPortfolio/list",
        body,
        {
          params: { page, limit },
        }
      );
      setCategory(data?.data?.listData);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  // THÊM DANH MỤC ----------------------------------------------------------
  const [nameCategory, setNameCategory] = useState();
  const [desCategory, setDesCategory] = useState();

  function AddCategory() {
    if (nameCategory === undefined || desCategory === undefined) {
      alert("Vui lòng điền đầy đủ thông tin");
    } else {
      document.getElementById("add__name__category").value = "";
      document.getElementById("add__des__category").value = "";
      console.log("Tên danh mục: " + nameCategory);
      console.log("Mô tả danh mục: " + desCategory);
      setNameCategory(undefined);
      setDesCategory(undefined);
    }
  }

  // XOÁ DANH MỤC ------------------------------------------------------------
  function deletedCategory(id) {
    alert("Mã danh mục: " + id);
  }

  // SỬA DANH MỤC ------------------------------------------------------------
  const [updateName, setUpdateName] = useState();
  const [updateDes, setUpdateDes] = useState();
  const [idCategory, setIdCategory] = useState();

  function updateCategory(id) {
    setIdCategory(id);

    document.getElementById("cancel__category").style.display = "block";
    document.getElementById("save__category").style.display = "block";
    document.getElementById("add__new__category").style.display = "none";
    document.getElementById("add__name__category").style.display = "none";
    document.getElementById("update__name__category").style.display = "block";
    document.getElementById("add__des__category").style.display = "none";
    document.getElementById("update__des__category").style.display = "block";

    setUpdateName(category[id - 1].name);
    setUpdateDes(category[id - 1].des);
  }

  // LƯU THÔNG TIN VỪA SỬA ---------------------------------------------------
  const [saveName, setSaveName] = useState();
  const [saveDes, setSaveDes] = useState();

  function SaveCategory() {
    if (saveName === undefined && saveDes === undefined) {
      alert("Vui lòng thay đổi ít nhất một thông tin");
    } else {
      document.getElementById("cancel__category").style.display = "none";
      document.getElementById("save__category").style.display = "none";
      document.getElementById("add__new__category").style.display = "block";
      document.getElementById("add__name__category").style.display = "block";
      document.getElementById("update__name__category").style.display = "none";
      document.getElementById("add__des__category").style.display = "block";
      document.getElementById("update__des__category").style.display = "none";

      document.getElementById("update__name__category").value = "";
      document.getElementById("update__des__category").value = "";
      console.log("Id của danh mục cần sửa nè: ", idCategory);
      console.log(
        "Tên vừa sửa nè:",
        saveName === undefined ? category[idCategory - 1].name : saveName
      );
      console.log(
        "Mô tả vừa sửa nè:",
        saveDes === undefined ? category[idCategory - 1].des : saveDes
      );
    }
  }

  // HUỶ SỬA DANH MỤC --------------------------------------------------------
  function CancelCategory() {
    document.getElementById("update__name__category").value = "";
    document.getElementById("update__des__category").value = "";
    document.getElementById("cancel__category").style.display = "none";
    document.getElementById("save__category").style.display = "none";
    document.getElementById("add__new__category").style.display = "block";
    document.getElementById("add__name__category").style.display = "block";
    document.getElementById("update__name__category").style.display = "none";
    document.getElementById("add__des__category").style.display = "block";
    document.getElementById("update__des__category").style.display = "none";
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
            <p>Danh mục sản phẩm</p>
          </div>
          <div className="box row-jcsb ">
            <div className="input__nameCategory">
              <input
                className="input"
                id="add__name__category"
                placeholder="Nhập tên danh mục..."
                onChange={(e) => setNameCategory(e.target.value)}
              />
              <input
                className="input"
                id="update__name__category"
                placeholder={updateName}
                onChange={(e) => setSaveName(e.target.value)}
              />
            </div>
            <div className="input__desCategory">
              <input
                id="add__des__category"
                className="input"
                placeholder="Nhập mô tả danh mục..."
                onChange={(e) => setDesCategory(e.target.value)}
              />
              <input
                id="update__des__category"
                className="input"
                placeholder={updateDes}
                onChange={(e) => setSaveDes(e.target.value)}
              />
            </div>
            <div>
              <button
                id="add__new__category"
                className="button"
                onClick={() => AddCategory()}
              >
                Thêm danh mục
              </button>
            </div>
            <button
              id="save__category"
              className="button"
              onClick={() => SaveCategory()}
            >
              Lưu thay đổi
            </button>
            <button
              id="cancel__category"
              className="button"
              onClick={() => CancelCategory()}
            >
              Huỷ
            </button>
          </div>
          <div className="box">
            <p>
              Danh sách danh mục <hr />
            </p>

            <br />
            <div class="table">
              <table>
                <tr>
                  <th className="code__category">Mã</th>
                  <th className="name__category">Tên danh mục</th>
                  <th className="des__category">Mô tả</th>
                  <th className="update__category">Sửa</th>
                  <th className="deleted__category">Xoá</th>
                </tr>
                {category.map((e) => (
                  <tr>
                    <td className="code__category">
                      DM00{e.productPortfolioId}
                    </td>
                    <td className="name__category">{e.productPortfolioName}</td>
                    <td className="des__category">{e.describe}</td>
                    <td className="update__category">
                      <i
                        onClick={() => updateCategory(e.productPortfolioId)}
                        class="fa fa-pencil"
                      ></i>
                    </td>
                    <td className="deleted__category">
                      <i
                        onClick={() => deletedCategory(e.id)}
                        class="fa fa-trash"
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
