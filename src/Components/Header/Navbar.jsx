import React from "react";
import { NavLink } from "react-router";
import logo from "../../assets/logo.png";
import { Home } from "lucide-react";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive ? "font-semibold border-b-2 border-primary " : "hover:font-bold";

  const links = (
    <>
      <li className="mx-2">
        <NavLink to="/" className={linkClass}>
          <img src="./icon/home-icon.svg" alt="" />
          Home
        </NavLink>
      </li>
      <li className="mx-2">
        <NavLink to="/apps" className={linkClass}>
          <img src="./icon/apps-icon.svg" alt="" />
          Apps
        </NavLink>
      </li>
      <li className="mx-2">
        <NavLink to="/installation" className={linkClass}>
          <img src="./icon/installation-icon.svg" alt="" />
          Installation
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar max-w-7xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        <img src={logo} alt="logo" className="w-10" />
        <span className="btn btn-ghost text-xl">Hero Store</span>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end">
        <button className="btn btn-primary">Contribute</button>
      </div>
    </div>
  );
};

export default Navbar;
