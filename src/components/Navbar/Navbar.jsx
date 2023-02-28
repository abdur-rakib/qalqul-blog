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
        <Link to="/" className="title">
          QULQAL Blog
        </Link>
        {/* <!-- nav items --> */}
        <div className="nav-items">
          <Link to="/profile" className="nav-item">
            Profile
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
