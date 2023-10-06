import React from "react"
import phoneIcon from '/phone-icon.png'
import mailIcon from '/mail-icon.png'

export default function Contact(props) {
    console.log(props);

    return (
        <div className="contact-card" style={props.style}>
            <img src={props.imgPath}/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src={phoneIcon} />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src={mailIcon} />
                <p>{props.email}</p>
            </div>
        </div>
    )
}