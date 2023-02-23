import React, { useState, useEffect } from "react";
import "./style.css";
import Menu from "../../components/Menu/index";
import Header from "../../components/Header/index";
import InfoProduct from "../../components/Info__product/index";
import axios from "axios";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/index";
import { Spin } from "antd";
import IconFind from "../../assets/images/icon-findBlack.svg";

export default function Index() {
  const { id } = useParams();
  const typeID = Number.parseInt(id);
  const [codeType, setCodeType] = useState();
  // const [products, setProducts] = useState([]);
  const [catogary, setCatogary] = useState([]);
  const [productAlls, setProductAlls] = useState([]);
  const [navMenu, setNavMenu] = useState([]);
  const [paginate, setPaginate] = useState({
    page: 1,
    limit: 25,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Portfolio();
    // productAll(null);
    getProductPaginate({ codeTypeId: null, page: 1, limit: 25 });
    productNavMenu(typeID);
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
  const productAll = async (codeTypeId) => {
    try {
      setLoading(true);
      const result = await axios({
        method: "POST",
        url: "http://171.244.57.150:8081/api/Product/ShowListProductFilter",
        data: {
          productTypeId: codeTypeId,
        },
        page: 1,
        limit: 25,
      });
      setProductAlls(result.data.data.listData);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const getProductPaginate = async ({ codeTypeId, page = 1, limit = 25 }) => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        "http://171.244.57.150:8081/api/Product/ShowListProductFilter",
        { productTypeId: codeTypeId },
        {
          params: { page, limit },
        }
      );
      setPaginate(data.data.paging);
      console.log("data: ", data.data.listData);
      setProductAlls(productAlls.concat(data.data.listData));
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const productNavMenu = async (typeID) => {
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

  async function handleReadMore() {
    getProductPaginate({
      codeTypeId: null,
      page: paginate?.curPage + 1,
      limit: paginate?.limit,
    });
  }

  function handleShowProducts(id) {
    document.getElementById("listProductsAll__products").style.display = "none";

    document.getElementById("see__more").style.display = "none";

    document.getElementById("listProducts__products").style.display = "block";
    productAll(id);
  }

  const [valueFind, setValueFind] = useState();

  async function handleFindProduct() {
    console.log("Giá trị tìm: ", valueFind);
    if (valueFind === undefined) {
      console.log("Vui lòng nhập nội dung cần tìm");
    } else {
      try {
        setLoading(true);
        const result = await axios({
          method: "POST",
          url: "http://171.244.57.150:8081/api/Product/ShowListProductFilter",
          data: {
            productName: valueFind,
          },
          page: 1,
          limit: 25,
        });
        setPaginate(result.data.data.paging);
        setProductAlls(result.data.data.listData);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <Spin spinning={loading} className="spin-wrapper">
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
                  <input
                    onChange={(e) => setValueFind(e.target.value)}
                    placeholder="Bạn muốn tìm gì?"
                  />
                </div>
                <div className="icon__find">
                  <img
                    onClick={() => handleFindProduct()}
                    id="find"
                    src={IconFind}
                    alt="icon"
                  />
                </div>
              </div>
            </div>
            <hr />
            <div>
              <div id="listProductsAll__products">
                {productAlls.map((item) => (
                  <div className="itemListProducts__products">
                    <InfoProduct
                      type="none"
                      url={item.avatar}
                      name={item.productName}
                      price={item.price}
                      cost={item.price}
                      id={item.productId}
                    />
                  </div>
                ))}
              </div>
              <br />
              {paginate.curPage < paginate.totalPage && (
                <div
                  id="see__more"
                  className="seen__product__other"
                  onClick={handleReadMore}
                >
                  Xem thêm sản phẩm khác
                </div>
              )}
              <br />
            </div>

            <div id="listProducts__products">
              <div className="wrapper__listProducts__products">
                {productAlls.map((item) => (
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

        <br />
        <Footer />
      </div>
    </Spin>
  );
}
