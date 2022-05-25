import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import Loading from "../Shared/Loading";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  if (adminLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label for="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}

          {admin ? (
            <>
              <li>
                <Link to="/dashboard">My Profile</Link>
              </li>
              <li>
                <Link to="/dashboard/make-admin">Make Admin</Link>
              </li>

              <li>
                <Link to="/dashboard/add-product">Add A Product</Link>
              </li>
              <li>
                <Link to="/dashboard/manage-all-orders">Manage Orders</Link>
              </li>
              <li>
                <Link to="/dashboard/manage-products">Manage Products</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/dashboard">My Profile</Link>
              </li>
              <li>
                <Link to="/dashboard/my-orders">My Orders</Link>
              </li>
              <li>
                <Link to="/dashboard/add-review">Add A Review</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
