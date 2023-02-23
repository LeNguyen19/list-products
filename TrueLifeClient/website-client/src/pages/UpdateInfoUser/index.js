import React, { useState } from "react";
import "./style.css";
import Menu from "../../components/Menu/index";
import Header from "../../components/Header/index";
import NavInfoUser from "../../components/NavInfoUser/index";
import {
  Button,
  DatePicker,
  Form,
  Input,
  Radio,
  Space,
  Row,
  Col,
  Upload,
} from "antd";
import "react-datepicker/dist/react-datepicker.css";
import avtUser from "../../assets/images/avt.png";
import FolderIcon from "../../assets/images/folder_icon_transparent.png";
import CloseIcon from "../../assets/images/CloseIcon.svg";
import { Link, useParams, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/index";
import axios from "axios";
import { useEffect } from "react";
import moment from "moment";
import { Spin } from "antd";
// import UploadImage from "./upload-image";

export default function Index() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [herf, setHerf] = useState("");
  const { userId } = useParams();
  const [user, SetUser] = useState({
    userName: "Người dùng",
    avatar: avtUser,
    fullName: "Tên người dùng nè",
    email: "nguoidung@123.com",
    phone: "0123456789",
    gender: "Nữ",
    birthday: "01/01/2001",
  });
  const [form] = Form.useForm();

  useEffect(() => {
    onGetDataUser({ userId });
  }, [userId]);

  function handleImageChange(e) {
    if (e.target.files && e.target.files[0]) {
      setTypeFile(e.target.files[0].type);
      let reader = new FileReader();
      setFileImage(e.target.files[0]);
      reader.onload = function (e) {
        setImage(e.target.result);

        setIsUploaded(true);
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  }

  const onGetDataUser = async ({ userId, ...body }) => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        "http://171.244.57.150:8081/api/User/DetailInfoUserAsync",
        body,
        {
          params: { userId },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      SetUser(data.data);
      form.setFieldsValue({
        ...data.data,
        birthday:
          !!moment(data.data.birthday).isValid() && moment(data.data.birthday),
      });
      // document.querySelector("#uploaded-image").src = data.data.avatar;
      console.log("data:", data);
    } catch (error) {
      console.log("error: ", error);
    } finally {
      setLoading(false);
    }
  };

  function checkInputPhone() {
    if (isNaN(phone) || phone.length !== 9) {
      document.getElementById("errorPhone").style.display = "block";
    } else {
      document.getElementById("errorPhone").style.display = "none";
    }
  }

  function checkInputEmail() {
    var reg = /^\w+@[a-zA-Z]{3,}\w+\.co$/i;
    console.log(reg.test(email));

    if (email.match(reg)) {
      document.getElementById("errorEmail").style.display = "none";
    } else {
      document.getElementById("errorEmail").style.display = "block";
    }
  }

  async function handleClickUpdate(values) {
    try {
      const { birthday, ...otherData } = values;
      const formData = {
        ...user,
        ...otherData,
        birthday: birthday.format(),
        avatar: image,
      };
      const response = await axios.put(
        `http://171.244.57.150:8081/api/InfoUser/update`,
        formData
      );
      console.log("response:", response);
      navigate(`/infoUser/${userId}`);
    } catch (error) {
      console.log("error:", error);
    }
  }
  console.log(herf);

  const [image, setImage] = useState(user.avt);
  const [fileImage, setFileImage] = useState();
  const [isUploaded, setIsUploaded] = useState(false);
  const [typeFile, setTypeFile] = useState("");
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [sex, setSex] = useState(user.gender);
  const [imageUrl, setImageUrl] = useState();

  return (
    <Spin spinning={false}>
      <div>
        <Menu type="login" />
        <Header title="Hồ sơ" desBlack="Trang chủ " desPink=" Hồ sơ" />
        <div className="container__updateInfoUser">
          <div className="content__infoUser">
            <div className="nav__infoUser">
              <NavInfoUser userId={userId} />
            </div>
            <div className="wrapper__information">
              <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
              <hr />

              <div className="form-wrapper">
                <br />
                <p>Ảnh đại diện:</p>
                <br />
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
                <br />
                <Form
                  className="form-update"
                  form={form}
                  layout="vertical"
                  onFinish={handleClickUpdate}
                >
                  <Row>
                    <Col sm={12} md={12} lg={12}>
                      <Form.Item name="userName" label="Tên đăng nhập">
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col sm={12} md={12} lg={12}>
                      <Form.Item name="fullName" label="Họ và tên">
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col sm={12} md={12} lg={12}>
                      <Form.Item name="email" label="Email">
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col sm={12} md={12} lg={12}>
                      <Form.Item name="phone" label="Số điện thoại">
                        <Input />
                      </Form.Item>
                    </Col>

                    <Col sm={24} md={24} lg={24}>
                      <Form.Item name="birthday" label="Ngày sinh">
                        <DatePicker
                          format={`DD/MM/YYYY`}
                          style={{ width: "100%" }}
                          placeholder="Chọn ngày sinh"
                        />
                      </Form.Item>
                    </Col>
                    <Col sm={24} md={24} lg={24}>
                      <Form.Item name="gender" label="Giới tính">
                        <Radio.Group>
                          <Radio value="Nam">Nam</Radio>
                          <Radio value="Nữ">Nữ</Radio>
                          <Radio value="Khác">Khác</Radio>
                        </Radio.Group>
                      </Form.Item>
                    </Col>

                    <Col sm={24} md={24} lg={24}>
                      <Button type="primary" htmlType="submit">
                        Lưu thay đổi
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Spin>
  );
}
