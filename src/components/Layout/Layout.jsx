import css from "./Layout.module.css";

import AppBar from "../AppBar/AppBar";

const Layout = ({ children }) => {
  return (
    <div className={css.mainContainer}>
      <header>
        <AppBar />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
