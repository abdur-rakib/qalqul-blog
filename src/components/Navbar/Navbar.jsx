import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { setSearchText } from "../../store/postSlice";
import styles from "./Navbar.module.css";

const Navbar = () => {
  // redux staff
  const { searchText } = useSelector((state) => state.post);
  const dispatch = useDispatch();
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
        {/* search input */}
        <input
          type="text"
          className={styles.input}
          placeholder="Search by tag"
          value={searchText}
          onChange={(e) => dispatch(setSearchText(e.target.value))}
        />
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
