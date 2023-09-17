import Header from './components/Header.jsx';
import Card from './components/Card.jsx';

import './homePage.css'
export default function App() {
    return <div>
        <Header />
        <Card 
            rating="2.5"
            reviewCount="34"
            country="USA"
            title="Life lessons with me."
            price={569.99}
        />
    </div>
}