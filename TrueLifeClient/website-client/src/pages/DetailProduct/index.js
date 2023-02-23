import React, { useState, useEffect } from "react";
import "./style.css";
import Header from "../../components/Header/index";
import Title from "../../components/Title/index";
import Footer from "../../components/Footer/index";
import InfoProduct from "../../components/Info__product/index";
import CommentAndReview from "../../components/CommentAndReview/index";
import Menu from "../../components/Menu/index";
import swal from "sweetalert";
import { Spin } from "antd";

import Product1 from "../../assets/images/product1.webp";
import Product2 from "../../assets/images/product2.webp";
import Product3 from "../../assets/images/product3.webp";
import Product4 from "../../assets/images/product4.webp";
import RightArrow from "../../assets/images/next.svg";
import LeftArrow from "../../assets/images/prev.svg";

import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import imgUser1 from "../../assets/images/imgUser1.jpg";
import imgUser2 from "../../assets/images/imgUser2.jpg";

import ListComment from "../../components/ListComment/index";

import { FaStar } from "react-icons/fa";
import ListReview from "../../components/ListReview/index";
import { PRODUCT_STATUS } from "../../utility/constants";

export default function Index() {
  const userId = JSON.parse(localStorage.getItem("Auth:user")).userId;
  const [user, setUser] = useState({});
  const onGetDataUser = async ({ userId, ...body }) => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        "http://171.244.57.150:8081/api/User/DetailInfoUserAsync",
        body,
        {
          params: { userId },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      setUser(data.data);
    } catch (error) {
      console.log("error: ", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    onGetDataUser({ userId });
  }, [userId]);

  const img = [Product1, Product2, Product3, Product4];
  const [selected, setSelected] = useState(0);
  const [number, setNumber] = useState(1);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  console.log(id);
  const [detailProduct, setDetailProduct] = useState({});
  const [activeThumb, setActiveThumb] = useState();

  function formatCash(value) {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);
  }

  useEffect(() => {
    onGetProductDetail({ id });
  }, [id]);

  const onGetProductDetail = async ({ id, nature, capacity, ...body }) => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        "http://171.244.57.150:8081/api/Product/ProductDetailAsync",
        body,
        { params: { id, capacity, nature } }
      );
      setDetailProduct(data.data);
    } catch (error) {
      console.log("error: ", error);
    } finally {
      setLoading(false);
    }
  };

  console.log("CTSP: ", detailProduct);

  var amountComment =
    Object.keys(detailProduct).length > 0 &&
    detailProduct.listComent.map((e) => e.userId);
  // console.log("amountComment: ", amountComment.length);
  var amountEvaluate =
    Object.keys(detailProduct).length > 0 &&
    detailProduct.listEvaluate.map((e) => e.userId);
  //  console.log("amountEvaluate: ", amountEvaluate.length);

  const [products, setProducts] = useState([]);

  const SlickArrowLeft = ({ currentSlide, slideCount, style, ...props }) => (
    <img id="btnPrev" src={LeftArrow} alt="prevArrow" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, style, ...props }) => (
    <img id="btnNext" src={RightArrow} alt="nextArrow" {...props} />
  );

  const settings__product = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };

  const settings = (img) => ({
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (i) => (
      <div className="list__img__product">
        <img
          src={img[i]}
          alt=""
          style={{
            width: "100%",
            maxWidth: "52px",
            maxHeight: "52px",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    ),
    dotsClass: "slick-dots custom__indicator",
    arrows: false,
  });

  const handleAdd = () => {
    setNumber(number + 1);
  };

  const handleMinus = () => {
    number === 1 ? setNumber(1) : setNumber(number - 1);
  };

  console.log(detailProduct.listNature);

  async function handleAddCart() {
    try {
      setLoading(true);
      const user = localStorage.getItem("Auth:user")
        ? JSON.parse(localStorage.getItem("Auth:user"))
        : undefined;

      const { data } = await axios.post(
        "http://171.244.57.150:8081/api/Data/AddProductToCart",
        {
          productId: detailProduct.productId,
          price: detailProduct.price,
          quantity: number,
          userId: user.userId,
          natureId: !!selected ? parseInt(selected) : undefined,
        }
      );
      if (data.retCode !== 0) {
        swal({
          text: "Thêm vào giỏ thất bại, vui lòng kiểm tra lại và thử lại sau!",
          icon: "warning",
        });
        return;
      }
      swal({
        text: "Thêm giỏ hàng thành công!",
        icon: "success",
      });
      window.location.reload();
    } catch (error) {
      console.log("error rui: ", error);
    } finally {
      setLoading(false);
    }
  }

  // Group comment and review
  //Tab
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  //Comment
  const [contentComment, setContentComment] = useState();
  const [listComment, setListComment] = useState([
    {
      avt: imgUser1,
      name: "Người ta bình luận",
      day: "13/10/2022",
      content: "Sản phẩm rất tốt, trên cả mong đợi",
    },
  ]);

  async function addComment() {
    if (contentComment === undefined) {
      swal({
        text: "Nội dung đang trống. Vui lòng nhập nội dung bình luận!",
        icon: "warning",
      });
    } else {
      try {
        setLoading(true);
        const user = localStorage.getItem("Auth:user")
          ? JSON.parse(localStorage.getItem("Auth:user"))
          : undefined;

        const { data } = await axios.post(
          "http://171.244.57.150:8081/api/Data/UserCommentProduct",
          {
            productId: detailProduct.productId,
            userId: user.userId,
            content: contentComment,
          }
        );
        if (data.retCode !== 0) {
          swal({
            text: "Thêm bình luận thất bại!",
            icon: "warning",
          });
          return;
        }
        swal({
          text: "Đã thêm bình luận mới!",
          icon: "success",
        });
        window.parent.location = window.parent.location.href;
      } catch (error) {
        console.log("error rui: ", error);
      } finally {
        setLoading(false);
      }
    }
  }

  //Review
  const color = {
    orange: "#ffba5a",
    grey: "#a9a9a9",
  };
  const [listReview, setListReview] = useState([
    // {
    //   avt: imgUser2,
    //   name: "Tui thích đánh giá",
    //   day: "10/11/2022",
    //   star: 3,
    // },
  ]);
  const stars = Array(5).fill(0);

  const [currentValue, setCurrentValue] = useState(0);

  const handleClick = (currentValue) => {
    setCurrentValue(currentValue);
  };

  async function addReview() {
    if (currentValue === 0) {
      swal({
        text: "Bạn chưa chọn sao đánh giá. Vui lòng chọn sao đánh giá!",
        icon: "warning",
      });
    } else {
      try {
        setLoading(true);
        const user = localStorage.getItem("Auth:user")
          ? JSON.parse(localStorage.getItem("Auth:user"))
          : undefined;

        const { data } = await axios.post(
          "http://171.244.57.150:8081/api/Data/UserEvaluateProduct",
          {
            productId: detailProduct.productId,
            userId: user.userId,
            numberStars: currentValue,
          }
        );
        if (data.retCode !== 0) {
          swal({
            text: "Thêm đánh giá thất bại!",
            icon: "warning",
          });
          return;
        }
        swal({
          text: "Đã thêm đánh giá mới!",
          icon: "success",
        });
        window.parent.location = window.parent.location.href;
      } catch (error) {
        console.log("error rui: ", error);
      } finally {
        setLoading(false);
      }
    }
  }

  console.log(detailProduct);
  return (
    <Spin spinning={loading}>
      <div>
        {!!localStorage.getItem("Auth:user") ? (
          <Menu type="login" />
        ) : (
          <Menu type="none" />
        )}
        <Header
          title="Chi tiết sản phẩm"
          desBlack="Trang chủ "
          desPink=" Chi tiết sản phẩm"
        />
        <div className="content__detailProduct">
          <div className="info__detailProduct">
            <div className="img__product">
              <Slider
                {...settings(
                  Object.keys(detailProduct).length > 0
                    ? detailProduct.listImage
                    : undefined
                )}
              >
                {Object.keys(detailProduct).length > 0 &&
                  detailProduct.listImage.map((item) => (
                    <img src={item} alt="" />
                  ))}
              </Slider>
            </div>
            <div className="infoDetail__product">
              <h2>
                {Object.keys(detailProduct).length > 0 &&
                  detailProduct.productName}
              </h2>
              <br />
              <p className="evaluate">
                <span className="number__evaluate">{amountComment.length}</span>{" "}
                Bình luận |
                <span className="number__evaluate">
                  {amountEvaluate.length}
                </span>{" "}
                Đánh giá
              </p>

              <table>
                <tr>
                  <td className="table__title">Giá bán:</td>
                  <td id="price">
                    {formatCash(
                      Object.keys(detailProduct).length > 0 &&
                        detailProduct.priceDiscount
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="table__title">Giá gốc:</td>
                  <td id="cost">
                    {formatCash(
                      Object.keys(detailProduct).length > 0 &&
                        detailProduct.price
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="table__title">Hãng sản xuất:</td>
                  <td>
                    {Object.keys(detailProduct).length > 0 &&
                      detailProduct.trademark}
                  </td>
                </tr>
                <tr>
                  <td className="table__title">Tình trạng:</td>
                  <td>
                    {Object.keys(detailProduct).length > 0 &&
                      PRODUCT_STATUS.find(
                        (item) => item.values === detailProduct.statusProduct
                      ).title}
                  </td>
                </tr>
                <tr>
                  <td className="table__title">Số lượng mua:</td>
                  <td className="group__amount">
                    <button className="btn__minus" onClick={handleMinus}>
                      -
                    </button>
                    <input value={number} readOnly />
                    <button className="btn__add" onClick={handleAdd}>
                      +
                    </button>
                  </td>
                </tr>
              </table>
              <div>
                <Link to="/products">
                  <button className="btn__link">Mua Tiếp</button>
                </Link>
                <button className="btn__link" onClick={() => handleAddCart()}>
                  Thêm Vào Giỏ
                </button>
              </div>
            </div>
          </div>
          <div className="describe">
            <h4>Mô Tả</h4>
            <p>
              {Object.keys(detailProduct).length > 0 && detailProduct.describe}
            </p>
          </div>
          <div className="related__products">
            <div className="new__products__title">
              <Title type="product" title="SẢN PHẨM LIÊN QUAN" />
            </div>
            <Slider {...settings__product}>
              {Object.keys(detailProduct).length > 0 &&
                !!detailProduct.listProductRelateTo &&
                detailProduct.listProductRelateTo.map((item) => (
                  <InfoProduct
                    type="none"
                    url={item.avatar}
                    name={item.productName}
                    price={item.price}
                    id={item.productId}
                  />
                ))}
            </Slider>
          </div>
          <div className="comment__review">
            {/* <CommentAndReview /> */}
            <div className="bloc-tabs">
              <button
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
              >
                Bình luận
              </button>
              <button
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
              >
                Đánh giá
              </button>
            </div>

            <div className="content-tabs">
              <div
                className={
                  toggleState === 1 ? "content  active-content" : "content"
                }
              >
                <div className="container__comment">
                  {/* {listComment.map((e) => (
                    <ListComment
                      // avt={e.avt}
                      // name={e.name}
                      day={e.day}
                      content={e.content}
                    />
                  ))} */}
                  {Object.keys(detailProduct).length > 0 &&
                    detailProduct.listComent.map((e) => (
                      <ListComment
                        content={e.content}
                        day={e.createAt.slice(0, 10)}
                        name={e.fullName}
                        avt={e.avatar}
                      />
                    ))}

                  <hr />
                  <div className="wrapper__comment">
                    <img src={user.avatar} alt="" />
                    <div className="input__comment">
                      <input
                        placeholder="Nhập bình luận..."
                        onChange={(e) => setContentComment(e.target.value)}
                      />
                      <button onClick={() => addComment()}>
                        Gửi bình luận
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={
                  toggleState === 2 ? "content  active-content" : "content"
                }
              >
                <div className="container__comment">
                  {/* {listReview.map((e) => (
                    <ListReview
                      avt={e.avt}
                      name={e.name}
                      day={e.day}
                      star={e.star}
                    />
                  ))} */}
                  {Object.keys(detailProduct).length > 0 &&
                    detailProduct.listEvaluate.map((e) => (
                      <ListReview
                        star={e.numberStars}
                        avt={e.avatar}
                        name={e.fullName}
                      />
                    ))}

                  <hr />
                  <div className="wrapper__comment">
                    <img src={user.avatar} alt="" />
                    <div className="input__comment input__review">
                      {stars.map((_, index) => {
                        return (
                          <FaStar
                            key={index}
                            size={40}
                            style={{
                              marginRight: 10,
                              marginTop: -2,
                            }}
                            color={
                              currentValue > index ? color.orange : color.grey
                            }
                            onClick={() => handleClick(index + 1)}
                          />
                        );
                      })}
                      <button onClick={addReview}>Gửi đánh giá</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Spin>
  );
}
