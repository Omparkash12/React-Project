import React from 'react';
// import Navbar from '../Shared/Navbar/Navbar';
// import MusicPlayer1 from '../Home/MusicPlayer1/MusicPlayer1';
// import MusicPlayer2 from '../Home/MusicPlayer2/MusicPlayer2';
import './ShriRaagMusicLyrics.css';

import { Link } from 'react-router-dom';

// import musicNavBrand from '../Images/musicNavIcon.svg';
// import shriRaagBrandImage from '../Images/brand.png'; 
// import Footer from '../Shared/Footer/Footer';

// const raagNavPadding = {
//     padding: ''
// }

export default function ShriRaagMusicLyrics(props) {

    const leftNavbar = () => {
        document.getElementById('jfdbjsb').style.transform = 'translateX(0%)'
    }

    const leftNavbarClose = () => {
        document.getElementById('jfdbjsb').style.transform = 'translateX(-100%)'
    }



    return (
        <div className="position-relative">

            <div className="jfdbjsb" id='jfdbjsb'>
                <div className="containerDiv leftSlider">
                    <div className="text-end">
                        <Link to='#' className="musicCrossBtn" onClick={leftNavbarClose}>
                            {/* <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.2269 23.7476L18.3529 15.7836L23.8089 8.34756H22.0489L17.4289 14.6396L12.7869 8.34756H10.9169L16.3949 15.8276L10.5429 23.7476H12.4129L17.3629 16.9716L22.3349 23.7476H24.2269Z" fill="#2C203F" />
                                <rect x="0.5" y="0.5" width="32.4542" height="32.4542" rx="2.5" stroke="#B68A1E" />
                            </svg> */}
                            <div className="cross1 musicLine1"></div>
                            <div className="cross1 musicLine2"></div>
                        </Link>
                    </div>
                    <div className="musicIconNtext">
                        <span>
                            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.0316 43.9887C10.0485 44.0138 0.00952292 34.372 5.66841e-06 22.0125C-0.00864638 9.76903 9.88843 -0.00518916 22.0852 2.06689e-06C34.1842 0.0051933 44.0104 9.91698 44 22.1017C43.9931 34.1375 34.1046 43.987 22.0316 43.9887ZM42.0766 21.7262C41.9616 10.6965 32.8795 1.76935 21.7097 1.92249C10.5737 2.07476 1.39991 11.3601 1.93806 22.9859C2.43037 33.6097 11.3524 42.5084 22.8579 42.055C33.7266 41.6267 42.2575 32.5603 42.0766 21.7262Z" fill="#29104D" />
                                <path d="M31.5722 18.8709C31.5722 21.4406 31.5679 24.0111 31.5722 26.5808C31.5791 29.5796 29.0631 31.8429 26.0591 31.5271C24.7215 31.3861 23.4635 30.392 23.1001 29.1816C22.9004 28.5421 22.9011 27.8568 23.1021 27.2178C23.3032 26.5787 23.695 26.0165 24.2249 25.6065C24.6053 25.3225 25.0346 25.1108 25.4915 24.9819C26.5722 24.6643 27.6727 24.4152 28.7637 24.1348C29.4299 23.9618 29.6497 23.6676 29.6488 22.9815C29.6488 21.1248 29.6488 19.2678 29.6488 17.4105C29.6488 16.6162 29.1583 16.213 28.3839 16.3644C25.3718 16.9528 22.3598 17.5394 19.3477 18.1243C18.595 18.2696 18.1901 18.742 18.1901 19.5086C18.1901 22.7964 18.1901 26.0841 18.1901 29.3719C18.2059 30.5341 17.8227 31.6665 17.1042 32.5801C15.713 34.3711 13.0257 34.9828 11.1983 33.8779C10.0961 33.2108 9.47832 32.2158 9.57781 30.9077C9.69202 29.4005 10.4932 28.3458 11.9528 27.8967C13.0646 27.555 14.2023 27.3093 15.3332 27.0194C16.0409 26.8377 16.2555 26.5565 16.2555 25.8202C16.2555 21.7174 16.2555 17.6146 16.2555 13.5118C16.2555 12.6657 16.6725 12.1872 17.4962 12.0332C19.9343 11.579 22.3707 11.1126 24.808 10.6489C26.6665 10.297 28.5249 9.94663 30.3834 9.59766C31.0384 9.47567 31.5333 9.84511 31.5549 10.5226C31.5878 11.5608 31.5722 12.5991 31.573 13.6442C31.573 14.9472 31.573 16.2508 31.573 17.5549L31.5722 18.8709Z" fill="#29104D" />
                            </svg>

                        </span>
                        <h2>{props.musicListLeftBarHeading}</h2>
                    </div>
                    <div className="leftSliderdata">
                        <Link to={props.leftNavLink1}>
                            {props.LeftBarOption1}
                            <span>
                                <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.843757 0.999993L6.68751 6.84375L0.843757 12.6875" stroke="#29104C" strokeWidth="2" />
                                </svg>
                            </span>
                        </Link>

                        <Link to={props.leftNavLink2}>
                            {props.LeftBarOption2}
                            <span>
                                <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.843757 0.999993L6.68751 6.84375L0.843757 12.6875" stroke="#29104C" strokeWidth="2" />
                                </svg>
                            </span>
                        </Link>

                        <Link to={props.leftNavLink3}>
                            {props.LeftBarOption3}
                            <span>
                                <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.843757 0.999993L6.68751 6.84375L0.843757 12.6875" stroke="#29104C" strokeWidth="2" />
                                </svg>
                            </span>
                        </Link>

                        <Link to="#">
                            {props.LeftBarOption4}
                            <span>
                                <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.843757 0.999993L6.68751 6.84375L0.843757 12.6875" stroke="#29104C" strokeWidth="2" />
                                </svg>
                            </span>
                        </Link>

                        <Link to="#">
                            {props.LeftBarOption5}
                            <span>
                                <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.843757 0.999993L6.68751 6.84375L0.843757 12.6875" stroke="#29104C" strokeWidth="2" />
                                </svg>
                            </span>
                        </Link>

                        <Link to="#">
                            {props.LeftBarOption6}
                            <span>
                                <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.843757 0.999993L6.68751 6.84375L0.843757 12.6875" stroke="#29104C" strokeWidth="2" />
                                </svg>
                            </span>
                        </Link>

                        <Link to="#">
                            {props.LeftBarOption7}
                            <span>
                                <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.843757 0.999993L6.68751 6.84375L0.843757 12.6875" stroke="#29104C" strokeWidth="2" />
                                </svg>
                            </span>
                        </Link>

                        <Link to="#">
                            {props.LeftBarOption8}
                            <span>
                                <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.843757 0.999993L6.68751 6.84375L0.843757 12.6875" stroke="#29104C" strokeWidth="2" />
                                </svg>
                            </span>
                        </Link>

                        <Link to="#">
                            {props.LeftBarOption9}
                            <span>
                                <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.843757 0.999993L6.68751 6.84375L0.843757 12.6875" stroke="#29104C" strokeWidth="2" />
                                </svg>
                            </span>
                        </Link>

                        <Link to="#">
                            {props.LeftBarOption10}
                            <span>
                                <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.843757 0.999993L6.68751 6.84375L0.843757 12.6875" stroke="#29104C" strokeWidth="2" />
                                </svg>
                            </span>
                        </Link>

                        <Link to="#">
                            {props.LeftBarOption11}
                            <span>
                                <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.843757 0.999993L6.68751 6.84375L0.843757 12.6875" stroke="#29104C" strokeWidth="2" />
                                </svg>
                            </span>
                        </Link>

                        <Link to="#">
                            {props.LeftBarOption12}
                            <span>
                                <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.843757 0.999993L6.68751 6.84375L0.843757 12.6875" stroke="#29104C" strokeWidth="2" />
                                </svg>
                            </span>
                        </Link>

                        <Link to="#">
                            {props.LeftBarOption13}
                            <span>
                                <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.843757 0.999993L6.68751 6.84375L0.843757 12.6875" stroke="#29104C" strokeWidth="2" />
                                </svg>
                            </span>
                        </Link>

                        <Link to="#">
                            {props.LeftBarOption14}
                            <span>
                                <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.843757 0.999993L6.68751 6.84375L0.843757 12.6875" stroke="#29104C" strokeWidth="2" />
                                </svg>
                            </span>
                        </Link>

                        <Link to="#">
                            {props.LeftBarOption15}
                            <span>
                                <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.843757 0.999993L6.68751 6.84375L0.843757 12.6875" stroke="#29104C" strokeWidth="2" />
                                </svg>
                            </span>
                        </Link>

                        <Link to="#">
                            {props.LeftBarOption16}
                            <span>
                                <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.843757 0.999993L6.68751 6.84375L0.843757 12.6875" stroke="#29104C" strokeWidth="2" />
                                </svg>
                            </span>
                        </Link>

                        <Link to="#">
                            {props.LeftBarOption17}
                            <span>
                                <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.843757 0.999993L6.68751 6.84375L0.843757 12.6875" stroke="#29104C" strokeWidth="2" />
                                </svg>
                            </span>
                        </Link>

                        <Link to="#">
                            {props.LeftBarOption18}
                            <span>
                                <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.843757 0.999993L6.68751 6.84375L0.843757 12.6875" stroke="#29104C" strokeWidth="2" />
                                </svg>
                            </span>
                        </Link>

                        <Link to="#">
                            {props.LeftBarOption19}
                            <span>
                                <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.843757 0.999993L6.68751 6.84375L0.843757 12.6875" stroke="#29104C" strokeWidth="2" />
                                </svg>
                            </span>
                        </Link>

                        <Link to="#">
                            {props.LeftBarOption20}
                            <span>
                                <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.843757 0.999993L6.68751 6.84375L0.843757 12.6875" stroke="#29104C" strokeWidth="2" />
                                </svg>
                            </span>
                        </Link>

                        <Link to="#">
                            {props.LeftBarOption21}
                            <span>
                                <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.843757 0.999993L6.68751 6.84375L0.843757 12.6875" stroke="#29104C" strokeWidth="2" />
                                </svg>
                            </span>
                        </Link>

                        <Link to="#">
                            {props.LeftBarOption22}
                            <span>
                                <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.843757 0.999993L6.68751 6.84375L0.843757 12.6875" stroke="#29104C" strokeWidth="2" />
                                </svg>
                            </span>
                        </Link>

                        <Link to="#">
                            {props.LeftBarOption23}
                            <span>
                                <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.843757 0.999993L6.68751 6.84375L0.843757 12.6875" stroke="#29104C" strokeWidth="2" />
                                </svg>
                            </span>
                        </Link>

                        <Link to="#">
                            {props.LeftBarOption24}
                            <span>
                                <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.843757 0.999993L6.68751 6.84375L0.843757 12.6875" stroke="#29104C" strokeWidth="2" />
                                </svg>
                            </span>
                        </Link>

                        <Link to="#">
                            {props.LeftBarOption25}
                            <span>
                                <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.843757 0.999993L6.68751 6.84375L0.843757 12.6875" stroke="#29104C" strokeWidth="2" />
                                </svg>
                            </span>
                        </Link>

                        <Link to="#">
                            {props.LeftBarOption26}
                            <span>
                                <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.843757 0.999993L6.68751 6.84375L0.843757 12.6875" stroke="#29104C" strokeWidth="2" />
                                </svg>
                            </span>
                        </Link>

                        <Link to="#">
                            {props.LeftBarOption27}
                            <span>
                                <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.843757 0.999993L6.68751 6.84375L0.843757 12.6875" stroke="#29104C" strokeWidth="2" />
                                </svg>
                            </span>
                        </Link>

                        <Link to="#">
                            {props.LeftBarOption28}
                            <span>
                                <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.843757 0.999993L6.68751 6.84375L0.843757 12.6875" stroke="#29104C" strokeWidth="2" />
                                </svg>
                            </span>
                        </Link>

                        <Link to="#">
                            {props.LeftBarOption29}
                            <span>
                                <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.843757 0.999993L6.68751 6.84375L0.843757 12.6875" stroke="#29104C" strokeWidth="2" />
                                </svg>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>




            <div className="containerDiv shriRaagMusicBG">
                <div className="musicData">
                    <Link to={props.secondBackArrow} className='backBtn'>
                        <div className='pe-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="21" viewBox="0 0 13 21" fill="none">
                                <path d="M11.736 2L3 10.736L11.736 19.4719" stroke="#130726" strokeWidth="3"></path>
                            </svg>
                        </div>
                        Back
                    </Link>
                    <div className="">
                        <h3 className="m-0">{props.lyricsHeading1}</h3>
                        <p className="m-0">{props.lyricsHeading2}</p></div>
                </div>
            </div>
            <div className="" onClick={leftNavbar}>
                click
            </div>


            <div className="containerDiv">
                <div className="MusicLyrics text-black">
                    <h2>ਓਮ ਸਤਿਗੁਰ ਪ੍ਰਸਾਦਾ</h2>
                    <p>Lorem Ipsum is simply dummy text of the </p>

                    <h2>ਰਾਗੁ ਸਿਰੀਰਾਗੁ ਮਹਲਾ ਪਹਿਲਾ ੧ ਘਰੁ ੧ ॥</h2>
                    <p>Lorem Ipsum is simply dummy text of the </p>

                    <h2>ਹਰਿ ਬਿਨੁ ਜੀਉ ਜਲਿ ਬਲਿ ਜਾਉ ॥</h2>
                    <p>Lorem Ipsum is simply dummy text of the </p>

                    <h2>ਮੋਹਣੀ ਮੁਖਿ ਮਣੀ ਸੋਹੈ ਕਰੇ ਰੰਗਿ ਪਸਾਉ ॥</h2>
                    <p>Lorem Ipsum is simply dummy text of the </p>

                    <h2>ਹੁਕਮੁ ਹਾਸਲੁ ਕਰੀ ਬੈਠਾ ਨਾਨਕਾ ਸਭ ਵਾਉ ॥</h2>
                    <p>Lorem Ipsum is simply dummy text of the </p>

                    <h2 className="changeColor">ਰਾਗੁ ਸਿਰੀਰਾਗੁ ਮਹਲਾ ਪਹਿਲਾ ੧ ਘਰੁ ੧ ॥</h2>
                    <p className="changeColor">Lorem Ipsum is simply dummy text of the </p>

                    <h2 className="changeColor">ਹਰਿ ਬਿਨੁ ਜੀਉ ਜਲਿ ਬਲਿ ਜਾਉ ॥</h2>
                    <p className="changeColor">Lorem Ipsum is simply dummy text of the </p>

                    <h2 className="changeColor">ਮੋਹਣੀ ਮੁਖਿ ਮਣੀ ਸੋਹੈ ਕਰੇ ਰੰਗਿ ਪਸਾਉ ॥</h2>
                    <p className="changeColor">Lorem Ipsum is simply dummy text of the </p>

                    <h2 className="changeColor">ਹੁਕਮੁ ਹਾਸਲੁ ਕਰੀ ਬੈਠਾ ਨਾਨਕਾ ਸਭ ਵਾਉ ॥</h2>
                    <p className="changeColor">Lorem Ipsum is simply dummy text of the </p>

                </div>
            </div>
            
            {/* <MusicPlayer1 musicLink1="Sri Raag" musicLink2="ੴ ਸਤਿਗੁਰ ਪ੍ਰਸਾਦਿ"  />
            <Footer /> */}
        </div>
    )
}
