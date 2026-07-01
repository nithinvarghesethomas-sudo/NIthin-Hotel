import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Category from "./pages/Category";
import FoodDetails from "./pages/FoodDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import Contact from "./pages/Contact";
import Wishlist from "./pages/Wishlist";
import Offers from "./pages/Offers";
import NotFound from "./pages/NotFound";

export default function RoutesComponent() {
  return (
    <Routes>

      <Route element={<MainLayout />}>

        <Route path="/" element={<Home />} />

        <Route path="/menu" element={<Menu />} />

        <Route path="/offers" element={<Offers />} />

        <Route path="/category/:id" element={<Category />} />

        <Route path="/food/:id" element={<FoodDetails />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/wishlist" element={<Wishlist />} />

        <Route path="/checkout" element={<Checkout />} />

        <Route path="/success" element={<OrderSuccess />} />

        <Route path="/contact" element={<Contact />} />

      </Route>

      <Route
        path="*"
        element={<NotFound />}
      />

    </Routes>
  );
}