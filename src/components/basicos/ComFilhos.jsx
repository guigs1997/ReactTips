import React from "react";

export default function ComFilhos (props) {
    return (
        <>
            <h2>
                Os Filhos:
            </h2>
            <div>
                {props.children}
            </div>
        </>

    );
}