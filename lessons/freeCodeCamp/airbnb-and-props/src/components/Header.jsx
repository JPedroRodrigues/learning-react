import Nav from './Nav.jsx';
import heroImage from '../assets/heroImage.svg';

export default function Header() {
    return <header>
        <Nav />
        <img src={heroImage} alt="Hero image" className='heroImage'/>
    </header>
}