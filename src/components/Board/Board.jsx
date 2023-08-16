import React from 'react';
import Letter from '../Letter/Letter';

const Board = () => {

    return (
       <div className="board">
        <div className="row">
            <Letter lettterPosition={0} attemptValue={0}/>
            <Letter lettterPosition={1} attemptValue={0}/>
            <Letter lettterPosition={2} attemptValue={0}/>
            <Letter lettterPosition={3} attemptValue={0}/>
            <Letter lettterPosition={4} attemptValue={0}/>
        </div>
        <div className="row">
            <Letter lettterPosition={0} attemptValue={1}/>
            <Letter lettterPosition={1} attemptValue={1}/>
            <Letter lettterPosition={2} attemptValue={1}/>
            <Letter lettterPosition={3} attemptValue={1}/>
            <Letter lettterPosition={4} attemptValue={1}/>
        </div>
        <div className="row">
            <Letter lettterPosition={0} attemptValue={2}/>
            <Letter lettterPosition={1} attemptValue={2}/>
            <Letter lettterPosition={2} attemptValue={2}/>
            <Letter lettterPosition={3} attemptValue={2}/>
            <Letter lettterPosition={4} attemptValue={2}/>
        </div>
        <div className="row">
            <Letter lettterPosition={0} attemptValue={3}/>
            <Letter lettterPosition={1} attemptValue={3}/>
            <Letter lettterPosition={2} attemptValue={3}/>
            <Letter lettterPosition={3} attemptValue={3}/>
            <Letter lettterPosition={4} attemptValue={3}/>
        </div>
        <div className="row">
            <Letter lettterPosition={0} attemptValue={4}/>
            <Letter lettterPosition={1} attemptValue={4}/>
            <Letter lettterPosition={2} attemptValue={4}/>
            <Letter lettterPosition={3} attemptValue={4}/>
            <Letter lettterPosition={4} attemptValue={4}/>
        </div>
        <div className="row">
            <Letter lettterPosition={0} attemptValue={5}/>
            <Letter lettterPosition={1} attemptValue={5}/>
            <Letter lettterPosition={2} attemptValue={5}/>
            <Letter lettterPosition={3} attemptValue={5}/>
            <Letter lettterPosition={4} attemptValue={5}/>
        </div>
       </div>
    )
}


export default Board;