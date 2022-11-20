import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./MovieCard.module.css";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const { id, title, rating, poster_path } = movie;

  return (
    <div
      className={styles.movieCard}
      onClick={() => navigate(`/movie/movie-${id}`)}
    >
      <div className={styles.cardDescription}>
        <p className={styles.cardTitle}>{title}</p>
        <p className={styles.cardTitle}>{title}</p>
        <p className={styles.cardRating}>{rating} / 10</p>
      </div>
      <img
        src={poster_path}
        alt="movie poster"
        className={styles.poster}
        width="683px"
        height="364px"
        loading="lazy"
      />
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieCard;
