import React from "react";
import { BiSearch } from "react-icons/bi";
const BelowNav = () => {
  return (
    <div className="navbar bg-base-900">
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
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl bg-orange-500/90 hover:bg-orange-500/80">
          All Catagories
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className="relative w-full">
          <input className="input input-bordered w-full  border-cyan-600 rounded-full" />
          <BiSearch
            className="absolute text-gray-300 top-3 right-3"
            size={25}
          />
        </div>
      </div>
      <div className="navbar-end">
        <a className="btn bg-gray-800 text-white">Sell Your Item</a>
      </div>
    </div>
  );
};

export default BelowNav;
