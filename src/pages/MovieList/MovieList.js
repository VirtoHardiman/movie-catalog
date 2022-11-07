import React, { useEffect, useState } from "react";

import { Navbar } from "../../components/Navbar";
import { MovieCard } from "../../components/MovieCard";
import { SearchBar } from "../../components/SearchBar";
import { Paginate } from "../../components/Paginate";
import styles from "./MovieList.module.css";
import handler from "./MovieList.handler";
const { fetchMovies } = handler;

const MovieList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState("");
  const [error, setError] = useState("");

  const getMovies = async (params) => {
    setIsLoading(true);
    const pageNumber = sessionStorage.getItem("pageNumber") || sessionStorage.setItem("pageNumber", 1);
    const data = await fetchMovies(params, pageNumber, setError);
    setMovies(data);
    setPageNumber(pageNumber);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, [pageNumber]);

  return (
    <div className={styles.pageBackground}>
      <Navbar theme="light" />
      <div className={styles.pageWrapper} data-testid="movie-list">
        <>
          <SearchBar handleSearch={getMovies} />
          {isLoading && <h1>Fetch Data..</h1>}
          {error && <h1>{error}</h1>}
          {movies.length > 0 ? movies.map((movie) => <MovieCard key={movie.id} movie={movie} />) : <p className={styles.emptyState}>No movies found</p>}
          <Paginate pageNumber={pageNumber} setPageNumber={setPageNumber} />
        </>
      </div>
    </div>
  );
};

export default MovieList;
