import React from 'react'
import './SearchBar.css'

export default function SearchBar() {
    return (
        <div className="containerDiv">
            <div className="searchpadding">
                <div className="searchSection">
                    <input className="inputsearch" type="text" placeholder="" />
                    <button className="searchbtn" type="submit">
                        <span>
                            <svg width="29" height="29" viewBox="0 0 29 29" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M28 28L21.6252 21.6138L28 28ZM25.1579 13.0789C25.1579 16.2825 23.8853 19.3548 21.6201 21.6201C19.3548 23.8853 16.2825 25.1579 13.0789 25.1579C9.87541 25.1579 6.80308 23.8853 4.53784 21.6201C2.2726 19.3548 1 16.2825 1 13.0789C1 9.87541 2.2726 6.80308 4.53784 4.53784C6.80308 2.2726 9.87541 1 13.0789 1C16.2825 1 19.3548 2.2726 21.6201 4.53784C23.8853 6.80308 25.1579 9.87541 25.1579 13.0789V13.0789Z"
                                    stroke="white" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}
