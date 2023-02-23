import axios from "axios";
import React, { useState } from "react";
import "./style.css";
import swal from "sweetalert";

import iconTrash from "../../assets/images/trash-can-solid.svg";

export default function Index({
  image,
  name,
  price,
  id,
  amount,
  money,
  type,
  setLoading,
  onRefreshData,
}) {
  const [number, setNumber] = useState(amount);

  function formatCash(value) {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);
  }

  const handleAdd = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        `http://171.244.57.150:8081/api/Data/PlusProductToCart?cartId=${id}`
      );
      console.log("response add count: ", data);
      if (data.retCode !== 0) {
        swal({
          title: "Notification",
          text: data.retText,
          icon: "swarning",
        });
        return;
      }
      onRefreshData();
      window.location.reload();
    } catch (error) {
      console.log("error: ", error);
    } finally {
      setLoading(false);
    }
  };

  const handleMinus = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        `http://171.244.57.150:8081/api/Data/ExceptProductsToCart?cartId=${id}`
      );
      if (data.retCode !== 0) {
        swal({
          title: "Notification",
          text: data.retText,
          icon: "swarning",
        });
        return;
      }
      onRefreshData();
      window.location.reload();
    } catch (error) {
      console.log("error: ", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleted = async () => {
    try {
      setLoading(true);
      const { data } = await axios.delete(
        `http://171.244.57.150:8081/api/Data/DeleteProductToCart?cartId=${id}`
      );
      console.log("response: ", data);
      if (data.retCode !== 0) {
        swal({
          title: "Notification",
          text: data.retText,
          icon: "warning",
        });
        return;
      }
      swal({
        title: "Notification",
        text: data.retText,
        icon: "success",
      });
      onRefreshData();
      window.location.reload();
    } catch (error) {
      console.log("error: ", error);
    } finally {
      setLoading(false);
    }
  };

  switch (type) {
    case "cart":
      return (
        <div>
          <div className="container__list">
            <div className="image__products">
              <img src={image} alt="" />
            </div>
            <div className="name__products">
              <p>{name}</p>
            </div>
            <div className="price__products">
              <p>{price}</p>
            </div>
            <div className="number__products">
              <div className="group__amount">
                <button className="btn__minus" onClick={handleMinus}>
                  -
                </button>
                <input value={amount} readOnly />
                <button className="btn__add" onClick={handleAdd}>
                  +
                </button>
              </div>
            </div>
            <div className="price__products">
              <p>{money}</p>
            </div>
            <div className="icon__deleted__products">
              {/* <i class="fa fa-trash" onClick={handleDeleted}></i> */}
              <img onClick={handleDeleted} src={iconTrash} alt="" />
            </div>
          </div>
          <hr />
        </div>
      );
    case "order":
      return (
        <div>
          <div className="container__list">
            <div className="image__products">
              <img src={image} alt="" />
            </div>
            <div className="name__products">
              <p>{name}</p>
            </div>
            <div className="price__products">
              <p>{formatCash(price)}</p>
            </div>
            <div className="number__products">
              <p>{amount}</p>
            </div>
            <div className="price__products">
              <p>{formatCash(money)}</p>
            </div>
          </div>
          <hr />
        </div>
      );
    default:
      return <></>;
  }
}
