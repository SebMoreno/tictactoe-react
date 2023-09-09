import { Square } from "./Square.jsx";
import { calculateWinner } from "../services/calculateWinner.js";

export const Board = ({xIsNext, squares, onPlay}) => {
    function handleClick(i) {
        if (!calculateWinner(squares) && !squares[i]) {
            onPlay(squares.with(i, xIsNext ? 'X' : 'O'));
        }
    }

    return (
        <div className="board">
            {squares.map((square, i) => (
                <Square key={i} value={square} onSquareClick={() => handleClick(i)}/>
            ))}
        </div>
    );
};


