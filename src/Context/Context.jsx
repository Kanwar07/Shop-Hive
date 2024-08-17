import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const ContextData = createContext();

function Context({ children }) {
  const [products, setproducts] = useState([]);
  const [cartdata, setcartdata] = useState([]);
  const [total, settotal] = useState([]);
  const [oldtotal, setoldtotal] = useState(0);
  const [discountType, setdiscountType] = useState("");
  const [discountValue, setdiscountValue] = useState(0);
  const [buttonDisabled, setbuttonDisabled] = useState(false);
  const [productdetail, setproductdetail] = useState({});

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios("https://dummyjson.com/products");
        const dataWithQuantity = response.data.products.map((item) => ({
          ...item,
          quantity: 1,
        }));
        setproducts(dataWithQuantity);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchdata();
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const cartdatafromstorage = JSON.parse(
        localStorage.getItem("cart") || "[]"
      );
      const carttotalfromstorage =
        parseFloat(localStorage.getItem("total")) || 0;

      setcartdata(cartdatafromstorage);
      settotal(carttotalfromstorage);
      setoldtotal(carttotalfromstorage);
    }
  }, []);

  const getcarddata = (id, price) => {
    if (itemsinCart(id)) {
      toast.error("Item Already in Cart");
    } else {
      const foundProduct = products.find((product) => product.id === id);
      const parsedTotal = parseFloat(total);
      const newTotal = parsedTotal + price;
      const updatedCartData = [...cartdata, foundProduct];
      setcartdata(updatedCartData);
      localStorage.setItem("cart", JSON.stringify(updatedCartData));
      settotal(newTotal.toFixed(2));
      setoldtotal(newTotal.toFixed(2));
      localStorage.setItem("total", newTotal.toFixed(2));
      toast("Item added to cart, Kindly increase the quantity in Cart", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

  const itemsinCart = (id) => {
    return cartdata.some((item) => item.id === id);
  };

  const removeCartItems = (id) => {
    let updatedCart = cartdata.filter((item) => item.id !== id);
    let updatedTotal = updatedCart
      .map((item) => item.price * item.quantity)
      .reduce((total, n) => total + n, 0)
      .toFixed(2);
    setcartdata(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    settotal(updatedTotal);
    localStorage.setItem("total", JSON.stringify(updatedTotal));
    setoldtotal(updatedTotal);
    toast("Item removed from cart", {
      icon: "👏",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  const updateQuantity = (id, value) => {
    if (value === 0) {
      removeCartItems(id);
    } else {
      let updatedCart = cartdata.map((item) =>
        item.id === id ? { ...item, quantity: value } : item
      );
      let updatedTotal = updatedCart
        .map((item) => item.price * item.quantity)
        .reduce((total, n) => total + n)
        .toFixed(2);
      setcartdata(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      settotal(updatedTotal);
      localStorage.setItem("total", updatedTotal);
      setoldtotal(updatedTotal);
    }
  };

  const discountedPrice = () => {
    if (total >= 20 && discountValue <= 20 && discountType !== "") {
      if (discountValue === 0) {
        toast("Discount Apllied but of 0 Amount", {
          icon: "👏",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      } else if (discountType === "number") {
        settotal((total - discountValue).toFixed(2));
        toast("Discount Apllied!!!", {
          icon: "👏",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      } else {
        let discount = total * (discountValue / 200);
        settotal((total - discount).toFixed(2));
        toast("Discount Apllied!!!", {
          icon: "👏",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      }
      setbuttonDisabled(true);
    } else if (discountValue > 20) {
      toast("Maximum up to $10 or 10% off is available.", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } else if (discountValue <= 20 && discountType === "") {
      toast("Please select your Discount Type", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } else {
      toast("Please add more items to cart to awail discount", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

  const removeDiscount = () => {
    settotal(oldtotal);
    setdiscountType("");
    setdiscountValue(0);
    setbuttonDisabled(false);
  };

  const orderconfirm = () => {
    localStorage.removeItem("cart");
    localStorage.removeItem("total");
    localStorage.removeItem("cartquantity");
    toast.success("Order Confirmed");
    setcartdata([]);
    settotal(0);
    setoldtotal(0);
  };

  return (
    <ContextData.Provider
      value={{
        products,
        cartdata,
        setcartdata,
        total,
        settotal,
        removeCartItems,
        updateQuantity,
        setdiscountType,
        discountedPrice,
        discountValue,
        setdiscountValue,
        buttonDisabled,
        setbuttonDisabled,
        removeDiscount,
        setoldtotal,
        orderconfirm,
        getcarddata,
        productdetail,
        setproductdetail,
      }}
    >
      {children}
    </ContextData.Provider>
  );
}

export default Context;
