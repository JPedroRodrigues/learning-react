/* 
Installed react, react-dom and next to this folder but I won't maintain here on Github just because there are so many files, jesus christ
 */

import { useState } from 'react'

function createTitle(title) {
    return title? title: 'Default title';
}

// Posso passar props, que é um objeto, como um parametro
// Ou ainda desestruturá-lo e mostrar somente a title props

function Header({title}) {
    // Não posso passar somente "title" entre as tags h1
    // Devemos utilizar chaves {} para delimitar as vairaveis

    return <h1>{`Trust yourself. ${createTitle(title)}`}</h1>
}

function Paragraph() {
    return <p><strong>Parágrafo com react:</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum consequatur sunt non amet quasi rerum nulla, at facere? Nostrum temporibus laboriosam similique, accusantium sequi pariatur! Amet deserunt vero veritatis dolore!</p>
}

export default function HomePage() {
    const [likes, setLikes] = useState(0);

    function handleClick() {
        setLikes(likes + 1);
    }

    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

    return (
        <div>
            <Header title = "React! Beat thugs!"/>
            <p>Insane names: </p>
            <ul>
            {
                names.map((name) => (<li key = {name}>{name}</li>))
            }
            </ul>
            <button onClick = {handleClick}>Like ({likes})</button>
            
            <Paragraph />
        </div>
    )
}