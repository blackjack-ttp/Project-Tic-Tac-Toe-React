/* eslint-disable no-unused-vars */
import React from 'react';
import './style.scss';
import Cell from '@/components/cell';

const Board = (props) => {
  return (
    <>
      <div className="game-board">
        {props.cells.map((item, i) => (
          <Cell key={i} value={item} onClick={() => props.onClick(i)} />
        ))}
      </div>
    </>
  );
};

export default Board;
