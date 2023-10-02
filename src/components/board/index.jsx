/* eslint-disable no-unused-vars */
import React from 'react';
import './style.scss';
import Cell from '@/components/cell';

const Board = () => {
  return (
    <>
      <div className="game-board">
        {Array(9)
          .fill(0)
          .map((item, i) => (
            <Cell key={i} />
          ))}
      </div>
    </>
  );
};

export default Board;
