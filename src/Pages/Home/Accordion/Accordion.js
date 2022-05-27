import React from 'react'
import './Accordion.css'

export default function Accordion(props) {
    return (
        <div className='containerDiv'>
            <div className="accordion accordion-flush homeAccordion" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed AccordiaonBtn" type="button"
                            data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false"
                            aria-controls="flush-collapseOne">
                            {props.accordionHeading1}
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse"
                        aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <ul className="accordItems m-0">
                                <li>
                                    <a href="/">{props.AccorLink1}</a>
                                </li>

                                <li>
                                    <a href="/">{props.AccorLink2}</a>
                                </li>

                                <li>
                                    <a href="/">{props.AccorLink3}</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>

                <div className="accordion-item AccordionItem">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed AccordiaonBtn" type="button"
                            data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false"
                            aria-controls="flush-collapseTwo">
                            {props.accordionHeading2}
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse"
                        aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">

                            <ul className="accordItems m-0">
                                <li>
                                    <a href="/">{props.AccorLink4}</a>
                                </li>

                                <li>
                                    <a href="/">{props.AccorLink5}</a>
                                </li>

                                <li>
                                    <a href="/">{props.AccorLink6}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
