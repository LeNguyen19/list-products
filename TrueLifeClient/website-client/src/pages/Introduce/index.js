import React from "react";
import "./style.css";
import Header from "../../components/Header/index";
import Title from "../../components/Title/index";
import Footer from "../../components/Footer/index";
import Menu from "../../components/Menu/index";
import Logo from "../../../src/assets/images/logo2.PNG";

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
        <Title type="pages" title="Giới thiệu tổng quan" />
        <div className="content__introduce">
          <img className="img__logo" src={Logo} alt="" />
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp; True Life là một trong những trang web bán
            mỹ phẩm uy tín và nổi tiếng nhất hiện nay được chị em tin tưởng. Sản
            phẩm ở Hasaki chủ yếu là những dòng sản phẩm chăm sóc da, trang điểm
            đến từ các hãng mỹ phẩm bình dân nổi tiếng của Mỹ, Pháp, Đức, Hàn
            như: Yves Rocher, Laneige, Vichy, e.l.f, Lancôme,... Các sản phẩm
            đều được kiểm tra kỹ lưỡng trước khi đưa ra bán nên bạn hoàn toàn có
            thể yên tâm về chất lượng sản phẩm. Đặc biệt, True Life có đội ngũ
            tư vấn chuyên nghiệp sẵn sàng giải đáp mọi thắc mắc cho khách hàng,
            bên cạnh đó khi mua hàng bạn có thể đổi trả trong vòng 14 ngày, thế
            nên đừng lo lắng khi chọn mua mỹ phẩm từ trang web này nhé.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp; True Life luôn tôn trọng khách hàng, lấy
            niềm vui, sự hài lòng của khách hàng để làm động lực, không ngừng
            tìm kiếm các sản phẩm tốt nhất để mỗi khách hàng đều có thể trở nên
            tự tin và xinh đẹp hơn. Các hãng thương hiệu mỹ phẩm ở True Life
            luôn là các thương hiệu uy tín, được mọi người tin dùng như: Secret
            Key, Laneige, Vichy, Avène, Yves Rocher, Laroche Posay,
            Lancôme,...Bên cạnh đó khi mua hàng ở Hasaki, khách luôn được giá ưu
            đãi tốt nhất, dịch vụ nhanh chóng & nhiều chương trình Khuyến Mãi
            khác.
          </p>
          <br />
        </div>
      </div>
      <Footer />
    </div>
  );
}
