"use client";

import React from "react";
import { useState, useEffect } from "react";
import Preloader from "../preloader/preloader";
import Header from "../header/header";
import Footer from "../footer/footer";

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleInitialLoad = () => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
    };

    if (typeof window !== "undefined") {
      const isInitialLoad = !window.history.state?.key;
      if (isInitialLoad) {
        handleInitialLoad();
      } else {
        setLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []); // Removed unnecessary dependencies: pathname, searchParams

  return (
    <>
      {loading && <Preloader />}
      <div className={`page-wrapper ${loading ? "loading" : ""}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
      <a
        href="#"
        data-target="html"
        data-target-offset="0"
        className="scroll-to-target scroll-to-top"
      >
        <i className="material-icons">keyboard_arrow_up</i>
      </a>
    </>
  );
};

export default Layout;
