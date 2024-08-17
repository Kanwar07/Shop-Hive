import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import shoppinglogo from "../assets/shoppinglogo.png";
import { ContextData } from "../Context/Context";

function NavBar() {
  const { cartquantity } = useContext(ContextData);

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
          <div className="relative">
            <NavLink to="/cart">Cart</NavLink>
            <div className="absolute text-[#000000] -top-4 -right-4 border border-[#000000] px-[2px] rounded bg-[#a78770]">
              {cartquantity}
            </div>
          </div>
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
