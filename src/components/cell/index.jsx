/* eslint-disable no-unused-vars */
import React from 'react';
import './style.scss';

const Cell = (props) => {
  const { value, onClick } = props;
  return (
    <>
      <div className="game-cell" onClick={onClick}>
        {value}
      </div>
    </>
  );
};

export default Cell;
