export function calculateWinner(squares) {
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

export function calculateDraw(squares) {
    for (let i = 0; i < 9; i++) {
        if (squares[i] == null) {
            console.log("not draw");
            return false;
        }
    }
    console.log("draw");
    return true;
}