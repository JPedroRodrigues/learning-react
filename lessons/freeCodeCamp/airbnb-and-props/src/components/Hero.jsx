import heroImage from '../assets/heroImage.svg';

export default function Hero() {
    return <section className="heroSection">
        <img src={heroImage} alt="Hero image" className='heroImage'/>
        <h1 className='hero--header'>Online Experiences</h1>
        <p className='hero--text'>Join unique interactive led by one-of-a-kind hosts - all without leaving home.</p>
    </section>
}