import React, { useState } from "react";
import Board from "../board/Board";
import { GameBoard, GameContainer, GameInfo, MovesList, MoveButton } from './Game.style';

function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove] || Array(9).fill(null);  // Ensure currentSquares is always an array with 9 elements

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = 'Go to move #' + move;
        } else {
            description = 'Go to game start';
        }
        return (
            <li key={move}>
                <MoveButton onClick={() => jumpTo(move)}>{description}</MoveButton>
            </li>
        );
    });

    return (
        <GameContainer>
            <GameBoard>
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </GameBoard>
            <GameInfo>
                <MovesList>{moves}</MovesList>
            </GameInfo>
        </GameContainer>
    );
}

export default Game;
