import React, { useRef } from 'react';
import toast from 'react-hot-toast';
import css from "./SearchBar.module.css"

const SearchBar = ({ onSubmit }) => {
  const searchTermRef = useRef(null);

  const handleSubmit = event => {
    event.preventDefault();
    const searchTerm = searchTermRef.current.value;
    if (!searchTerm.trim()) {
      toast.error('Please enter a search term.');
      return;
    }
    else if (searchTerm.trim().length < 2) {
      toast.error('Search term should be at least two characters.');
      return;
    }
    else {
      onSubmit(searchTerm);
    }

  };

  return (
    <header>
      <form className={css.search} onSubmit={handleSubmit}>
        <input
          ref={searchTermRef}
          className={css.searchinput}
          type="text"
          name="searchTerm"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.searchbutton} type="submit">Search</button>
      </form>
    </header>
  );
}

export default SearchBar;