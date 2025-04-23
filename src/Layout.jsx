import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./components";
import Footer from "./components/footer";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
