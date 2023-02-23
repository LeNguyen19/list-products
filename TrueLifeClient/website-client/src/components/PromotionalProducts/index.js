import React from "react";
import Title from "../Title/index";
import InfoProduct from "../Info__product/index";
import Slider from "react-slick";
import "./style.css";
import { useEffect, useState } from "react";
import axios from "axios";

import RightArrow from "../../assets/images/next.svg";
import LeftArrow from "../../assets/images/prev.svg";

import Product1 from "../../assets/images/product1.webp";
import Product2 from "../../assets/images/product2.webp";

import { Link } from "react-router-dom";

export default function Index() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://634ab3205df952851416c5d6.mockapi.io/api/product",
      data: null,
    }).then((res) => {
      setProducts(res.data);
    });
  }, []);

  const SlickArrowLeft = ({ currentSlide, slideCount, style, ...props }) => (
    <img id="btnPrev" src={LeftArrow} alt="prevArrow" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, style, ...props }) => (
    <img id="btnNext" src={RightArrow} alt="nextArrow" {...props} />
  );

  const settings__product = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };
  return (
    <div className="promotional__products">
      <div className="new__products__title">
        <Title type="product" title="SẢN PHẨM KHUYẾN MÃI" />
      </div>
      <Slider {...settings__product}>
        {products.map((item) => (
          <InfoProduct
            type="sale"
            url={item.image}
            name={item.name}
            price={item.price}
            cost={item.cost}
            id={item.id}
            discount="-10%"
          />
        ))}
      </Slider>

      <Link to="/products">Xem thêm...</Link>
    </div>
  );
}
