import React from "react";
import debounce from "lodash.debounce";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";

import styles from "./SearchBar.module.css";

const SearchBar = ({ handleSearch }) => {
  const { register } = useForm();

  const handleInput = debounce(async (event) => {
    await handleSearch(event.target.value);
  }, 1000);

  return (
    <form className={styles.searchBar} data-testid="searchbar">
      <input type="text" {...register("title_like")} onChange={handleInput} placeholder="Search" autoComplete="off" />
    </form>
  );
};

SearchBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default SearchBar;
