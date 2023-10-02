/* eslint-disable no-unused-vars */
import React from 'react';
import './style.scss';
import Cell from '@/components/cell';

const Board = () => {
  return (
    <>
      <div className="game-board">
        <Cell></Cell>
        <Cell></Cell>
        <Cell></Cell>
        <Cell></Cell>
        <Cell></Cell>
        <Cell></Cell>
        <Cell></Cell>
        <Cell></Cell>
        <Cell></Cell>
      </div>
    </>
  );
};

export default Board;
