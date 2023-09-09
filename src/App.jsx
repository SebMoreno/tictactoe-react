import { Component } from "react";
import { Board } from "./components/Board.jsx";
import { calculateWinner } from "./services/calculateWinner.js";
import { History } from "./components/History.jsx";
import { Button } from "./elements/Button.jsx";


export class App extends Component {
    constructor(props) {
        super(props);
        const initialBoardCells = Array(9).fill(null);
        this.state = {
            boardCells: initialBoardCells,
            history: [initialBoardCells],
            xIsNext: true
        };
    }


    render() {
        const {boardCells, history, xIsNext} = this.state;

        const winner = calculateWinner(boardCells);
        return (
            <div className="game">
                <div>
                    <h2 className={`status ${winner ? "winner" : ""}`}>
                        {winner ? `Winner: ${winner}`
                            : history.length > 9 ? "It's a tie!"
                                : `Next player: ${xIsNext ? "X" : "O"}`}
                    </h2>
                    <Button type="lifted" onClick={this.resetGame} buttonNativeProps={{
                        style: {
                            margin: "1rem 0",
                            visibility: winner || history.length > 9 ? "visible" : "hidden"
                        }
                    }}>Reset Game</Button>
                    <Board xIsNext={xIsNext} squares={boardCells} onPlay={this.handlePlay}/>
                </div>
                <div>
                    <h1>Game History</h1>
                    <History history={history} onJumpToMove={this.handleJumpToMove}/>
                </div>
            </div>
        );
    }

    handlePlay = (nextSquares) => {
        this.setState(prevState => ({
            boardCells: nextSquares,
            xIsNext: !prevState.xIsNext,
            history: [...prevState.history, nextSquares]
        }));
    };

    handleJumpToMove = (move) => {
        this.setState(prevState => ({
            boardCells: prevState.history[move],
            xIsNext: move % 2 === 0,
            history: prevState.history.slice(0, move + 1)
        }));
    };

    resetGame = () => {
        const newBoardCells = Array(9).fill(null);
        this.setState({
            boardCells: newBoardCells,
            history: [newBoardCells],
            xIsNext: true
        });
    };
}
