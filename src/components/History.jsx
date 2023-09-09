import React from "react";
import { Button } from "../elements/Button.jsx";

export class History extends React.Component {
    render() {
        const {history, onJumpToMove} = this.props;
        return (
            <ol className="history" start={0}>
                {history.map((_, move) => (
                    <li key={move}>
                        <Button type="galaxy" onClick={() => onJumpToMove(move)}>
                            {`Go to ${move > 0 ? `move #${move}` : "game start"}`}
                        </Button>
                    </li>
                ))}
            </ol>
        );
    }
}
