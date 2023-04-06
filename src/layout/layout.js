import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Nav } from "../components/navbar/nav";
import i18next from "i18next";
import Footer from "../components/footer/footer";

import MobileNav from "../components/mobileNav";

const Layout = () => {
  const handleClick = (e) => {
    i18next.changeLanguage(e.target.value);
  };
  return (
    <Suspense fallback="loading">
      <div className="app-wrap">
        <Nav onClick={(e) => handleClick(e)} />
        <MobileNav />
        <Outlet />
        <Footer />
      </div>
    </Suspense>
  );
};

export default Layout;
