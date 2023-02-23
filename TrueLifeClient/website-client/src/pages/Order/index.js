import React, { useEffect, useState } from "react";
import "./style.css";
import Header from "../../components/Header/index";
import Title from "../../components/Title/index";
import ListProducts from "../../components/ListProducts/index";
import Footer from "../../components/Footer/index";
import Menu from "../../components/Menu/index";
import swal from "sweetalert";

import combo1 from "../../assets/images/combo1.png";
import combo2 from "../../assets/images/combo2.png";
import combo3 from "../../assets/images/combo3.png";

import Product1 from "../../assets/images/product1.webp";
import Product2 from "../../assets/images/product2.webp";
import Product3 from "../../assets/images/product3.webp";
import Product4 from "../../assets/images/product4.webp";
import axios from "axios";
import IconDropdownGrey from "../../assets/images/dropdownGrey.svg";

export default function Index() {
  function formatCash(value) {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);
  }
  const [pay1, setPay1] = useState(true);
  const [pay2, setPay2] = useState(true);
  const [checked, setChecked] = useState();
  const [chooseGift, setChooseGift] = useState(true);
  const [idGift, setIdGift] = useState();
  const [service, setService] = useState(0);
  const [discountCode, setDiscountCode] = useState(0);
  const [loading, setLoading] = useState(false);

  const [isActiveListAddress, setIsActiveListAddress] = useState(false);
  const [selectedListAddress, setSelectedListAddress] = useState();
  const listAddress = [
    {
      id: 1,
      address: "36/21A Trần Tấn, Tân Sơn Nhì, Tân Phú, Hồ Chí Minh",
    },
    {
      id: 2,
      address: "140 Lê Trọng Tấn, Tây Thạnh, Tân Phú, Hồ Chí Minh",
    },
    {
      id: 3,
      address: "Ấp Lung Chim, Xã Định Thành, Huyện Đông Hải, Tỉnh Bạc Liêu",
    },
  ];

  function dropdownListAddressClick() {
    setIsActiveListAddress(!isActiveListAddress);
    document.getElementById("border__dropdown__ListAddress").style.border =
      "1px solid #FA748F";
  }

  const [idAddress, setIdAddress] = useState();
  function dropdownItemListAddressClick(id) {
    setSelectedListAddress(
      addressUser.find((item) => item.addressDeliveryId === id).address +
        ", " +
        addressUser.find((item) => item.addressDeliveryId === id).districtName +
        ", " +
        addressUser.find((item) => item.addressDeliveryId === id).provinceName
    );
    setIsActiveListAddress(false);
    document.getElementById("border__dropdown__ListAddress").style.border =
      "1px solid #D9D9D9";
    setIdAddress(id);
  }

  const userId = JSON.parse(localStorage.getItem("Auth:user")).userId;
  const [addressUser, setAddressUser] = useState();

  useEffect(() => {
    onGetProductCart({ userId });
    onGetAddressUser({ userId });
    onGetSever();
  }, []);

  const onGetAddressUser = async ({ userId, ...body }) => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        "http://171.244.57.150:8081/api/AddressDeliveryUser/ListInfoAddressDeliveryUser",
        body,
        { params: { id: userId } }
      );
      setAddressUser(data.data);
    } catch (error) {
      console.log("error: ", error);
    } finally {
      setLoading(false);
    }
  };
  console.log(addressUser);
  const onGetProductCart = async ({
    userId,
    page = 1,
    limit = 25,
    ...body
  }) => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        "http://171.244.57.150:8081/api/Data/ListCartByUser",
        body,
        { params: { usreId: userId, page, limit } }
      );
      setProducts(data.data.listData);
    } catch (error) {
      console.log("error: ", error);
    } finally {
      setLoading(false);
    }
  };

  const [isPay, setIsPay] = useState(false);
  const [serverId, setServerId] = useState();
  async function handleOrder() {
    if (pay1 === false && pay2 === false) {
      swal({
        text: "Vui lòng chọn 1 phương thức duy nhất!",
        icon: "warning",
      });
    }
    if (pay1 === true && pay2 === true) {
      swal({
        text: "Vui lòng chọn phương thức thanh toán!",
        icon: "warning",
      });
    }
    if (idAddress === undefined) {
      swal({
        text: "Vui lòng chọn địa chỉ nhận hàng!",
        icon: "warning",
      });
    } else {
      if (pay1 === false && pay2 === true) {
        setIsPay(false);
        // alert("Đã chọn phương thức thanh toán khi nhận hàng");
      }
      if (pay1 === true && pay2 === false) {
        // alert("Đã chọn phương thức thanh toán qua thẻ");
        setIsPay(true);
      }
      if (idGift === undefined) {
        setServerId(null);
      }
      console.log("userId:", userId);
      console.log("total:", total);
      console.log("serverId:", idGift);
      console.log("addressDeliveryId:", idAddress);
      console.log("isPay", isPay);
      console.log("listCart", products);

      try {
        setLoading(true);
        const { data } = await axios.post(
          "http://171.244.57.150:8081/api/Data/AddOrderAsync",
          {
            userId: userId,
            total: Number(total),
            serverId: Number(idGift),
            addressDeliveryId: Number(idAddress),
            isPay: isPay,
            listCart: products,
          }
        );
        if (data.retCode !== 0) {
          swal({
            text: "Đặt hàng thất bại, vui lòng kiểm tra lại và thử lại sau!",
            icon: "warning",
          });
          return;
        }
        swal({
          text: "Dặt hàng thành công!",
          icon: "success",
        });
        window.location.reload();
      } catch (error) {
        console.log("error rui: ", error);
      } finally {
        setLoading(false);
      }
    }
  }

  function handleDiscountCode() {
    alert("mã giảm giá nè: " + discountCode);
  }

  function handleClickGift(id) {
    // alert("mã combo:" + id);
    setIdGift(id);
  }

  function handleChooseServiceGift() {
    if (chooseGift === false) {
      document.getElementById("wrapper__service__gift").style.display = "block";
      setChecked(false);
      setService(0);
    }
    if (chooseGift === true) {
      document.getElementById("wrapper__service__gift").style.display = "none";
      setChecked();
    }
  }

  const handleCheckedPay = (data) => {
    if (data === "pay1") {
      if (pay1 === true) {
        console.log(data);
      }
      setPay1(!pay1);
    }
    if (data === "pay2") {
      if (pay2 === true) {
        console.log(data);
      }
      setPay2(!pay2);
    }
  };

  const handleChooseService = (data) => {
    if (data === "chooseGift") {
      if (chooseGift === true) {
        console.log(data);
      }
      setChooseGift(!chooseGift);
    }
  };

  const infoUser = {
    id: 1,
    name: "Tên người dùng",
    sdt: "0123456789",
    address: "140 Lê Trọng Tấn - Tây Thạnh - Tân Phú - TP. Hồ Chí Minh",
  };

  const [products, setProducts] = useState([]);

  const [gift, setGift] = useState([
    // {
    //   id: 1,
    //   name: "Combo gói quà 1",
    //   img: combo1,
    //   content: "Gồm 1 hộp quà + 1 dây ruy băng nơ",
    //   price: 40000,
    // },
    // {
    //   id: 2,
    //   name: "Combo gói quà 2",
    //   img: combo2,
    //   content: "Gồm 1 hộp quà + 1 dây ruy băng nơ + 1 túi giấy",
    //   price: 60000,
    // },
    // {
    //   id: 3,
    //   name: "Combo gói quà 3",
    //   img: combo3,
    //   content: "Gồm 1 hộp quà + 1 dây ruy băng nơ + 1 túi giấy + 1 dây đèn led",
    //   price: 100000,
    // },
  ]);

  const onGetSever = async () => {
    try {
      const { data } = await axios.get(
        "http://171.244.57.150:8081/api/Data/ShowListSeverAsync"
      );
      setGift(data.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  var amount = products.map((e) => e.quantity);
  var money = products.map((e) => e.total);

  function sumArray(mang) {
    let sum = 0;
    let i = 0;
    while (i < mang.length) {
      sum += mang[i];
      i++;
    }
    return sum;
  }

  const sumAmount = sumArray(amount);
  const sumMoney = sumArray(money);

  const total = sumMoney + Number(service);

  return (
    <div>
      <Menu type="login" />
      <Header
        title="Thông tin giao hàng"
        desBlack="Trang chủ "
        desPink=" Thông tin giao hàng"
      />
      <div className="container__order">
        <Title type="pages" title="Thông tin giao hàng" />
        <div className="content__order">
          <div className="content__invoices">
            <div className="info__products">
              <p>Danh sách sản phẩm</p>
              <hr />
              <div className="title__list__products">
                <div className="title__image">
                  <p>Ảnh sản phẩm</p>
                </div>
                <div className="title__name">
                  <p>Tên sản phẩm</p>
                </div>
                <div className="title__price">
                  <p>Đơn giá</p>
                </div>
                <div className="title__number">
                  <p>Số lượng</p>
                </div>
                <div className="title__price">
                  <p>Thành tiền</p>
                </div>
              </div>
            </div>
            <hr />
            {products.map((e) => (
              <ListProducts
                type="order"
                image={e.avatar}
                name={e.productName}
                price={e.productPrice}
                id={e.cartId}
                amount={e.quantity}
                money={e.total}
              />
            ))}
            <br />
            <div className="info__address">
              <p>Địa chỉ nhận hàng</p>
              {/* <table>
                <tr>
                  <td>Tên</td>
                  <td> : {infoUser.name}</td>
                </tr>
                <tr>
                  <td>Số điện thoại</td>
                  <td> : {infoUser.sdt}</td>
                </tr>
                <tr>
                  <td>Địa chỉ</td>
                  <td>: {infoUser.address}</td>
                </tr>
              </table> */}
              {/* <button>Thay đổi địa chỉ</button> */}
              <div className="input__choose__address__order">
                <div className="dropdown">
                  <div
                    id="border__dropdown__ListAddress"
                    className="dropdown__btn"
                    onClick={() => dropdownListAddressClick()}
                  >
                    <input
                      type="text"
                      value={selectedListAddress}
                      placeholder="Chọn địa chỉ nhận hàng..."
                      readOnly
                    />
                    <img src={IconDropdownGrey} alt="" />
                  </div>
                  {isActiveListAddress && (
                    <div className="dropdown__content">
                      {addressUser.map((option) => (
                        <div
                          onClick={() => {
                            dropdownItemListAddressClick(
                              option.addressDeliveryId
                            );
                          }}
                          className="dropdown__item"
                        >
                          {option.address +
                            `, ` +
                            option.districtName +
                            `, ` +
                            option.provinceName}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              {/* <button>Thêm địa chỉ mới</button> */}
            </div>
          </div>
          <div className="info__invoices">
            <p>Thông tin đơn hàng</p>
            <hr />
            <div className="options__invoices">
              <p>Chọn phương thức thanh toán:</p>
              <div className="container__customCheckbox">
                <input
                  type="checkbox"
                  value={pay1}
                  onChange={() => handleCheckedPay("pay1")}
                  id="pay1"
                />
                <label for="pay1">Thanh toán khi nhận hàng</label>
              </div>
              <div className="container__customCheckbox">
                <input
                  type="checkbox"
                  value={pay2}
                  onChange={() => handleCheckedPay("pay2")}
                  id="pay2"
                />
                <label for="pay2">Thanh toán qua thẻ tín dụng</label>
              </div>

              <p>
                <div className="container__customCheckbox">
                  <input
                    type="checkbox"
                    value={chooseGift}
                    onChange={() => handleChooseService("chooseGift")}
                    onClick={() => handleChooseServiceGift()}
                    id="chooseGift"
                  />
                  <label for="chooseGift">Chọn dịch vụ quà tặng:</label>
                </div>
              </p>
              <div className="service__gift">
                <div id="wrapper__service__gift"></div>
              </div>
              {gift.map((e) => (
                <div>
                  <div className="container__customRadio">
                    <label className="radio">
                      {e.severName}
                      <input
                        checked={checked}
                        type="radio"
                        value={e.prize}
                        name="gift"
                        onChange={(e) => setService(e.target.value)}
                        onClick={() => handleClickGift(e.severId)}
                      />
                      <span></span>
                    </label>
                  </div>

                  <div className="group__gift">
                    <div className="image__gift">
                      <img src={e.image} alt="" />
                    </div>
                    <div className="des__gift">
                      <p>{e.describe}</p>
                      <span>{formatCash(e.prize)}</span>
                    </div>
                  </div>
                </div>
              ))}
              <p>Mã giảm giá:</p>
              <div className="group__discount">
                <input
                  placeholder="Nhập mã..."
                  onChange={(e) => setDiscountCode(e.target.value)}
                />
                <button onClick={() => handleDiscountCode()}>Áp dụng</button>
              </div>

              <table>
                <tr>
                  <td>Số lượng</td>
                  <td>:</td>
                  <td className="value">
                    <p>{sumAmount}</p>
                  </td>
                </tr>
                <tr>
                  <td>Tạm tính</td>
                  <td>:</td>
                  <td className="value">
                    <p>{formatCash(sumMoney)}</p>
                  </td>
                </tr>
                <tr>
                  <td>Phí dịch vụ</td>
                  <td>:</td>
                  <td className="value">
                    <p>{formatCash(service)}</p>
                  </td>
                </tr>
                <tr>
                  <td>Giảm</td>
                  <td>:</td>
                  <td className="value">
                    <p>0đ</p>
                  </td>
                </tr>
                <tr>
                  <td>Thành tiền</td>
                  <td>:</td>
                  <td className="value">
                    <p>
                      <span>{formatCash(total)}</span>
                    </p>
                  </td>
                </tr>
              </table>
              <button onClick={() => handleOrder()}>ĐẶT HÀNG</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
