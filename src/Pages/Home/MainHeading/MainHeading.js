import React from 'react';
import './MainHeading.css';
// import headingLineImg from '../../Images/lineImg.svg';

export default function MainHeading(props) {
    return (
        <div className="mainHeading">
            <h2 className="">{props.heading1}</h2>
            <div className="headingLine">
            <img src={props.headingLineImg} alt="" />
                {/* <svg width="106" height="12" viewBox="0 0 106 12" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <line y1="5.5" x2="106" y2="5.5" stroke="#B68A1E" />
                    <rect x="53" width="8" height="8" transform="rotate(45 53 0)" fill="#B68A1E" />
                </svg> */}
            </div>
            <h3>{props.heading2}</h3>
        </div>
    )
}
