import React, { useState, useEffect } from "react";

// components
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Preloader from "../../components/Preloader";

export default function Dashboard() {
  return (
    <>
      <Preloader show={loaded ? false : true} />
      <Sidebar />

      <main className="content">
        <Navbar />
        <div>Dashboard</div>
        <Footer />
      </main>
    </>
  );
}
