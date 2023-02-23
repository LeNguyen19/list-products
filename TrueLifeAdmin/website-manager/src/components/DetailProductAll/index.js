import React, { useState } from "react";
import "./style.css";
import MenuWarehouse from "../MenuWarehouse/index";
import MenuStaff from "../MenuStaff/index";
import MenuCashier from "../MenuStaff/index";
import Header from "../Header/index";
import iconProduct from "../../assets/images/icon-product.svg";
import Product1 from "../../assets/images/product1.webp";
import Product2 from "../../assets/images/product2.webp";
import Product3 from "../../assets/images/product3.webp";
import Product4 from "../../assets/images/product4.webp";
import Product5 from "../../assets/images/product5.webp";
import Product6 from "../../assets/images/product6.webp";
import Product7 from "../../assets/images/product7.webp";
import Product8 from "../../assets/images/product8.webp";

export default function Index() {
  // Thông tin sản phẩm từng đợt nhập --------------------------------------------------------
  const [importLot, setImportLot] = useState([
    {
      id: 1,
      listProduct: [
        {
          id: 1,
          priceImport: "190000đ",
          priceReturn: "200000đ",
          nature: "Đỏ cam",
          amount: 100,
        },
        {
          id: 2,
          priceImport: "200000đ",
          priceReturn: "210000đ",
          nature: "Đỏ cherry",
          amount: 100,
        },
        {
          id: 3,
          priceImport: "210000đ",
          priceReturn: "220000đ",
          nature: "Đỏ hồng",
          amount: 100,
        },
      ],
      dateImport: "xx/dd/mmmm",
      dateStart: "xx/dd/mmmm",
      dateEnd: "xx/dd/mmmm",
    },
    {
      id: 2,
      listProduct: [
        {
          id: 1,
          priceImport: "200000đ",
          priceReturn: "210000đ",
          nature: "Đỏ cam",
          amount: 100,
        },
        {
          id: 2,
          priceImport: "220000đ",
          priceReturn: "230000đ",
          nature: "Đỏ cherry",
          amount: 100,
        },
        {
          id: 3,
          priceImport: "230000đ",
          priceReturn: "240000đ",
          nature: "Đỏ hồng",
          amount: 100,
        },
      ],
      dateImport: "yy/hh/mmmm",
      dateStart: "yy/hh/mmmm",
      dateEnd: "yy/hh/mmmm",
    },
  ]);

  // Thông tin chi tiết sản phẩm -------------------------------------------------------------
  const [detailProduct, setDetailProduct] = useState({
    id: 1,
    nameProduct: "Nước Hoa Miss Dior Eau De Parfum",
    typeProduct: "Nước Hoa",
    nameTrademark: "Dior",
    typeNature: "Mùi - Dung tích",
    listPriceBuy: [
      {
        id: 1,
        priceBuy: "200000đ",
      },
      {
        id: 2,
        priceBuy: "210000đ",
      },
      {
        id: 3,
        priceBuy: "220000đ",
      },
    ],
    listNature: [
      {
        id: 1,
        nameNature: "Hương đào - 5ml",
      },
      {
        id: 2,
        nameNature: "Hương hoa hồng - 5ml",
      },
      {
        id: 3,
        nameNature: "Hương hoa nhài - 5ml",
      },
    ],
    des: "Miss Dior Eau De Parfum tỏa hương ra từng bước từng bước một. Lớp hương đầu lướt nhẹ sự quyến rũ tinh tế của hương thơm tươi mát từ trái cây, hương thơm từ nhóm cây cam chanh rồi tới lớp hương thơm hoa cỏ nở rộ, sau đó đến sự sang trọng quý phái của hoắc hương, trước khi kết thúc bằng mùi hương của xạ hương, đây là dấu vết cuối cùng đọng lại trong ký ức của người dùng.Với thiết kế nhẹ nhàng, thanh thoát nhưng vô vùng sang trọng hình hộp chữ nhật bằng thủy tinh trong suốt để lộ rõ phần dung dịch nước hoa màu vàng gỗ. Với nắp chai trong suốt và một dải ruy băng kim loại, mang đến một chút quyến rũ và cá tính, đi kèm với mùi hương tuyệt diệu nước hoa nữ Miss Dior xứng đáng là lọ nước hoa đáng giá hàng đầu, dành cho những phụ nữ thanh lịch và sành điệu.",
    listImg: [
      {
        id: 1,
        img: Product2,
      },
      {
        id: 2,
        img: Product3,
      },
      {
        id: 3,
        img: Product4,
      },
      {
        id: 4,
        img: Product5,
      },
      {
        id: 5,
        img: Product6,
      },
      {
        id: 6,
        img: Product7,
      },
      {
        id: 7,
        img: Product8,
      },
    ],
  });

  return (
    <div>
      <div className="container">
        <div className="background">
          {/* CHỖ NÀY KIỂM TRA TÀI KHOẢN ĐĂNG NHẬP THUỘC LOẠI NÀO ĐỂ DÙNG MENU CHO ĐÚNG NÈ */}
          {/* NẾU LÀ QUẢN LÝ KHO THÌ DÙNG <MenuWarehouse /> */}
          {/* NẾU LÀ NHÂN VIÊN TƯ VẤN HOẶC NHÂN VIÊN KHO THÌ DÙNG <MenuStaff /> */}
          {/* NẾU LÀ NHÂN VIÊN THU NGÂN THÌ DÙNG <MenuCashier /> */}
        </div>
        <div className="content">
          <Header />
          <div className="wrapper__content">
            <div className="title__content row">
              <span>
                <img src={iconProduct} alt="" />
              </span>
              <p>Chi tiết sản phẩm</p>
            </div>
          </div>
          <div className="box col">
            <div className="row-jcsb group__info__detail__product">
              <img src={Product1} alt="" />
              <table>
                <tr>
                  <td className="title__info__detail__product">Tên sản phẩm</td>
                  <td>:</td>
                  <td>{detailProduct.nameProduct}</td>
                </tr>
                <tr>
                  <td className="title__info__detail__product">Mã sản phẩm</td>
                  <td>:</td>
                  <td>SP000{detailProduct.id}</td>
                </tr>
                <tr>
                  <td className="title__info__detail__product">
                    Loại sản phẩm
                  </td>
                  <td>:</td>
                  <td>{detailProduct.typeProduct}</td>
                </tr>
                <tr>
                  <td className="title__info__detail__product">
                    Tên thương hiệu
                  </td>
                  <td>:</td>
                  <td>{detailProduct.nameTrademark}</td>
                </tr>
                <tr>
                  <td className="title__info__detail__product">
                    Loại tính chất:
                  </td>
                  <td>:</td>
                  <td>{detailProduct.typeNature}</td>
                </tr>
                <tr>
                  <td className="title__info__detail__product">Tính chất:</td>
                  <td>:</td>
                  <td>
                    {detailProduct.listNature.map((e) => e.nameNature + ", ")}
                  </td>
                </tr>
                <tr>
                  <td className="title__info__detail__product">Giá bán:</td>
                  <td>:</td>
                  <td>
                    {detailProduct.listPriceBuy.map((e) => e.priceBuy + ", ")}
                  </td>
                </tr>
              </table>
            </div>
            <br />
            <div className="des__info__detail__product">
              Mô tả : {detailProduct.des}
            </div>
            <br />
            <p>Ảnh khác:</p>
            <div className="row-gap14 list__img__detailProduct">
              {detailProduct.listImg.map((e) => (
                <img src={e.img} alt />
              ))}
            </div>
          </div>
          <div className="box">
            <p>
              Thông tin sản phẩm <hr />
            </p>

            <br />
            <div class="table">
              <table>
                <tr>
                  <th className="code__detailProduct">Mã</th>
                  <th className="date__detailProduct">Ngày nhập</th>
                  <th className="date__detailProduct">Ngày sản xuất</th>
                  <th className="date__detailProduct">Ngày hết hạn</th>
                  <th className="nature__detailProduct">Tính chất</th>
                  <th className="amout__detailProduct">Giá nhập</th>
                  <th className="amout__detailProduct">Giá bán</th>
                  <th className="amout__detailProduct">Số lượng</th>
                </tr>
                {importLot.map((e) => (
                  <tr>
                    <td className="code__detailProduct">LH00{e.id}</td>
                    <td className="date__detailProduct">{e.dateImport}</td>
                    <td className="date__detailProduct">{e.dateStart}</td>
                    <td className="date__detailProduct">{e.dateEnd}</td>
                    <td className="nature__detailProduct">
                      {e.listProduct.map((i) => (
                        <tr className="tr__child">{i.nature}</tr>
                      ))}
                    </td>
                    <td className="amout__detailProduct">
                      {e.listProduct.map((i) => (
                        <tr className="tr__child">{i.priceImport}</tr>
                      ))}
                    </td>
                    <td className="amout__detailProduct">
                      {e.listProduct.map((i) => (
                        <tr className="tr__child">{i.priceReturn}</tr>
                      ))}
                    </td>
                    <td className="amout__detailProduct">
                      {e.listProduct.map((i) => (
                        <tr className="tr__child">{i.amount}</tr>
                      ))}
                    </td>
                  </tr>
                ))}
              </table>

              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
