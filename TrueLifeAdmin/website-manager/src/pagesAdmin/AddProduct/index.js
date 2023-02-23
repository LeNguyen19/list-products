import React, { useState } from "react";
import "./style.css";
import Menu from "../../components/MenuAdmin/index";
import Header from "../../components/Header/index";
import iconProduct from "../../assets/images/icon-product.svg";
import IconDropdownGrey from "../../assets/images/dropdownGrey.svg";
import FolderIcon from "../../assets/images/icon-addImg.svg";
import CloseIcon from "../../assets/images/CloseIcon.svg";
import iconClose from "../../assets/images/icon-close.svg";

import { Alert, Select } from "antd";

export default function Index() {
  const [nameTrademark, setNameTrademark] = useState();
  const [nameProduct, setNameProduct] = useState();
  const [desProduct, setDesProduct] = useState();
  const [isActiveTypeProduct, setIsActiveTypeProduct] = useState(false);
  const [selectedTypeProduct, setSelectedTypeProduct] = useState();
  const listTypeProduct = [
    {
      id: 1,
      nameType: "Son",
    },
    {
      id: 2,
      nameType: "Nước hoa",
    },
    {
      id: 3,
      nameType: "Sữa tắm",
    },
  ];
  function dropdownTypeProductClick() {
    setIsActiveTypeProduct(!isActiveTypeProduct);
    document.getElementById("border__dropdown__TypeProduct").style.border =
      "1px solid #FA748F";
  }
  function dropdownItemTypeProductClick(id) {
    setSelectedTypeProduct(listTypeProduct[id - 1].nameType);
    setIsActiveTypeProduct(false);
    document.getElementById("border__dropdown__TypeProduct").style.border =
      "1px solid #D9D9D9";
  }

  const [isActiveNature, setIsActiveNature] = useState(false);
  const [selectedNature, setSelectedNature] = useState();
  const listNature = [
    {
      id: 1,
      nameNature: "Màu sắc",
    },
    {
      id: 2,
      nameNature: "Mùi hương",
    },
    {
      id: 3,
      nameNature: "Dung tích",
    },
    {
      id: 4,
      nameNature: "Mùi hương - Dung tích",
    },
    {
      id: 5,
      nameNature: "Bình thường",
    },
  ];
  function dropdownNatureClick() {
    setIsActiveNature(!isActiveNature);
    document.getElementById("border__dropdown__Nature").style.border =
      "1px solid #FA748F";
  }

  function dropdownItemNatureClick(id) {
    setSelectedNature(listNature[id - 1].nameNature);
    setIsActiveNature(false);
    document.getElementById("border__dropdown__Nature").style.border =
      "1px solid #D9D9D9";
    if (id === 1) {
      document.getElementById("color__product").style.display = "block";
      document.getElementById("fragrant__product").style.display = "none";
      document.getElementById("capacity__product").style.display = "none";
      document.getElementById("input__color__product").style.display = "block";
      document.getElementById("input__fragrant__product").style.display =
        "none";
      document.getElementById("input__capacity__product").style.display =
        "none";

      document.getElementById("btn__add__color").style.display = "block";
      document.getElementById("btn__add__capacity").style.display = "none";
      document.getElementById("btn__add__fragrant").style.display = "none";
      document.getElementById(
        "input__fragrantAndCapacity__product"
      ).style.display = "none";
      document.getElementById("btn__add__capacityAndfragrant").style.display =
        "none";
      document.getElementById("save__nature__color").style.display = "block";
      document.getElementById("save__nature__none").style.display = "none";
      document.getElementById("save__nature__fragrant").style.display = "none";
      document.getElementById("save__nature__capacity").style.display = "none";
      document.getElementById("save__nature__fragrantAndColor").style.display =
        "none";
    }
    if (id === 2) {
      document.getElementById("fragrant__product").style.width = "83%";
      document.getElementById("color__product").style.display = "none";
      document.getElementById("fragrant__product").style.display = "block";
      document.getElementById("capacity__product").style.display = "none";
      document.getElementById("input__color__product").style.display = "none";
      document.getElementById("input__fragrant__product").style.display =
        "block";
      document.getElementById("input__capacity__product").style.display =
        "none";
      document.getElementById("btn__add__color").style.display = "none";
      document.getElementById("btn__add__capacity").style.display = "none";
      document.getElementById("btn__add__fragrant").style.display = "block";
      document.getElementById(
        "input__fragrantAndCapacity__product"
      ).style.display = "none";
      document.getElementById("btn__add__capacityAndfragrant").style.display =
        "none";
      document.getElementById("save__nature__color").style.display = "none";
      document.getElementById("save__nature__none").style.display = "none";
      document.getElementById("save__nature__fragrant").style.display = "block";
      document.getElementById("save__nature__capacity").style.display = "none";
      document.getElementById("save__nature__fragrantAndColor").style.display =
        "none";
    }
    if (id === 3) {
      document.getElementById("capacity__product").style.width = "83%";
      document.getElementById("capacity__product").style.display = "block";
      document.getElementById("color__product").style.display = "none";
      document.getElementById("fragrant__product").style.display = "none";
      document.getElementById("input__color__product").style.display = "none";
      document.getElementById("input__fragrant__product").style.display =
        "none";
      document.getElementById("input__capacity__product").style.display =
        "block";
      document.getElementById("btn__add__color").style.display = "none";
      document.getElementById("btn__add__capacity").style.display = "block";
      document.getElementById("btn__add__fragrant").style.display = "none";
      document.getElementById(
        "input__fragrantAndCapacity__product"
      ).style.display = "none";
      document.getElementById("btn__add__capacityAndfragrant").style.display =
        "none";
      document.getElementById("save__nature__color").style.display = "none";
      document.getElementById("save__nature__none").style.display = "none";
      document.getElementById("save__nature__fragrant").style.display = "none";
      document.getElementById("save__nature__capacity").style.display = "block";
      document.getElementById("save__nature__fragrantAndColor").style.display =
        "none";
    }
    if (id === 4) {
      document.getElementById("capacity__product").style.width = "40%";
      document.getElementById("fragrant__product").style.width = "40%";
      document.getElementById("capacity__product").style.display = "block";
      document.getElementById("color__product").style.display = "none";
      document.getElementById("fragrant__product").style.display = "block";

      document.getElementById("input__color__product").style.display = "none";
      document.getElementById("input__fragrant__product").style.display =
        "none";
      document.getElementById("input__capacity__product").style.display =
        "none";
      document.getElementById(
        "input__fragrantAndCapacity__product"
      ).style.display = "block";

      document.getElementById("btn__add__color").style.display = "none";
      document.getElementById("btn__add__capacity").style.display = "none";
      document.getElementById("btn__add__fragrant").style.display = "none";
      document.getElementById("btn__add__capacityAndfragrant").style.display =
        "block";

      document.getElementById("save__nature__color").style.display = "none";
      document.getElementById("save__nature__none").style.display = "none";
      document.getElementById("save__nature__fragrant").style.display = "none";
      document.getElementById("save__nature__capacity").style.display = "none";
      document.getElementById("save__nature__fragrantAndColor").style.display =
        "block";
    }
    if (id === 5) {
      document.getElementById("capacity__product").style.display = "none";
      document.getElementById("color__product").style.display = "none";
      document.getElementById("fragrant__product").style.display = "none";
      document.getElementById("input__color__product").style.display = "none";
      document.getElementById("input__fragrant__product").style.display =
        "none";
      document.getElementById("input__capacity__product").style.display =
        "none";
      document.getElementById("btn__add__color").style.display = "none";
      document.getElementById("btn__add__capacity").style.display = "none";
      document.getElementById("btn__add__fragrant").style.display = "none";
      document.getElementById(
        "input__fragrantAndCapacity__product"
      ).style.display = "none";
      document.getElementById("btn__add__capacityAndfragrant").style.display =
        "none";
      document.getElementById("save__nature__color").style.display = "none";
      document.getElementById("save__nature__none").style.display = "block";
      document.getElementById("save__nature__fragrant").style.display = "none";
      document.getElementById("save__nature__capacity").style.display = "none";
      document.getElementById("save__nature__fragrantAndColor").style.display =
        "none";
    }
  }
  //   Ảnh --------------------------------------------------------------------------
  const [imageAvt, setImageAvt] = useState();
  const [isUploadedAvt, setIsUploadedAvt] = useState(false);
  const [typeFileAvt, setTypeFileAvt] = useState("");
  const [linkImgOther, setLinkImgOther] = useState(null);
  const [listImg, setListImg] = useState();

  function handleImageChangeAvt(e) {
    if (e.target.files && e.target.files[0]) {
      setTypeFileAvt(e.target.files[0].type);
      let reader = new FileReader();

      reader.onload = function (e) {
        setImageAvt(e.target.result);
        setIsUploadedAvt(true);
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  }

  function addImgOther() {
    listImg === undefined
      ? setListImg(linkImgOther)
      : setListImg(listImg + `\n` + linkImgOther);
    document
      .querySelectorAll(".input__link__img__other")
      .forEach((input) => (input.value = ""));
  }

  function deletedLinkImg() {
    document
      .querySelectorAll(".input__link__img")
      .forEach((input) => (input.value = ""));
  }

  function deletedLinkImgOther() {
    document.getElementById("input__list__img__other").value = "";
  }

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

  //Chọn kiểu update ảnh-------------------------------------------------------------
  const [isActiveTypeImg, setIsActiveTypeImg] = useState(false);
  const [selectedTypeImg, setSelectedTypeImg] = useState();
  const [idTypeImg, setIdTypeImg] = useState(1);
  const listTypeImg = [
    {
      id: 1,
      typeImg: "Chọn file ảnh",
    },
    {
      id: 2,
      typeImg: "Chọn link ảnh",
    },
  ];
  function dropdownCityClick() {
    setIsActiveTypeImg(!isActiveTypeImg);
    document.getElementById("border__dropdown__typeImg").style.border =
      "1px solid #FA748F";
  }

  function dropdownItemCityClick(id) {
    setIdTypeImg(id);
    setSelectedTypeImg(listTypeImg[id - 1].typeImg);
    setIsActiveTypeImg(false);
    document.getElementById("border__dropdown__typeImg").style.border =
      "1px solid #D9D9D9";
    if (id === 1) {
      document.getElementById("group__choose__image__product").style.display =
        "block";
      document.getElementById(
        "group__choose__list__image__product"
      ).style.display = "none";
    }
    if (id === 2) {
      document.getElementById("group__choose__image__product").style.display =
        "none";
      document.getElementById(
        "group__choose__list__image__product"
      ).style.display = "block";
    }
  }
  //   Màu sắc ----------------------------------------------------------------------
  const [isActiveColorProduct, setIsActiveColorProduct] = useState(false);
  const [selectedColorProduct, setSelectedColorProduct] = useState();
  const [color, setColor] = useState();
  const [nameColor, setNameColor] = useState();
  const [listNameColor, setListNameColor] = useState();
  const [idColor, setIdColor] = useState();

  const listColorProduct = [
    {
      id: 1,
      nameColor: "Đỏ",
    },
    {
      id: 2,
      nameColor: "Hồng",
    },
    {
      id: 3,
      nameColor: "Cam",
    },
  ];

  function dropdownColorProductClick() {
    setIsActiveColorProduct(!isActiveColorProduct);
    document.getElementById("border__dropdown__colorProduct").style.border =
      "1px solid #FA748F";
  }

  function dropdownItemColorProductClick(id) {
    setSelectedColorProduct(listColorProduct[id - 1].nameColor);
    setIsActiveColorProduct(false);
    document.getElementById("border__dropdown__colorProduct").style.border =
      "1px solid #D9D9D9";
    setColor(id);
  }

  function addColor() {
    if (nameColor === undefined) {
      setNameColor(listColorProduct[color - 1].nameColor);
      setIdColor(listColorProduct[color - 1].id);
    } else {
      setNameColor(
        nameColor + " " + "-" + " " + listColorProduct[color - 1].nameColor
      );
      setIdColor(idColor + "" + listColorProduct[color - 1].id);
    }
    console.log(nameColor);
  }

  function saveInfoProductColor() {
    console.log(nameColor);
    console.log(idColor);
    var listIdColor = Array.from(idColor, function (index) {
      return Number(index);
    });

    if (idTypeImg === 2) {
      var listImgOther = listImg.split(`\n`);
      console.log("List link ảnh nè: ", listImgOther);
      console.log("Loại sản phẩm nè: ", selectedTypeProduct);
      console.log("Tên thương hiệu nè: ", nameTrademark);
      console.log("Tên sản phẩm nè: ", nameProduct);
      console.log("Mô tả sản phẩm nè: ", desProduct);
      console.log("List mã màu: ", listIdColor);
    }
    if (idTypeImg === 1) {
      console.log("link ảnh avt:", imageAvt);
      console.log("link ảnh 1:", image1);
      console.log("link ảnh 2:", image2);
      console.log("link ảnh 3:", image3);
      console.log("link ảnh 4:", image4);
      console.log("link ảnh 5:", image5);
      console.log("link ảnh 6:", image6);
      console.log("link ảnh 7:", image7);
      console.log("Loại sản phẩm nè: ", selectedTypeProduct);
      console.log("Tên thương hiệu nè: ", nameTrademark);
      console.log("Tên sản phẩm nè: ", nameProduct);
      console.log("Mô tả sản phẩm nè: ", desProduct);
      console.log("List mã màu: ", listIdColor);
    }
  }
  //   Mùi hương --------------------------------------------------------------------

  const [isActiveFragrant, setIsActiveFragrant] = useState(false);
  const [selectedFragrant, setSelectedFragrant] = useState();
  const [faragrant, setFaragrant] = useState();
  const [nameFaragrant, setNameFaragrant] = useState();
  const [idFaragrant, setIdFaragrant] = useState();

  const listFragrant = [
    {
      id: 1,
      nameFragrant: "Cam bergamot, Hương bưởi, Hương đào, Hương cam",
    },
    {
      id: 2,
      nameFragrant: "Hoa phong lữ, Hoa nhài, Hương vải, Hoa hồng",
    },
    {
      id: 3,
      nameFragrant: "Xạ hương, Hoắc hương, Hương vanilla, Cỏ hương bài",
    },
  ];

  function dropdownFragrantClick() {
    setIsActiveFragrant(!isActiveFragrant);
    document.getElementById("border__dropdown__fragrant").style.border =
      "1px solid #FA748F";
  }

  function dropdownItemFragrantClick(id) {
    setSelectedFragrant(listFragrant[id - 1].nameFragrant);
    setIsActiveFragrant(false);
    document.getElementById("border__dropdown__fragrant").style.border =
      "1px solid #D9D9D9";
    setFaragrant(id);
  }

  function addFaragrant() {
    if (nameFaragrant === undefined) {
      setNameFaragrant(listFragrant[faragrant - 1].nameFragrant);
      setIdFaragrant(listFragrant[faragrant - 1].id);
    } else {
      setNameFaragrant(
        nameFaragrant +
          " " +
          "-" +
          " " +
          listFragrant[faragrant - 1].nameFragrant
      );
      setIdFaragrant(idFaragrant + "" + listFragrant[faragrant - 1].id);
    }
    console.log(nameFaragrant);
  }

  function saveInfoProductFragrant() {
    console.log(nameFaragrant);
    console.log(idFaragrant);
    var listIdFaragrant = Array.from(idFaragrant, function (index) {
      return Number(index);
    });

    if (idTypeImg === 2) {
      var listImgOther = listImg.split(`\n`);
      console.log("List link ảnh nè: ", listImgOther);
      console.log("Loại sản phẩm nè: ", selectedTypeProduct);
      console.log("Tên thương hiệu nè: ", nameTrademark);
      console.log("Tên sản phẩm nè: ", nameProduct);
      console.log("Mô tả sản phẩm nè: ", desProduct);
      console.log("List mã mùi hương", listIdFaragrant);
    }
    if (idTypeImg === 1) {
      console.log("link ảnh avt:", imageAvt);
      console.log("link ảnh 1:", image1);
      console.log("link ảnh 2:", image2);
      console.log("link ảnh 3:", image3);
      console.log("link ảnh 4:", image4);
      console.log("link ảnh 5:", image5);
      console.log("link ảnh 6:", image6);
      console.log("link ảnh 7:", image7);
      console.log("Loại sản phẩm nè: ", selectedTypeProduct);
      console.log("Tên thương hiệu nè: ", nameTrademark);
      console.log("Tên sản phẩm nè: ", nameProduct);
      console.log("Mô tả sản phẩm nè: ", desProduct);
      console.log("List mã mùi hương", listIdFaragrant);
    }
  }

  //   Dung tích --------------------------------------------------------------------
  const [isActiveCapacity, setIsActiveCapacity] = useState(false);
  const [selectedCapacity, setSelectedCapacity] = useState();
  const [capacity, setCapacity] = useState();
  const [nameCapacity, setNameCapacity] = useState();
  const [idCapacity, setIdCapacity] = useState();
  const listCapacity = [
    {
      id: 1,
      nameCapacity: "5ml",
    },
    {
      id: 2,
      nameCapacity: "50ml",
    },
    {
      id: 3,
      nameCapacity: "500ml",
    },
  ];
  function dropdownCapacityClick() {
    setIsActiveCapacity(!isActiveCapacity);
    document.getElementById("border__dropdown__capacity").style.border =
      "1px solid #FA748F";
  }

  function dropdownItemCapacityClick(id) {
    setSelectedCapacity(listCapacity[id - 1].nameCapacity);
    setIsActiveCapacity(false);
    document.getElementById("border__dropdown__capacity").style.border =
      "1px solid #D9D9D9";
    setCapacity(id);
  }

  function addCapacity() {
    if (nameCapacity === undefined) {
      setNameCapacity(listCapacity[capacity - 1].nameCapacity);
      setIdCapacity(listCapacity[capacity - 1].id);
    } else {
      setNameCapacity(
        nameCapacity + " " + "-" + " " + listCapacity[capacity - 1].nameCapacity
      );
      setIdCapacity(idCapacity + "" + listCapacity[capacity - 1].id);
    }
    console.log(nameCapacity);
  }

  function saveInfoProductCapacity() {
    console.log(nameCapacity);
    console.log(idCapacity);
    var listIdCapacity = Array.from(idCapacity, function (index) {
      return Number(index);
    });
    if (idTypeImg === 2) {
      var listImgOther = listImg.split(`\n`);
      console.log("List link ảnh nè: ", listImgOther);
      console.log("Loại sản phẩm nè: ", selectedTypeProduct);
      console.log("Tên thương hiệu nè: ", nameTrademark);
      console.log("Tên sản phẩm nè: ", nameProduct);
      console.log("Mô tả sản phẩm nè: ", desProduct);
      console.log("List mã dung tích: ", listIdCapacity);
    }
    if (idTypeImg === 1) {
      console.log("link ảnh avt:", imageAvt);
      console.log("link ảnh 1:", image1);
      console.log("link ảnh 2:", image2);
      console.log("link ảnh 3:", image3);
      console.log("link ảnh 4:", image4);
      console.log("link ảnh 5:", image5);
      console.log("link ảnh 6:", image6);
      console.log("link ảnh 7:", image7);
      console.log("Loại sản phẩm nè: ", selectedTypeProduct);
      console.log("Tên thương hiệu nè: ", nameTrademark);
      console.log("Tên sản phẩm nè: ", nameProduct);
      console.log("Mô tả sản phẩm nè: ", desProduct);
      console.log("List mã dung tích: ", listIdCapacity);
    }
  }

  // Faragrant and color--------------------------------------------------------------------------------
  const [nameCapacityAndFaragrant, setNameCapacityAndFaragrant] = useState();
  const ObjID = [];
  const [click, setClick] = useState(1);
  function addCapacityAndfragrant() {
    if (nameFaragrant === undefined && nameCapacity === undefined) {
      setNameFaragrant(listFragrant[faragrant - 1].nameFragrant);
      setNameCapacity(listCapacity[capacity - 1].nameCapacity);
      setIdCapacity(listCapacity[capacity - 1].id);
      setIdFaragrant(listFragrant[faragrant - 1].id);
      setNameCapacityAndFaragrant(
        listFragrant[faragrant - 1].nameFragrant +
          "-" +
          listCapacity[capacity - 1].nameCapacity
      );
    } else {
      setNameCapacityAndFaragrant(
        nameCapacityAndFaragrant +
          `\n` +
          listFragrant[faragrant - 1].nameFragrant +
          "-" +
          listCapacity[capacity - 1].nameCapacity
      );
      setIdCapacity(idCapacity + "" + listCapacity[capacity - 1].id);
      setIdFaragrant(idFaragrant + "" + listFragrant[faragrant - 1].id);
      setClick(click + 1);
    }
    console.log(nameCapacityAndFaragrant);
  }

  function saveInfoProductFragrantAndColor() {
    console.log(nameCapacityAndFaragrant);

    var listIdCapacity = Array.from(idCapacity, function (index) {
      return Number(index);
    });
    console.log(listIdCapacity);

    var listIdFaragrant = Array.from(idFaragrant, function (index) {
      return Number(index);
    });
    console.log(listIdFaragrant);

    for (let i = 0; i < click; i++) {
      ObjID.push({
        idAroma: listIdFaragrant[i],
        idUnit: listIdCapacity[i],
      });
    }
    console.log(ObjID);

    if (idTypeImg === 2) {
      var listImgOther = listImg.split(`\n`);
      console.log("List link ảnh nè: ", listImgOther);
      console.log("Loại sản phẩm nè: ", selectedTypeProduct);
      console.log("Tên thương hiệu nè: ", nameTrademark);
      console.log("Tên sản phẩm nè: ", nameProduct);
      console.log("Mô tả sản phẩm nè: ", desProduct);
      console.log("List mã mùi hương: ", listIdFaragrant);
      console.log("List mã dung tích: ", listIdCapacity);
      console.log("List mã mùi hương - dung tích: ", ObjID);
    }
    if (idTypeImg === 1) {
      console.log("link ảnh avt:", imageAvt);
      console.log("link ảnh 1:", image1);
      console.log("link ảnh 2:", image2);
      console.log("link ảnh 3:", image3);
      console.log("link ảnh 4:", image4);
      console.log("link ảnh 5:", image5);
      console.log("link ảnh 6:", image6);
      console.log("link ảnh 7:", image7);
      console.log("Loại sản phẩm nè: ", selectedTypeProduct);
      console.log("Tên thương hiệu nè: ", nameTrademark);
      console.log("Tên sản phẩm nè: ", nameProduct);
      console.log("Mô tả sản phẩm nè: ", desProduct);
      console.log("List mã mùi hương: ", listIdFaragrant);
      console.log("List mã dung tích: ", listIdCapacity);
      console.log("List mã mùi hương - dung tích: ", ObjID);
    }
  }

  //Nature none --------------------------------------------------------------------------------

  function saveInfoProduct() {
    if (idTypeImg === 2) {
      var listImgOther = listImg.split(`\n`);
      console.log(listImgOther);
      console.log("Loại sản phẩm nè: ", selectedTypeProduct);
      console.log("Tên thương hiệu nè: ", nameTrademark);
      console.log("Tên sản phẩm nè: ", nameProduct);
      console.log("Mô tả sản phẩm nè: ", desProduct);
    }
    if (idTypeImg === 1) {
      console.log("link ảnh avt:", imageAvt);
      console.log("link ảnh 1:", image1);
      console.log("link ảnh 2:", image2);
      console.log("link ảnh 3:", image3);
      console.log("link ảnh 4:", image4);
      console.log("link ảnh 5:", image5);
      console.log("link ảnh 6:", image6);
      console.log("link ảnh 7:", image7);
      console.log("Loại sản phẩm nè: ", selectedTypeProduct);
      console.log("Tên thương hiệu nè: ", nameTrademark);
      console.log("Tên sản phẩm nè: ", nameProduct);
      console.log("Mô tả sản phẩm nè: ", desProduct);
    }
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
            <p>Thêm sản phẩm</p>
          </div>
          <div className="box">
            <p>
              Ảnh sản phẩm <hr />
            </p>
            <br />
            <div className="group__choose__type__img__product row-jcsb">
              <p>Chọn kiểu update:</p>
              <div className="group__cbb__choose__img__product">
                <div className="dropdown">
                  <div
                    id="border__dropdown__typeImg"
                    className="dropdown__btn"
                    onClick={() => dropdownCityClick()}
                  >
                    <input
                      type="text"
                      value={selectedTypeImg}
                      placeholder="Chọn file ảnh"
                      readOnly
                    />
                    <img src={IconDropdownGrey} alt="" />
                  </div>
                  {isActiveTypeImg && (
                    <div className="dropdown__content">
                      {listTypeImg.map((option) => (
                        <div
                          onClick={() => {
                            dropdownItemCityClick(option.id);
                          }}
                          className="dropdown__item"
                        >
                          {option.typeImg}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <br />
            <div id="group__choose__image__product">
              <div className="row-jcsb">
                <div className="img__avt__product">
                  <div className="Layout">
                    <div className="Container">
                      <div className="BoxUpload BoxUploadAvt">
                        <div className="image-upload">
                          {!isUploadedAvt ? (
                            <>
                              <label htmlFor="upload-input-avt">
                                <img
                                  src={FolderIcon}
                                  draggable={"false"}
                                  alt="placeholder"
                                  style={{ width: 100, height: 100 }}
                                />
                              </label>

                              <input
                                id="upload-input-avt"
                                type="file"
                                accept=".jpg,.jpeg,.gif,.png,.mov,.mp4"
                                onChange={handleImageChangeAvt}
                              />
                            </>
                          ) : (
                            <div className="ImagePreview">
                              <img
                                className="close-icon"
                                src={CloseIcon}
                                alt="CloseIcon"
                                onClick={() => {
                                  setIsUploadedAvt(false);
                                  setImageAvt(null);
                                }}
                              />
                              <img
                                id="uploaded-avt"
                                src={imageAvt}
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
                <div className="img__other__product">
                  <div className="list__img__product__addProduct">
                    {/* IMG1--------------------------------------------- */}
                    <div className="Layout">
                      <div className="Container">
                        <div className="BoxUpload BoxUploadImg">
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
                                  id="uploaded-image1"
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
                    <div className="Layout">
                      <div className="Container">
                        <div className="BoxUpload BoxUploadImg">
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
                                  id="uploaded-image2"
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
                    <div className="Layout">
                      <div className="Container">
                        <div className="BoxUpload BoxUploadImg">
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
                                  id="uploaded-image3"
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
                    <div className="Layout">
                      <div className="Container">
                        <div className="BoxUpload BoxUploadImg">
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
                                  id="uploaded-image4"
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
                    <div className="Layout">
                      <div className="Container">
                        <div className="BoxUpload BoxUploadImg">
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
                                  id="uploaded-image5"
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
                    <div className="Layout">
                      <div className="Container">
                        <div className="BoxUpload BoxUploadImg">
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
                                  id="uploaded-image6"
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
                    <div className="Layout">
                      <div className="Container">
                        <div className="BoxUpload BoxUploadImg">
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
                                  id="uploaded-image7"
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
                </div>
              </div>
            </div>
            <div id="group__choose__list__image__product">
              <div className="img__addProduct">
                <p>Ảnh bìa sản phẩm:</p>
                <input
                  className="input input__link__img"
                  placeholder="Nhập link ảnh..."
                />
                <img
                  src={iconClose}
                  alt=""
                  className="btn__close__avtProduct"
                  onClick={() => deletedLinkImg()}
                />
              </div>
              <br />
              <div className="imgOther__addProduct">
                <p> Thêm ảnh khác:</p>
                <input
                  className="input input__link__img__other"
                  placeholder="Nhập link ảnh..."
                  onChange={(e) => setLinkImgOther(e.target.value)}
                />
                <button
                  className="button btn__add__img"
                  onClick={() => addImgOther()}
                >
                  +
                </button>
                <br />
                <br />
                <textarea
                  id="input__list__img__other"
                  value={listImg}
                  readOnly
                />
                <img
                  src={iconClose}
                  alt=""
                  className="btn__close__avtProduct btn__close__listImg"
                  onClick={() => deletedLinkImgOther()}
                />
              </div>
            </div>
          </div>
          <div className="box">
            <p>
              Thông tin sản phẩm <hr />
            </p>
            <br />
            <div className="row-jcsb">
              <div className="group__combobox__addProduct">
                <div className="dropdown">
                  <div
                    id="border__dropdown__TypeProduct"
                    className="dropdown__btn"
                    onClick={() => dropdownTypeProductClick()}
                  >
                    <input
                      type="text"
                      value={selectedTypeProduct}
                      placeholder="Chọn loại sản phẩm..."
                      readOnly
                    />
                    <img src={IconDropdownGrey} alt="" />
                  </div>
                  {isActiveTypeProduct && (
                    <div className="dropdown__content">
                      {listTypeProduct.map((option) => (
                        <div
                          onClick={() => {
                            dropdownItemTypeProductClick(option.id);
                          }}
                          className="dropdown__item"
                        >
                          {option.nameType}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="group__input__addProduct">
                <input
                  className="input"
                  placeholder="Nhập tên thương hiệu..."
                  onChange={(e) => setNameTrademark(e.target.value)}
                />
              </div>
            </div>
            <br />
            <input
              className="input input__name__addProduct"
              placeholder="Nhập tên sản phẩm..."
              onChange={(e) => setNameProduct(e.target.value)}
            />
            <br />
            <br />
            <textarea
              className="input text__desProduct"
              placeholder="Nhập mô tả sản phẩm..."
              onChange={(e) => setDesProduct(e.target.value)}
            />
          </div>
          <div className="box">
            <p>
              Tính chất sản phẩm <hr />
            </p>
            <br />
            <div className="row-jcsb">
              <div className="group__combobox__addProduct">
                <div className="dropdown">
                  <div
                    id="border__dropdown__Nature"
                    className="dropdown__btn"
                    onClick={() => dropdownNatureClick()}
                  >
                    <input
                      type="text"
                      value={selectedNature}
                      placeholder="Chọn tính chất sản phẩm"
                      readOnly
                    />
                    <img src={IconDropdownGrey} alt="" />
                  </div>
                  {isActiveNature && (
                    <div className="dropdown__content">
                      {listNature.map((option) => (
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
              <div className="group__combobox__addProduct row-jcsb">
                <div id="color__product">
                  <div className="dropdown">
                    <div
                      id="border__dropdown__colorProduct"
                      className="dropdown__btn"
                      onClick={() => dropdownColorProductClick()}
                    >
                      <input
                        type="text"
                        value={selectedColorProduct}
                        placeholder="Chọn màu sắc..."
                        readOnly
                      />
                      <img src={IconDropdownGrey} alt="" />
                    </div>
                    {isActiveColorProduct && (
                      <div className="dropdown__content">
                        {listColorProduct.map((option) => (
                          <div
                            onClick={() => {
                              dropdownItemColorProductClick(option.id);
                            }}
                            className="dropdown__item"
                          >
                            {option.nameColor}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  {/* <>
                    <Select
                      mode="multiple"
                      allowClear
                      style={{
                        width: "100%",
                      }}
                      placeholder="Please select"
                      onChange={handleChange}
                      options={options}
                    />
                  </> */}
                </div>
                <button
                  id="btn__add__color"
                  className="button"
                  onClick={() => addColor()}
                >
                  Thêm
                </button>
                <div id="fragrant__product">
                  <div className="dropdown">
                    <div
                      id="border__dropdown__fragrant"
                      className="dropdown__btn"
                      onClick={() => dropdownFragrantClick()}
                    >
                      <input
                        type="text"
                        value={selectedFragrant}
                        placeholder="Chọn mùi hương..."
                        readOnly
                      />
                      <img src={IconDropdownGrey} alt="" />
                    </div>
                    {isActiveFragrant && (
                      <div className="dropdown__content">
                        {listFragrant.map((option) => (
                          <div
                            onClick={() => {
                              dropdownItemFragrantClick(option.id);
                            }}
                            className="dropdown__item"
                          >
                            {option.nameFragrant}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <button
                  id="btn__add__fragrant"
                  className="button"
                  onClick={() => addFaragrant()}
                >
                  Thêm
                </button>
                <div id="capacity__product">
                  <div className="dropdown">
                    <div
                      id="border__dropdown__capacity"
                      className="dropdown__btn"
                      onClick={() => dropdownCapacityClick()}
                    >
                      <input
                        type="text"
                        value={selectedCapacity}
                        placeholder="Chọn dung tích..."
                        readOnly
                      />
                      <img src={IconDropdownGrey} alt="" />
                    </div>
                    {isActiveCapacity && (
                      <div className="dropdown__content">
                        {listCapacity.map((option) => (
                          <div
                            onClick={() => {
                              dropdownItemCapacityClick(option.id);
                            }}
                            className="dropdown__item"
                          >
                            {option.nameCapacity}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <button
                  id="btn__add__capacity"
                  className="button"
                  onClick={() => addCapacity()}
                >
                  Thêm
                </button>
                <button
                  id="btn__add__capacityAndfragrant"
                  className="button"
                  onClick={() => addCapacityAndfragrant()}
                >
                  Thêm
                </button>
              </div>
            </div>
            <br />
            <div className="group__text__nature__addProduct">
              <textarea
                id="input__color__product"
                value={nameColor}
                className="textarea"
                readOnly
              />
              <textarea
                id="input__fragrant__product"
                value={nameFaragrant}
                className="textarea"
                readOnly
              />
              <textarea
                id="input__capacity__product"
                value={nameCapacity}
                className="textarea"
                readOnly
              />
              <textarea
                id="input__fragrantAndCapacity__product"
                value={nameCapacityAndFaragrant}
                className="textarea"
                readOnly
              />
            </div>
            <br />
            <div className="group__button__addProduct" id="save__nature__none">
              <button className="button" onClick={() => saveInfoProduct()}>
                Lưu thông tin
              </button>
            </div>
            <div className="group__button__addProduct" id="save__nature__color">
              <button className="button" onClick={() => saveInfoProductColor()}>
                Lưu thông tin
              </button>
            </div>
            <div
              className="group__button__addProduct"
              id="save__nature__fragrant"
            >
              <button
                className="button"
                onClick={() => saveInfoProductFragrant()}
              >
                Lưu thông tin
              </button>
            </div>
            <div
              className="group__button__addProduct"
              id="save__nature__fragrantAndColor"
            >
              <button
                className="button"
                onClick={() => saveInfoProductFragrantAndColor()}
              >
                Lưu thông tin
              </button>
            </div>
            <div
              className="group__button__addProduct"
              id="save__nature__capacity"
            >
              <button
                className="button"
                onClick={() => saveInfoProductCapacity()}
              >
                Lưu thông tin
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
