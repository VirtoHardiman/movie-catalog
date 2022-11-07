import React, { useEffect } from "react";
import PropTypes from "prop-types";

import styles from "./Toast.module.css";

const Toast = ({ condition, setPatchStatus }) => {
  const toastTimer = () => {
    setTimeout(() => {
      setPatchStatus("");
    }, 2000);
  };
  useEffect(() => {
    toastTimer();
  }, []);

  return (
    <div className={condition == "Comment added" ? styles.success : styles.error} data-testid="toast">
      <p>{condition}</p>
    </div>
  );
};

Toast.propTypes = {
  condition: PropTypes.string.isRequired,
  setPatchStatus: PropTypes.func.isRequired,
};

export default Toast;
