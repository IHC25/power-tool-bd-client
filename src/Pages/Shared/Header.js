import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  const menuItems = (
    <>
      {user && (
        <li>
          <Link to="/dashboard" className="btn btn-ghost normal-case">
            Dashboard
          </Link>
        </li>
      )}
      <li>
        <Link to="/tools" className="btn btn-ghost normal-case">
          Tools
        </Link>
      </li>
      <li>
        <Link to="/reviews" className="btn btn-ghost normal-case">
          Reviews
        </Link>
      </li>
      <li>
        <Link to="" className="btn btn-ghost normal-case">
          Blogs
        </Link>
      </li>
      <li>
        <Link to="/about" className="btn btn-ghost normal-case">
          About
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-neutral text-neutral-content">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          powerToolBd
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end px-4">
        {!user ? (
          <Link to="/login">Login</Link>
        ) : (
          <>
            <Link to="">{user?.displayName}</Link>
            <button
              onClick={() => {
                signOut(auth);
              }}
              className="btn btn-ghost normal-case"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
