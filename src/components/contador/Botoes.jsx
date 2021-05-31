import React from 'react';

export default function Botoes(props) {

    return (
        <div>
            <button onClick={props.onInc}>+</button>
            <button onClick={props.onDec}>-</button>
        </div>
    )
}