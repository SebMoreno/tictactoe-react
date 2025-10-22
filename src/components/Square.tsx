interface SquareProps {
    value?: BoardCells[number];
    onSquareClick: () => void;
}

export const Square: FC<SquareProps> = ({value, onSquareClick}) => {
    return (
        <button className="square" onClick={onSquareClick}>
            {value}
        </button>
    );
};
