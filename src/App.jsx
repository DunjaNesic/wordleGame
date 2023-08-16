import React from 'react';
import './App.css';
import Board from './components/Board/Board'
import Keyboard from './components/Keyboard/Keyboard'
import { createContext, useState, useEffect } from 'react';
import { boardDefault, generateWordSet } from './components/Words/Words';
import Confetti from 'react-confetti';
import GameOver from './components/GameOver/GameOver';

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currentAttempt, setCurrentAttempt] = useState({attempt: 0, letterPosition:0});
  const [wordSet, setWordSet] = useState(new Set());
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false
  })
  const [correctWord, setCorrectWord] = useState("");

  useEffect(() =>{
    generateWordSet().then((words)=>{
    setWordSet(words.wordSet);
    setCorrectWord(words.todaysWord)
    console.log(words.todaysWord);
  });}, []);

  //  correctWord = "DUNJA";

  const onSelectLetter = (keyValue) => {
    if (currentAttempt.letterPosition>4) return;
    if (currentAttempt.attempt>5) return;
        const newBoard = [...board];
        newBoard[currentAttempt.attempt][currentAttempt.letterPosition] = keyValue;
        setBoard(newBoard);
        setCurrentAttempt(
            {...currentAttempt,
            letterPosition: currentAttempt.letterPosition+1
            }
        );
  };

  const onDelete = () => {
    if (currentAttempt.letterPosition === 0) return;
        const newBoard = [...board];
        newBoard[currentAttempt.attempt][currentAttempt.letterPosition-1] = "";
        setBoard(newBoard);
        setCurrentAttempt({
            ...currentAttempt,
            letterPosition: currentAttempt.letterPosition - 1
        })
  };

  const [confetti, setConfetti] = useState(false);

  const onEnter = () => {
    if (currentAttempt.letterPosition !==5) return;
    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += board[currentAttempt.attempt][i].toLowerCase();
    }
    if (wordSet.has(currWord.toLowerCase())){
            setCurrentAttempt({attempt: currentAttempt.attempt + 1,
            letterPosition:0})}
            else {
              console.log(currWord);
              alert("That word probably doesn't exist")}

              if (currWord.toLowerCase()===correctWord){
                 setConfetti(true);
                 setGameOver(
                  {
                    gameOver: true,
                    guessedWord: true
                  }
                 )
                 return;
              }

              if (currentAttempt.attempt === 5){
                setGameOver(
                  {
                    gameOver: true,
                    guessedWord: false
                  }
                 )
                 return;
              }

  };

  return (
    <div className="App">
      {confetti && <Confetti/>}
      <AppContext.Provider value={{board, setBoard, currentAttempt, setCurrentAttempt, onSelectLetter, onDelete, onEnter, correctWord, setDisabledLetters, disabledLetters, gameOver, setGameOver}}>
        <div className="game">
      <Board/>
      {gameOver.gameOver ? <GameOver/> : <Keyboard/>}
      </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
