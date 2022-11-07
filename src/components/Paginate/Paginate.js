import React from "react";
import PropTypes from "prop-types";

import styles from "./Paginate.module.css";

const Paginate = ({ pageNumber, setPageNumber }) => {
  const pages = [1, 2, 3];

  const changePageNumber = (selectedPage) => {
    sessionStorage.setItem("pageNumber", selectedPage);
    setPageNumber(selectedPage);
  };

  return (
    <div className={styles.buttonWrapper}>
      {pages.map((page, index) =>
        page == pageNumber ? (
          <button className={styles.currentPage} key={index}>
            {page}
          </button>
        ) : (
          <button onClick={() => changePageNumber(page)} key={index}>
            {page}
          </button>
        )
      )}
    </div>
  );
};

Paginate.propTypes = {
  pageNumber: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]),
  setPageNumber: PropTypes.func.isRequired,
};

export default Paginate;
