import React from "react";
import shopping from "../../../assets/shopping.avif";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function HeroSection() {
  return (
    <>
      <div className="bg-custom-gradient w-screen h-full flex flex-row justify-around gap-8 items-center pt-10 px-[10%] max-lg:flex-col">
        <div className="flex flex-col -mt-20 gap-8 my-10 max-lg:-mt-10 max-sm:mt-6">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{
              once: true,
            }}
            className="text-[#000000] text-[46px]"
          >
            Welcome to ShopHive
          </motion.h1>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
            viewport={{
              once: true,
            }}
          >
            Your One-Stop Shop for Everything You Love. Explore Now!
          </motion.p>
          <motion.button
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, delay: 2, ease: "easeInOut" }}
            viewport={{
              once: true,
            }}
            className="border border-[#000000] px-4 py-2 rounded-xl shadow-none hover:shadow-custom-lg w-min"
          >
            <NavLink to="/products">Explore</NavLink>
          </motion.button>
        </div>
        <motion.div
          initial={{ scale: 0, opacity: 1 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          viewport={{
            once: true,
          }}
          className="w-[30rem] h-[30rem] max-md:w-[20rem] max-md:h-[20rem] max-lg:w-[25rem] max-lg:h-[25rem]"
        >
          <img
            src={shopping}
            alt="shopping"
            className="rounded-xl shadow-custom-lg"
          />
        </motion.div>
      </div>
    </>
  );
}

export default HeroSection;
