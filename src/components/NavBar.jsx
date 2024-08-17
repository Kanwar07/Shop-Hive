import React from "react";
import { NavLink } from "react-router-dom";
import shoppinglogo from "../assets/shoppinglogo.png";

function NavBar() {
  return (
    <nav className="w-screen flex flex-row py-8 justify-around items-center rounded-b-lg shadow-custom-lg max-sm:flex-col">
      <div className="flex flex-row items-end max-sm:mb-4">
        <img
          src={shoppinglogo}
          alt="shoppinglogo"
          width={28}
          height={28}
          className="mr-2"
        />
        <button>
          <NavLink to="/">ShopHive</NavLink>
        </button>
      </div>
      <div className="flex flex-row justify-between gap-2 max-sm:gap-8">
        <div className="rounded-xl p-2 shadow-none transition ease-in-out duration-500 hover:shadow-2xl hover:bg-[#a78770]">
          <NavLink to="/products">Products</NavLink>
        </div>
        <div className="rounded-xl p-2 shadow-none transition ease-in-out duration-500 hover:shadow-2xl hover:bg-[#a78770]">
          <NavLink to="/cart">Cart</NavLink>
        </div>
      </div>
      <div className="flex flex-row justify-between gap-2 max-sm:gap-8">
        <div className="rounded-xl p-2 shadow-none transition ease-in-out duration-500 hover:shadow-2xl hover:bg-[#a78770]">
          <NavLink to="/register">Register</NavLink>
        </div>
        <div className="rounded-xl p-2 shadow-none transition ease-in-out duration-500 hover:shadow-2xl hover:bg-[#a78770]">
          <NavLink to="/login">Login</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
