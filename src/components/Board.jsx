import { Square } from "./Square.jsx";
import { Component } from "react";
import { calculateWinner } from "../services/calculateWinner.js";

export class Board extends Component {
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

    handleClick = (i) => {
        if (!calculateWinner(this.props.squares) && !this.props.squares[i]) {
            this.props.onPlay(this.props.squares.with(i, this.props.xIsNext ? "X" : "O"));
        }
    };
}


