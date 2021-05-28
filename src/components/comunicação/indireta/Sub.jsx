import React from "react";

export default function Sub (props) {
    return (
        <>
            <button onClick={() =>{
                props.onClicar(Math.random(), "Fim!")
            }}> Alterar </button>
        </>
    );
}