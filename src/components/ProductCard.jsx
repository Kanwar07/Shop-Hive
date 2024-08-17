import React, { useContext } from "react";
import { ContextData } from "../Context/Context";
import info from "../assets/info.png";
import { Rating } from "@mui/material";
import { NavLink } from "react-router-dom";

function ProductCard({ product }) {
  const { cartdata, removeCartItems, getcarddata, senddata } =
    useContext(ContextData);

  return (
    <div className="flex flex-col justify-between items-between shadow-custom-lg bg-[#d3d3d3] rounded-2xl h-[400px] p-6">
      <div className="flex w-full justify-center">
        <img
          src={product.thumbnail}
          alt={product.title}
          width={180}
          height={180}
        />
      </div>
      <div className="text-[20px] flex flex-col justify-between">
        <div>{product.title}</div>
        <NavLink to="/detail" onClick={() => senddata(product)}>
          <img src={info} alt="info" width={20} height={20} />
        </NavLink>
      </div>
      <div className="flex flex-row justify-between">
        <div>
          <div className="flex flex-col items-start">
            <div className="text-[16px] pr-2">${product.price}</div>
            <div className="text-[#FF0000] text-[14px]">
              {product.discountPercentage}% off
            </div>
            <div>
              <Rating
                name="read-only"
                value={product.rating}
                precision={0.5}
                size="small"
                readOnly
              />
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-row items-end mx-4">
            {cartdata.filter((data) => data.title === product.title).length >
            0 ? (
              <button
                className="text-[#000000] bg-[#bcbcbc] pt-2 pr-2 pb-2 pl-2 rounded-lg mr-2"
                onClick={() => removeCartItems(product.id)}
              >
                REMOVE
              </button>
            ) : (
              <button
                className="text-[#000000] bg-[#bcbcbc] pt-2 pr-2 pb-2 pl-2 rounded-lg mr-2"
                onClick={() => getcarddata(product.id, product.price)}
              >
                ADD
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
