import React, { useContext } from 'react'
import { AppContext } from '../../App'

function GameOver() {
    const {gameOver, currentAttempt, correctWord} = useContext(AppContext)
  return (
    <div className='gameOver'>
        <h3>{gameOver.guessedWord ? "Svaka cast!" : "Vise srece drugi put"}</h3>
        <h2>Correct word: {correctWord}</h2>
        {gameOver.guessedWord && (<h3>You guessed in {currentAttempt.attempt} {currentAttempt.attempt===1 ? "attempt" : "attempts"}</h3>)}
    </div>
  )
}

export default GameOver