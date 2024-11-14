import { Outlet } from "react-router-dom";
import { ReactNode } from "react";
import Header from "../../../layouts/header/Header";
import Footer from "../../../layouts/footer/Footer";

const MainRoot = (): ReactNode => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainRoot;
