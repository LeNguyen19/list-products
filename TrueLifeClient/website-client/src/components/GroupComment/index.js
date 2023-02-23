import React, { useState } from "react";
import "./style.css";
import imgUser1 from "../../assets/images/imgUser1.jpg";
import imgUser2 from "../../assets/images/imgUser2.jpg";
import ListComment from "../ListComment/index";
import swal from "sweetalert";

export default function Index() {
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

  async function addComment() {
    if (contentComment === undefined) {
      swal({
        text: "Nội dung đang trống. Vui lòng nhập nội dung bình luận!",
        icon: "warning",
      });
    } else {
      alert("oKEY RỒI NÈ");
    }
  }

  return (
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
  );
}
