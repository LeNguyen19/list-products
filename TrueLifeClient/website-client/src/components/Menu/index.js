import React, { useState, useEffect } from "react";
import "./style.css";
import Logo from "../../assets/images/logo.png";
import IconFind from "../../assets/images/icon-find.svg";
import IconCart from "../../assets/images/icon-cart.svg";
import Drops from "../../assets/images/img-drops.png";
import { Link, useNavigate } from "react-router-dom";
import iconUser from "../../assets/images/iconUser.svg";
import iconUserBlackHome from "../../assets/images/iconUserBlack.svg";

import axios from "axios";

export default function Index({ type = "none" }) {
  const navigate = useNavigate();
  console.log("type: ", type);

  const [userId, setUserId] = useState(undefined)
 
  useEffect(() => {
    try {
      const dataUserLocal = localStorage.getItem("Auth:user");
      const userId = JSON.parse(dataUserLocal).userId;
      setUserId(userId);
    } catch (error) {
      console.log("error", error);
    }
  
  }, [localStorage.getItem("Auth:user")])

  const [Catogary, setCatogary] = useState([]);
  const user = !!localStorage.getItem("Auth:user")
    ? JSON.parse(localStorage.getItem("Auth:user"))
    : undefined;
    useEffect(() => {
      Portfolio();
      onGetProductCart({ userId });
    }, [userId]);

  const Portfolio = async () => {
    try {
      const result = await axios({
        method: "GET",
        url: "http://171.244.57.150:8081/api/Product/ListProductPortfolioUserAsync",
        data: null,
      });
      if (result.data.data !== null) {
        setCatogary(result.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("Auth:user");
    localStorage.removeItem("accessToken");
    window.location.href = "/";
  };

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);


  const onGetProductCart = async ({
    userId,
    page = 1,
    limit = 25,
    ...body
  }) => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        "http://171.244.57.150:8081/api/Data/ListCartByUser",
        body,
        { params: { usreId: userId} }
      );
      setProducts(data.data.listData);
    } catch (error) {
      console.log("error: ", error);
    } finally {
      setLoading(false);
    }
  };

  var amount = products.map((e) => e.quantity);
  function sumArray(mang) {
    let sum = 0;
    let i = 0;
    while (i < mang.length) {
      sum += mang[i];
      i++;
    }
    return sum;
  }
  const sumAmount = sumArray(amount);

  const [find, setFind] = useState();
  function handleFindProduct() {
    alert(find);
  }

  switch (type) {
    case "home":
      return (
        <div className="container__menu">
          <div className="header__menu">
            <p>Hotline: 0123456789</p>
            <div className="link__menu">
              <Link to="/login">Đăng nhập</Link>
              <Link to="/register">Đăng ký</Link>
            </div>
          </div>
          <div className="container__group__menu">
            <div className="group__menu">
              <div className="logo">
                <Link to="/home">
                  <img src={Logo} alt="logo" />
                </Link>
              </div>
              <div className="list__menu">
                <ul>
                  <li>
                    <Link to="/home">TRANG CHỦ</Link>
                  </li>
                  <li>
                    <Link to="/introduce">GIỚI THIỆU</Link>
                  </li>
                  <li id="product__portfolio">
                    <Link to="/products">SẢN PHẨM</Link>
                    <div className="list__product__portfolio">
                      <ul>
                        <li className="category__product">
                          {Catogary.map((e) => (
                            <a>
                              {e.portfolioName}
                              {e.listTypeProductUsers.map((i) => (
                                <ul>
                                  <Link to={`/${i.typeProductId}/products`}>
                                    <li className="type__product">
                                      <a>{i.typeProductName}</a>
                                    </li>
                                  </Link>
                                </ul>
                              ))}
                            </a>
                          ))}
                        </li>
                        <img src={Drops} alt="" />
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Link to="/news">TIN TỨC</Link>
                  </li>
                  <li>
                    <Link to="/contact">LIÊN HỆ</Link>
                  </li>
                </ul>
              </div>
              <div className="group__find">
                {/* <div className="input__find">
                  <input placeholder="Bạn muốn tìm gì?" />
                </div>
                <div className="icon__find">
                  <img id="find" src={IconFind} alt="icon" />
                </div> */}
                <div className="icon__cart">
                  <Link to="/cart">
                    <img src={IconCart} alt="icon" />
                  </Link>
                </div>
                {/* <div className="number">
                  <p>5</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      );
    case "homeLogin":
      return (
        <div className="container__menu">
          <div className="header__menu">
            <p>Hotline: 0123456789</p>
            {/* <div className="link__menu">
              <Link to="/login">Đăng nhập</Link>
              <Link to="/register">Đăng ký</Link>
            </div> */}
            <div className="infoUser__menu">
              <p>
                {!!user
                  ? !!user.fullName
                    ? user.userName
                    : JSON.parse(localStorage.getItem("Auth:user")).userName
                  : undefined}
              </p>
              <img src={iconUserBlackHome} alt="" />
              <div className="wrapper__infoUser">
                <Link to={`/infoUser/${user.userId}`}>
                  <p>Hồ sơ </p>
                </Link>
                <p onClick={handleLogout}>Đăng xuất</p>
              </div>
            </div>
          </div>
          <div className="container__group__menu">
            <div className="group__menu">
              <Link to="/home">
                <img src={Logo} alt="logo" />
              </Link>
              <div className="list__menu">
                <ul>
                  <li>
                    <Link to="/home">TRANG CHỦ</Link>
                  </li>
                  <li>
                    <Link to="/introduce">GIỚI THIỆU</Link>
                  </li>
                  <li id="product__portfolio">
                    <Link to="/products">SẢN PHẨM</Link>
                    <div className="list__product__portfolio">
                      <ul>
                        <li className="category__product">
                          {Catogary.map((e) => (
                            <a>
                              {e.portfolioName}
                              {e.listTypeProductUsers.map((i) => (
                                <ul>
                                  <Link to={`/${i.typeProductId}/products`}>
                                    <li className="type__product">
                                      <a>{i.typeProductName}</a>
                                    </li>
                                  </Link>
                                </ul>
                              ))}
                            </a>
                          ))}
                        </li>
                        <img src={Drops} alt="" />
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Link to="/news">TIN TỨC</Link>
                  </li>
                  <li>
                    <Link to="/contact">LIÊN HỆ</Link>
                  </li>
                </ul>
              </div>
              <div className="group__find">
                {/* <div className="input__find">
                  <input placeholder="Bạn muốn tìm gì?" />
                </div>
                <div className="icon__find">
                  <img id="find" src={IconFind} alt="icon" />
                </div> */}
                <div className="icon__cart">
                  <Link to="/cart">
                    <img src={IconCart} alt="icon" />
                  </Link>
                </div>
                <div className="number">
                  <p>{sumAmount}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    case "login":
      return (
        <div className="container__menu">
          <div className="header__menu header__menu__layout">
            <p>Hotline: 0123456789</p>
            <div className="infoUser__menu">
              <p>
                {!!user
                  ? !!user.fullName
                    ? user.userName
                    : JSON.parse(localStorage.getItem("Auth:user")).userName
                  : undefined}
              </p>
              <img src={iconUser} alt="" />
              <div className="wrapper__infoUser">
                <Link to={`/infoUser/${user.userId}`}>
                  <p>Hồ sơ </p>
                </Link>
                <p onClick={handleLogout}>Đăng xuất</p>
              </div>
            </div>
          </div>
          <div className="container__group__menu">
            <div className="group__menu">
              <div className="logo">
                <Link to="/home">
                  <img src={Logo} alt="logo" />
                </Link>
              </div>
              <div className="list__menu">
                <ul>
                  <li>
                    <Link to="/home">TRANG CHỦ</Link>
                  </li>
                  <li>
                    <Link to="/introduce">GIỚI THIỆU</Link>
                  </li>
                  <li id="product__portfolio">
                    <Link to="/products">SẢN PHẨM</Link>
                    <div className="list__product__portfolio">
                      <ul>
                        <li className="category__product">
                          {Catogary.map((e) => (
                            <a>
                              {e.portfolioName}
                              {e.listTypeProductUsers.map((i) => (
                                <ul>
                                  <Link to={`/${i.typeProductId}/products`}>
                                    <li className="type__product">
                                      <a>{i.typeProductName}</a>
                                    </li>
                                  </Link>
                                </ul>
                              ))}
                            </a>
                          ))}
                        </li>
                        <img src={Drops} alt="" />
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Link to="/news">TIN TỨC</Link>
                  </li>
                  <li>
                    <Link to="/contact">LIÊN HỆ</Link>
                  </li>
                </ul>
              </div>
              <div className="group__find">
                {/* <div className="input__find">
                  <input placeholder="Bạn muốn tìm gì?" />
                </div>
                <div className="icon__find">
                  <img id="find" src={IconFind} alt="icon" />
                </div> */}
                <div className="icon__cart">
                  <Link to="/cart">
                    <img src={IconCart} alt="icon" />
                  </Link>
                </div>
                <div className="number">
                  <p>{sumAmount}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    case "products":
      return (
        <div className="container__menu">
          <div className="header__menu header__menu__layout">
            <p>Hotline: 0123456789</p>
            <div className="infoUser__menu">
              <p>
                {!!user
                  ? !!user.fullName
                    ? user.userName
                    : JSON.parse(localStorage.getItem("Auth:user")).userName
                  : undefined}
              </p>
              <img src={iconUser} alt="" />
              <div className="wrapper__infoUser">
                <Link to={`/infoUser/${user.userId}`}>
                  <p>Hồ sơ </p>
                </Link>
                <p onClick={handleLogout}>Đăng xuất</p>
              </div>
            </div>
          </div>
          <div className="container__group__menu">
            <div className="group__menu">
              <div className="logo">
                <Link to="/home">
                  <img src={Logo} alt="logo" />
                </Link>
              </div>
              <div className="list__menu">
                <ul>
                  <li>
                    <Link to="/home">TRANG CHỦ</Link>
                  </li>
                  <li>
                    <Link to="/introduce">GIỚI THIỆU</Link>
                  </li>
                  <li id="product__portfolio">
                    <Link to="/products">SẢN PHẨM</Link>
                    {/* <a
                      onClick={() => {
                        navigate("/products");
                      }}
                    >
                      SẢN PHẨM
                    </a> */}
                  </li>
                  <li>
                    <Link to="/news">TIN TỨC</Link>
                  </li>
                  <li>
                    <Link to="/contact">LIÊN HỆ</Link>
                  </li>
                </ul>
              </div>
              <div className="group__find">
                {/* <div
                  onChange={(e) => setFind(e.target.value)}
                  className="input__find"
                >
                  <input placeholder="Bạn muốn tìm gì?" />
                </div>
                <div className="icon__find">
                  <img
                    onClick={() => handleFindProduct()}
                    id="find"
                    src={IconFind}
                    alt="icon"
                  />
                </div> */}
                <div className="icon__cart">
                  <Link to="/cart">
                    <img src={IconCart} alt="icon" />
                  </Link>
                </div>
                <div className="number">
                  <p>{sumAmount}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div className="container__menu">
          <div className="header__menu header__menu__layout">
            <p>Hotline: 0123456789</p>
            <div className="link__menu">
              <Link to="/login">Đăng nhập</Link>
              <Link to="/register">Đăng ký</Link>
            </div>
          </div>
          <div className="container__group__menu">
            <div className="group__menu">
              <div className="logo">
                <Link to="/home">
                  <img src={Logo} alt="logo" />
                </Link>
              </div>
              <div className="list__menu">
                <ul>
                  <li>
                    <Link to="/home">TRANG CHỦ</Link>
                  </li>
                  <li>
                    <Link to="/introduce">GIỚI THIỆU</Link>
                  </li>
                  <li id="product__portfolio">
                    <Link to="/products">SẢN PHẨM</Link>
                    <div className="list__product__portfolio">
                      <ul>
                        <li className="category__product">
                          {Catogary.map((e) => (
                            <a>
                              {e.portfolioName}
                              {e.listTypeProductUsers.map((i) => (
                                <ul>
                                  <Link to={`/${i.typeProductId}/products`}>
                                    <li className="type__product">
                                      <a>{i.typeProductName}</a>
                                    </li>
                                  </Link>
                                </ul>
                              ))}
                            </a>
                          ))}
                        </li>
                        <img src={Drops} alt="" />
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Link to="/news">TIN TỨC</Link>
                  </li>
                  <li>
                    <Link to="/contact">LIÊN HỆ</Link>
                  </li>
                </ul>
              </div>
              <div className="group__find">
                <div className="input__find">
                  <input placeholder="Bạn muốn tìm gì?" />
                </div>
                <div className="icon__find">
                  <img id="find" src={IconFind} alt="icon" />
                </div>
                <div className="icon__cart">
                  <Link to="/cart">
                    <img src={IconCart} alt="icon" />
                  </Link>
                </div>
                <div className="number">
                  <p>5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
}
