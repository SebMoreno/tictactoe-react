import React from "react";
import { BoardCells } from "../types";

interface SquareProps {
    value?: BoardCells[number];
    onSquareClick: () => void;
}

export class Square extends React.Component<SquareProps> {
    render() {
        const {value, onSquareClick} = this.props;
        return (
            <button className="square" onClick={onSquareClick}>
                {value}
            </button>
        );
    }
}
