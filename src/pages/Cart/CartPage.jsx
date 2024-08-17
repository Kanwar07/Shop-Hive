import React, { useContext } from "react";
import { ContextData } from "../../Context/Context";
import CartCard from "../../components/CartCard";
import CartTotal from "./sections/CartTotal";
import { motion } from "framer-motion";

function CartPage() {
  const { cartdata } = useContext(ContextData);

  return (
    <>
      <div className="flex flex-col pt-6 px-[10%] bg-custom-gradient h-full max-sm:pt-0">
        <div className="flex flex-row justify-around my-4 max-lg:flex-col">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="flex-1 grid grid-col-1 px-4 mb-0  max-lg:mb-10 max-sm:mb-10"
          >
            {cartdata.length !== 0 ? (
              cartdata.map((cart, index) => {
                return (
                  <motion.div key={index}>
                    <CartCard product={cart} />
                  </motion.div>
                );
              })
            ) : (
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="mt-10 mb-80 max-md:mb-0"
              >
                Kindly add products from products page
              </motion.div>
            )}
          </motion.div>
          <div className="flex-1">
            <CartTotal />
          </div>
        </div>
      </div>
    </>
  );
}

export default CartPage;
