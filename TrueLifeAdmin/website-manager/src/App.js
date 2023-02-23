import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";

// TRANG QUẢN LÝ CỬA HÀNG ----------------------------------------------------------
import Admin from "./pagesAdmin/Admin/index";
import ProductPortfolio from "./pagesAdmin/ProductPortfolio/index";
import ProductType from "./pagesAdmin/ProductType/index";
import Products from "./pagesAdmin/Products/index";
import Supplier from "./pagesAdmin/Supplier/index";
import Event from "./pagesAdmin/Event/index";
import DetailEventBonus from "./pagesAdmin/DetailEventBonus/index";
import DetaiEventDiscount from "./pagesAdmin/DetailEventDiscount/index";
import DetaiEventInvoiceDiscount from "./pagesAdmin/DetailEventInvoiceDiscount/index";
import AddEvent from "./pagesAdmin/AddEvent/index";
import Client from "./pagesAdmin/Client/index";
import Staff from "./pagesAdmin/Staff/index";
import StaffDetail from "./pagesAdmin/StaffDetail/index";
import Calendar from "./pagesAdmin/Calendar/index";
import DetailProduct from "./pagesAdmin/DetailProduct/index";
import CheckReturnOrders from "./pagesAdmin/CheckReturnOrders/index";
import DetailCheckReturnOrders from "./pagesAdmin/DetailCheckReturnOrders/index";
import AddProduct from "./pagesAdmin/AddProduct/index";
import NatureProduct from "./pagesAdmin/NatureProduct/index";
import BrowseImportGoods from "./pagesAdmin/BrowseImportGoods/index";
import DetailImportGoods from "./pagesAdmin/DetailImportGoods/index";
import BrowseReturnGoods from "./pagesAdmin/BrowseReturnGoods/index";
import DetailReturnGoods from "./pagesAdmin/DetailReturnGoods/index";
import BrowseOrder from "./pagesAdmin/BrowseOrder/index";
import DetailOrder from "./pagesAdmin/DetailOrder/index";
import AddStaff from "./pagesAdmin/AddStaff/index";
import Timesheets from "./pagesAdmin/Timesheets/index";
import Statistical from "./pagesAdmin/Statistical/index";
import DetailedStatisticsByMonth from "./pagesAdmin/DetailedStatisticsByMonth/index";
import DetailedStatisticsByYear from "./pagesAdmin/DetailedStatisticsByYear/index";

// TRANG QUẢN LÝ KHO----------------------------------------------------------
import Warehouse from "./pagesWarehouse/Warehouse/index";
import ProductImport from "./pagesWarehouse/ProductImport/index";
import PlanningImportProduct from "./pagesWarehouse/PlanningImportProduct/index";
import InvoiceOrder from "./pagesWarehouse/InvoiceOrder/index";
import DetailInvoiceOrder from "./pagesWarehouse/DetailInvoiceOrder/index";
import ProductStatistics from "./pagesWarehouse/ProductStatistics/index";
import ProductalmostExpired from "./pagesWarehouse/ProductalmostExpired/index";
import InvoiceImport from "./pagesWarehouse/InvoiceImport/index";
import DetailInvoiceImport from "./pagesWarehouse/DetailInvoiceImport/index";
import ProductReturn from "./pagesWarehouse/ProductReturn/index";
import PlanningReturnProduct from "./pagesWarehouse/PlanningReturnProduct/index";
import InvoiceReturn from "./pagesWarehouse/InvoiceReturn/index";
import DetailInvoiceReturn from "./pagesWarehouse/DetailInvoiceReturn/index";
import OrderOut from "./pagesWarehouse/OrderOut/index";
import DetailOrderApproved from "./pagesWarehouse/DetailOrderApproved/index";
import DetailOrderDelivering from "./pagesWarehouse/DetailOrderDelivering/index";
import DetailOrderWareHouse from "./pagesWarehouse/DetailOrderWarehouse/index";
import InvoiceOfExchange from "./pagesWarehouse/InvoiceOfExchange/index";
import DetailInvoiceOfExchange from "./pagesWarehouse/DetailInvoiceOfExchange/index";
import InvoiceNotReceived from "./pagesWarehouse/InvoiceNotReceived/index";
import DetailInvoiceNotReceived from "./pagesWarehouse/DetailInvoiceNotReceived/index";
import ListSupplier from "./pagesWarehouse/ListSupplier/index";
import ProductRefund from "./pagesWarehouse/ProductRefund/index";
import ListProductPromotion from "./pagesWarehouse/ListProductPromotion/index";
import ListDestructionProducts from "./pagesWarehouse/ListDestructionProducts/index";
import DetailProductStatisticsByMouth from "./pagesWarehouse/DetailProductStatisticsByMouth/index";
import DetailProductStatisticsByYear from "./pagesWarehouse/DetailProductStatisticsByYear/index";
import DetailInvoiceEntered from "./pagesWarehouse/DetailInvoiceEntered/index";
import ImportGoodsFromSuppliers from "./pagesWarehouse/ImportGoodsFromSuppliers/index";
import ImportFeedback from "./pagesWarehouse/ImportFeedback/index";
import DetailInvoicePreparing from "./pagesWarehouse/DetailInvoicePreparing/index";

// TRANG NHÂN VIÊN----------------------------------------------------------
import Emloyee from "./pagesStaff/Emloyee/index";
import RollCall from "./pagesStaff/RollCall/index";
import TimesheetsStaff from "./pagesStaff/TimesheetsStaff/index";
import SeeEvent from "./pagesStaff/SeeEvent/index";
import DetailSeeEventBonus from "./pagesStaff/DetailSeeEventBonus/index";
import DetailSeeEventInvoiceDiscount from "./pagesStaff/DetailSeeEventInvoiceDiscount/index";
import DetailSeeEventDiscount from "./pagesStaff/DetailSeeEventDiscount/index";

// TRANG THU NGÂN----------------------------------------------------------
import Cashier from "./pagesCashier/Cashier/index";
import PaymentPage from "./pagesCashier/PaymentPage/index";

// TRANG DÙNG CHUNG----------------------------------------------------------
import Login from "./components/Login/index";
import ProductAll from "./components/ProductAll/index";
import DetailProductAll from "./components/DetailProductAll/index";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Dùng chung ------------------------------------------*/}
        <Route path="/" element={<Login />} />
        <Route path="/ProductAll" element={<ProductAll />} />
        <Route
          path="/ProductAll/DetailProductAll"
          element={<DetailProductAll />}
        />
        {/* Quản lý cửa hàng ------------------------------------------*/}
        <Route path="/Cashier" element={<Cashier />} />
        <Route path="/Emloyee" element={<Emloyee />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Admin/Statistical" element={<Statistical />} />
        <Route
          path="/Admin/Statistical/DetailedStatisticsByMonth"
          element={<DetailedStatisticsByMonth />}
        />
        <Route
          path="/Admin/Statistical/DetailedStatisticsByYear"
          element={<DetailedStatisticsByYear />}
        />
        <Route
          path="/Admin/BrowseImportGoods"
          element={<BrowseImportGoods />}
        />
        <Route
          path="/Admin/BrowseImportGoods/DetailImportGoods"
          element={<DetailImportGoods />}
        />
        <Route
          path="/Admin/BrowseReturnGoods"
          element={<BrowseReturnGoods />}
        />
        <Route
          path="/Admin/BrowseReturnGoods/DetailReturnGoods"
          element={<DetailReturnGoods />}
        />
        <Route path="/Admin/BrowseOrder" element={<BrowseOrder />} />
        <Route
          path="/Admin/BrowseOrder/DetailOrder"
          element={<DetailOrder />}
        />
        <Route
          path="/Admin/CheckReturnOrders"
          element={<CheckReturnOrders />}
        />
        <Route
          path="/Admin/CheckReturnOrders/DetailCheckReturnOrders"
          element={<DetailCheckReturnOrders />}
        />
        <Route path="/Admin/ProductPortfolio" element={<ProductPortfolio />} />
        <Route path="/Admin/ProductType" element={<ProductType />} />
        <Route path="/Admin/Products" element={<Products />} />
        <Route
          path="/Admin/Products/DetailProduct"
          element={<DetailProduct />}
        />
        <Route path="/Admin/Products/AddProduct" element={<AddProduct />} />
        <Route path="/Admin/NatureProduct" element={<NatureProduct />} />
        <Route path="/Admin/Supplier" element={<Supplier />} />
        <Route path="/Admin/Staff" element={<Staff />} />
        <Route path="/Admin/Staff/AddStaff" element={<AddStaff />} />
        <Route path="/Admin/Staff/StaffDetail" element={<StaffDetail />} />
        <Route path="/Admin/Calendar" element={<Calendar />} />
        <Route path="/Admin/Timesheets" element={<Timesheets />} />
        <Route path="/Admin/Client" element={<Client />} />
        <Route path="/Admin/Event" element={<Event />} />
        <Route path="/Admin/AddEvent" element={<AddEvent />} />
        <Route
          path="/Admin/Event/DetailEventBonus"
          element={<DetailEventBonus />}
        />
        <Route
          path="/Admin/Event/DetaiEventDiscount"
          element={<DetaiEventDiscount />}
        />
        <Route
          path="/Admin/Event/DetaiEventInvoiceDiscount"
          element={<DetaiEventInvoiceDiscount />}
        />
        {/* Quản lý kho ------------------------------------------*/}
        <Route path="/Warehouse" element={<Warehouse />} />
        <Route
          path="/Warehouse/ProductStatistics"
          element={<ProductStatistics />}
        />
        <Route
          path="/Warehouse/ProductStatistics/DetailProductStatisticsByMouth"
          element={<DetailProductStatisticsByMouth />}
        />
        <Route
          path="/Warehouse/ProductStatistics/DetailProductStatisticsByYear"
          element={<DetailProductStatisticsByYear />}
        />
        <Route path="/Warehouse/InvoiceOrder" element={<InvoiceOrder />} />
        <Route
          path="/Warehouse/InvoiceOrder/DetailInvoiceOrder"
          element={<DetailInvoiceOrder />}
        />
        <Route path="/Warehouse/InvoiceImport" element={<InvoiceImport />} />
        <Route
          path="/Warehouse/InvoiceImport/DetailInvoiceImport"
          element={<DetailInvoiceImport />}
        />
        <Route
          path="/Warehouse/InvoiceImport/DetailInvoiceEntered"
          element={<DetailInvoiceEntered />}
        />
        ImportGoodsFromSuppliers
        <Route
          path="/Warehouse/InvoiceImport/ImportGoodsFromSuppliers"
          element={<ImportGoodsFromSuppliers />}
        />
        <Route
          path="/Warehouse/InvoiceImport/ImportFeedback"
          element={<ImportFeedback />}
        />
        <Route path="/Warehouse/InvoiceReturn" element={<InvoiceReturn />} />
        <Route
          path="/Warehouse/InvoiceReturn/DetailInvoiceReturn"
          element={<DetailInvoiceReturn />}
        />
        <Route path="/Warehouse/OrderOut" element={<OrderOut />} />
        <Route
          path="/Warehouse/OrderOut/DetailOrderApproved"
          element={<DetailOrderApproved />}
        />
        <Route
          path="/Warehouse/OrderOut/DetailOrderDelivering"
          element={<DetailOrderDelivering />}
        />
        <Route
          path="/Warehouse/OrderOut/DetailOrderWareHouse"
          element={<DetailOrderWareHouse />}
        />
        <Route
          path="/Warehouse/OrderOut/DetailInvoicePreparing"
          element={<DetailInvoicePreparing />}
        />
        <Route
          path="/Warehouse/InvoiceNotReceived"
          element={<InvoiceNotReceived />}
        />
        <Route
          path="/Warehouse/InvoiceOrder/DetailInvoiceNotReceived"
          element={<DetailInvoiceNotReceived />}
        />
        <Route
          path="/Warehouse/InvoiceOfExchange"
          element={<InvoiceOfExchange />}
        />
        <Route
          path="/Warehouse/InvoiceOrder/DetailInvoiceOfExchange"
          element={<DetailInvoiceOfExchange />}
        />
        <Route path="/Warehouse/ProductImport" element={<ProductImport />} />
        <Route
          path="/Warehouse/ProductImport/PlanningImportProduct"
          element={<PlanningImportProduct />}
        />
        <Route
          path="/Warehouse/ProductalmostExpired"
          element={<ProductalmostExpired />}
        />
        <Route path="/Warehouse/ProductReturn" element={<ProductReturn />} />
        <Route
          path="/Warehouse/ProductReturn/PlanningReturnProduct"
          element={<PlanningReturnProduct />}
        />
        <Route path="/Warehouse/ProductRefund" element={<ProductRefund />} />
        <Route
          path="/Warehouse/ListProductPromotion"
          element={<ListProductPromotion />}
        />
        <Route
          path="/Warehouse/ListDestructionProducts"
          element={<ListDestructionProducts />}
        />
        <Route path="/Warehouse/ListSupplier" element={<ListSupplier />} />
        {/*-------------------------------------------------------------------------------*/}
        <Route path="/RollCall" element={<RollCall />} />
        <Route path="/SeeEvent" element={<SeeEvent />} />
        <Route
          path="/DetailSeeEventDiscount"
          element={<DetailSeeEventDiscount />}
        />
        <Route
          path="/DetailSeeEventInvoiceDiscount"
          element={<DetailSeeEventInvoiceDiscount />}
        />
        <Route path="/DetailSeeEventBonus" element={<DetailSeeEventBonus />} />
        <Route path="/TimesheetsStaff" element={<TimesheetsStaff />} />
        <Route path="/PaymentPage" element={<PaymentPage />} />
      </Routes>
    </div>
  );
}

export default App;
