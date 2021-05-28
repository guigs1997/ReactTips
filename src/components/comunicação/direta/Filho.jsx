import React from "react";

export default function Filho (props) {
    return (
        <> 
            <h4>{props.children} {props.sobrenome} </h4>
        </>
    );
}