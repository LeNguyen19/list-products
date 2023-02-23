import React, { useState, useEffect } from "react";
import "./style.css";
import Menu from "../../components/Menu/index";
import Header from "../../components/Header/index";
import InfoProduct from "../../components/Info__product/index";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Spin } from "antd";
import IconFind from "../../assets/images/icon-findBlack.svg";

export default function Index() {
  const { id } = useParams();
  const typeID = Number.parseInt(id);
  const [catogary, setCatogary] = useState([]);
  const [navMenu, setNavMenu] = useState([]);
  const [typeProduct, setTypeProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Portfolio();
    productNavMenu(typeID);
    productTypeId(null);
  }, []);

  const Portfolio = async () => {
    try {
      const result = await axios({
        method: "GET",
        url: "http://171.244.57.150:8081/api/Product/ListProductPortfolioUserAsync",
        data: null,
      });
      console.log(result.data.retText);
      if (result.data.data !== null) {
        setCatogary(result.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const productNavMenu = async () => {
    try {
      const result = await axios({
        method: "POST",
        url: "http://171.244.57.150:8081/api/Product/ShowListProductFilter",
        data: {
          productTypeId: typeID,
        },
        page: 1,
        limit: 25,
      });
      setNavMenu(result.data.data.listData);
    } catch (err) {
      console.log(err);
    }
  };

  const productTypeId = async (id) => {
    try {
      setLoading(true);
      const result = await axios({
        method: "POST",
        url: "http://171.244.57.150:8081/api/Product/ShowListProductFilter",
        data: {
          productTypeId: id,
        },
        page: 1,
        limit: 25,
      });
      setTypeProduct(result.data.data.listData);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  function handleShowProducts(id) {
    document.getElementById("listProductsNavMenu").style.display = "none";
    document.getElementById("listProductsType").style.display = "block";
    productTypeId(id);
  }
  return (
    <Spin spinning={loading}>
      <div>
        <Menu type="products" />
        <Header title="Sản Phẩm" desBlack="Trang chủ " desPink=" Sản phẩm" />
        <div className="container__products">
          <div className="products__navMenu">
            {catogary.map((e) => (
              <div className="container__navbar">
                <div className="category">
                  <p>{e.portfolioName}</p>
                </div>
                {e.listTypeProductUsers.map((i) => (
                  <div className="container__navbar">
                    <div className="typeProduct">
                      <p onClick={() => handleShowProducts(i.typeProductId)}>
                        {i.typeProductName}
                      </p>
                    </div>
                  </div>
                ))}
                <br />
              </div>
            ))}
          </div>
          <div className="products__content">
            <h1>TẤT CẢ SẢN PHẨM</h1>
            <hr />
            <div className="products__filter">
              <div></div>
              <div className="group__find">
                <div className="input__find">
                  <input placeholder="Bạn muốn tìm gì?" />
                </div>
                <div className="icon__find">
                  <img id="find" src={IconFind} alt="icon" />
                </div>
              </div>
            </div>
            <hr />
            <div id="listProductsNavMenu">
              <div className="listproducts__navMenu">
                {navMenu.map((item) => (
                  <div className="itemListProducts__products">
                    <InfoProduct
                      type="none"
                      url={item.avatar}
                      name={item.productName}
                      price={item.price}
                      id={item.productId}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div id="listProductsType">
              <div className="listproducts__navMenu">
                {typeProduct.map((item) => (
                  <div className="itemListProducts__products">
                    <InfoProduct
                      type="none"
                      url={item.avatar}
                      name={item.productName}
                      price={item.price}
                      id={item.productId}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Spin>
  );
}
