import React, {useState} from "react";
import Sub from "./Sub";


export default function Super (props) {

    const [num, setNum] = useState(0)
    const [text, setText] = useState('Valor: ')

    function aoClicar(numero, texto) {
        setNum(numero); 
        setText(texto);
    } 
    
    return (
        <>  
            <h4>{text}: {num}</h4>
            <Sub onClicar={aoClicar}></Sub>
        </>
    );
}