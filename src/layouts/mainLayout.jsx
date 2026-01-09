import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const MainLayout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className=" md:mt-17 mt-20  md:w-[90%] md:mx-auto px-2 md:px-0">
        <Outlet />
        {/* child components rendered here */}
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;
