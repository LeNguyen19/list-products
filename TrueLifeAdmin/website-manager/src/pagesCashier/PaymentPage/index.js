import React, { useState } from "react";
import "./style.css";
import iconHome from "../../assets/images/icon-house.svg";
import iconCustomer from "../../assets/images/icon-customer.svg";
import iconPayment from "../../assets/images/icon-payment.svg";
import iconScan from "../../assets/images/icon-scan.svg";
import iconClose from "../../assets/images/icon-close.svg";
import Payment from "../../assets/images/payment.png";

import { Link } from "react-router-dom";

import Product1 from "../../assets/images/product1.webp";
import Product2 from "../../assets/images/product2.webp";
import Product3 from "../../assets/images/product3.webp";
import Product4 from "../../assets/images/product4.webp";
import Product5 from "../../assets/images/product5.webp";
import Product6 from "../../assets/images/product6.webp";
import Product7 from "../../assets/images/product7.webp";
import Product8 from "../../assets/images/product8.webp";
import Product9 from "../../assets/images/product9.webp";

import combo1 from "../../assets/images/combo1.png";
import combo2 from "../../assets/images/combo2.png";
import combo3 from "../../assets/images/combo3.png";

export default function Index() {
  //Data-----------------------------------------------------------------------------
  const [products, setProducts] = useState([
    {
      id: 1,
      image: Product1,
      name: "DIOR Miss Dior Eau de Parfum 2",
      price: "2.450.000₫",
      cost: "2.650.000₫",
    },
    {
      id: 2,
      image: Product2,
      name: "Nước hoa CHANEL COCO MADEMOISELLE",
      price: "1.000.000₫",
      cost: "1.300.000₫",
    },
    {
      id: 3,
      image: Product3,
      name: "BOBBI BROWN Beach Fragrance",
      price: "450.000₫",
      cost: "650.000₫",
    },
    {
      id: 4,
      image: Product4,
      name: "VIKTOR & ROLF Flowerbomb Hair Mist",
      price: "640.000₫",
      cost: "1.000.000₫",
    },
    {
      id: 5,
      image: Product5,
      name: "GUERLAIN Mon Guerlain Perfumed Shower Gel",
      price: "1.050.000₫",
      cost: "1.200.000₫",
    },
    {
      id: 6,
      image: Product6,
      name: "CHLOÉ Nomade Eau de Parfum",
      price: "310.000₫",
      cost: "500.000₫",
    },
    {
      id: 7,
      image: Product7,
      name: "YVES SAINT LAURENT MANIFESTO",
      price: "900.000₫",
      cost: "1.250.000₫",
    },
    {
      id: 8,
      image: Product8,
      name: "CLEAN Cashmere",
      price: "1.600.000₫",
      cost: "1.950.000₫",
    },
    {
      id: 9,
      image: Product9,
      name: "LANCÔME Trésor Midnight Rose",
      price: "600.000₫",
      cost: "750.000₫",
    },
  ]);

  const [carts, setCarts] = useState([
    {
      id: 1,
      image: Product1,
      name: "DIOR Miss Dior Eau de Parfum 2",
      price: "2.450.000₫",
      amount: 1,
      money: "2.450.000₫",
    },
    {
      id: 2,
      image: Product2,
      name: "Nước hoa CHANEL COCO MADEMOISELLE",
      price: "1.000.000₫",
      amount: 1,
      money: "1.000.000₫",
    },
    {
      id: 3,
      image: Product3,
      name: "BOBBI BROWN Beach Fragrance",
      price: "450.000₫",
      amount: 1,
      money: "450.000₫",
    },
  ]);

  const [gift, setGift] = useState([
    {
      id: 1,
      name: "Combo gói quà 1",
      img: combo1,
      content: "Gồm 1 hộp quà + 1 dây ruy băng nơ",
      price: 40000,
    },
    {
      id: 2,
      name: "Combo gói quà 2",
      img: combo2,
      content: "Gồm 1 hộp quà + 1 dây ruy băng nơ + 1 túi giấy",
      price: 60000,
    },
    {
      id: 3,
      name: "Combo gói quà 3",
      img: combo3,
      content: "Gồm 1 hộp quà + 1 dây ruy băng nơ + 1 túi giấy + 1 dây đèn led",
      price: 100000,
    },
  ]);

  const [customer, setCustomer] = useState({
    id: 1,
    name: "Lê Nguyễn",
    type: "Thành viên đồng",
    phone: "0834200776",
    point: "100 điểm",
  });

  //Tìm kiếm sản phẩm----------------------------------------------------------------
  function showListProduct() {
    document.getElementById("listProduct").style.display = "block";
    var searchInput = document.querySelector(
      ".group__find__product__payment input"
    );
    searchInput.addEventListener("input", function (e) {
      let txtSearch = e.target.value.trim();
      let listProductDOM = document.querySelectorAll(
        ".wrapper__product__payment"
      );
      listProductDOM.forEach((item) => {
        if (item.innerText.toLowerCase().includes(txtSearch)) {
          item.classList.remove("hide");
        } else {
          item.classList.add("hide");
        }
      });
    });
  }

  // Số lượng sản phẩm--------------------------------------------------------------
  const [number, setNumber] = useState(1);
  const handleAdd = () => {
    setNumber(number + 1);
  };

  const handleMinus = () => {
    number === 1 ? setNumber(1) : setNumber(number - 1);
  };

  //Chọn sản phẩm--------------------------------------------------------------------
  const [valueFind, setValueFind] = useState();
  function ChooseProduct(id) {
    console.log("Mã sản phẩm nè", id);
    document.getElementById("listProduct").style.display = "none";
    setValueFind(products[id - 1].name);
  }

  //Thêm sản phẩm vào giỏ tạm -----------------------------------------------------
  function AddProduct() {
    console.log("Tên sản phẩm nè: ", valueFind);
    console.log("Số lượng sản phẩm nè: ", number);
  }

  //Xoá khỏi giỏ tạm---------------------------------------------------------------------
  function DeletedProduct(id) {
    alert("Mã sản phẩm nè: " + id);
  }

  //Thêm thành viên---------------------------------------------------------------
  function AddMember() {
    document.getElementById("curtain__payment").style.display = "block";
    document.getElementById("add__member__payment").style.display = "block";
  }
  function CloseFormAddMember() {
    document.getElementById("curtain__payment").style.display = "none";
    document.getElementById("add__member__payment").style.display = "none";
  }

  //Thêm dịch vụ----------------------------------------------------------------------------
  function AddServiceGift() {
    document.getElementById("curtain__payment").style.display = "block";
    document.getElementById("add__gift__service__payment").style.display =
      "block";
  }
  function CloseFormAddServiceGift() {
    document.getElementById("curtain__payment").style.display = "none";
    document.getElementById("add__gift__service__payment").style.display =
      "none";
  }

  // Áp dụng dịch vụ ------------------------------------------------
  const [valueService, setValueService] = useState();
  function ApplyService() {
    console.log("Mã dịch vụ nè: ", valueService);
    console.log("Tên dịch vụ nè: ", gift[valueService - 1].name);
    console.log("Phí dịch vụ nè: ", gift[valueService - 1].price);
    document.getElementById("curtain__payment").style.display = "none";
    document.getElementById("add__gift__service__payment").style.display =
      "none";
  }

  //Kiểm tra thông tin khách hàng-----------------------------------
  const [valuePhone, setValuePhone] = useState();

  function seeInfoCustomer() {
    alert("Kiểm tra số điện thoại này có tồn tại không: " + valuePhone);
    document.getElementById("curtain__payment").style.display = "block";
    document.getElementById(
      "see__customer__information__payment"
    ).style.display = "block";
  }
  function CloseInfoCustomer() {
    document.getElementById("curtain__payment").style.display = "none";
    document.getElementById(
      "see__customer__information__payment"
    ).style.display = "none";
  }

  // Áp dụng giảm giá ----------------------------------------------
  function ApplyDiscount() {
    alert("Áp dụng giảm giá");
    document.getElementById("curtain__payment").style.display = "none";
    document.getElementById(
      "see__customer__information__payment"
    ).style.display = "none";
  }

  // Kết ca
  function EndOfShift() {
    alert("Xuất thông tin bán hàng trong ca");
  }

  // Thanh toán
  function PaymentInvoice() {
    alert("Xuất hoá đơn thanh toán");
  }

  return (
    <div className="container__payment__cashier">
      <div className="row-jcsb header__payment">
        <p>True Life xin chào Tên Người Dùng</p>
        <Link to="/Cashier">
          <img src={iconHome} alt="" />
        </Link>
      </div>
      <div className="content__payment row-jcsb">
        <div className="group__choose__payment">
          <div className="find__product__payment">
            <div className="group__find__product__payment row-jcsb">
              <p>Mã sản phẩm:</p>
              <input
                className="input__find__product"
                placeholder="Nhập thông tin sản phẩm..."
                onClick={() => showListProduct()}
                value={valueFind}
              />
              <p>Số lượng:</p>
              <div>
                <button
                  onClick={() => handleMinus()}
                  className="button btnPrev"
                >
                  -
                </button>
                <input className="input input__number" value={number} />
                <button onClick={() => handleAdd()} className="button btnNext">
                  +
                </button>
              </div>

              <button className="button " onClick={() => AddProduct()}>
                Thêm sản phẩm
              </button>
              {/* <div className="wrapper__scan">
                <img src={iconScan} alt="" />
              </div> */}
            </div>
            <div id="listProduct" className="list__product__payment">
              {products.map((e) => (
                <>
                  <div
                    className="row-jcsb wrapper__product__payment"
                    onClick={() => ChooseProduct(e.id)}
                  >
                    <img src={e.image} alt="" />
                    <div className="info__product__payment">
                      <p className="name__product__payment">{e.name}</p>
                      <p className="price__product__payment">{e.price}</p>
                    </div>
                  </div>
                  <br />
                </>
              ))}
            </div>
            <br />
            <div className="wrapper__list__product">
              <div className="table__payment">
                <table>
                  <tr>
                    <th className="numerical__order__table__listProduct">
                      STT
                    </th>
                    <th>Ảnh</th>
                    <th>Tên sản phẩm</th>
                    <th className="amount__table__listProduct">Đơn giá</th>
                    <th className="amount__table__listProduct">Số lượng</th>
                    <th className="amount__table__listProduct">Tổng tiền</th>
                    <th className="numerical__order__table__listProduct">
                      Xoá
                    </th>
                  </tr>
                  {carts.map((e) => (
                    <>
                      <tr>
                        <td className="numerical__order__table__listProduct">
                          {e.id}
                        </td>
                        <td>
                          <img
                            className="img__product__payment"
                            src={e.image}
                            alt=""
                          />
                        </td>
                        <td>{e.name}</td>
                        <td className="amount__table__listProduct">
                          {e.price}
                        </td>
                        <td className="amount__table__listProduct">
                          {e.amount}
                        </td>
                        <td className="amount__table__listProduct">
                          {e.money}
                        </td>
                        <td className="numerical__order__table__listProduct">
                          <i
                            class="fa fa-trash"
                            onClick={() => DeletedProduct(e.id)}
                          />
                        </td>
                      </tr>
                      <br />
                    </>
                  ))}
                </table>
              </div>
            </div>
          </div>
          <div className="choose__info__payment">
            <button onClick={() => AddMember()}>Đăng ký thành viên</button>
            <button onClick={() => AddServiceGift()}>Dịch vụ gói quà</button>
            <button onClick={() => EndOfShift()}>Kết ca</button>
          </div>
        </div>
        <div className="group__bill__payment">
          <div className="customer__lookup row-jcsb">
            <img src={iconCustomer} alt="" />
            <input
              placeholder="Nhập số điện thoại khách hàng"
              onChange={(e) => setValuePhone(e.target.value)}
            />
            <button
              className="button__cashier"
              onClick={() => seeInfoCustomer()}
            >
              Kiểm tra
            </button>
          </div>
          <hr />
          <div className="table__cashier">
            <table>
              <tr>
                <td className="title__cashier">Số lượng sản phẩm</td>
                <td>:</td>
                <td className="price__cashier">0</td>
              </tr>
              <tr>
                <td className="title__cashier">Tổng tiền</td>
                <td>:</td>
                <td className="price__cashier">0</td>
              </tr>
              <tr>
                <td className="title__cashier">Giảm giá</td>
                <td>:</td>
                <td className="price__cashier">0</td>
              </tr>
              <tr>
                <td className="title__cashier">Phí dịch vụ</td>
                <td>:</td>
                <td className="price__cashier">0</td>
              </tr>
              <tr>
                <td className="title__cashier">Thành tiền</td>
                <td>:</td>
                <td className="price__cashier">0</td>
              </tr>
              <tr>
                <td className="title__cashier">Điểm tích luỹ</td>
                <td>:</td>
                <td className="price__cashier">0</td>
              </tr>
            </table>
          </div>
          <hr />
          <div className="table__cashier">
            <table>
              <tr>
                <td className="title__cashier">Khách cần trả</td>
                <td>:</td>
                <td className="price__cashier">0</td>
              </tr>
              <tr>
                <td className="title__cashier">Khách thanh toán</td>
                <td>:</td>
                <td className="row-jcsb">
                  <div className="group__btn__payment">
                    <img src={iconPayment} alt="" />
                  </div>
                  <input type="text" className="input__price__client" />
                </td>
              </tr>
            </table>
          </div>
          <hr />
          <div className="table__cashier">
            <table>
              <tr>
                <td className="title__cashier">Tiền thừa trả khách</td>
                <td>:</td>
                <td className="price__cashier">0</td>
              </tr>
            </table>
          </div>
          <button
            className="button__cashier btn__payment"
            onClick={() => PaymentInvoice()}
          >
            Thanh toán
          </button>
          <br />
          <br />
          <button className="button__cashier btn__payment">Huỷ</button>
          <br />
          <br />
          <img className="payment__img" src={Payment} alt="" />
        </div>
      </div>
      <div id="curtain__payment" className="curtain"></div>
      <div id="add__member__payment" className="wrapper__signUp__member">
        <img src={iconClose} alt="" onClick={() => CloseFormAddMember()} />
        <p>ĐĂNG KÝ THÀNH VIÊN</p>
        <br />
        <input placeholder="Nhập tên khách hàng..." />
        <input placeholder="Nhập số điện thoại..." />
        <input placeholder="Nhập mật khẩu..." />
        <input placeholder="Nhập lại mật khẩu..." />
        <br />
        <p id="error__message__payment">Thông báo lỗi nè</p>
        <br />
        <button>Đăng ký</button>
      </div>
      <div
        id="add__gift__service__payment"
        className="wrapper__gift__service__payment"
      >
        <p>Chọn combo gói quà</p>
        <hr />
        {gift.map((e) => (
          <>
            <div className="row-jcsb group__info__service__payment">
              <img src={e.img} alt="" />
              <div className="info__service__payment">
                <p className="title__name__service__payment">{e.name}</p>
                <p className="title__des__service__payment">{e.content}</p>
                <p className="title__price__service__payment">{e.price}</p>
              </div>
              <div className="container__customRadio">
                <label className="radio">
                  <input
                    type="radio"
                    name="service"
                    value={e.id}
                    onChange={(e) => setValueService(e.target.value)}
                  />
                  <span></span>
                </label>
              </div>
            </div>
            <hr />
          </>
        ))}
        <div className="group__btn__wrpper__gift__service__payment">
          <button className="button" onClick={() => ApplyService()}>
            Thêm dịch vụ
          </button>
          <button className="button" onClick={() => CloseFormAddServiceGift()}>
            Huỷ
          </button>
        </div>
      </div>
      <div
        id="see__customer__information__payment"
        className="wrapper__customer__information__payment"
      >
        <img src={iconClose} alt="" onClick={() => CloseInfoCustomer()} />
        <p>Thông tin khách hàng</p>
        <div className="table__cashier">
          <table>
            <tr>
              <td class="title__cashier">Họ và tên</td>
              <td>: &nbsp;</td>
              <td class="title__cashier">{customer.name}</td>
            </tr>
            <tr>
              <td class="title__cashier">Loại thành viên</td>
              <td>: &nbsp;</td>
              <td class="title__cashier">{customer.type}</td>
            </tr>
            <tr>
              <td class="title__cashier">Số điện thoại</td>
              <td>: &nbsp;</td>
              <td class="title__cashier">{customer.phone}</td>
            </tr>
            <tr>
              <td class="title__cashier">Tổng điểm tích luỹ</td>
              <td>: &nbsp;</td>
              <td class="title__cashier">{customer.point}</td>
            </tr>
          </table>
        </div>
        <br />
        <div className="group__btn__customer__information">
          <button className="button" onClick={() => ApplyDiscount()}>
            Áp dụng khuyến mãi
          </button>
        </div>
      </div>
    </div>
  );
}
