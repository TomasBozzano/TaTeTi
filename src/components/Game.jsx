import { useState } from "react"
import confetti from 'canvas-confetti'
import { PIEZAS } from "../utils/constant"
import { checkWinner, checkEndGame } from "../utils/checkGame"
import { Winner } from "./Winner"
import TurnGame from "./TurnGame"
import Board from "./Board"
import ButtonReset from "./ButtonReset"

export default function Game() {
    const [board, setBoard] = useState(() =>{
        const boardFromStorage = window.localStorage.getItem('board') 
        return boardFromStorage ? JSON.parse(boardFromStorage) : (Array(9).fill(null))
    })
    const [turn, setTurn] = useState(()=>{
        const turnFromStorage = window.localStorage.getItem('turn')
        return turnFromStorage ?? PIEZAS.X 
    })
    const [winner, setWinner] = useState(null)

    const updateBoard = (index) => {
        if(board[index] || winner) return //No sobreescribir tu tablero
        const newBoard = [...board] //no mutar el array, por eso se utiliza el spread
        newBoard[index] = turn
        setBoard(newBoard) //actualiza el tablero con los valores
        const newTurn = turn === PIEZAS.X ? PIEZAS.O : PIEZAS.X
        setTurn(newTurn) //actualiza el turno
        window.localStorage.setItem('board', JSON.stringify(newBoard))
        window.localStorage.setItem('turn', newTurn)
        const newWinner = checkWinner(newBoard) //chequea al ganador
        if(newWinner){
            confetti()
            setWinner(newWinner)
        }else if (checkEndGame(newBoard)){
            setWinner(false)
        }

    }
    const resetGame = ()=>{
        setBoard(Array(9).fill(null))
        setTurn(PIEZAS.X)
        setWinner(null)
        window.localStorage.removeItem('board')
        window.localStorage.removeItem('turn')
    }
    return <>
        <main className="board">
            <Board board={board} updateBoard={updateBoard}/>
            <TurnGame turn={turn} PIEZAS={PIEZAS}/>
            <ButtonReset resetGame={resetGame}/>
            <Winner winner={winner} resetGame={resetGame}/>
        </main>
    </>
}