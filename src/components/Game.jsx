/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Board from '@/components/board';
import calculaWinner from '@/helpers';

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculaWinner(board);
  const handleClick = (index) => {
    const boardCopy = [...board];
    if (winner || boardCopy[index]) return;
    boardCopy[index] = xIsNext ? 'X' : 'O';
    setBoard(boardCopy);
    setXIsNext((xIsNext) => !xIsNext);
  };

  const handleResetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };
  return (
    <>
      <div className="game">
        <h1 className="game__title">
          Project Game Tic Tac Toe <br /> by ReactJS
        </h1>
        <Board cells={board} onClick={handleClick} />
        <div className="game__winner">{winner ? `Winner is ${winner}` : ''}</div>
        <button onClick={handleResetGame} className="game__btn-reset">
          reset
        </button>
      </div>
    </>
  );
};

export default Game;
