import css from './Filter.module.css';

import React from 'react';

const Filter = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="filterInput" className={css.label}>
        Find contacts by name:
        <input
          type="text"
          className={css.input}
          id="filterInput"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default Filter;
