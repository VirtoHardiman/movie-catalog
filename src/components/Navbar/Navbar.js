import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./Navbar.module.css";
const Navbar = ({ theme }) => {
  return (
    <nav className={theme === "light" ? styles.light : styles.dark}>
      <Link to="/">MoView</Link>
    </nav>
  );
};

Navbar.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default Navbar;
