/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Board from '@/components/board';
import calculaWinner from '@/helpers';

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculaWinner(board);
  const handleClick = () => {};
  return (
    <>
      <div className="game">
        <h1 className="game__title">Project Game Tic Tac Toe by ReactJS</h1>
        <Board cells={board} onClick={handleClick} />
      </div>
    </>
  );
};

export default Game;
