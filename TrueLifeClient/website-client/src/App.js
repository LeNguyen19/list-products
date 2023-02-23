import "./App.css";
import React from "react";
import Home from "./pages/Home/index";
import Login from "./pages/Login/index";
import Register from "./pages/Register/index";
import Products from "./pages/Products/index";
import DetailProduct from "./pages/DetailProduct/index";
import Cart from "./pages/Cart/index";
import { Route, Routes } from "react-router-dom";
import Order from "./pages/Order/index";
import Contact from "./pages/Contact/index";
import InfoUser from "./pages/InfoUser/index";
import Address from "./pages/Address/index";
import UpdateInfoUser from "./pages/UpdateInfoUser/index";
import UpdatePass from "./pages/UpdatePass/index";
import YourOrder from "./pages/YourOrder/index";
import DetailOrder from "./pages/DetailOrder/index";
import ProductsNavMenu from "./pages/ProductsNavMenu/index";
import Introduce from "./pages/Introduce/index";
import News from "./pages/News/index";
import "antd/dist/antd.css";

function App() {
  const user = localStorage.getItem("Auth:user")
    ? JSON.parse(localStorage.getItem("Auth:user"))
    : undefined;

  return (
    <div>
      {!!user && !!user.userId && (
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/address/:userId" element={<Address />} />
          <Route path="/order" element={<Order />} />
          <Route path="/infoUser/:userId" element={<InfoUser />} />
          <Route path="/updateInfoUser/:userId" element={<UpdateInfoUser />} />
          <Route path="/updatePass" element={<UpdatePass />} />
          <Route path="/yourOrder" element={<YourOrder />} />
          <Route path="/detailOrder/:orderId" element={<DetailOrder />} />
          
        </Routes>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/:id/products" element={<ProductsNavMenu />} />
        <Route path="/product/:id/detailProduct" element={<DetailProduct />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/introduce" element={<Introduce />} />
        <Route path="/news" element={<News />} />

      </Routes>
    </div>
  );
}

export default App;
