import React, { useState } from "react";
import "./style.css";
import Menu from "../../components/MenuAdmin/index";
import Header from "../../components/Header/index";
import iconStaff from "../../assets/images/icon-staff.svg";
import { Link } from "react-router-dom";

export default function Index() {

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
              <img src={iconStaff} alt="" />
            </span>
            <p>Lịch làm việc nhân viên</p>
          </div>
          <div className="box">
            <div className="group__btn__calendar row-jcsb">
              <button className="button">Hiện tại</button>
              <button className="button">{`<`} Trờ về</button>
              <button className="button">Tiếp {`>`}</button>

              <button className="button">Tạo lịch</button>
            </div>
          </div>
          <div className="box ">
            <table className="table table__calendar">
              <tr>
                <th className="shift__calendar"></th>
                <th className="date__calendar">Thứ hai{`\n`}01/01/2001</th>
                <th className="date__calendar">Thứ ba{`\n`}01/01/2001</th>
                <th className="date__calendar">Thứ tư{`\n`}01/01/2001</th>
                <th className="date__calendar">Thứ năm{`\n`}01/01/2001</th>
                <th className="date__calendar">Thứ sáu{`\n`}01/01/2001</th>
                <th className="date__calendar">Thứ bảy{`\n`}01/01/2001</th>
                <th className="date__calendar">Chủ nhật{`\n`}01/01/2001</th>
              </tr>
              <tr>
                <td className="shift__calendar">Ca 1</td>
                <td>
                  <textarea
                    value={
                      "TN: Tên NV" +
                      `\n` +
                      "TV1: Tên NV" +
                      `\n` +
                      "TV2: Tên NV" +
                      `\n` +
                      "KH1: Tên NV" +
                      `\n` +
                      "KH2: Tên NV"
                    }
                    className="input"
                    readOnly
                  />
                </td>
                <td>
                  <textarea
                    value={
                      "TN: Tên NV" +
                      `\n` +
                      "TV1: Tên NV" +
                      `\n` +
                      "TV2: Tên NV" +
                      `\n` +
                      "KH1: Tên NV" +
                      `\n` +
                      "KH2: Tên NV"
                    }
                    className="input"
                    readOnly
                  />
                </td>
                <td>
                  <textarea
                    value={
                      "TN: Tên NV" +
                      `\n` +
                      "TV1: Tên NV" +
                      `\n` +
                      "TV2: Tên NV" +
                      `\n` +
                      "KH1: Tên NV" +
                      `\n` +
                      "KH2: Tên NV"
                    }
                    className="input"
                    readOnly
                  />
                </td>
                <td>
                  <textarea
                    value={
                      "TN: Tên NV" +
                      `\n` +
                      "TV1: Tên NV" +
                      `\n` +
                      "TV2: Tên NV" +
                      `\n` +
                      "KH1: Tên NV" +
                      `\n` +
                      "KH2: Tên NV"
                    }
                    className="input"
                    readOnly
                  />
                </td>
                <td>
                  <textarea
                    value={
                      "TN: Tên NV" +
                      `\n` +
                      "TV1: Tên NV" +
                      `\n` +
                      "TV2: Tên NV" +
                      `\n` +
                      "KH1: Tên NV" +
                      `\n` +
                      "KH2: Tên NV"
                    }
                    className="input"
                    readOnly
                  />
                </td>
                <td>
                  <textarea
                    value={
                      "TN: Tên NV" +
                      `\n` +
                      "TV1: Tên NV" +
                      `\n` +
                      "TV2: Tên NV" +
                      `\n` +
                      "KH1: Tên NV" +
                      `\n` +
                      "KH2: Tên NV"
                    }
                    className="input"
                    readOnly
                  />
                </td>
                <td>
                  <textarea
                    value={
                      "TN: Tên NV" +
                      `\n` +
                      "TV1: Tên NV" +
                      `\n` +
                      "TV2: Tên NV" +
                      `\n` +
                      "KH1: Tên NV" +
                      `\n` +
                      "KH2: Tên NV"
                    }
                    className="input"
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td className="shift__calendar">Ca 2</td>
                <td>
                  <textarea
                    value={
                      "TN: Tên NV" +
                      `\n` +
                      "TV1: Tên NV" +
                      `\n` +
                      "TV2: Tên NV" +
                      `\n` +
                      "KH1: Tên NV" +
                      `\n` +
                      "KH2: Tên NV"
                    }
                    className="input"
                    readOnly
                  />
                </td>
                <td>
                  <textarea
                    value={
                      "TN: Tên NV" +
                      `\n` +
                      "TV1: Tên NV" +
                      `\n` +
                      "TV2: Tên NV" +
                      `\n` +
                      "KH1: Tên NV" +
                      `\n` +
                      "KH2: Tên NV"
                    }
                    className="input"
                    readOnly
                  />
                </td>
                <td>
                  <textarea
                    value={
                      "TN: Tên NV" +
                      `\n` +
                      "TV1: Tên NV" +
                      `\n` +
                      "TV2: Tên NV" +
                      `\n` +
                      "KH1: Tên NV" +
                      `\n` +
                      "KH2: Tên NV"
                    }
                    className="input"
                    readOnly
                  />
                </td>
                <td>
                  <textarea
                    value={
                      "TN: Tên NV" +
                      `\n` +
                      "TV1: Tên NV" +
                      `\n` +
                      "TV2: Tên NV" +
                      `\n` +
                      "KH1: Tên NV" +
                      `\n` +
                      "KH2: Tên NV"
                    }
                    className="input"
                    readOnly
                  />
                </td>
                <td>
                  <textarea
                    value={
                      "TN: Tên NV" +
                      `\n` +
                      "TV1: Tên NV" +
                      `\n` +
                      "TV2: Tên NV" +
                      `\n` +
                      "KH1: Tên NV" +
                      `\n` +
                      "KH2: Tên NV"
                    }
                    className="input"
                    readOnly
                  />
                </td>
                <td>
                  <textarea
                    value={
                      "TN: Tên NV" +
                      `\n` +
                      "TV1: Tên NV" +
                      `\n` +
                      "TV2: Tên NV" +
                      `\n` +
                      "KH1: Tên NV" +
                      `\n` +
                      "KH2: Tên NV"
                    }
                    className="input"
                    readOnly
                  />
                </td>
                <td>
                  <textarea
                    value={
                      "TN: Tên NV" +
                      `\n` +
                      "TV1: Tên NV" +
                      `\n` +
                      "TV2: Tên NV" +
                      `\n` +
                      "KH1: Tên NV" +
                      `\n` +
                      "KH2: Tên NV"
                    }
                    className="input"
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td className="shift__calendar">Ca 3</td>
                <td>
                  <textarea
                    value={
                      "TN: Tên NV" +
                      `\n` +
                      "TV1: Tên NV" +
                      `\n` +
                      "TV2: Tên NV" +
                      `\n` +
                      "KH1: Tên NV" +
                      `\n` +
                      "KH2: Tên NV"
                    }
                    className="input"
                    readOnly
                  />
                </td>
                <td>
                  <textarea
                    value={
                      "TN: Tên NV" +
                      `\n` +
                      "TV1: Tên NV" +
                      `\n` +
                      "TV2: Tên NV" +
                      `\n` +
                      "KH1: Tên NV" +
                      `\n` +
                      "KH2: Tên NV"
                    }
                    className="input"
                    readOnly
                  />
                </td>
                <td>
                  <textarea
                    value={
                      "TN: Tên NV" +
                      `\n` +
                      "TV1: Tên NV" +
                      `\n` +
                      "TV2: Tên NV" +
                      `\n` +
                      "KH1: Tên NV" +
                      `\n` +
                      "KH2: Tên NV"
                    }
                    className="input"
                    readOnly
                  />
                </td>
                <td>
                  <textarea
                    value={
                      "TN: Tên NV" +
                      `\n` +
                      "TV1: Tên NV" +
                      `\n` +
                      "TV2: Tên NV" +
                      `\n` +
                      "KH1: Tên NV" +
                      `\n` +
                      "KH2: Tên NV"
                    }
                    className="input"
                    readOnly
                  />
                </td>
                <td>
                  <textarea
                    value={
                      "TN: Tên NV" +
                      `\n` +
                      "TV1: Tên NV" +
                      `\n` +
                      "TV2: Tên NV" +
                      `\n` +
                      "KH1: Tên NV" +
                      `\n` +
                      "KH2: Tên NV"
                    }
                    className="input"
                    readOnly
                  />
                </td>
                <td>
                  <textarea
                    value={
                      "TN: Tên NV" +
                      `\n` +
                      "TV1: Tên NV" +
                      `\n` +
                      "TV2: Tên NV" +
                      `\n` +
                      "KH1: Tên NV" +
                      `\n` +
                      "KH2: Tên NV"
                    }
                    className="input"
                    readOnly
                  />
                </td>
                <td>
                  <textarea
                    value={
                      "TN: Tên NV" +
                      `\n` +
                      "TV1: Tên NV" +
                      `\n` +
                      "TV2: Tên NV" +
                      `\n` +
                      "KH1: Tên NV" +
                      `\n` +
                      "KH2: Tên NV"
                    }
                    className="input"
                    readOnly
                  />
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
