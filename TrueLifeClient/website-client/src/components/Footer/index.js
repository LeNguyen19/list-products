import React from "react";
import "./style.css";

export default function index() {
  return (
    <div className="container__footer">
      <div className="wrapper__content__footer">
        <div className="group__info">
          <h3>HỖ TRỢ</h3>
          <hr />
          <p>Giờ mở cửa: 8 giờ đến 21 giờ 30 phút</p>
          <p>Ngày làm việc: từ thứ 2 đến chủ nhật</p>
          <p>Ngày lễ vẫn làm việc bình thường</p>
        </div>
        <div className="group__info">
          <h3>CHÍNH SÁCH</h3>
          <hr />
          <p>Hỗ trợ đổi trả sản phẩm</p>
          <p>Tư vấn trực tuyến 24/7</p>
          <p>Liên hệ hotline khi gặp sự cố</p>
        </div>
        <div className="group__info">
          <h3>LIÊN HỆ</h3>
          <hr />
          <p>Số điện thoại: 0123456789</p>
          <p>Email: truelife2022@gmail.com</p>
          <p>
            Địa chỉ: 140 Lê Trọng Tấn - Tây Thạnh
            <br /> - Tân Phú - TP.Hồ Chí Minh
          </p>
        </div>
      </div>

      <diiv className="license">
        <p>Bản quyền thuộc về TrueLife</p>
      </diiv>
    </div>
  );
}
