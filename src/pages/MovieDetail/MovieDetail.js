import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Navbar } from "../../components/Navbar";
import { HeroSection } from "../../components/HeroSection";
import { SummarySection } from "../../components/SummarySection";
import { AddComment } from "../../components/AddComment";
import { CommentList } from "../../components/CommentList";
import { Toast } from "../../components/Toast";
import styles from "./MovieDetail.module.css";
import handler from "./MovieDetail.handler.js";
const { fetchMovie, saveUpdatedComments } = handler;

const MovieDetail = () => {
  // add default value to prevent undefined useParams value causing error in render test
  const id = useParams().movieId || "1";
  const movieId = id.slice(6);
  const [movie, setMovie] = useState({});
  const [patchStatus, setPatchStatus] = useState("");

  const getMovie = async () => {
    const data = await fetchMovie(movieId);
    setMovie(data);
  };

  const handleSaveComment = async (comment) => {
    const updatedComments = [...movie.comments, comment];
    const response = await saveUpdatedComments(updatedComments, movieId);
    if (response == "Comment added") {
      setMovie({
        ...movie,
        comments: updatedComments,
      });
      setPatchStatus("Comment added");
      return true;
    }
    setPatchStatus(response);
    return false;
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className={styles.pageBackground} data-testid="movie-detail">
      {patchStatus && <Toast condition={patchStatus} setPatchStatus={setPatchStatus} />}
      <Navbar theme="dark" />
      <HeroSection movie={movie} />
      <SummarySection movie={movie} />
      <div className={styles.pageWrapper}>
        <AddComment saveComment={handleSaveComment} />
        <CommentList comments={movie.comments} />
      </div>
    </div>
  );
};

export default MovieDetail;
