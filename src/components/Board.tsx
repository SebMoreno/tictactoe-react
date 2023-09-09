import { Square } from "./Square.tsx";
import { FC } from "react";
import { BoardCells } from "../types";
import { calculateWinner } from "../services/calculateWinner.ts";

interface BoardProps {
    xIsNext: boolean;
    squares: BoardCells;
    onPlay: (nextSquares: BoardCells) => void;
}

export const Board: FC<BoardProps> = ({xIsNext, squares, onPlay}) => {
    const winner = calculateWinner(squares);

    function handleClick(i: number) {
        if (!calculateWinner(squares) && !squares[i]) {
            onPlay(squares.with(i, xIsNext ? 'X' : 'O'));
        }
    }


    return (
        <>
            <div className="status">
                {winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`}
            </div>
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
                <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
                <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
                <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
                <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
                <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
                <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
            </div>
        </>
    );
};


