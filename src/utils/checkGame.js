import { WINERR_COMBOS } from "./constant"

export const checkWinner = (boardCheck) =>{
    for(const combo of WINERR_COMBOS){
        const [a, b, c] = combo
        if(boardCheck[a] && boardCheck[a] === boardCheck[b] && boardCheck[a] === boardCheck[c]){
            return boardCheck[a]
        }
    }
    return null
}

export const checkEndGame = (checkGame)=>{
    return checkGame.every((square) => square !== null)
}