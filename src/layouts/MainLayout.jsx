import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ScrollTop from "../components/ScrollTop/ScrollTop";
import WhatsAppButton from "../components/WhatsAppButton/WhatsAppButton";

function MainLayout() {
  return (
    <>
      <ScrollTop />
      <Navbar />
      <Outlet />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default MainLayout;