import star from '../assets/star.svg'

export default function Card(props) {
    let badgeText;

    if (props.openSpots === 0) badgeText = "SOLD OUT";
    else if(props.location === "Online") badgeText = "ONLINE";

    return <div className='card'>
        {badgeText && <div className="card--badge">{badgeText}</div>}

        <img src={props.coverImg} className="card--image" />

        <div className="card--stats">
            <img src={star} alt="star image" className='card--star'/>
            <span>{props.stats.rating}</span>
            <span className="gray">({props.stats.reviewCount})</span>
            <span className="gray">{props.location}</span>
        </div>

        <p className="card--title">{props.title}</p>
        <p className="card--price"><strong>From ${props.price}</strong>/person</p>
    </div>
}