import React from "react";
import PropTypes from "prop-types";

import styles from "./CommentList.module.css";

const CommentList = ({ comments = [] }) => {
  return (
    <div className={styles.commentsWrapper} data-testid="comment-list">
      {comments.map((comment, index) => (
        <div key={index} className={styles.commentCard}>
          <p className={styles.comment}>{comment.comment}</p>
          <p className={styles.date}>{comment.date}</p>
        </div>
      ))}
    </div>
  );
};

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object),
};

export default CommentList;
