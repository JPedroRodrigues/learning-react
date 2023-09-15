import swimmerImage from '../assets/swimmer.svg'
import star from '../assets/star.svg'

export default function Card() {
    const firstName = "João";
    const lastName = "Vieira";

    return <div className='card'>
        <img src={swimmerImage} className="card--image" />
        <div className="card--stats">
            <img src={star} alt="star image" className='card--star'/>
            <span>5.0</span>
            <span className="gray">(6)</span>
            <span className="gray">USA</span>
        </div>
        <p className="card--content">Life lessons with {firstName} {lastName}.</p>
        <p className="card--price"><strong>From $123</strong>/person</p>
    </div>
}