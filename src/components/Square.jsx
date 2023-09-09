import React from "react";

export class Square extends React.Component {
    render() {
        const {value, onSquareClick} = this.props;
        return (
            <button className="square" onClick={onSquareClick}>
                {value}
            </button>
        );
    }
}
