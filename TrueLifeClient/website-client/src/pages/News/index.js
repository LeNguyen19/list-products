import React from "react";
import "./style.css";
import Header from "../../components/Header/index";
import Title from "../../components/Title/index";
import Footer from "../../components/Footer/index";
import Menu from "../../components/Menu/index";
import Tin1 from "../../../src/assets/images/Tin1.jpg";
import Tin2 from "../../../src/assets/images/Tin2.png";
import Tin3 from "../../../src/assets/images/news2.png";
import Tin4 from "../../../src/assets/images/news3.png";
import { Link } from "react-router-dom";


export default function index() {
  return (
    <div>
      {localStorage.getItem("Auth:user") ? (
        <Menu type="login" />
      ) : (
        <Menu type="none" />
      )}
      <Header title="Liên hệ" desBlack="Trang chủ " desPink=" Liên hệ" />
      <div className="container__contact">
        <Title type="pages" title="Tin tức" />
        <div className="content__news">
          <div className="row">
            <div className="group__news__outstanding">
              <img src={Tin1} alt="" />
              <h2>
                Thẩm mỹ không dao kéo - cuộc chơi của những người có tiền?
              </h2>
              <p>Ngày đăng: 14/12/2022</p>
              <p>
                Tại tọa đàm “Đánh thức vẻ đẹp tiềm ẩn” diễn ra ngày 23/12 ở TP
                HCM, hàng trăm chị em phụ nữ chia sẻ câu chuyện nhan sắc của
                mình. Dường như ai cũng có mong muốn, khát khao làm đẹp, có
                người lo lắng...
              </p>
            </div>
            <div className="group__news__outstanding">
              <img src={Tin2} alt="" />
              <h2>
                Những sản phẩm làm đẹp xa xỉ tới mức khiến bạn choáng váng
              </h2>
              <p>Ngày đăng: 16/12/2022</p>
              <p>
                Sắm sửa “không ngớt tay” những sản phẩm làm đẹp là đam mê của
                hầu hết các nàng. Nhưng có bao giờ bạn nghĩ mình sẽ chi số tiền
                với tám con số cho một sản phẩm dưỡng da? Hay thậm chí vài chục
                tỷ cho...
              </p>
            </div>
          </div>
          <hr />
          <br />
          <div className="row">
            <div className="row group__news__other">
              <img src={Tin3} alt="" />
              <div className="info__news">
                <h3>Xu hướng làm đẹp không cần dao kéo của phụ nữ hiện đại</h3>
                <p>Ngày đăng: 08/12/2022</p>
                <p>
                  Kỷ nguyên của công nghệ làm đẹp mới – Xu hướng làm đẹp mà
                  không cần phẫu thuật.Trước đây, mọi ng...
                </p>
              </div>
            </div>
            <div className="row group__news__other">
              <img src={Tin4} alt="" />
              <div className="info__news">
                <h3>
                  Trải nghiệm công nghệ chống lão hóa thế hệ mới tại sự kiện ra
                  mắt Lancôme Absolue Rose
                </h3>
                <p>Ngày đăng: 10/12/2022</p>
                <p>
                  Hàng loạt mỹ nhân và beauty blogger danh tiếng đã cùng trải
                  nghiệm công nghệ chống lão hóa Absol...
                </p>
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
      <Footer />
    </div>
  );
}
