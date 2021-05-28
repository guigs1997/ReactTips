import React from "react";
import produto from '../../data/produto';

export default function Repeticao () {

    function getProdItem () {
        return produto.map(prod =>{
            return <li key={prod.id}>
                {prod.nome} - R${prod.preco}
            </li>
        });
    }

    return (
        <div>
            <h2>Repetição</h2>
            <ul>
                {getProdItem()}
            </ul>
        </div>
    );
}