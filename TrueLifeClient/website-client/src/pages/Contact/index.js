import React from "react";
import "./style.css";
import Header from "../../components/Header/index";
import Title from "../../components/Title/index";
import Footer from "../../components/Footer/index";
import Menu from "../../components/Menu/index";

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
        <Title type="pages" title="Hỗ trợ khách hàng" />
        <div className="content__contact">
          <div className="img__map">
            <div class="mapouter">
              <div class="gmap_canvas">
                <iframe
                  width="600"
                  height="500"
                  id="gmap_canvas"
                  src="http://maps.google.com/maps?q=140%20L%C3%AA%20tr%E1%BB%8Dng%20t%E1%BA%A5n&t=k&z=13&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>
                <a href="http://putlocker-is.org"></a>
                <br />
                {/* <style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style> */}
                {/* <style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style> */}
              </div>
            </div>
          </div>
          <div className="group__input__contact">
            <p>Gửi tin nhắn đến chúng tôi</p>
            <input placeholder="Nhập họ và tên..." />
            <input placeholder="Nhập email..." />
            <input placeholder="Nhập số điện thoại..." />
            <input placeholder="Nhập tiêu đề..." />
            <textarea placeholder="Nhập nội dung..." />
            <button>Gửi phản hồi</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
