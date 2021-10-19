import React from 'react'

const StatusMessage = ({ winner, current }) => {

    const noMovesLeft = current.board.every((el) => el !== null)
    
    return (
        <h2>{winner && `The winner is ${winner}!`}
        {!winner && !noMovesLeft && `The next player is ${current.isXNext ? "X" : "O"}`}
        {!winner && noMovesLeft && "Cat"}</h2>
    )
}

export default StatusMessage
