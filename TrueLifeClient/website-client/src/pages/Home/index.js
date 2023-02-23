import React, { useState } from "react";
import "./style.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Menu from "../../components/Menu";
import QuickSearch from "../../components/QuickSearch/index";
import NewProducts from "../../components/NewProducts/index";
import SellingProducts from "../../components/SellingProducts/index";
import PromotionalProducts from "../../components/PromotionalProducts/index";
import Event from "../../components/Event/index";
import Support from "../../components/Support/index";
import Title from "../../components/Title/index";
import GroupNews from "../../components/Group__news/index";
import Footer from "../../components/Footer/index";
import Brand from "../../components/Brand/index";

import slide1 from "../../assets/images/QC4.webp";
import slide2 from "../../assets/images/QC1.jpg";
import slide3 from "../../assets/images/QC2.jpg";
import slide4 from "../../assets/images/QC3.png";
import news1 from "../../assets/images/news1.png";
import news2 from "../../assets/images/news2.png";
import news3 from "../../assets/images/news3.png";

import Skincare from "../../assets/images/skincare.png";
import Lipstick from "../../assets/images/lipstick.png";
import Makeup from "../../assets/images/makeup.png";
import Perfume from "../../assets/images/perfume.png";

import { Spin } from "antd";

import { Link } from "react-router-dom";

const slideshow = [
  {
    url: slide1,
    des: "slide1",
  },
  {
    url: slide2,
    des: "slide2",
  },
  {
    url: slide3,
    des: "slide3",
  },
  {
    url: slide4,
    des: "slide4",
  },
];

export default function Index() {
  const [loading, setLoading] = useState(false);
  console.log("da vao home");
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Spin spinning={loading}>
      <div className="container__home">
        <div className="home__header">
          <div className="slides">
            <Slider {...settings}>
              {slideshow.map((item) => (
                <img src={item.url} alt={item.des} />
              ))}
            </Slider>
          </div>
          <div className="menu">
            {localStorage.getItem("Auth:user") ? (
              <Menu type="homeLogin" />
            ) : (
              <Menu type="home" />
            )}
          </div>
        </div>
        <div className="home__content">
          <div className="quick__search">
            <div className="quick__search__children">
              <QuickSearch
                type="big"
                url={Skincare}
                title="Dưỡng da"
                link="/products"
              />
              <QuickSearch
                type="small"
                url={Makeup}
                title="Trang điểm"
                link="/products"
              />
            </div>
            <div className="quick__search__children">
              <QuickSearch
                type="small"
                url={Lipstick}
                title="Son môi"
                link="/products"
              />
              <QuickSearch
                type="big"
                url={Perfume}
                title="Nước hoa"
                link="/products"
              />
            </div>
          </div>
          <div>
            <NewProducts />
          </div>
          <div>
            <Event />
          </div>
          <div>
            <SellingProducts />
          </div>
        </div>
        <div>
          <Support />
        </div>
        <div className="home__news">
          <div className="new__products__title">
            <Title type="product" title="TIN TỨC NỔI BẬT" />
          </div>
          <div className="home__news__content">
            <GroupNews
              url={news1}
              titleNews="Jamsu Makeup - 'Tuyệt chiêu' cho lớp nền hoàn hảo"
            />
            <GroupNews
              url={news2}
              titleNews="Xu hướng làm đẹp không cần dao kéo của phụ nữ hiện đại"
            />
            <GroupNews
              url={news3}
              titleNews="Liệu trình thư giãn cơ thể cho dân văn phòng cùng Okame"
            />
          </div>
          <Link to="/news">Xem thêm tin khác</Link>
          <Brand />
        </div>
        <div className="home__footer">
          <Footer />
        </div>
      </div>
    </Spin>
  );
}
