import css from "./Layout.module.css";

import AppBar from "../AppBar/AppBar";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className={`${css.mainContainer} ${isHomePage ? css.homePage : ""}`}>
      <header className={css.header}>
        <AppBar />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
