import React, { useContext } from "react";
import { ContextData } from "../Context/Context";
import deleteicon from "../assets/deleteicon.png";

function CartCard({ product }) {
  const { updateQuantity } = useContext(ContextData);

  return (
    <div className="flex flex-row justify-start items-center bg-[#ffffff] rounded-2xl mb-4 max-lg:mb-4 max-sm:mb-4">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="mr-20 size-20 max-md:mr-4"
      />
      <div className="flex flex-col items-start">
        <div className="font-bold py-4 px-2">{product.title}</div>
        <div className="flex flex-row justify-start items-center gap-4 px-4 pt-2 pb-4 mb-0 max-sm:gap-2">
          <button
            onClick={() => updateQuantity(product.id, product.quantity - 1)}
            className="p-2"
          >
            -
          </button>
          <div className="font-bold border border-[#000000] rounded px-2 ">
            {product.quantity}
          </div>
          <button
            onClick={() => updateQuantity(product.id, product.quantity + 1)}
            className="p-2"
          >
            +
          </button>
          <button
            onClick={() => updateQuantity(product.id, 0)}
            className="flex items-center mr-4"
          >
            <img src={deleteicon} alt="deleteicon" className="size-8" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
