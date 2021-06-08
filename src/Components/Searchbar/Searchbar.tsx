import React, { useState } from "react";
import PropTypes from "prop-types";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./Searchbar.module.css";

type TProps = {
  onSearchbarSubmit: (searchQuery: string) => void;
};
export default function Searchbar({ onSearchbarSubmit }: TProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (searchQuery.trim() === "") {
      toast("Type something to find.");
      return;
    }
    onSearchbarSubmit(searchQuery.toLowerCase());
    setSearchQuery("");
  };
  return (
    <header className={styles.Searchbar}>
      <form onSubmit={onSubmit} className={styles.SearchForm}>
        <button type="submit" className={styles.SearchFormButton}>
          <span className={styles.SearchFormButtonLabel}>Search</span>
        </button>
        <input
          className={styles.SearchFormInput}
          value={searchQuery}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={(e) => setSearchQuery(e.currentTarget.value)}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onFormSubmit: PropTypes.func,
};
