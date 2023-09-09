import { BoardCells } from "../types";
import React from "react";

interface HistoryProps {
    history: Array<BoardCells>;
    onJumpToMove: (move: number) => void;
}

export const History: React.FC<HistoryProps> = ({history, onJumpToMove}) => {
    return (
        <ol className="history" start={0}>
            {history.map((_, move) => (
                <li key={move}>
                    <button className="history_button" onClick={() => onJumpToMove(move)}>
                        <span>{`Go to ${move > 0 ? `move #${move}` : 'game start'}`}</span>
                    </button>
                </li>
            ))}
        </ol>
    );
};
