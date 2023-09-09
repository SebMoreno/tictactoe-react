import { useState } from 'react';
import './App.css';
import { Board } from "./components/Board.tsx";
import { BoardCells } from "./types";

export const App = () => {
    const [history, setHistory] = useState<Array<BoardCells>>([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares: BoardCells) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpToMove(move: number) {
        setHistory(history.slice(0, move + 1));
        setCurrentMove(move);
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
            </div>
            <div className="game-info">
                <h1>Game History</h1>
                <ol>
                    {history.map((_, move) => (
                        <li key={move}>
                            <button onClick={() => jumpToMove(move)}>
                                {`Go to ${move > 0 ? `move #${move}` : 'game start'}`}
                            </button>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};
