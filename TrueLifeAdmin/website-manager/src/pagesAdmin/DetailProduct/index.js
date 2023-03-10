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

  // Th??ng tin s???n ph???m t???ng ?????t nh???p --------------------------------------------------------
  const [importLot, setImportLot] = useState([
    {
      id: 1,
      listProduct: [
        {
          id: 1,
          priceImport: "190000",
          priceReturn: "200000",
          nature: "H????ng ????o - 5ml",
          amount: 100,
        },
        {
          id: 2,
          priceImport: "200000",
          priceReturn: "210000",
          nature: "H????ng hoa h???ng - 5ml",
          amount: 100,
        },
        {
          id: 3,
          priceImport: "210000",
          priceReturn: "220000",
          nature: "H????ng hoa nh??i - 5ml",
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
          nature: "H????ng ????o - 5ml",
          amount: 100,
        },
        {
          id: 2,
          priceImport: "220000",
          priceReturn: "230000",
          nature: "H????ng hoa h???ng - 5ml",
          amount: 100,
        },
        {
          id: 3,
          priceImport: "230000",
          priceReturn: "240000",
          nature: "H????ng hoa nh??i - 5ml",
          amount: 100,
        },
      ],
      dateImport: "yy/hh/mmmm",
      dateStart: "yy/hh/mmmm",
      dateEnd: "yy/hh/mmmm",
    },
  ]);

  // Th??ng tin chi ti???t s???n ph???m -------------------------------------------------------------
  const [detailProduct, setDetailProduct] = useState({
    id: 1,
    nameProduct: "N?????c Hoa Miss Dior Eau De Parfum",
    typeProduct: "N?????c Hoa",
    nameTrademark: "Dior",
    typeNature: "M??i - Dung t??ch",
    listNature: [
      {
        id: 1,
        nameNature: "H????ng ????o - 5ml",
        priceImport: "200000",
        priceReturn: "210000",
      },
      {
        id: 2,
        nameNature: "H????ng hoa h???ng - 5ml",
        priceImport: "210000",
        priceReturn: "220000",
      },
      {
        id: 3,
        nameNature: "H????ng hoa nh??i - 5ml",
        priceImport: "220000",
        priceReturn: "230000",
      },
    ],
    des: "Miss Dior Eau De Parfum t???a h????ng ra t???ng b?????c t???ng b?????c m???t. L???p h????ng ?????u l?????t nh??? s??? quy???n r?? tinh t??? c???a h????ng th??m t????i m??t t??? tr??i c??y, h????ng th??m t??? nh??m c??y cam chanh r???i t???i l???p h????ng th??m hoa c??? n??? r???, sau ???? ?????n s??? sang tr???ng qu?? ph??i c???a ho???c h????ng, tr?????c khi k???t th??c b???ng m??i h????ng c???a x??? h????ng, ????y l?? d???u v???t cu???i c??ng ?????ng l???i trong k?? ???c c???a ng?????i d??ng.V???i thi???t k??? nh??? nh??ng, thanh tho??t nh??ng v?? v??ng sang tr???ng h??nh h???p ch??? nh???t b???ng th???y tinh trong su???t ????? l??? r?? ph???n dung d???ch n?????c hoa m??u v??ng g???. V???i n???p chai trong su???t v?? m???t d???i ruy b??ng kim lo???i, mang ?????n m???t ch??t quy???n r?? v?? c?? t??nh, ??i k??m v???i m??i h????ng tuy???t di???u n?????c hoa n??? Miss Dior x???ng ????ng l?? l??? n?????c hoa ????ng gi?? h??ng ?????u, d??nh cho nh???ng ph??? n??? thanh l???ch v?? s??nh ??i???u.",
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

  // S???a th??ng tin chi ti???t s???n ph???m ---------------------------------------------------------
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

  // Hu??? s???a th??ng tin chi ti???t s???n ph???m ---------------------------------------------------------
  function CancelDetailProduct() {
    setValueDisplay(true);
    document
      .querySelectorAll(".value__input__update__priceBuy")
      .forEach((input) => (input.value = ""));
  }

  // L??u th??ng tin v???a c???p nh???t ---------------------------------------------------------------
  const [valueDes, setValueDes] = useState();
  function SaveDetailProduct() {
    var n = detailProduct.listImg.length;
    if (n === 1) {
      if (valueDes === undefined && image1 === valueImg1) {
        alert("Vui l??ng thay ?????i ??t nh???t 1 gi?? tr???");
      } else {
        console.log(
          "M?? t??? v???a m???i c???p nh???t: ",
          valueDes === undefined ? detailProduct.des : valueDes
        );
        console.log("Link ???nh m???i: ", image1);
      }
    }
    if (n === 2) {
      if (
        valueDes === undefined &&
        image1 === valueImg1 &&
        image2 === valueImg2
      ) {
        alert("Vui l??ng thay ?????i ??t nh???t 1 gi?? tr???");
      } else {
        console.log(
          "M?? t???: ",
          valueDes === undefined ? detailProduct.des : valueDes
        );
        console.log("Link ???nh 1: ", image1);
        console.log("Link ???nh 2: ", image2);
      }
    }
    if (n === 3) {
      if (
        valueDes === undefined &&
        image1 === valueImg1 &&
        image2 === valueImg2 &&
        image3 === valueImg3
      ) {
        alert("Vui l??ng thay ?????i ??t nh???t 1 gi?? tr???");
      } else {
        console.log(
          "M?? t???: ",
          valueDes === undefined ? detailProduct.des : valueDes
        );
        console.log("Link ???nh 1: ", image1);
        console.log("Link ???nh 2: ", image2);
        console.log("Link ???nh 3: ", image3);
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
        alert("Vui l??ng thay ?????i ??t nh???t 1 gi?? tr???");
      } else {
        console.log(
          "M?? t???: ",
          valueDes === undefined ? detailProduct.des : valueDes
        );
        console.log("Link ???nh 1: ", image1);
        console.log("Link ???nh 2: ", image2);
        console.log("Link ???nh 3: ", image3);
        console.log("Link ???nh 4: ", image4);
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
        alert("Vui l??ng thay ?????i ??t nh???t 1 gi?? tr???");
      } else {
        console.log(
          "M?? t???: ",
          valueDes === undefined ? detailProduct.des : valueDes
        );
        console.log("Link ???nh 1: ", image1);
        console.log("Link ???nh 2: ", image2);
        console.log("Link ???nh 3: ", image3);
        console.log("Link ???nh 4: ", image4);
        console.log("Link ???nh 5: ", image5);
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
        alert("Vui l??ng thay ?????i ??t nh???t 1 gi?? tr???");
      } else {
        console.log(
          "M?? t???: ",
          valueDes === undefined ? detailProduct.des : valueDes
        );
        console.log("Link ???nh 1: ", image1);
        console.log("Link ???nh 2: ", image2);
        console.log("Link ???nh 3: ", image3);
        console.log("Link ???nh 4: ", image4);
        console.log("Link ???nh 5: ", image5);
        console.log("Link ???nh 6: ", image6);
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
        alert("Vui l??ng thay ?????i ??t nh???t 1 gi?? tr???");
      } else {
        console.log(
          "M?? t???: ",
          valueDes === undefined ? detailProduct.des : valueDes
        );
        console.log("Link ???nh 1: ", image1);
        console.log("Link ???nh 2: ", image2);
        console.log("Link ???nh 3: ", image3);
        console.log("Link ???nh 4: ", image4);
        console.log("Link ???nh 5: ", image5);
        console.log("Link ???nh 6: ", image6);
        console.log("Link ???nh 7: ", image7);
      }
    }
    setValueDisplay(true);
  }

  //N??t S???a gi?? s???n ph???m theo t???ng t??nh ch???t c???a s???n ph???m --------------------------------------------
  const [updatePrice, setUpdatePrice] = useState(true);
  const [valueNameProduct, setValueNameProduct] = useState();
  const [valuePriceImport, setValuePriceImport] = useState();
  const [valuePriceBuy, setValuePriceBuy] = useState();
  function UpdatePrice(id) {
    setUpdatePrice(false);
    setValueNameProduct(detailProduct.nameProduct);
  }

  // Combobox t??nh ch???t ---------------------------------------------------------------------------
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

  // Ki???m tra gi?? tr??? nh???p ------------------------------------------------------------------------
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

  // N??t c???p nh???t gi?? s???n ph???m theo t???ng t??nh ch???t c???a s???n ph???m -------------------------------------
  const [updatePriceImport, setUpdatePriceImport] = useState();
  const [updatePriceBuy, setUpdatePriceBuy] = useState();

  function SavePrice() {
    if (selectedNature === undefined) {
      alert("Vui l??ng ch???n lo???i t??nh ch???t ????? ti???n h??nh c???p nh???t gi??");
    } else if (
      updatePriceImport === undefined &&
      updatePriceBuy === undefined
    ) {
      alert("Vui l??ng thay ?????i ??t nh???t m???t gi?? tr???");
    } else {
      setUpdatePrice(true);
      console.log("M?? t??nh ch???t: ", idNature);
      console.log("T??n t??nh ch???t: ", selectedNature);
      console.log(
        "Gi?? nh???p: ",
        updatePriceImport === undefined ? valuePriceImport : updatePriceImport
      );
      console.log(
        "Gi?? b??n: ",
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

  // N??t hu??? c???p nh???t gi??
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
            <p>Chi ti???t s???n ph???m</p>
          </div>
          <div className="box col">
            <p>
              Th??ng tin chi ti???t s???n ph???m: <hr />
            </p>
            <div className="row-jcsb group__info__detail__product">
              <img src={Product1} alt="" />
              <table>
                <tr>
                  <td className="title__info__detail__product">T??n s???n ph???m</td>
                  <td>:</td>
                  <td>{detailProduct.nameProduct}</td>
                </tr>
                <tr>
                  <td className="title__info__detail__product">M?? s???n ph???m</td>
                  <td>:</td>
                  <td>SP000{detailProduct.id}</td>
                </tr>
                <tr>
                  <td className="title__info__detail__product">
                    Lo???i s???n ph???m
                  </td>
                  <td>:</td>
                  <td>{detailProduct.typeProduct}</td>
                </tr>
                <tr>
                  <td className="title__info__detail__product">
                    T??n th????ng hi???u
                  </td>
                  <td>:</td>
                  <td>{detailProduct.nameTrademark}</td>
                </tr>
                <tr>
                  <td className="title__info__detail__product">
                    Lo???i t??nh ch???t:
                  </td>
                  <td>:</td>
                  <td>{detailProduct.typeNature}</td>
                </tr>
                <tr>
                  <td className="title__info__detail__product">T??nh ch???t:</td>
                  <td>:</td>
                  <td>
                    {detailProduct.listNature.map((e) => e.nameNature + ", ")}
                  </td>
                </tr>
                <tr>
                  <td className="title__info__detail__product">Gi?? b??n:</td>
                  <td>:</td>
                  <td>
                    {detailProduct.listNature.map((e) => e.priceReturn + "??, ")}
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
              M?? t??? : {detailProduct.des}
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
            <p>???nh kh??c:</p>
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
                  Ch???nh s???a
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
                  L??u th??ng tin
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
                  Hu???
                </button>
              </div>
            </div>
          </div>
          <div className="box">
            <p>
              Th??ng tin gi?? s???n ph???m: <hr />
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
                    <p>T??n s???n ph???m:</p>
                    <input
                      className="input "
                      readOnly
                      placeholder="T??n s???n ph???m"
                      value={valueNameProduct}
                    />
                  </div>
                  <div className="cbb__nature__productDeatil">
                    <p>T??nh ch???t:</p>
                    <div className="dropdown">
                      <div
                        id="border__dropdown__Nature"
                        className="dropdown__btn"
                        onClick={() => dropdownNatureClick()}
                      >
                        <input
                          type="text"
                          value={selectedNature}
                          placeholder="Ch???n t??nh ch???t..."
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
                    <p>Gi?? nh???p:</p>
                    <input
                      className="input value__input__save__price"
                      placeholder={valuePriceImport}
                      onChange={(e) => setUpdatePriceImport(e.target.value)}
                      onInput={() => checkInputPriceImport()}
                    />
                  </div>
                  <div className="input__price__productDetail">
                    <p>Gi?? b??n:</p>
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
                    L??u thay ?????i
                  </button>
                  <button className="button" onClick={() => CancelSavePrice()}>
                    Hu???
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
                <p>*Vui l??ng nh???p ????ng m???nh gi?? ti???n t??? hi???n h??nh*</p>
              </div>
            </div>
            <br />
            <div class="table">
              <table>
                <tr>
                  <th>T??n s???n ph???m</th>
                  <th className="nature__detailProduct">T??nh ch???t</th>
                  <th className="amout__detailProduct">Gi?? nh???p</th>
                  <th className="amout__detailProduct">Gi?? b??n</th>
                  <th>C???p nh???t gi??</th>
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
              Th??ng tin l?? h??ng nh???p: <hr />
            </p>
            <br />
            <div class="table">
              <table>
                <tr>
                  <th className="code__detailProduct">M??</th>
                  <th className="date__detailProduct">Ng??y nh???p</th>
                  <th className="date__detailProduct">Ng??y s???n xu???t</th>
                  <th className="date__detailProduct">Ng??y h???t h???n</th>
                  <th className="nature__detailProduct">T??nh ch???t</th>
                  <th className="amout__detailProduct">Gi?? nh???p</th>
                  <th className="amout__detailProduct">Gi?? b??n</th>
                  <th className="amout__detailProduct">S??? l?????ng</th>
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
                        <tr className="tr__child">{i.priceImport}??</tr>
                      ))}
                    </td>
                    <td className="amout__detailProduct">
                      {e.listProduct.map((i) => (
                        <tr className="tr__child">{i.priceReturn}??</tr>
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
