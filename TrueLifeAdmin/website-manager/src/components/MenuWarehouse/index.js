import React from "react";
import "./style.css";
import Logo from "../../assets/images/logo.jpg";
import iconHome from "../../assets/images/icon-home.svg";
import iconProduct from "../../assets/images/icon-product.svg";
import iconSupplier from "../../assets/images/icon-supplier.svg";
import iconInvoice from "../../assets/images/icon-invoice.svg";
import iconItem from "../../assets/images/icon-item.svg";
import iconDropDown from "../../assets/images/icon-dropdown.svg";
import iconAttendance from "../../assets/images/icon-attendance.svg";
import iconTimesheets from "../../assets/images/icon-timesheets.svg";
import iconStatistical from "../../assets/images/icon-statistical.svg";
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
            <Link to="/Warehouse">
              <li>
                <img src={iconHome} alt="" />
                Tổng quan
              </li>
            </Link>
            <Link to="/Warehouse/ProductStatistics">
              <li>
                <img src={iconStatistical} alt="" />
                Thống kê
              </li>
            </Link>
            <li
              id="open__item__censorship"
              onClick={() => openItemCensorship()}
            >
              <img src={iconInvoice} alt="" /> Hoá đơn
              <img className="iconDropdown" src={iconDropDown} alt="" />
            </li>
            <li
              id="close__item__censorship"
              onClick={() => closeItemCensorship()}
            >
              <img src={iconInvoice} alt="" /> Hoá đơn
              <img className="iconDropdown" src={iconDropDown} alt="" />
            </li>
            <ul className="item__menu" id="item__censorship">
              <Link to="/Warehouse/InvoiceOrder">
                <li>
                  <img src={iconItem} alt="" /> Đặt hàng NCC
                </li>
              </Link>
              <Link to="/Warehouse/InvoiceImport">
                <li>
                  <img src={iconItem} alt="" /> Nhập hàng NCC
                </li>
              </Link>
              <Link to="/Warehouse/InvoiceReturn">
                <li>
                  <img src={iconItem} alt="" /> Trả hàng NCC
                </li>
              </Link>
              <Link to="/Warehouse/OrderOut">
                <li>
                  <img src={iconItem} alt="" /> Bán hàng
                </li>
              </Link>
              <Link to="/Warehouse/InvoiceOfExchange">
                <li>
                  <img src={iconItem} alt="" /> Đổi hàng
                </li>
              </Link>
              <Link to="/Warehouse/InvoiceNotReceived">
                <li>
                  <img src={iconItem} alt="" /> Hoàn trả
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
              <Link to="/ProductAll">
                <li>
                  <img src={iconItem} alt="" /> Tất cả
                </li>
              </Link>
              <Link to="/Warehouse/ProductImport">
                <li>
                  <img src={iconItem} alt="" /> Cần nhập
                </li>
              </Link>
              <Link to="/Warehouse/ProductalmostExpired">
                <li>
                  <img src={iconItem} alt="" /> Cận date
                </li>
              </Link>
              <Link to="/Warehouse/ProductReturn">
                <li>
                  <img src={iconItem} alt="" /> Cần trả
                </li>
              </Link>
              <Link to="/Warehouse/ProductRefund">
                <li>
                  <img src={iconItem} alt="" /> Hoàn trả
                </li>
              </Link>
              <Link to="/Warehouse/ListProductPromotion">
                <li>
                  <img src={iconItem} alt="" /> Khuyến mãi
                </li>
              </Link>
              <Link to="/Warehouse/ListDestructionProducts">
                <li>
                  <img src={iconItem} alt="" /> Tiêu huỷ
                </li>
              </Link>
            </ul>
            <Link to="/Warehouse/ListSupplier">
              <li>
                <img src={iconSupplier} alt="" /> Nhà cung cấp
              </li>
            </Link>
            <Link to="/RollCall">
              <li>
                <img src={iconAttendance} alt="" /> Điểm danh
              </li>
            </Link>

            <Link to="/TimesheetsStaff">
              <li>
                <img src={iconTimesheets} alt="" /> Bảng chấm công
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
