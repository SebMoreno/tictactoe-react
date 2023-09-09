import React from "react";
import { Player } from "../types";

interface SquareProps {
    value?: Player;
    onSquareClick: () => void;
}

export const Square: React.FC<SquareProps> = ({ value, onSquareClick }) => {
    return (
        <button className="square" onClick={onSquareClick}>
            {value}
        </button>
    );
};
