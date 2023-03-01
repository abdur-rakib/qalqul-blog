import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    // header
    <header>
      {/* <div className={`${styles.nav} ${styles.container}`}> */}
      <div className={styles.nav}>
        {/* <!-- header title --> */}
        <NavLink to="/" className={styles.title}>
          QALQUL Blog
        </NavLink>
        {/* <!-- nav items --> */}
        <div className={styles.nav_items}>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              [styles.nav_item, isActive ? styles.active : null]
                .filter(Boolean)
                .join(" ")
            }
          >
            Profile
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
