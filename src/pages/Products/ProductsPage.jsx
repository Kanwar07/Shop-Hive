import React, { useContext } from "react";
import { ContextData } from "../../Context/Context";
import ProductCard from "../../components/ProductCard";
import { motion } from "framer-motion";

function ProductsPage() {
  const { products } = useContext(ContextData);

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div className="h-full bg-custom-gradient">
      <div className="w-screen flex flex-col justify-between h-full pt-6 pb-6 px-[10%]">
        {products.length !== 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            className="grid grid-cols-3 gap-4 p-4 w-[100%] pt-4 pb-4 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-2 max-xl:grid-cols-3"
          >
            {products.length !== 0 &&
              products.map((product, index) => {
                return (
                  <motion.div variants={itemVariants} key={index}>
                    <ProductCard product={product} />
                  </motion.div>
                );
              })}
          </motion.div>
        ) : (
          <div className="h-screen w-full flex justify-center items-center">
            Loading...
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductsPage;
