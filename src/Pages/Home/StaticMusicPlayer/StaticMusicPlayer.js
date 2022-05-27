import React from 'react';
import './StaticMusicPlayer.css'

export default function StaticMusicPlayer() {
    return (
        <div className='containerDiv'>
            <div className="staticMusicPlayer">
                <div className="text-center">
                    <p>ਨਿਧਿ ਸਿਧਿ ਰਿਧਿ ਹਰਿ ਹਰਿ ਹਰਿ ਮੇਰੈ ॥</p>
                    <h4>RAAG SARANG</h4>
                </div>
                {/* <div className="trackTimeDuration d-flex justify-content-between align-items-center">
                    <p className='m-0'>00.00</p>
                    <p className='m-0'>04:30</p>
                </div> */}

                <div className="d-flex justify-content-evenly align-items-center py-4">
                    <p className='initialTime'>00.00</p>
                    <div className="trackTimeLine">
                        <div className="innerTimeLine"></div>
                    </div>
                    <p className='playedTime'>04:30</p>
                </div>

                <div className="trackMusicControlIcons d-flex justify-content-center align-items-center">
                    <button className="preBtn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M459.5 71.41l-171.5 142.9v83.45l171.5 142.9C480.1 457.7 512 443.3 512 415.1V96.03C512 68.66 480.1 54.28 459.5 71.41zM203.5 71.41L11.44 231.4c-15.25 12.87-15.25 36.37 0 49.24l192 159.1c20.63 17.12 52.51 2.749 52.51-24.62v-319.9C255.1 68.66 224.1 54.28 203.5 71.41z"/>
                        </svg>                       
                    </button>

                    <button className="playBtn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z" />
                        </svg>                      
                    </button>

                    <button className="nextBtn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M459.5 71.41l-171.5 142.9v83.45l171.5 142.9C480.1 457.7 512 443.3 512 415.1V96.03C512 68.66 480.1 54.28 459.5 71.41zM203.5 71.41L11.44 231.4c-15.25 12.87-15.25 36.37 0 49.24l192 159.1c20.63 17.12 52.51 2.749 52.51-24.62v-319.9C255.1 68.66 224.1 54.28 203.5 71.41z"/></svg>
                    </button>
                </div>
            </div>
        </div>
    )
}
