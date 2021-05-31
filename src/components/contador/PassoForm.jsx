import React from 'react';

export default function PassoForm(props) {
    
    return (
        <div>
            <label htmlFor="passoInput">Passo: </label>
            <input id="passoInput" type="number"
                value={props.passo}
                onChange={e => props.onPassoChange(+e.target.value)} />
        </div>
    )
}