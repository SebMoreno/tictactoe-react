import { Square } from "./Square.tsx";
import { Component } from "react";
import { BoardCells } from "../types";
import { calculateWinner } from "../services/calculateWinner.ts";

interface BoardProps {
    xIsNext: boolean;
    squares: BoardCells;
    onPlay: (nextSquares: BoardCells) => void;
}

export class Board extends Component<BoardProps> {
    render() {
        const {squares} = this.props;
        return (
            <div className="board">
                {squares.map((square, i) => (
                    <Square key={i} value={square} onSquareClick={() => this.handleClick(i)}/>
                ))}
            </div>
        );
    }

    handleClick = (i: number) => {
        if (!calculateWinner(this.props.squares) && !this.props.squares[i]) {
            this.props.onPlay(this.props.squares.with(i, this.props.xIsNext ? "X" : "O"));
        }
    };
}


