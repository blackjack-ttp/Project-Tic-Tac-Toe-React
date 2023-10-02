/* eslint-disable no-unused-vars */
import React from 'react';
import './style.scss';

const Cell = (props) => {
  return (
    <>
      <div className="game-cell">{props.value}</div>
    </>
  );
};

export default Cell;
