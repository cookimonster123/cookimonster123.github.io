import React, { useEffect, useRef, useState } from "react";
import { Section } from "../components/Section";

type CellValue = "X" | "O" | null;

const WINNING_LINES: Array<[number, number, number]> = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const createEmptyBoard = (): CellValue[] =>
  Array.from({ length: 9 }, () => null);

const getWinner = (board: CellValue[]): CellValue => {
  for (const [a, b, c] of WINNING_LINES) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  return null;
};

const getAvailableMoves = (board: CellValue[]): number[] =>
  board.reduce<number[]>((moves, cell, index) => {
    if (cell === null) {
      moves.push(index);
    }
    return moves;
  }, []);

const findImmediateWin = (board: CellValue[], player: "X" | "O") => {
  for (const move of getAvailableMoves(board)) {
    const nextBoard = [...board];
    nextBoard[move] = player;

    if (getWinner(nextBoard) === player) {
      return move;
    }
  }

  return null;
};

const chooseBotMove = (board: CellValue[]): number | null => {
  const availableMoves = getAvailableMoves(board);

  if (availableMoves.length === 0) {
    return null;
  }

  const winningMove = findImmediateWin(board, "O");
  if (winningMove !== null) {
    return winningMove;
  }

  const blockingMove = findImmediateWin(board, "X");
  if (blockingMove !== null && Math.random() < 0.9) {
    return blockingMove;
  }

  const preferredMoves = [4, 0, 2, 6, 8];
  const openPreferredMoves = preferredMoves.filter(
    (move) => board[move] === null,
  );

  if (openPreferredMoves.length > 0) {
    if (board[4] === null && Math.random() < 0.5) {
      return 4;
    }

    const cornerMoves = openPreferredMoves.filter((move) =>
      [0, 2, 6, 8].includes(move),
    );
    if (cornerMoves.length > 0 && Math.random() < 0.75) {
      return cornerMoves[Math.floor(Math.random() * cornerMoves.length)];
    }

    return openPreferredMoves[
      Math.floor(Math.random() * openPreferredMoves.length)
    ];
  }

  return availableMoves[Math.floor(Math.random() * availableMoves.length)];
};

export const TicTacToe: React.FC = () => {
  const [stage, setStage] = useState<"intro" | "name" | "game">("intro");
  const [name, setName] = useState("");
  const [board, setBoard] = useState<CellValue[]>(createEmptyBoard());
  const [result, setResult] = useState("");
  const [isBotThinking, setIsBotThinking] = useState(false);
  const botTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (botTimeoutRef.current !== null) {
        window.clearTimeout(botTimeoutRef.current);
      }
    };
  }, []);

  const resetBoard = () => {
    if (botTimeoutRef.current !== null) {
      window.clearTimeout(botTimeoutRef.current);
      botTimeoutRef.current = null;
    }

    setBoard(createEmptyBoard());
    setResult("");
    setIsBotThinking(false);
  };

  const handleNameSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedName = name.trim();

    if (!trimmedName) {
      return;
    }

    resetBoard();
    setStage("game");
  };

  const handleCellClick = (index: number) => {
    if (stage !== "game" || board[index] !== null || isBotThinking || result) {
      return;
    }

    const nextBoard = [...board];
    nextBoard[index] = "X";
    const playerWinner = getWinner(nextBoard);

    if (playerWinner === "X") {
      setBoard(nextBoard);
      setResult(`Nice one, ${name.trim()} — you won!`);
      return;
    }

    if (nextBoard.every((cell) => cell !== null)) {
      setBoard(nextBoard);
      setResult(`It’s a draw, ${name.trim()} — well played.`);
      return;
    }

    setBoard(nextBoard);
    setIsBotThinking(true);

    if (botTimeoutRef.current !== null) {
      window.clearTimeout(botTimeoutRef.current);
    }

    botTimeoutRef.current = window.setTimeout(() => {
      const botMove = chooseBotMove(nextBoard);
      if (botMove === null) {
        setIsBotThinking(false);
        return;
      }

      const botBoard = [...nextBoard];
      botBoard[botMove] = "O";
      const botWinner = getWinner(botBoard);

      setBoard(botBoard);
      setIsBotThinking(false);

      if (botWinner === "O") {
        setResult(`${name.trim()}, the bot got you this time — you lost.`);
        return;
      }

      if (botBoard.every((cell) => cell !== null)) {
        setResult(`It’s a draw, ${name.trim()} — well played.`);
      }
    }, 500);
  };

  return (
    <Section id="tictactoe" title="Tic Tac Toe">
      <div className="ttt-wrapper">
        {stage === "intro" && (
          <>
          <p>Play a game of Tic Tac Toe with me!</p>
            <button
              type="button"
              className="btn btn-primary ttt-button"
              onClick={() => setStage("name")}
            >
              Play
            </button>
          </>
        )}

        {stage === "name" && (
          <form className="ttt-name-form" onSubmit={handleNameSubmit}>
            <label className="ttt-name-label" htmlFor="player-name">
              Enter your name
            </label>
            <div className="ttt-name-controls">
              <input
                id="player-name"
                className="ttt-input"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Your name"
                maxLength={18}
                autoFocus
              />
              <button type="submit" className="btn btn-primary">
                Confirm
              </button>
            </div>
          </form>
        )}

        {stage === "game" && (
          <>
            <div className="ttt-status-row">
              <p className="ttt-status">
                {result
                  ? result
                  : isBotThinking
                  ? "Bot is thinking..."
                  : `${name.trim() || "Player"}, your move`}
              </p>
            </div>

            <div className="ttt-board" aria-label="Tic Tac Toe board">
              {board.map((cell, index) => (
                <button
                  key={`cell-${index}`}
                  type="button"
                  className={`ttt-cell ${
                    cell ? `ttt-cell-${cell.toLowerCase()}` : ""
                  }`}
                  onClick={() => handleCellClick(index)}
                  disabled={cell !== null || isBotThinking || Boolean(result)}
                  aria-label={
                    cell ? `Cell ${index + 1}: ${cell}` : `Cell ${index + 1}`
                  }
                >
                  {cell}
                </button>
              ))}
            </div>

            {result && (
              <button
                type="button"
                className="btn btn-primary ttt-reset-button"
                onClick={() => {
                  resetBoard();
                  setStage("game");
                }}
              >
                Play again
              </button>
            )}
          </>
        )}
      </div>
    </Section>
  );
};
