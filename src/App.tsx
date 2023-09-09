import { useState } from 'react';
import { Board } from "./components/Board.tsx";
import { BoardCells } from "./types";
import { calculateWinner } from "./services/calculateWinner.ts";

export const App = () => {
    const [boardCells, setBoardCells] = useState<BoardCells>(Array(9).fill(null));
    const [history, setHistory] = useState<Array<BoardCells>>([boardCells]);
    const [xIsNext, setXIsNext] = useState(true);

    function handlePlay(nextSquares: BoardCells) {
        setBoardCells(nextSquares);
        setXIsNext(prevPlayer => !prevPlayer);
        setHistory([...history, nextSquares]);
    }

    function jumpToMove(move: number) {
        setBoardCells(history[move]);
        setXIsNext(move % 2 === 0);
        setHistory(history.slice(0, move + 1));
    }

    const winner = calculateWinner(boardCells);
    return (
        <div className="game">
            <div>
                <h2 className={`status ${winner ? "winner" : ""}`}>
                    {winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`}
                </h2>
                <Board xIsNext={xIsNext} squares={boardCells} onPlay={handlePlay}/>
            </div>
            <div>
                <h1>Game History</h1>
                <ol className="history" start={0}>
                    {history.map((_, move) => (
                        <li key={move}>
                            <button className="history_button" onClick={() => jumpToMove(move)}>
                                <span>{`Go to ${move > 0 ? `move #${move}` : 'game start'}`}</span>
                            </button>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};
