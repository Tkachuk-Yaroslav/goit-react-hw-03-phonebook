import React from 'react';
import css from './Contact.module.css';

export const Contact = ({ name, number, onDelete }) => {
  return (
    <>
      <h2 className={css.title}>{name}</h2>
      <h2 className={css.number}>{number}</h2>
      <button className={css.delete} onClick={onDelete} type="button">
        Delete
      </button>
    </>
  );
};
