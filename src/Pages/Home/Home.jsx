import React, { useContext } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./home.css";
import logo from "../../../public/logo.jpg";
import { AuthContext } from "../../Context/Authentication/Authentication";
import toast from "react-hot-toast";
import Footer from "../../components/Footer";

const Home = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = async () => {
    const response = await logOut();
    toast.success("Log out Successfully");
  };
  return (
    <div>
      {user && (
        <div className="navbar bg-base-100 container mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/products" className="text-lg">
                    Product
                  </Link>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost text-3xl navLogo font-bold">
            Peak-Market
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink to="/products" className="text-lg">
                  Product
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <a
              className="btn button text font-bold text-xl"
              onClick={handleLogOut}
            >
              LogOut
            </a>
          </div>
        </div>
      )}

      {/* outlet  */}
      <div className="min-h-[calc(100vh-130px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
