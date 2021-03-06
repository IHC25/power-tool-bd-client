import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/Home/About";
import Home from "./Pages/Home/Home";
import Reviews from "./Pages/Home/Reviews";
import Tools from "./Pages/Home/Tools";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import RequireAuth from "./Pages/Login/RequireAuth";
import Purchase from "./Pages/Purchase/Purchase";
import Footer from "./Pages/Shared/Footer";
import Header from "./Pages/Shared/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrder from "./Pages/Dashboard/MyOrder";
import AddAReview from "./Pages/Dashboard/AddAReview";
import MyProfile from "./Pages/Dashboard/MyProfile";
import Payment from "./Pages/Dashboard/Payment";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin";
import AddProduct from "./Pages/Dashboard/AddProduct";
import NotFound from "./Pages/Shared/NotFound";
import Blogs from "./Pages/Home/Blogs";
import MyPortfolio from "./Pages/Home/MyPortfolio";
import ManageProducts from "./Pages/Dashboard/ManageProducts";
import ManageAllOrders from "./Pages/Dashboard/ManageAllOrders";
import RequireAdmin from "./Pages/Login/RequireAdmin";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/tools" element={<Tools></Tools>}></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="add-review" element={<AddAReview></AddAReview>}></Route>
          <Route path="my-orders" element={<MyOrder></MyOrder>}></Route>
          <Route
            path="add-product"
            element={
              <RequireAdmin>
                <AddProduct></AddProduct>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="make-admin"
            element={
              <RequireAdmin>
                <MakeAdmin></MakeAdmin>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manage-products"
            element={
              <RequireAdmin>
                <ManageProducts></ManageProducts>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manage-all-orders"
            element={
              <RequireAdmin>
                <ManageAllOrders></ManageAllOrders>
              </RequireAdmin>
            }
          ></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
        </Route>
        <Route
          path="/tools/:toolId"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route
          path="/my-portfolio"
          element={<MyPortfolio></MyPortfolio>}
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
