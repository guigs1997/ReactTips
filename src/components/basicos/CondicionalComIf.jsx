import React from 'react'
import IfFunction from './If';

export default function Condicional (props) {

    return (
        <>
            <h2> O número é: {props.numero}</h2>
            <IfFunction test={props.numero % 2 === 0}>
                <span> Par</span>
            </IfFunction>
            <IfFunction test={props.numero % 2 !== 0}>
                <span> Ímpar</span>
            </IfFunction>
        </>
    );
}