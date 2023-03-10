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
                T???ng quan
              </li>
            </Link>
            <Link to="/Admin/Statistical">
              <li>
                <img src={iconStatistical} alt="" />
                Th???ng k??
              </li>
            </Link>
            <li
              id="open__item__censorship"
              onClick={() => openItemCensorship()}
            >
              <img src={iconCensorship} alt="" /> Ki???m duy???t
              <img className="iconDropdown" src={iconDropDown} alt="" />
            </li>
            <li
              id="close__item__censorship"
              onClick={() => closeItemCensorship()}
            >
              <img src={iconCensorship} alt="" /> Ki???m duy???t
              <img className="iconDropdown" src={iconDropDown} alt="" />
            </li>
            <ul className="item__menu" id="item__censorship">
              <Link to="/Admin/BrowseImportGoods">
                <li>
                  <img src={iconItem} alt="" /> Nh???p h??ng NCC
                </li>
              </Link>
              <Link to="/Admin/BrowseReturnGoods">
                <li>
                  <img src={iconItem} alt="" /> Tr??? h??ng NCC
                </li>
              </Link>
              <Link to="/Admin/BrowseOrder">
                <li>
                  <img src={iconItem} alt="" /> ????n h??ng
                </li>
              </Link>
              <Link to="/Admin/CheckReturnOrders">
                <li>
                  <img src={iconItem} alt="" /> ????n h??ng ?????i tr???
                </li>
              </Link>
            </ul>
            <li id="open__item__product" onClick={() => openItemProduct()}>
              <img src={iconProduct} alt="" /> S???n ph???m
              <img className="iconDropdown" src={iconDropDown} alt="" />
            </li>
            <li id="close__item__product" onClick={() => closeItemProduct()}>
              <img src={iconProduct} alt="" /> S???n ph???m
              <img className="iconDropdown" src={iconDropDown} alt="" />
            </li>
            <ul className="item__menu" id="item__product">
              <Link to="/Admin/ProductPortfolio">
                <li>
                  <img src={iconItem} alt="" /> Danh m???c
                </li>
              </Link>
              <Link to="/Admin/ProductType">
                <li>
                  <img src={iconItem} alt="" /> Lo???i s???n ph???m
                </li>
              </Link>
              <Link to="/Admin/Products">
                <li>
                  <img src={iconItem} alt="" /> T???t c??? s???n ph???m
                </li>
              </Link>
              <Link to="/Admin/NatureProduct">
                <li>
                  <img src={iconItem} alt="" /> T??nh ch???t s???n ph???m
                </li>
              </Link>
            </ul>
            <Link to="/Admin/Supplier">
              <li>
                <img src={iconSupplier} alt="" /> Nh?? cung c???p
              </li>
            </Link>
            <Link>
              <li id="open__item__staff" onClick={() => openItemStaff()}>
                <img src={iconStaff} alt="" /> Nh??n vi??n
                <img className="iconDropdown" src={iconDropDown} alt="" />
              </li>
            </Link>
            <li id="close__item__staff" onClick={() => closeItemStaff()}>
              <img src={iconStaff} alt="" /> Nh??n vi??n
              <img className="iconDropdown" src={iconDropDown} alt="" />
            </li>
            <ul className="item__menu" id="item__staff">
              <Link to="/Admin/Staff">
                <li>
                  <img src={iconItem} alt="" /> Danh s??ch nh??n vi??n
                </li>
              </Link>
              <Link to="/Admin/Calendar">
                <li>
                  <img src={iconItem} alt="" /> L???ch l??m vi???c
                </li>
              </Link>
              <Link to="/Admin/Timesheets">
                <li>
                  <img src={iconItem} alt="" /> B???ng ch???m c??ng
                </li>
              </Link>
            </ul>
            <Link to="/Admin/Client">
              <li>
                <img src={iconClient} alt="" /> Kh??ch h??ng
              </li>
            </Link>

            <Link to="/Admin/Event">
              <li>
                <img src={iconEvent} alt="" /> S??? ki???n
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
