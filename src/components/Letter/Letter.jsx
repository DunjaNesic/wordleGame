import React, {useContext, useEffect} from 'react'
import { AppContext } from '../../App';

function Letter({lettterPosition, attemptValue}) {
    const {board, correctWord, currentAttempt, setDisabledLetters} = useContext(AppContext);
    const letter = board[attemptValue][lettterPosition];

    const correct = correctWord.toUpperCase()[lettterPosition]===letter;
    const almost = !correct && letter !=="" && correctWord.toUpperCase().includes(letter);
    const letterState = currentAttempt.attempt>attemptValue && (correct ? "correct" : almost ? "almost" : "error");

  useEffect(()=>{
    if (letter !=="" && !correct && !almost){
      setDisabledLetters((prevDisabledLetters)=>[...prevDisabledLetters, letter]);
    }
  }, [currentAttempt.attempt])

  return (
    <div className='letter' id={letterState}>{letter}</div>
  )
}

export default Letter