import Header from './components/Header.jsx';
import Card from './components/Card.jsx';

import './homePage.css'
import data from "./data.js"

export default function App() {
    const cards = data.map(card => {
        return (
            <Card
                // Key ajuda a diferencia o elemento com um ID
                key={card.id}  
                img={card.coverImg} 
                rating={card.stats.rating} 
                reviewCount={card.stats.reviewCount} location={card.location} 
                title={card.title} 
                price={card.price}
                // Para criação condicional de elementos:
                openSpots={card.openSpots}
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