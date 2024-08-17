import React, { useContext } from "react";
import { ContextData } from "../../../Context/Context";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function CartTotal() {
  const {
    total,
    setdiscountType,
    discountedPrice,
    discountValue,
    setdiscountValue,
    buttonDisabled,
    removeDiscount,
    orderconfirm,
    cartdata,
  } = useContext(ContextData);

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      viewport={{
        once: true,
      }}
      className="flex flex-col justify-center items-center gap-8 bg-[#ffffff] bg-opacity-60 text-[#00000] h-min pt-4 pb-4 pl-8 pr-8 rounded-2xl"
    >
      <div className="text-[#000000] text-[20px] font-bold">
        Cart Total: ${total}
      </div>
      {buttonDisabled ? (
        <div className="flex flex-col items-center">
          <div className="mb-6 font-bold">Discount Applied!!!</div>
          <button
            onClick={removeDiscount}
            className="flex justify-center border border-[#000000] text-[#ffffff] shadow-none hover:shadow-custom-lg bg-[#a78770] px-4 py-2 rounded-lg"
          >
            Remove
          </button>
        </div>
      ) : (
        <div className="flex flex-row justify-around gap-8 max-sm:flex-col">
          <div className="flex-1 flex flex-col items-center gap-4">
            <input
              type="number"
              min="0"
              max="20"
              className="p-2 border border-[#FF8213] bg-[#FFD7B5CC] rounded-xl w-full text-center"
              value={discountValue}
              onChange={(e) => setdiscountValue(e.target.value)}
            />
            <p>Maximun discount can be of 20 dollars or 20% off the amount</p>
          </div>
          <div className="flex flex-col gap-4 flex-1">
            <div className="flex flex-row gap-4">
              <div className="flex gap-2">
                <input
                  type="radio"
                  id="number"
                  name="discount"
                  value="number"
                  onChange={(e) => setdiscountType(e.target.value)}
                />
                <label htmlFor="number">Amount</label>
              </div>
              <div className="flex gap-2">
                <input
                  type="radio"
                  id="percentage"
                  name="discount"
                  value="percentage"
                  onChange={(e) => setdiscountType(e.target.value)}
                />
                <label htmlFor="percentage">Percentage</label>
              </div>
            </div>
            <button
              onClick={discountedPrice}
              className="border border-[#000000] text-[#ffffff] shadow-none hover:shadow-custom-lg bg-[#a78770] px-4 py-2 rounded-lg"
            >
              Apply Discount
            </button>
          </div>
        </div>
      )}
      <NavLink to="/confirmation">
        <div className="flex justify-center items-center mx-10 my-2 text-[#000000] text-[24px]">
          {cartdata.length !== 0 ? (
            <button
              onClick={orderconfirm}
              className="border border-[#000000] text-[#ffffff] shadow-none hover:shadow-custom-lg bg-[#a78770] px-4 py-2 rounded-lg"
            >
              Place Order
            </button>
          ) : null}
        </div>
      </NavLink>
    </motion.div>
  );
}

export default CartTotal;
