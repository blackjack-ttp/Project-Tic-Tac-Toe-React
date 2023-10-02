/* eslint-disable no-unused-vars */
import React from 'react';
import './style.scss';
import Cell from '@/components/cell';

const Board = (props) => {
  return (
    <>
      <div className="game-board">
        {props.cells.map((item, index) => (
          <Cell key={index} value={item} onClick={() => props.onClick(index)} />
        ))}
      </div>
    </>
  );
};

export default Board;
