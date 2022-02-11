import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }
    handleClick(i) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) != null) {
            return;
        }
        if (squares[i] != null) {
            return;
        }
        squares[i] = this.state.xIsNext ? "X" : "O";
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    }
    renderSquare(i) {
        return (
            <Square
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            />
        );
    }

    render() {
        const winner = calculateWinner(this.state.squares);
        const draw = calculateDraw(this.state.squares);
        let status;
        if (winner != null) {
            status = "Winner " + winner;
        } else {
            if (draw) {
                status = "Draw";
            } else {
                status = 'Next player: ' + (this.state.xIsNext ? "X" : "O");
            }
        }

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        console.log(i);
        const [a, b, c] = lines[i];
        console.log("a: " + a + " b: " + b + " c: " + c);
        console.log(a + ": " + squares[a] + "   " + b + ": " + squares[b] + "    " + c + ": " + squares[c]);
        if (squares[a] != null) {
            if (squares[a] === squares[b] && squares[a] === squares[c]) {
                console.log("returned " + squares[a]);
                return squares[a];
            }
        }
    }
    console.log("returned null");
    return null;
}

function calculateDraw(squares) {
    for (let i = 0; i < 9; i++) {
        if (squares[i] == null) {
            console.log("not draw");
            return false;
        }
    }
    console.log("draw");
    return true;
}