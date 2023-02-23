import React, { useState } from "react";
import "./style.css";
import GroupComment from "../GroupComment/index";
import GroupReview from "../GroupReview/index";
import imgUser1 from "../../assets/images/imgUser1.jpg";
import imgUser2 from "../../assets/images/imgUser2.jpg";

import swal from "sweetalert";
import ListComment from "../ListComment/index";

import { FaStar } from "react-icons/fa";
import ListReview from "../ListReview/index";

export default function Index() {
  //Tab
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  //Comment
  const [contentComment, setContentComment] = useState();
  const [loading, setLoading] = useState(false);
  const [listComment, setListComment] = useState([
    // {
    //   avt: imgUser1,
    //   name: "Người ta bình luận",
    //   day: "13/10/2022",
    //   content: "Sản phẩm rất tốt, trên cả mong đợi",
    // },
    // {
    //   avt: imgUser2,
    //   name: "Tui thích bình luận",
    //   day: "10/11/2022",
    //   content:
    //     "Mới mua chưa dùng nên chưa biết công dụng, sài từ từ sẽ review sau",
    // },
  ]);

  function addComment() {
    if (contentComment === undefined) {
      swal({
        text: "Nội dung đang trống. Vui lòng nhập nội dung bình luận!",
        icon: "warning",
      });
    } else {
      alert("oKEY RỒI NÈ");
    }
  }

  //Review
  const color = {
    orange: "#ffba5a",
    grey: "#a9a9a9",
  };
  const [listReview, setListReview] = useState([
    // {
    //   avt: Avt1,
    //   name: "Người ta đánh giá",
    //   day: "13/10/2022",
    //   star: 4,
    // },
    // {
    //   avt: Avt2,
    //   name: "Tui thích đánh giá",
    //   day: "10/11/2022",
    //   star: 3,
    // },
  ]);
  const stars = Array(5).fill(0);

  const [currentValue, setCurrentValue] = useState(0);

  const handleClick = (currentValue) => {
    setCurrentValue(currentValue);
    console.log(currentValue);
  };

  return (
    <div>
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Bình luận
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Đánh giá
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <div className="container__comment">
            {listComment.map((e) => (
              <ListComment
                avt={e.avt}
                name={e.name}
                day={e.day}
                content={e.content}
              />
            ))}

            <hr />
            <div className="wrapper__comment">
              <img src={imgUser2} alt="" />
              <div className="input__comment">
                <input
                  placeholder="Nhập bình luận..."
                  onChange={(e) => setContentComment(e.target.value)}
                />
                <button onClick={() => addComment()}>Gửi bình luận</button>
              </div>
            </div>
          </div>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <div className="container__comment">
            {listReview.map((e) => (
              <ListReview avt={e.avt} name={e.name} day={e.day} star={e.star} />
            ))}

            <hr />
            <div className="wrapper__comment">
              <img src={imgUser2} alt="" />
              <div className="input__comment input__review">
                {stars.map((_, index) => {
                  return (
                    <FaStar
                      key={index}
                      size={40}
                      style={{
                        marginRight: 10,
                        marginTop: -2,
                      }}
                      color={currentValue > index ? color.orange : color.grey}
                      onClick={() => handleClick(index + 1)}
                    />
                  );
                })}
                <button>Gửi đánh giá</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
