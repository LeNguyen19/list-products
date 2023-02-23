import React, { useState } from "react";
import "./style.css";
import Menu from "../../components/MenuWarehouse/index";
import Header from "../../components/Header/index";
import iconInvoice from "../../assets/images/icon-invoice.svg";
import FolderIcon from "../../assets/images/folder_icon_transparent.png";
import CloseIcon from "../../assets/images/CloseIcon.svg";

export default function Index() {
  //ẢNH -------------------------------------------------------------------------
  const [image, setImage] = useState();
  const [isUploaded, setIsUploaded] = useState(false);
  const [typeFile, setTypeFile] = useState("");
  function handleImageChange(e) {
    if (e.target.files && e.target.files[0]) {
      setTypeFile(e.target.files[0].type);
      let reader = new FileReader();

      reader.onload = function (e) {
        setImage(e.target.result);
        setIsUploaded(true);
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  }

  // GỬI PHẢN HỒI NHÀ CUNG CẤP ----------------------------------------------------------------
  const [valueContent, setValueContent] = useState();

  function SendFeedback() {
    if (valueContent === undefined || image === undefined) {
      alert("Vui lòng nhập đầy đủ thông tin!");
    } else {
      console.log("Nội dung: ", valueContent);
      console.log("Link ảnh: ", image);
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
              <img src={iconInvoice} alt="" />
            </span>
            <p>Phản hồi nhà cung cấp</p>
          </div>
          <div className="box">
            <div className="row-jcsb">
              <div className="content__feedback">
                <p>Nhập nội dung phản hồi:</p>
                <textarea
                  className="textarea"
                  onChange={(e) => setValueContent(e.target.value)}
                ></textarea>
              </div>
              <div className="img__feedback">
                <p>Hình ảnh minh hoạ:</p>
                <div className="Layout">
                  <div className="Container">
                    <div className="BoxUpload">
                      <div className="image-upload">
                        {!isUploaded ? (
                          <>
                            <label htmlFor="upload-input">
                              <img
                                src={FolderIcon}
                                draggable={"false"}
                                alt="placeholder"
                                style={{ width: 100, height: 100 }}
                              />
                              <p style={{ color: "#444" }}>Chọn ảnh</p>
                            </label>

                            <input
                              id="upload-input"
                              type="file"
                              accept=".jpg,.jpeg,.gif,.png,.mov,.mp4"
                              onChange={handleImageChange}
                            />
                          </>
                        ) : (
                          <div className="ImagePreview">
                            <img
                              className="close-icon"
                              src={CloseIcon}
                              alt="CloseIcon"
                              onClick={() => {
                                setIsUploaded(false);
                                setImage(null);
                              }}
                            />
                            {typeFile.includes("video") ? (
                              <video
                                id="uploaded-image"
                                src={image}
                                draggable={false}
                                controls
                                autoPlay
                                alt="uploaded-img"
                              />
                            ) : (
                              <img
                                id="uploaded-image"
                                src={image}
                                draggable={false}
                                alt="uploaded-img"
                              />
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <button className="button" onClick={() => SendFeedback()}>
              Gửi nhà cung cấp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
