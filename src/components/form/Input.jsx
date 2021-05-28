import React, { useState } from 'react';

export default function InputComp () {

    const [nome, alteraNome] = useState("")


    return(
        <>
            <h3>{nome}</h3>
            <input type="text" value={nome}
                onChange={e=>alteraNome(e.target.value)}
            ></input>
        </>
    );
}