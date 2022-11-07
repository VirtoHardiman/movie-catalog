import React from "react";
import PropTypes from "prop-types";

import styles from "./HeroSection.module.css";

const HeroSection = ({ movie }) => {
  return (
    <div className={styles.heroWrapper}>
      <img src={movie.poster_path} alt="poster image" />
      <h1>{movie.title}</h1>
      <h3>{movie.rating} / 10</h3>
      <p>{movie.release_date}</p>
    </div>
  );
};

HeroSection.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default HeroSection;
