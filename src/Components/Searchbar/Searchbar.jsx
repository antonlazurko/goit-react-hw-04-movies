import React, { useState } from 'react';
// import PropTypes from 'prop-types';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './Searchbar.module.css';
export default function Searchbar({ onSearchbarSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');
  // const [currentPage, setCurrentPage] = useState(1);
  const onQueryChange = e => {
    setSearchQuery(e.currentTarget.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      toast('Type something to find.');
      return;
    }
    onSearchbarSubmit(searchQuery.toLowerCase());
    setSearchQuery('');
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
          placeholder="Search images and photos"
          onChange={onQueryChange}
        />
      </form>
    </header>
  );
}

// Searchbar.propTypes = {
//   onFormSubmit: PropTypes.func,
// };
