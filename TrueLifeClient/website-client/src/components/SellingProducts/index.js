import React from "react";
import Title from "../Title/index";
import InfoProduct from "../Info__product/index";
import Slider from "react-slick";
import "./style.css";
import { useEffect, useState } from "react";
import axios from "axios";

import RightArrow from "../../assets/images/next.svg";
import LeftArrow from "../../assets/images/prev.svg";

import { Link } from "react-router-dom";

export default function Index() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    TopSixSellingProducts();
  }, []);
  const TopSixSellingProducts = async () => {
    try {
      const result = await axios({
        method: "GET",
        url: "http://171.244.57.150:8081/api/Product/TopSixSellingProducts",
        data: null,
      });
      setProducts(result.data.data.listData);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

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
  return (
    <div className="container__sellingProducts">
      <div className="new__products__title">
        <Title type="product" title="SẢN PHẨM BÁN CHẠY" />
      </div>
      <Slider {...settings__product}>
        {products.map((item) => (
          <InfoProduct
            type="none"
            url={item.avatar}
            name={item.productName}
            price={item.price}
            id={item.productId}
          />
        ))}
      </Slider>
      <Link to="/products">Xem thêm...</Link>
    </div>
  );
}
