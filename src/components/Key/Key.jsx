import React, { useContext } from 'react'
import { AppContext } from '../../App';

function Key(props) {

    const {onDelete, onSelectLetter, onEnter} = useContext(AppContext);

    const selectLetter = () => {
        if (props.keyValue==="ENTER"){
            onEnter();
        } else if (props.keyValue==="DELETE"){
            onDelete();
        } else {
        onSelectLetter(props.keyValue);
    }
}
  return (
    <div className='key' id={props.bigKey ? 'big' : props.disabled && "disabled"} onClick={selectLetter} >{props.keyValue}</div>
  )
}

export default Key