import React, { useState } from "react";
import "./style.css";
import Menu from "../../components/MenuAdmin/index";
import Header from "../../components/Header/index";
import iconProduct from "../../assets/images/icon-product.svg";
import FolderIcon from "../../assets/images/icon-addImg.svg";
import CloseIcon from "../../assets/images/CloseIcon.svg";
import Product1 from "../../assets/images/product1.webp";
import Product2 from "../../assets/images/product2.webp";
import Product3 from "../../assets/images/product3.webp";
import Product4 from "../../assets/images/product4.webp";
import Product5 from "../../assets/images/product5.webp";
import Product6 from "../../assets/images/product6.webp";
import Product7 from "../../assets/images/product7.webp";
import Product8 from "../../assets/images/product8.webp";
import IconDropdownGrey from "../../assets/images/dropdownGrey.svg";
import { Link } from "react-router-dom";

export default function Index() {
  const [valueDisplay, setValueDisplay] = useState(true);

  //Img1 ----------------------------------------------------
  const [image1, setImage1] = useState(null);
  const [isUploaded1, setIsUploaded1] = useState(false);
  const [typeFile1, setTypeFile1] = useState("");
  function handleImageChangeImg1(e) {
    if (e.target.files && e.target.files[0]) {
      setTypeFile1(e.target.files[0].type);
      let reader = new FileReader();

      reader.onload = function (e) {
        setImage1(e.target.result);
        setIsUploaded1(true);
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  }

  //img2  -------------------------------------------------------------
  const [image2, setImage2] = useState(null);
  const [isUploaded2, setIsUploaded2] = useState(false);
  const [typeFile2, setTypeFile2] = useState("");
  function handleImageChangeImg2(e) {
    if (e.target.files && e.target.files[0]) {
      setTypeFile2(e.target.files[0].type);
      let reader = new FileReader();

      reader.onload = function (e) {
        setImage2(e.target.result);
        setIsUploaded2(true);
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  }

  //Img3  -------------------------------------------------------------
  const [image3, setImage3] = useState(null);
  const [isUploaded3, setIsUploaded3] = useState(false);
  const [typeFile3, setTypeFile3] = useState("");
  function handleImageChange3(e) {
    if (e.target.files && e.target.files[0]) {
      setTypeFile3(e.target.files[0].type);
      let reader = new FileReader();

      reader.onload = function (e) {
        setImage3(e.target.result);
        setIsUploaded3(true);
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  }

  //Img4  -------------------------------------------------------------
  const [image4, setImage4] = useState(null);
  const [isUploaded4, setIsUploaded4] = useState(false);
  const [typeFile4, setTypeFile4] = useState("");
  function handleImageChangeimg4(e) {
    if (e.target.files && e.target.files[0]) {
      setTypeFile4(e.target.files[0].type);
      let reader = new FileReader();

      reader.onload = function (e) {
        setImage4(e.target.result);
        setIsUploaded4(true);
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  }

  //Img5  -------------------------------------------------------------
  const [image5, setImage5] = useState(null);
  const [isUploaded5, setIsUploaded5] = useState(false);
  const [typeFile5, setTypeFile5] = useState("");
  function handleImageChangeimg5(e) {
    if (e.target.files && e.target.files[0]) {
      setTypeFile5(e.target.files[0].type);
      let reader = new FileReader();

      reader.onload = function (e) {
        setImage5(e.target.result);
        setIsUploaded5(true);
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  }

  //Img6  -------------------------------------------------------------
  const [image6, setImage6] = useState(null);
  const [isUploaded6, setIsUploaded6] = useState(false);
  const [typeFile6, setTypeFile6] = useState("");
  function handleImageChangeimg6(e) {
    if (e.target.files && e.target.files[0]) {
      setTypeFile6(e.target.files[0].type);
      let reader = new FileReader();

      reader.onload = function (e) {
        setImage6(e.target.result);
        setIsUploaded6(true);
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  }

  //Img7  -------------------------------------------------------------
  const [image7, setImage7] = useState(null);
  const [isUploaded7, setIsUploaded7] = useState(false);
  const [typeFile7, setTypeFile7] = useState("");
  function handleImageChangeimg7(e) {
    if (e.target.files && e.target.files[0]) {
      setTypeFile7(e.target.files[0].type);
      let reader = new FileReader();

      reader.onload = function (e) {
        setImage7(e.target.result);
        setIsUploaded7(true);
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  }

  // Thông tin sản phẩm từng đợt nhập --------------------------------------------------------
  const [importLot, setImportLot] = useState([
    {
      id: 1,
      listProduct: [
        {
          id: 1,
          priceImport: "190000",
          priceReturn: "200000",
          nature: "Hương đào - 5ml",
          amount: 100,
        },
        {
          id: 2,
          priceImport: "200000",
          priceReturn: "210000",
          nature: "Hương hoa hồng - 5ml",
          amount: 100,
        },
        {
          id: 3,
          priceImport: "210000",
          priceReturn: "220000",
          nature: "Hương hoa nhài - 5ml",
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
          priceImport: "200000",
          priceReturn: "210000",
          nature: "Hương đào - 5ml",
          amount: 100,
        },
        {
          id: 2,
          priceImport: "220000",
          priceReturn: "230000",
          nature: "Hương hoa hồng - 5ml",
          amount: 100,
        },
        {
          id: 3,
          priceImport: "230000",
          priceReturn: "240000",
          nature: "Hương hoa nhài - 5ml",
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
    listNature: [
      {
        id: 1,
        nameNature: "Hương đào - 5ml",
        priceImport: "200000",
        priceReturn: "210000",
      },
      {
        id: 2,
        nameNature: "Hương hoa hồng - 5ml",
        priceImport: "210000",
        priceReturn: "220000",
      },
      {
        id: 3,
        nameNature: "Hương hoa nhài - 5ml",
        priceImport: "220000",
        priceReturn: "230000",
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

  // Sửa thông tin chi tiết sản phẩm ---------------------------------------------------------
  const [valueImg1, setValueImg1] = useState();
  const [valueImg2, setValueImg2] = useState();
  const [valueImg3, setValueImg3] = useState();
  const [valueImg4, setValueImg4] = useState();
  const [valueImg5, setValueImg5] = useState();
  const [valueImg6, setValueImg6] = useState();
  const [valueImg7, setValueImg7] = useState();

  function UpdateDetailProduct() {
    setValueDisplay(false);
    var n = detailProduct.listImg.length;
    if (n === 1) {
      setIsUploaded1(true);
      setImage1(detailProduct.listImg[0].img);
      setValueImg1(detailProduct.listImg[0].img);
    }
    if (n === 2) {
      setIsUploaded1(true);
      setImage1(detailProduct.listImg[0].img);
      setValueImg1(detailProduct.listImg[0].img);

      setIsUploaded2(true);
      setImage2(detailProduct.listImg[1].img);
      setValueImg2(detailProduct.listImg[1].img);
    }
    if (n === 3) {
      setIsUploaded1(true);
      setImage1(detailProduct.listImg[0].img);
      setValueImg1(detailProduct.listImg[0].img);

      setIsUploaded2(true);
      setImage2(detailProduct.listImg[1].img);
      setValueImg2(detailProduct.listImg[1].img);

      setIsUploaded3(true);
      setImage3(detailProduct.listImg[2].img);
      setValueImg3(detailProduct.listImg[2].img);
    }
    if (n === 4) {
      setIsUploaded1(true);
      setImage1(detailProduct.listImg[0].img);
      setValueImg1(detailProduct.listImg[0].img);

      setIsUploaded2(true);
      setImage2(detailProduct.listImg[1].img);
      setValueImg2(detailProduct.listImg[1].img);

      setIsUploaded3(true);
      setImage3(detailProduct.listImg[2].img);
      setValueImg3(detailProduct.listImg[2].img);

      setIsUploaded4(true);
      setImage4(detailProduct.listImg[3].img);
      setValueImg4(detailProduct.listImg[3].img);
    }
    if (n === 5) {
      setIsUploaded1(true);
      setImage1(detailProduct.listImg[0].img);
      setValueImg1(detailProduct.listImg[0].img);

      setIsUploaded2(true);
      setImage2(detailProduct.listImg[1].img);
      setValueImg2(detailProduct.listImg[1].img);

      setIsUploaded3(true);
      setImage3(detailProduct.listImg[2].img);
      setValueImg3(detailProduct.listImg[2].img);

      setIsUploaded4(true);
      setImage4(detailProduct.listImg[3].img);
      setValueImg4(detailProduct.listImg[3].img);

      setIsUploaded5(true);
      setImage5(detailProduct.listImg[4].img);
      setValueImg5(detailProduct.listImg[4].img);
    }
    if (n === 6) {
      setIsUploaded1(true);
      setImage1(detailProduct.listImg[0].img);
      setValueImg1(detailProduct.listImg[0].img);

      setIsUploaded2(true);
      setImage2(detailProduct.listImg[1].img);
      setValueImg2(detailProduct.listImg[1].img);

      setIsUploaded3(true);
      setImage3(detailProduct.listImg[2].img);
      setValueImg3(detailProduct.listImg[2].img);

      setIsUploaded4(true);
      setImage4(detailProduct.listImg[3].img);
      setValueImg4(detailProduct.listImg[3].img);

      setIsUploaded5(true);
      setImage5(detailProduct.listImg[4].img);
      setValueImg5(detailProduct.listImg[4].img);

      setIsUploaded6(true);
      setImage6(detailProduct.listImg[5].img);
      setValueImg6(detailProduct.listImg[5].img);
    }
    if (n === 7) {
      setIsUploaded1(true);
      setImage1(detailProduct.listImg[0].img);
      setValueImg1(detailProduct.listImg[0].img);

      setIsUploaded2(true);
      setImage2(detailProduct.listImg[1].img);
      setValueImg2(detailProduct.listImg[1].img);

      setIsUploaded3(true);
      setImage3(detailProduct.listImg[2].img);
      setValueImg3(detailProduct.listImg[2].img);

      setIsUploaded4(true);
      setImage4(detailProduct.listImg[3].img);
      setValueImg4(detailProduct.listImg[3].img);

      setIsUploaded5(true);
      setImage5(detailProduct.listImg[4].img);
      setValueImg5(detailProduct.listImg[4].img);

      setIsUploaded6(true);
      setImage6(detailProduct.listImg[5].img);
      setValueImg6(detailProduct.listImg[5].img);

      setIsUploaded7(true);
      setImage7(detailProduct.listImg[6].img);
      setValueImg7(detailProduct.listImg[6].img);
    }
  }

  // Huỷ sửa thông tin chi tiết sản phẩm ---------------------------------------------------------
  function CancelDetailProduct() {
    setValueDisplay(true);
    document
      .querySelectorAll(".value__input__update__priceBuy")
      .forEach((input) => (input.value = ""));
  }

  // Lưu thông tin vừa cập nhật ---------------------------------------------------------------
  const [valueDes, setValueDes] = useState();
  function SaveDetailProduct() {
    var n = detailProduct.listImg.length;
    if (n === 1) {
      if (valueDes === undefined && image1 === valueImg1) {
        alert("Vui lòng thay đổi ít nhất 1 giá trị");
      } else {
        console.log(
          "Mô tả vừa mới cập nhật: ",
          valueDes === undefined ? detailProduct.des : valueDes
        );
        console.log("Link ảnh mới: ", image1);
      }
    }
    if (n === 2) {
      if (
        valueDes === undefined &&
        image1 === valueImg1 &&
        image2 === valueImg2
      ) {
        alert("Vui lòng thay đổi ít nhất 1 giá trị");
      } else {
        console.log(
          "Mô tả: ",
          valueDes === undefined ? detailProduct.des : valueDes
        );
        console.log("Link ảnh 1: ", image1);
        console.log("Link ảnh 2: ", image2);
      }
    }
    if (n === 3) {
      if (
        valueDes === undefined &&
        image1 === valueImg1 &&
        image2 === valueImg2 &&
        image3 === valueImg3
      ) {
        alert("Vui lòng thay đổi ít nhất 1 giá trị");
      } else {
        console.log(
          "Mô tả: ",
          valueDes === undefined ? detailProduct.des : valueDes
        );
        console.log("Link ảnh 1: ", image1);
        console.log("Link ảnh 2: ", image2);
        console.log("Link ảnh 3: ", image3);
      }
    }
    if (n === 4) {
      if (
        valueDes === undefined &&
        image1 === valueImg1 &&
        image2 === valueImg2 &&
        image3 === valueImg3 &&
        image4 === valueImg4
      ) {
        alert("Vui lòng thay đổi ít nhất 1 giá trị");
      } else {
        console.log(
          "Mô tả: ",
          valueDes === undefined ? detailProduct.des : valueDes
        );
        console.log("Link ảnh 1: ", image1);
        console.log("Link ảnh 2: ", image2);
        console.log("Link ảnh 3: ", image3);
        console.log("Link ảnh 4: ", image4);
      }
    }
    if (n === 5) {
      if (
        valueDes === undefined &&
        image1 === valueImg1 &&
        image2 === valueImg2 &&
        image3 === valueImg3 &&
        image4 === valueImg4 &&
        image5 === valueImg5
      ) {
        alert("Vui lòng thay đổi ít nhất 1 giá trị");
      } else {
        console.log(
          "Mô tả: ",
          valueDes === undefined ? detailProduct.des : valueDes
        );
        console.log("Link ảnh 1: ", image1);
        console.log("Link ảnh 2: ", image2);
        console.log("Link ảnh 3: ", image3);
        console.log("Link ảnh 4: ", image4);
        console.log("Link ảnh 5: ", image5);
      }
    }
    if (n === 6) {
      if (
        valueDes === undefined &&
        image1 === valueImg1 &&
        image2 === valueImg2 &&
        image3 === valueImg3 &&
        image4 === valueImg4 &&
        image5 === valueImg5 &&
        image6 === valueImg6
      ) {
        alert("Vui lòng thay đổi ít nhất 1 giá trị");
      } else {
        console.log(
          "Mô tả: ",
          valueDes === undefined ? detailProduct.des : valueDes
        );
        console.log("Link ảnh 1: ", image1);
        console.log("Link ảnh 2: ", image2);
        console.log("Link ảnh 3: ", image3);
        console.log("Link ảnh 4: ", image4);
        console.log("Link ảnh 5: ", image5);
        console.log("Link ảnh 6: ", image6);
      }
    }
    if (n === 7) {
      if (
        valueDes === undefined &&
        image1 === valueImg1 &&
        image2 === valueImg2 &&
        image3 === valueImg3 &&
        image4 === valueImg4 &&
        image5 === valueImg5 &&
        image6 === valueImg6 &&
        image7 === valueImg7
      ) {
        alert("Vui lòng thay đổi ít nhất 1 giá trị");
      } else {
        console.log(
          "Mô tả: ",
          valueDes === undefined ? detailProduct.des : valueDes
        );
        console.log("Link ảnh 1: ", image1);
        console.log("Link ảnh 2: ", image2);
        console.log("Link ảnh 3: ", image3);
        console.log("Link ảnh 4: ", image4);
        console.log("Link ảnh 5: ", image5);
        console.log("Link ảnh 6: ", image6);
        console.log("Link ảnh 7: ", image7);
      }
    }
    setValueDisplay(true);
  }

  //Nút Sửa giá sản phẩm theo từng tính chất của sản phẩm --------------------------------------------
  const [updatePrice, setUpdatePrice] = useState(true);
  const [valueNameProduct, setValueNameProduct] = useState();
  const [valuePriceImport, setValuePriceImport] = useState();
  const [valuePriceBuy, setValuePriceBuy] = useState();
  function UpdatePrice(id) {
    setUpdatePrice(false);
    setValueNameProduct(detailProduct.nameProduct);
  }

  // Combobox tính chất ---------------------------------------------------------------------------
  const [isActiveNature, setIsActiveNature] = useState(false);
  const [selectedNature, setSelectedNature] = useState();
  const [idNature, setIdNature] = useState();

  function dropdownNatureClick() {
    setIsActiveNature(!isActiveNature);
    document.getElementById("border__dropdown__Nature").style.border =
      "1px solid #FA748F";
  }

  function dropdownItemNatureClick(id) {
    setIdNature(id);
    setSelectedNature(detailProduct.listNature[id - 1].nameNature);
    setIsActiveNature(false);
    document.getElementById("border__dropdown__Nature").style.border =
      "1px solid #D9D9D9";
    setValuePriceImport(detailProduct.listNature[id - 1].priceImport);
    setValuePriceBuy(detailProduct.listNature[id - 1].priceReturn);
  }

  // Kiểm tra giá trị nhập ------------------------------------------------------------------------
  const [erroPrice, setErroPrice] = useState(true);

  function checkInputPriceImport() {
    if (isNaN(updatePriceImport) || updatePriceImport.length < 3) {
      setErroPrice(false);
    } else {
      setErroPrice(true);
    }
  }

  function checkInputPriceBuy() {
    if (isNaN(updatePriceBuy) || updatePriceBuy.length < 3) {
      setErroPrice(false);
    } else {
      setErroPrice(true);
    }
  }

  // Nút cập nhật giá sản phẩm theo từng tính chất của sản phẩm -------------------------------------
  const [updatePriceImport, setUpdatePriceImport] = useState();
  const [updatePriceBuy, setUpdatePriceBuy] = useState();

  function SavePrice() {
    if (selectedNature === undefined) {
      alert("Vui lòng chọn loại tính chất để tiến hành cập nhật giá");
    } else if (
      updatePriceImport === undefined &&
      updatePriceBuy === undefined
    ) {
      alert("Vui lòng thay đổi ít nhất một giá trị");
    } else {
      setUpdatePrice(true);
      console.log("Mã tính chất: ", idNature);
      console.log("Tên tính chất: ", selectedNature);
      console.log(
        "Giá nhập: ",
        updatePriceImport === undefined ? valuePriceImport : updatePriceImport
      );
      console.log(
        "Giá bán: ",
        updatePriceBuy === undefined ? valuePriceBuy : updatePriceBuy
      );
      document
        .querySelectorAll(".value__input__save__price")
        .forEach((input) => (input.value = ""));
      setSelectedNature("");
      setValuePriceImport("");
      setValuePriceBuy("");
    }
  }

  // Nút huỷ cập nhật giá
  function CancelSavePrice() {
    setUpdatePrice(true);
    document
      .querySelectorAll(".value__input__save__price")
      .forEach((input) => (input.value = ""));
    setSelectedNature("");
    setValuePriceImport("");
    setValuePriceBuy("");
  }

  return (
    <div className="container">
      <div className="background">
        <Menu />
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
          <div className="box col">
            <p>
              Thông tin chi tiết sản phẩm: <hr />
            </p>
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
                    {detailProduct.listNature.map((e) => e.priceReturn + "đ, ")}
                  </td>
                </tr>
              </table>
            </div>
            <br />
            <div
              style={
                valueDisplay === false
                  ? { display: "none" }
                  : { display: "block" }
              }
              className="des__info__detail__product"
            >
              Mô tả : {detailProduct.des}
            </div>
            <textarea
              style={
                valueDisplay === true
                  ? { display: "none" }
                  : { display: "block" }
              }
              className="textarea input__des__product"
              placeholder={detailProduct.des}
              onChange={(e) => setValueDes(e.target.value)}
            ></textarea>
            <br />
            <p>Ảnh khác:</p>
            <div className="row-gap14 list__img__detailProduct">
              {detailProduct.listImg.map((e) => (
                <img
                  style={
                    valueDisplay === false
                      ? { display: "none" }
                      : { display: "block" }
                  }
                  src={e.img}
                  alt
                />
              ))}
            </div>
            <div className="row-jcsb">
              {/* IMG1--------------------------------------------- */}
              <div
                style={
                  valueDisplay === true
                    ? { display: "none" }
                    : { display: "block" }
                }
                className="Layout"
              >
                <div className="Container">
                  <div className="BoxUpload BoxUploadImage">
                    <div className="image-upload">
                      {!isUploaded1 ? (
                        <>
                          <label htmlFor="upload-input-img1">
                            <img
                              src={FolderIcon}
                              draggable={"false"}
                              alt="placeholder"
                              style={{ width: 50, height: 50 }}
                            />
                          </label>

                          <input
                            id="upload-input-img1"
                            type="file"
                            accept=".jpg,.jpeg,.gif,.png,.mov,.mp4"
                            onChange={handleImageChangeImg1}
                          />
                        </>
                      ) : (
                        <div className="ImagePreview ImagePreviewImg">
                          <img
                            className="close-icon"
                            src={CloseIcon}
                            alt="CloseIcon"
                            onClick={() => {
                              setIsUploaded1(false);
                              setImage1(null);
                            }}
                          />
                          <img
                            id="upload-image1"
                            src={image1}
                            draggable={false}
                            alt="uploaded-img"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* IMG2--------------------------------------------- */}
              <div
                style={
                  valueDisplay === true
                    ? { display: "none" }
                    : { display: "block" }
                }
                className="Layout"
              >
                <div className="Container">
                  <div className="BoxUpload BoxUploadImage">
                    <div className="image-upload">
                      {!isUploaded2 ? (
                        <>
                          <label htmlFor="upload-input-img2">
                            <img
                              src={FolderIcon}
                              draggable={"false"}
                              alt="placeholder"
                              style={{ width: 50, height: 50 }}
                            />
                          </label>

                          <input
                            id="upload-input-img2"
                            type="file"
                            accept=".jpg,.jpeg,.gif,.png,.mov,.mp4"
                            onChange={handleImageChangeImg2}
                          />
                        </>
                      ) : (
                        <div className="ImagePreview ImagePreviewImg">
                          <img
                            className="close-icon"
                            src={CloseIcon}
                            alt="CloseIcon"
                            onClick={() => {
                              setIsUploaded2(false);
                              setImage2(null);
                            }}
                          />
                          <img
                            id="upload-image2"
                            src={image2}
                            draggable={false}
                            alt="uploaded-img"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* IMG3--------------------------------------------- */}
              <div
                style={
                  valueDisplay === true
                    ? { display: "none" }
                    : { display: "block" }
                }
                className="Layout"
              >
                <div className="Container">
                  <div className="BoxUpload BoxUploadImage">
                    <div className="image-upload">
                      {!isUploaded3 ? (
                        <>
                          <label htmlFor="upload-input-3">
                            <img
                              src={FolderIcon}
                              draggable={"false"}
                              alt="placeholder"
                              style={{ width: 50, height: 50 }}
                            />
                          </label>

                          <input
                            id="upload-input-3"
                            type="file"
                            accept=".jpg,.jpeg,.gif,.png,.mov,.mp4"
                            onChange={handleImageChange3}
                          />
                        </>
                      ) : (
                        <div className="ImagePreview ImagePreviewImg">
                          <img
                            className="close-icon"
                            src={CloseIcon}
                            alt="CloseIcon"
                            onClick={() => {
                              setIsUploaded3(false);
                              setImage3(null);
                            }}
                          />
                          <img
                            id="upload-image3"
                            src={image3}
                            draggable={false}
                            alt="uploaded-img"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* IMG4--------------------------------------------- */}
              <div
                style={
                  valueDisplay === true
                    ? { display: "none" }
                    : { display: "block" }
                }
                className="Layout"
              >
                <div className="Container">
                  <div className="BoxUpload BoxUploadImage">
                    <div className="image-upload">
                      {!isUploaded4 ? (
                        <>
                          <label htmlFor="upload-input-img4">
                            <img
                              src={FolderIcon}
                              draggable={"false"}
                              alt="placeholder"
                              style={{ width: 50, height: 50 }}
                            />
                          </label>

                          <input
                            id="upload-input-img4"
                            type="file"
                            accept=".jpg,.jpeg,.gif,.png,.mov,.mp4"
                            onChange={handleImageChangeimg4}
                          />
                        </>
                      ) : (
                        <div className="ImagePreview ImagePreviewImg">
                          <img
                            className="close-icon"
                            src={CloseIcon}
                            alt="CloseIcon"
                            onClick={() => {
                              setIsUploaded4(false);
                              setImage4(null);
                            }}
                          />
                          <img
                            id="upload-image4"
                            src={image4}
                            draggable={false}
                            alt="uploaded-img"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* IMG5--------------------------------------------- */}
              <div
                style={
                  valueDisplay === true
                    ? { display: "none" }
                    : { display: "block" }
                }
                className="Layout"
              >
                <div className="Container">
                  <div className="BoxUpload BoxUploadImage">
                    <div className="image-upload">
                      {!isUploaded5 ? (
                        <>
                          <label htmlFor="upload-input-img5">
                            <img
                              src={FolderIcon}
                              draggable={"false"}
                              alt="placeholder"
                              style={{ width: 50, height: 50 }}
                            />
                          </label>

                          <input
                            id="upload-input-img5"
                            type="file"
                            accept=".jpg,.jpeg,.gif,.png,.mov,.mp4"
                            onChange={handleImageChangeimg5}
                          />
                        </>
                      ) : (
                        <div className="ImagePreview ImagePreviewImg">
                          <img
                            className="close-icon"
                            src={CloseIcon}
                            alt="CloseIcon"
                            onClick={() => {
                              setIsUploaded5(false);
                              setImage5(null);
                            }}
                          />
                          <img
                            id="upload-image5"
                            src={image5}
                            draggable={false}
                            alt="uploaded-img"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* IMG6--------------------------------------------- */}
              <div
                style={
                  valueDisplay === true
                    ? { display: "none" }
                    : { display: "block" }
                }
                className="Layout"
              >
                <div className="Container">
                  <div className="BoxUpload BoxUploadImage">
                    <div className="image-upload">
                      {!isUploaded6 ? (
                        <>
                          <label htmlFor="upload-input-img6">
                            <img
                              src={FolderIcon}
                              draggable={"false"}
                              alt="placeholder"
                              style={{ width: 50, height: 50 }}
                            />
                          </label>

                          <input
                            id="upload-input-img6"
                            type="file"
                            accept=".jpg,.jpeg,.gif,.png,.mov,.mp4"
                            onChange={handleImageChangeimg6}
                          />
                        </>
                      ) : (
                        <div className="ImagePreview ImagePreviewImg">
                          <img
                            className="close-icon"
                            src={CloseIcon}
                            alt="CloseIcon"
                            onClick={() => {
                              setIsUploaded6(false);
                              setImage6(null);
                            }}
                          />
                          <img
                            id="upload-image6"
                            src={image6}
                            draggable={false}
                            alt="uploaded-img"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* IMG7--------------------------------------------- */}
              <div
                style={
                  valueDisplay === true
                    ? { display: "none" }
                    : { display: "block" }
                }
                className="Layout"
              >
                <div className="Container">
                  <div className="BoxUpload BoxUploadImage">
                    <div className="image-upload">
                      {!isUploaded7 ? (
                        <>
                          <label htmlFor="upload-input-img7">
                            <img
                              src={FolderIcon}
                              draggable={"false"}
                              alt="placeholder"
                              style={{ width: 50, height: 50 }}
                            />
                          </label>

                          <input
                            id="upload-input-img7"
                            type="file"
                            accept=".jpg,.jpeg,.gif,.png,.mov,.mp4"
                            onChange={handleImageChangeimg7}
                          />
                        </>
                      ) : (
                        <div className="ImagePreview ImagePreviewImg">
                          <img
                            className="close-icon"
                            src={CloseIcon}
                            alt="CloseIcon"
                            onClick={() => {
                              setIsUploaded7(false);
                              setImage7(null);
                            }}
                          />
                          <img
                            id="upload-image7"
                            src={image7}
                            draggable={false}
                            alt="uploaded-img"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="row-jcsb">
              <div></div>
              <div className="row group__btn__info__detail__product">
                <button
                  style={
                    valueDisplay === false
                      ? { display: "none" }
                      : { display: "block" }
                  }
                  className="button"
                  onClick={() => UpdateDetailProduct()}
                >
                  Chỉnh sửa
                </button>
                <button
                  style={
                    valueDisplay === true
                      ? { display: "none" }
                      : { display: "block" }
                  }
                  className="button"
                  onClick={() => SaveDetailProduct()}
                >
                  Lưu thông tin
                </button>
                <button
                  style={
                    valueDisplay === true
                      ? { display: "none" }
                      : { display: "block" }
                  }
                  className="button"
                  onClick={() => CancelDetailProduct()}
                >
                  Huỷ
                </button>
              </div>
            </div>
          </div>
          <div className="box">
            <p>
              Thông tin giá sản phẩm: <hr />
            </p>
            <br
              style={
                updatePrice === true
                  ? { display: "none" }
                  : { display: "block" }
              }
            />
            <div
              style={
                updatePrice === true
                  ? { display: "none" }
                  : { display: "block" }
              }
            >
              <div className="row-jcsb">
                <div className="row-jcsb group__input__detailProduct">
                  <div className="input__name__productDetail">
                    <p>Tên sản phẩm:</p>
                    <input
                      className="input "
                      readOnly
                      placeholder="Tên sản phẩm"
                      value={valueNameProduct}
                    />
                  </div>
                  <div className="cbb__nature__productDeatil">
                    <p>Tính chất:</p>
                    <div className="dropdown">
                      <div
                        id="border__dropdown__Nature"
                        className="dropdown__btn"
                        onClick={() => dropdownNatureClick()}
                      >
                        <input
                          type="text"
                          value={selectedNature}
                          placeholder="Chọn tính chất..."
                          readOnly
                        />
                        <img src={IconDropdownGrey} alt="" />
                      </div>
                      {isActiveNature && (
                        <div className="dropdown__content">
                          {detailProduct.listNature.map((option) => (
                            <div
                              onClick={() => {
                                dropdownItemNatureClick(option.id);
                              }}
                              className="dropdown__item"
                            >
                              {option.nameNature}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="input__price__productDetail ">
                    <p>Giá nhập:</p>
                    <input
                      className="input value__input__save__price"
                      placeholder={valuePriceImport}
                      onChange={(e) => setUpdatePriceImport(e.target.value)}
                      onInput={() => checkInputPriceImport()}
                    />
                  </div>
                  <div className="input__price__productDetail">
                    <p>Giá bán:</p>
                    <input
                      className="input value__input__save__price"
                      placeholder={valuePriceBuy}
                      onChange={(e) => setUpdatePriceBuy(e.target.value)}
                      onInput={() => checkInputPriceBuy()}
                    />
                  </div>
                </div>
                <div className="row-jcsb group__btn__detailProduct">
                  <button className="button " onClick={() => SavePrice()}>
                    Lưu thay đổi
                  </button>
                  <button className="button" onClick={() => CancelSavePrice()}>
                    Huỷ
                  </button>
                </div>
              </div>
              <div
                className="groupError"
                style={
                  erroPrice === true
                    ? { display: "none" }
                    : { display: "block" }
                }
              >
                <p>*Vui lòng nhập đúng mệnh giá tiền tệ hiện hành*</p>
              </div>
            </div>
            <br />
            <div class="table">
              <table>
                <tr>
                  <th>Tên sản phẩm</th>
                  <th className="nature__detailProduct">Tính chất</th>
                  <th className="amout__detailProduct">Giá nhập</th>
                  <th className="amout__detailProduct">Giá bán</th>
                  <th>Cập nhật giá</th>
                </tr>
                <tr>
                  <td>{detailProduct.nameProduct}</td>
                  <td className="nature__detailProduct">
                    {detailProduct.listNature.map((i) => (
                      <tr className="tr__child">{i.nameNature}</tr>
                    ))}
                  </td>
                  <td className="amout__detailProduct">
                    {detailProduct.listNature.map((i) => (
                      <tr className="tr__child">{i.priceImport}</tr>
                    ))}
                  </td>
                  <td className="amout__detailProduct">
                    {detailProduct.listNature.map((i) => (
                      <tr className="tr__child">{i.priceReturn}</tr>
                    ))}
                  </td>
                  <td>
                    <i className="fa fa-pencil" onClick={() => UpdatePrice()} />
                  </td>
                </tr>
              </table>
              <hr />
            </div>
          </div>
          <div className="box">
            <p>
              Thông tin lô hàng nhập: <hr />
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
                        <tr className="tr__child">{i.priceImport}đ</tr>
                      ))}
                    </td>
                    <td className="amout__detailProduct">
                      {e.listProduct.map((i) => (
                        <tr className="tr__child">{i.priceReturn}đ</tr>
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
