import Header from './components/Header.jsx';
import Card from './components/Card.jsx';

import './homePage.css'
import data from "./data.js"

export default function App() {
    const cards = data.map(card => {
        return (
            <Card
                // Key ajuda a diferenciar o elemento com um ID
                key={card.id} 
                // Passando todo o objeto como argumento
                // item={card}
                {...card}

                // Equivale a
                // id={card.id}
                // description={card.description}
                // ...
            />
        )
    })

    return <div>
        <Header />
        <section className="cards--row">
            {cards}
        </section>
    </div>
}