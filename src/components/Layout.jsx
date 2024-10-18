import { Outlet } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { HashLoader} from "react-spinners";
import Header from "./header";
import "./Layout.css"; // Assurez-vous d'importer le fichier CSS

const Layout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate a loading time of 1 second

    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      {loading ? (
        <div className="spinner-container">
          <HashLoader />
        </div>
      ) : (
        <>
          <Header />
          <Navbar />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;