import React from "react";
import "./style.css";
import Logo from "../../assets/images/logo.jpg";
import iconHome from "../../assets/images/icon-home.svg";
import iconStatistical from "../../assets/images/icon-statistical.svg";
import iconCensorship from "../../assets/images/icon-censorship.svg";
import iconProduct from "../../assets/images/icon-product.svg";
import iconSupplier from "../../assets/images/icon-supplier.svg";
import iconStaff from "../../assets/images/icon-staff.svg";
import iconClient from "../../assets/images/icon-client.svg";
import iconEvent from "../../assets/images/icon-event.svg";
import iconItem from "../../assets/images/icon-item.svg";
import iconDropDown from "../../assets/images/icon-dropdown.svg";
import { Link } from "react-router-dom";

export default function index() {
  function openItemCensorship() {
    document.getElementById("open__item__censorship").style.display = "none";
    document.getElementById("close__item__censorship").style.display = "block";
    document.getElementById("item__censorship").style.display = "block";
  }

  function closeItemCensorship() {
    document.getElementById("open__item__censorship").style.display = "block";
    document.getElementById("close__item__censorship").style.display = "none";
    document.getElementById("item__censorship").style.display = "none";
  }

  function openItemProduct() {
    document.getElementById("open__item__product").style.display = "none";
    document.getElementById("close__item__product").style.display = "block";
    document.getElementById("item__product").style.display = "block";
  }

  function closeItemProduct() {
    document.getElementById("open__item__product").style.display = "block";
    document.getElementById("close__item__product").style.display = "none";
    document.getElementById("item__product").style.display = "none";
  }

  function openItemStaff() {
    document.getElementById("open__item__staff").style.display = "none";
    document.getElementById("close__item__staff").style.display = "block";
    document.getElementById("item__staff").style.display = "block";
  }

  function closeItemStaff() {
    document.getElementById("open__item__staff").style.display = "block";
    document.getElementById("close__item__staff").style.display = "none";
    document.getElementById("item__staff").style.display = "none";
  }
  return (
    <div>
      <div className="navmenu">
        <img src={Logo} alt="" />
        <hr />
        <div className="menu">
          <ul>
            <Link to="/Admin">
              <li>
                <img src={iconHome} alt="" />
                Tổng quan
              </li>
            </Link>
            <Link to="/Admin/Statistical">
              <li>
                <img src={iconStatistical} alt="" />
                Thống kê
              </li>
            </Link>
            <li
              id="open__item__censorship"
              onClick={() => openItemCensorship()}
            >
              <img src={iconCensorship} alt="" /> Kiểm duyệt
              <img className="iconDropdown" src={iconDropDown} alt="" />
            </li>
            <li
              id="close__item__censorship"
              onClick={() => closeItemCensorship()}
            >
              <img src={iconCensorship} alt="" /> Kiểm duyệt
              <img className="iconDropdown" src={iconDropDown} alt="" />
            </li>
            <ul className="item__menu" id="item__censorship">
              <Link to="/Admin/BrowseImportGoods">
                <li>
                  <img src={iconItem} alt="" /> Nhập hàng NCC
                </li>
              </Link>
              <Link to="/Admin/BrowseReturnGoods">
                <li>
                  <img src={iconItem} alt="" /> Trả hàng NCC
                </li>
              </Link>
              <Link to="/Admin/BrowseOrder">
                <li>
                  <img src={iconItem} alt="" /> Đơn hàng
                </li>
              </Link>
              <Link to="/Admin/CheckReturnOrders">
                <li>
                  <img src={iconItem} alt="" /> Đơn hàng đổi trả
                </li>
              </Link>
            </ul>
            <li id="open__item__product" onClick={() => openItemProduct()}>
              <img src={iconProduct} alt="" /> Sản phẩm
              <img className="iconDropdown" src={iconDropDown} alt="" />
            </li>
            <li id="close__item__product" onClick={() => closeItemProduct()}>
              <img src={iconProduct} alt="" /> Sản phẩm
              <img className="iconDropdown" src={iconDropDown} alt="" />
            </li>
            <ul className="item__menu" id="item__product">
              <Link to="/Admin/ProductPortfolio">
                <li>
                  <img src={iconItem} alt="" /> Danh mục
                </li>
              </Link>
              <Link to="/Admin/ProductType">
                <li>
                  <img src={iconItem} alt="" /> Loại sản phẩm
                </li>
              </Link>
              <Link to="/Admin/Products">
                <li>
                  <img src={iconItem} alt="" /> Tất cả sản phẩm
                </li>
              </Link>
              <Link to="/Admin/NatureProduct">
                <li>
                  <img src={iconItem} alt="" /> Tính chất sản phẩm
                </li>
              </Link>
            </ul>
            <Link to="/Admin/Supplier">
              <li>
                <img src={iconSupplier} alt="" /> Nhà cung cấp
              </li>
            </Link>
            <Link>
              <li id="open__item__staff" onClick={() => openItemStaff()}>
                <img src={iconStaff} alt="" /> Nhân viên
                <img className="iconDropdown" src={iconDropDown} alt="" />
              </li>
            </Link>
            <li id="close__item__staff" onClick={() => closeItemStaff()}>
              <img src={iconStaff} alt="" /> Nhân viên
              <img className="iconDropdown" src={iconDropDown} alt="" />
            </li>
            <ul className="item__menu" id="item__staff">
              <Link to="/Admin/Staff">
                <li>
                  <img src={iconItem} alt="" /> Danh sách nhân viên
                </li>
              </Link>
              <Link to="/Admin/Calendar">
                <li>
                  <img src={iconItem} alt="" /> Lịch làm việc
                </li>
              </Link>
              <Link to="/Admin/Timesheets">
                <li>
                  <img src={iconItem} alt="" /> Bảng chấm công
                </li>
              </Link>
            </ul>
            <Link to="/Admin/Client">
              <li>
                <img src={iconClient} alt="" /> Khách hàng
              </li>
            </Link>

            <Link to="/Admin/Event">
              <li>
                <img src={iconEvent} alt="" /> Sự kiện
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
