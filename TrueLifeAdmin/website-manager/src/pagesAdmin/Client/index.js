import React, { useState, useEffect  } from "react";
import "./style.css";
import Menu from "../../components/MenuAdmin/index";
import Header from "../../components/Header/index";
import iconClient from "../../assets/images/icon-client.svg";
import IconDropdownGrey from "../../assets/images/dropdownGrey.svg";
import axios from "axios";
import moment from "moment";


export default function Index() {
  const [isActiveTypeClient, setIsActiveTypeClient] = useState(false);
  const [selectedTypeClient, setSelectedTypeClient] = useState();

  const listTypeClient = [
    {
      id: 1,
      nameTypeClient: "Thành viên",
    },
    {
      id: 2,
      nameTypeClient: "Thành viên đồng",
    },
    {
      id: 3,
      nameTypeClient: "Thành viên bạc",
    },
    {
      id: 4,
      nameTypeClient: "Thành viên vàng",
    },
    {
      id: 5,
      nameTypeClient: "Thành viên kim cương",
    },
  ];

  function dropdownTypeClientClick() {
    setIsActiveTypeClient(!isActiveTypeClient);
    document.getElementById("border__dropdown__TypeClient").style.border =
      "1px solid #FA748F";
  }

  function dropdownItemTypeClientClick(id) {
    setSelectedTypeClient(listTypeClient[id - 1].nameTypeClient);
    setIsActiveTypeClient(false);
    document.getElementById("border__dropdown__TypeClient").style.border =
      "1px solid #D9D9D9";
  }

  // DỮ LIỆU THÔNG TIN KHÁCH HÀNG ------------------------------------------------------------
  const [infoClient, setInfoClient] = useState([
    // {
    //   id: 1,
    //   fullName: "Nguyễn Thành Trung",
    //   birthday: "22/10/2002",
    //   sex: "Nam",
    //   phone: "0846 398 741",
    //   mail: "trungnguyen@gmail.com",
    //   address:
    //     "81, Đường số 6, Phường 15, quận Tân Bình, Thành phố Hồ Chí Minh",
    //   typeClient: "Thành viên",
    // },
    // {
    //   id: 2,
    //   fullName: "Lê Phương Thảo",
    //   birthday: "14/02/1999",
    //   sex: "Nữ",
    //   phone: "0346 278 352",
    //   mail: "thaole@gmail.com",
    //   address: "Nguyễn Văn Cừ, Phường Hồng Hải, Quảng Ninh",
    //   typeClient: "Thành viên Bạc",
    // },
    // {
    //   id: 3,
    //   fullName: "Thái Thị Ngọc Mai",
    //   birthday: "03/01/2001",
    //   sex: "Nữ",
    //   phone: "0837 644 573",
    //   mail: "maithai@gmail.com",
    //   address: "219 phố Mai Dịch, Quận Cầu Giấy, Hà Nội",
    //   typeClient: "Thành viên vàng",
    // },
  ]);

  useEffect (()=>{
    async function getClient(){
      const response = await axios.post('https://localhost:44333/api/InfoUser/list?page=1&limit=25')
      setInfoClient(response.data.data.listData)
    }
    getClient();
  }, [])

  // TÌM KIẾM KHÁCH HÀNG ---------------------------------------------------------------------
  const [contentFind, setContentFind] = useState();

  function FindClient() {
    console.log("Loại khách hàng: ", selectedTypeClient);
    console.log("Nội dung tìm: ", contentFind);
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
              <img src={iconClient} alt="" />
            </span>
            <p>Khách hàng</p>
          </div>
          <div className="box">
            <div className="row-jcsb">
              <div className="group__type__client row-jcsb">
                <p>Loại khách hàng: </p>
                <div className="input__type__client">
                  <div className="dropdown">
                    <div
                      id="border__dropdown__TypeClient"
                      className="dropdown__btn"
                      onClick={() => dropdownTypeClientClick()}
                    >
                      <input
                        type="text"
                        value={selectedTypeClient}
                        placeholder="Tất cả"
                        readOnly
                      />
                      <img src={IconDropdownGrey} alt="" />
                    </div>
                    {isActiveTypeClient && (
                      <div className="dropdown__content">
                        {listTypeClient.map((option) => (
                          <div
                            onClick={() => {
                              dropdownItemTypeClientClick(option.id);
                            }}
                            className="dropdown__item"
                          >
                            {option.nameTypeClient}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="group__find__client row-jcsb">
                <div className="input__find">
                  <input
                    className="input"
                    placeholder="Nhập tên khách hàng cần tìm..."
                    onChange={(e) => setContentFind(e.target.value)}
                  />
                </div>
                <button className="button" onClick={() => FindClient()}>
                  Tìm kiếm
                </button>
              </div>
            </div>
          </div>
          <div className="box">
            <p>
              Danh sách khách hàng <hr />
            </p>

            <br />
            <div class="table">
              <table>
                <tr>
                  <th className="name__client">Họ và tên</th>
                  <th className="dateBirth__client">Ngày sinh</th>
                  <th className="gender__client">Giới tính</th>
                  <th className="phone__client">Số điện thoại</th>
                  <th className="email__client">Email</th>
                  <th className="type__client">Loại khách hàng</th>
                </tr>

                {infoClient.map((e) => (
                  <tr>
                    <td className="name__client">{e.fullName}</td>
                    <td className="dateBirth__client">{moment(e.birthday).format(`DD/MM/YYYY`)}</td>
                    <td className="gender__client">{e.gender}</td>
                    <td className="phone__client">{e.phone}</td>
                    <td className="adress__client">{e.email}</td>
                    <td className="type__client">{e.typeUserId}</td>
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
