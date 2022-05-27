import React from 'react';
import './NewsLetter.css';

export default function NewsLetter(props) {
    return (
        <div className="containerDiv newLetterBG">
            <div className="newsLetter">
                <h1>{props.NewsHeading}</h1>
                <input className="NewsletterInput" type="text" placeholder="Enter Email Address" /> <br />
                <button className="subscribeBtn">{props.NewsButton}</button>
            </div>
        </div>
    )
}
