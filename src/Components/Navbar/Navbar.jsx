import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const linkCenter = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-lg font-bold text-blue-500 hover:text-blue-600"
              : "text-lg hover:bg-blue-100 text-gray-500 font-semibold hover:text-blue-500 hover:underline"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/findTutors"
          className={({ isActive }) =>
            isActive
              ? "text-lg font-bold text-blue-500 hover:text-blue-600"
              : "text-lg hover:bg-blue-100 text-gray-500 font-semibold hover:text-blue-500 hover:underline"
          }
        >
          Find Tutors
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addTutorial"
          className={({ isActive }) =>
            isActive
              ? "text-lg font-bold text-blue-500 hover:text-blue-600"
              : "text-lg hover:bg-blue-100 text-gray-500 font-semibold hover:text-blue-500 hover:underline"
          }
        >
          Add Tutorial 
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myTutorial"
          className={({ isActive }) =>
            isActive
              ? "text-lg font-bold text-blue-500 hover:text-blue-600"
              : "text-lg hover:bg-blue-100 text-gray-500 font-semibold hover:text-blue-500 hover:underline"
          }
        >
          My Tutorial
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myBookedTutors"
          className={({ isActive }) =>
            isActive
              ? "text-lg font-bold text-blue-500 hover:text-blue-600"
              : "text-lg hover:bg-blue-100 text-gray-500 font-semibold hover:text-blue-500 hover:underline"
          }
        >
          My Booked Tutors
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="sticky top-0 z-50 shadow-2xl mb-2">
      <div className="navbar bg-base-100  xl:px-14 lg:px-7 shadow-2xl xl:py-4 py-2">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {linkCenter}
            </ul>
          </div>
          <a className="font-bold text-gray-800 text-2xl">TutorSphere</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{linkCenter}</ul>
        </div>
        <div className="navbar-end">
          <a className="text-xl font-semibold underline transition">Login</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
