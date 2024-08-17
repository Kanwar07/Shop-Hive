import React from "react";
import shoppinglogo from "../assets/shoppinglogo.png";

function Footer() {
  return (
    <footer>
      <div className="w-screen flex flex-col backdrop-blur-sm shadow-custom-lg text-[#000000] items-center py-10">
        <div className="flex flex-row items-center mb-4">
          <div className="mr-2">
            <img src={shoppinglogo} alt="shoppinglogo" width={50} height={50} />
          </div>
          <div>ShopHive</div>
        </div>
        <p className="px-10 text-center">
          ShopHive is your one stop solution to the buy the latest trending
          items with India&apos;s leading e-commerce platform
        </p>
      </div>
    </footer>
  );
}

export default Footer;
