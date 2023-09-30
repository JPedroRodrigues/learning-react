import Header from './components/Header.jsx';
import Card from './components/Card.jsx';

import './homePage.css'
import data from "./data.js"

export default function App() {
    const cards = data.map(card => 
    <Card img={card.coverImg} rating={card.stats.rating} reviewCount={card.stats.reviewCount} location={card.location} title={card.title} price={card.price}/>
    )
    return <div>
        <Header />
        <div className="card--row">
            {cards}
        </div>
    </div>
}