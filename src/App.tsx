import { useState } from 'react';
import { Board } from "./components/Board.tsx";
import { BoardCells } from "./types";
import { calculateWinner } from "./services/calculateWinner.ts";
import { History } from "./components/History.tsx";

export const App = () => {
    const [boardCells, setBoardCells] = useState<BoardCells>(Array(9).fill(null));
    const [history, setHistory] = useState<Array<BoardCells>>([boardCells]);
    const [xIsNext, setXIsNext] = useState(true);

    function handlePlay(nextSquares: BoardCells) {
        setBoardCells(nextSquares);
        setXIsNext(prevPlayer => !prevPlayer);
        setHistory([...history, nextSquares]);
    }

    function handleJumpToMove(move: number) {
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
                <History history={history} onJumpToMove={handleJumpToMove}/>
            </div>
        </div>
    );
};
