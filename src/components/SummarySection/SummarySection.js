import React from "react";
import PropTypes from "prop-types";

import styles from "./SummarySection.module.css";

const SummarySection = ({ movie }) => {
  return (
    <div className={styles.summaryWrapper}>
      <p>{movie.overview}</p>
      <img src={movie.character} alt="movie character" />
    </div>
  );
};

SummarySection.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default SummarySection;
