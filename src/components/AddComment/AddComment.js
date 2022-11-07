import React from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";

import styles from "./AddComment.module.css";

const AddComment = ({ saveComment }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    data.date = new Date().toISOString().replace(/T.*/, "").split("-").join("-");
    const response = await saveComment(data);
    if (response) {
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form} data-testid="add-comment">
      <div className={styles.inputGroup}>
        <textarea type="text" {...register("comment", { required: true })} className={styles.input} placeholder="Add comment..." />
        {errors.comment && <p className={styles.error}>The comment is required!</p>}
      </div>
      <button className={styles.button} disabled={isSubmitting}>
        Submit
      </button>
    </form>
  );
};

AddComment.propTypes = {
  saveComment: PropTypes.func.isRequired,
};

export default AddComment;
