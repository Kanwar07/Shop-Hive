import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import LandingPage from "./pages/Landing/LandingPage";
import Layout from "./Layout";
import DetailPage from "./pages/Products/sections/DetailPage";
import ProductsPage from "./pages/Products/ProductsPage";
import Context from "./Context/Context";
import CartPage from "./pages/Cart/CartPage";
import ConfirmationPage from "./pages/Confirmation/ConfirmationPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="detail" element={<DetailPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="confirmation" element={<ConfirmationPage />} />
      </Route>
    )
  );

  return (
    <>
      <Context>
        <Toaster position="bottom-center" toastOptions={{ duration: 2000 }} />
        <RouterProvider router={router} />
      </Context>
    </>
  );
}

export default App;
