import React from "react";
import Filho from "./Filho";


export default function Pai (props) {
    return (
        <>
            <p>Filhos:</p>
            <Filho sobrenome={props.sobrenome}>joão</Filho>
            <Filho {...props}>carlos</Filho>
            <Filho sobrenome="silva">alberto</Filho>
        </>
    );
}