import swimmerImage from '../assets/swimmer.svg'
import star from '../assets/star.svg'

export default function Card(props) {
    return <div className='card'>
        <img src={swimmerImage} className="card--image" />
        <div className="card--stats">
            <img src={star} alt="star image" className='card--star'/>
            <span>{props.rating}</span>
            <span className="gray">({props.reviewCount})</span>
            <span className="gray">{props.country}</span>
        </div>
        <p className="card--content">{props.title}</p>
        <p className="card--price"><strong>From ${props.price}</strong>/person</p>
    </div>
}