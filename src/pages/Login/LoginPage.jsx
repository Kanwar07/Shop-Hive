import React from "react";
import shopping from "../../assets/shopping.avif";
import LoginCard from "../../components/LoginCard";
import { motion } from "framer-motion";

function LoginPage() {
  return (
    <>
      <div className="bg-custom-gradient w-screen h-full flex flex-row justify-around gap-8 items-center py-6 px-[10%] max-lg:flex-row max-md:flex-col max-md:pt-10">
        <LoginCard />
        <motion.div
          initial={{ scale: 0, opacity: 1 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          viewport={{
            once: true,
          }}
          className="flex items-center w-[30rem] h-[30rem] max-lg:w-[25rem] max-lg:h-[25rem] max-md:w-[20rem] max-md:h-[20rem]"
        >
          <img
            src={shopping}
            alt="shopping"
            className="rounded-xl transition ease-in-out delay-50 duration-500 shadow-xl hover:scale-110 hover:bg-black hover:shadow-custom-lg"
          />
        </motion.div>
      </div>
    </>
  );
}

export default LoginPage;
