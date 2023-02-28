import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    // header
    <header>
      {/* <div className={`${styles.nav} ${styles.container}`}> */}
      <div className={styles.nav}>
        {/* <!-- header title --> */}
        <Link to="/" className={styles.title}>
          QULQAL Blog
        </Link>
        {/* <!-- nav items --> */}
        <div className={styles.nav_items}>
          <Link to="/profile" className={styles.nav_item}>
            Profile
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
