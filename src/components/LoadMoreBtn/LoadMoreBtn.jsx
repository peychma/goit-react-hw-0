import React from 'react';
import css from "./LoadMoreBtn.module.css"

const LoadMoreBtn = ({ onClick, hasMore }) => {
    if (!hasMore) {
        return null;
    }

    return (
        <button className={css.loadmorebutton} onClick={onClick}>
      Load more
    </button>
  );
}

export default LoadMoreBtn;
