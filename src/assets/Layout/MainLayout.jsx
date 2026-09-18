import React from "react";
import NavBar from "../Components/layout/NavBar";
import Footer from "../Components/layout/Footer";
import { Outlet } from "react-router-dom";
import BottomBanner from "../Components/layout/BottomBanner";

const MainLayout = () => {
  return (
    <>
      <NavBar />

      <main className="min-h-screen">
        <Outlet />
      </main>

      <BottomBanner />
      <Footer />
    </>
  );
};

export default MainLayout;