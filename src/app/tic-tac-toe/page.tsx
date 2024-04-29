'use client';

import { useEffect, useState } from 'react';

const N = 3;

const initializeGrid = (n: number) => {
  let grid = [];

  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      row.push(null);
    }
    grid.push(row);
  }

  return grid;
};

const checkForWinner = (grid: any) => {
  const N = grid.length;
  // row check
  for (let i = 0; i < grid.length; i++) {
    let win = true;
    let val = grid[i][0];

    for (let j = 1; j < grid[i].length; j++) {
      if (grid[i][j] !== val) {
        win = false;
        break;
      }
    }
    if (win) {
      return val;
    }
  }

  //col check
  for (let i = 0; i < grid.length; i++) {
    let win = true;
    let val = grid[0][i];

    for (let j = 1; j < grid[i].length; j++) {
      if (grid[j][i] !== val) {
        win = false;
        break;
      }
    }
    if (win) {
      return val;
    }
  }

  //diagonal check
  let val = grid[0][0];
  let win = true;
  for (let i = 1; i < grid.length; i++) {
    if (val !== grid[i][i]) {
      win = false;
      break;
    }
  }
  if (win) return val;

  val = grid[0][N - 1];
  win = true;
  for (let i = 1; i < grid.length; i++) {
    if (val !== grid[i][N - 1 - i]) {
      win = false;
      break;
    }
  }
  if (win) return val;

  return null;
};

export default function TicTacToe() {
  const [grid, setGrid] = useState<any>(initializeGrid(N));
  const [turn, setTurn] = useState('X');
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    let winner = checkForWinner(grid);

    if (winner !== null) {
      console.log({ winner });
      setWinner(winner);
    }
  }, [grid]);

  const handleCellClick = (r: number, c: number) => {
    if (grid[r][c] !== null) return;

    const newGrid = [...grid];
    newGrid[r][c] = turn;
    setGrid(newGrid);
    setTurn(turn === 'X' ? 'O' : 'X');
  };

  const resetGame = () => {
    setGrid(initializeGrid(N));
    setWinner(null);
    setTurn('X');
  };

  return (
    <div className="grid grid-cols-3 mt-8">
      {grid.map((row, rowIdx) => {
        return row.map((col, colIdx) => {
          return (
            <div
              key={rowIdx + colIdx}
              className="h-24 w-24 text-xl border-2 border-yellow-400 text-primary grid place-content-center"
              onClick={() => handleCellClick(rowIdx, colIdx)}
            >
              {col === null ? '' : col}
            </div>
          );
        });
      })}
      {winner !== null && (
        <div className="mt-4 flex flex-col gap-2">
          <p>Winner: {winner}</p>
          <button className="bg-amber-600 rounded-sm p-2" onClick={resetGame}>
            Reset game
          </button>
        </div>
      )}
    </div>
  );
}
