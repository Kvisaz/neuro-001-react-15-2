import {useState} from 'react';
import {Square} from '../Square';
import gameBoardStyles from './gameBoardStyles.module.css';

export const GameBoard = () => {
    const [board, setBoard] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0]);

    const shuffleBoard = () => {
        let shuffledBoard = board.slice();
        let currentIndex = board.length;
        let temporaryValue, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = shuffledBoard[currentIndex];
            shuffledBoard[currentIndex] = shuffledBoard[randomIndex];
            shuffledBoard[randomIndex] = temporaryValue;
        }

        setBoard(shuffledBoard);
    };

    const handleSquareClick = (squareIndex:number) => {
        const squares = board.slice();
        const emptySquareIndex = squares.indexOf(0);

        if (emptySquareIndex === squareIndex - 1 || emptySquareIndex === squareIndex + 1 || emptySquareIndex === squareIndex - 4 || emptySquareIndex === squareIndex + 4) {
            squares[emptySquareIndex] = squares[squareIndex];
            squares[squareIndex] = 0;
            setBoard(squares);
        }

        if (squares.toString() === [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, null].toString()) {
            alert('You won!');
        }
    };

    return (
        <div className={gameBoardStyles.board}>
            {board.map((value, index) => (
                <Square key={index} value={value} onClick={() => handleSquareClick(index)}/>
            ))}
            <button onClick={shuffleBoard}>Shuffle board</button>
        </div>
    );
};