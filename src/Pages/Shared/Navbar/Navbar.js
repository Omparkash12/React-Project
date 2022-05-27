import React, { useEffect } from 'react';
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';
import './Navbar.css';

import { Link } from 'react-router-dom';

// import brand from '../../Images/brand.png';
// import toggleLines from '../../Images/toggleLines.png';
import fb from '../../Images/fb.svg';
import instagram from '../../Images/instagram.svg';
import twitter from '../../Images/twitter.svg';
import youtube from '../../Images/youtube.svg';
import linkedIn from '../../Images/linkedIn.svg';
import email from '../../Images/email.svg';



export default function Navbar(props) {
    // let get_btn = document.getElementById("openNav");
    // get_btn.addEventListener('click', function () {
    //     let get_this = this;
    //     if (get_this.classList.contains('open')){
    //         get_this.classList.remove('open');
    //         document.getElementById('hunger').classList.remove('open');
    //         document.getElementById('mySidenav').style.right = '-200px';
    //         setTimeout(settimeout1, 300);
    //     } else{
    //         get_this.classList.add('open');
    //         document.getElementById('open');
    //         document.getElementById('hunger').classList.add('open');
    //         document.getElementById('mySidenav').classList.add('open');
    //         setTimeout(settimeout2, 200);
    //     }
    // })

    // function settimeout1 () {
    //     document.getElementById('mySidenav').style.right = '0px';
    // }

    // function settimeout2 () {
    //     document.getElementById('mySidenav').style.right = '0px';
    // }

    // function myFunction() {
    //     var element = document.getElementById("myDIV");
    //     element.classList.add("mystyle");
    //  }



    window.onload = function () {
        // document.getElementById("closeHamburger").style.display = "none";
        // var element = document.getElementById("closeHamburger");
        // element.classList.add("mystyle");
    }


    const openNav = () => {
        document.getElementById("mySidenav").style.transform = "translateX(0%)";
        const element = document.getElementById("openNav");
        element.classList.add("mystyle");
        const element1 = document.getElementById("closeHamburger");
        element1.classList.remove("mystyle");

        const element2 = document.getElementById("closeHamburger");
        element2.classList.remove("closeHamburger");

        document.getElementById("line1").style.transform = "rotate(-45deg) translate(0px, 2px)";
        document.getElementById("line1").style.transition = "1s";

        document.getElementById("line2").style.display = "none";

        document.getElementById("line3").style.transform = "rotate(45deg) translate(0px, -2px)";
        document.getElementById("line3").style.transition = "1s";
    }

    const closeNav = () => {
        document.getElementById("mySidenav").style.transform = "translateX(101%)";
        const element = document.getElementById("openNav");
        element.classList.remove("mystyle");

        const element3 = document.getElementById("closeHamburger");
        element3.classList.add("mystyle");
    }


    useEffect(() => {

        $(function () {
            // $(".navDropdown").on("click", function () {
            //     $(".dropdownRaags").toggle('show');
            // });

            // $(window).on('load', function () {
            //     $(".closeHamburger").css('display', 'none');
            // });

            // $("#mySidenav").on("click", function () {
            //     $(".line1").css("transform", "rotate(-45deg) translate(-9px, 5px)");
            //     $(".line1").css("transition", "0.4s");
            //     $(".line2").css("display", "none");
            //     $(".line3").css("transform", "rotate(45deg) translate(-7px, 4px)");
            //     $(".line3").css("transition", "0.4s");
            // });

            $("#openNav").on("click", function () {
                $(".containerDiv").css("opacity", "0.3");
                $(".RaagNav").css("opacity", "0.3");
            });

            $("#closeHamburger").on("click", function () {
                $(".containerDiv").css("opacity", "1");
                $(".RaagNav").css("opacity", "1");
            });
        })



    }, [])

    // const leftNavbar = () => {
    //     document.getElementById('jfdbjsb').style.transform = 'translateX(0%)'
    // }



    return (
        <>
            <div className="containerFluidDiv sideNavShadow HomeNav">

                <div className="containerDiv navBG  ">
                    <div className="navBar fadeNav" style={props.navAdjustPadding}>
                        <Link to={`${props.backAddress}`} className="navBrand">
                            <img src={props.brand} alt=""/>
                        </Link >

                        {/* <a className="btn p-0 " data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                            <Link onClick='' to="#" className="navToggle btn-close p-0" id='openNav' data-bs-dismiss="offcanvas" aria-label="Close">
                                <div id='hunger' className='toggleLine'></div>
                                <div id='hunger' className='toggleLine'></div>
                                <div id='hunger' className='toggleLine'></div>
                            </Link >
                        </a> */}

                        <Link to='/' className=''>
                            <img src={props.centerImage} alt="" />
                        </Link >

                        <div className="">
                            <Link onClick={openNav} to="#" className="navToggle" id='openNav'>
                                <div id='' className='toggleLine'></div>
                                <div id='' className='toggleLine' style={{ margin: '6px 0' }}></div>
                                <div id='' className='toggleLine'></div>
                            </Link >
                            <div className="closeHamburger" id='closeHamburger' onClick={closeNav}>
                                <div id='line1' className='toggleLine line1'></div>
                                <div id='line2' className='toggleLine line2'></div>
                                <div id='line3' className='toggleLine line3'></div>
                            </div>
                        </div>


                    </div>



                    <div className="outerShadow position-relative">
                        <div id="mySidenav" className="sidenav">
                            <div className="sideNavLinks">
                                <Link to="/">Home</Link >

                                <div className="accordion accordion-flush sideNavAccordion" id="accordionFlushExample">
                                    <div className="accordion-item sideNavAccor">
                                        <h2 className="accordion-header" id="flush-headingThree">
                                            <button className="accordion-button collapsed sidenavDropdown" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                Raags
                                                <div>
                                                    {/* <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.7361 2L7.3681 6.36798L3.00012 10.736L11.7361 19.4719" stroke="white" strokeWidth="3" />
                                                    </svg> */}
                                                </div>
                                            </button>
                                        </h2>
                                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                            <div className="accordion-body">
                                                <ul className=''>
                                                    <li>
                                                        <Link to="#">Pre Raags</Link >
                                                    </li>

                                                    <li>
                                                        <Link to="/raag">Raags</Link >
                                                    </li>

                                                    <li>
                                                        <Link to="#">Post Raags</Link >
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Link to="/polularbaani">Popular Bannis</Link >
                                <Link to="/shabadradio">Shabad Radio</Link >
                                <Link to="/kirtanis">The Kirtanis</Link >
                                <Link to="/about">About us</Link >
                                <Link to="/contact">Contact Us</Link >
                            </div>

                            <div className="sideNavSocialLinks">
                                <div className="socialLinks">
                                    <Link to="#">
                                        <img className="marginRight" src={fb} alt="facebook" />
                                    </Link >
                                    <Link to="#">
                                        <img className="mediaLinksSpace" src={instagram} alt="instagram" />
                                    </Link >
                                    <Link to="#">
                                        <img className="mediaLinksSpace" src={twitter} alt="twitter" />
                                    </Link >
                                    <Link to="#">
                                        <img className="mediaLinksSpace" src={youtube} alt="youtube" />
                                    </Link >
                                    <Link to="#">
                                        <img className="marginLeft" src={linkedIn} alt="linkedIn" />
                                    </Link >
                                </div>
                                <div className="emailData">
                                    <Link to="#" className="emailIcon">
                                        <img src={email} alt="email" />
                                    </Link >
                                    <p>info@shabadguru.com</p>
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        Button with data-bs-target
                    </button> */}


                </div>
            </div>

            {/* <div className="offcanvas offcanvas-end myOffCanvas" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-body">

                    <ul className="canvasList">
                        <li>
                            <a href="#">About</a>
                        </li>

                        <li>
                            <a href="#">
                                <div class="accordion accordion-flush" id="accordionFlushExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="flush-headingThree">
                                            <button class="accordion-button collapsed sidenavbarAccor" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                Raag
                                            </button>
                                        </h2>
                                        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body sidenavbarBody">
                                                <ul className='raagList'>
                                                    <li>
                                                        <Link to="#">Pre Raags</Link >
                                                    </li>

                                                    <li>
                                                        <Link to="/raag">Raags</Link >
                                                    </li>

                                                    <li>
                                                        <Link to="#">Post Raags</Link >
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>

                        <li>
                            <Link to="#">Popular Bannis</Link >
                        </li>

                        <li>
                            <Link to="#">Shabad Radio</Link >
                        </li>

                        <li>
                            <Link to="#">The Kirtanis</Link >
                        </li>

                        <li>
                            <Link to="#">About us</Link >
                        </li>

                        <li>
                            <Link to="#">Contact Us</Link >
                        </li>
                    </ul>

                </div>
            </div> */}




            {/* <div className="outerShadow position-relative">
                                <div id="mySidenav" className="sidenav">
                                    <div className="sideNavLinks">
                                        <Link to="#" className="closebtn">
                                            <div>
                                                <div className='toggleLine line1'></div>
                                                <div className='toggleLine line2'></div>
                                                <div className='toggleLine line3'></div>
                                            </div>
                                        </Link >

                                        <Link to="#">About</Link >


                                        <div className="accordion accordion-flush sideNavAccordion" id="accordionFlushExample">
                                            <div className="accordion-item sideNavAccor">
                                                <h2 className="accordion-header" id="flush-headingThree">
                                                    <button className="accordion-button collapsed sidenavDropdown" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                        Raags
                                                        <div>
                                                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M11.7361 2L7.3681 6.36798L3.00012 10.736L11.7361 19.4719" stroke="white" strokeWidth="3" />
                                                            </svg>
                                                        </div>
                                                    </button>
                                                </h2>
                                                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                                    <div className="accordion-body">
                                                        <ul className=''>
                                                            <li>
                                                                <Link to="#">Pre Raags</Link >
                                                            </li>

                                                            <li>
                                                                <Link to="/raag">Raags</Link >
                                                            </li>

                                                            <li>
                                                                <Link to="#">Post Raags</Link >
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <Link to="#">Popular Bannis</Link >
                                        <Link to="#">Shabad Radio</Link >
                                        <Link to="#">The Kirtanis</Link >
                                        <Link to="#">About us</Link >
                                        <Link to="#">Contact Us</Link >
                                    </div>

                                    <div className="sideNavSocialLinks">
                                        <div className="socialLinks">
                                            <Link to="#">
                                                <img className="marginRight" src={fb} alt="facebook" />
                                            </Link >
                                            <Link to="#">
                                                <img className="mediaLinksSpace" src={instagram} alt="instagram" />
                                            </Link >
                                            <Link to="#">
                                                <img className="mediaLinksSpace" src={twitter} alt="twitter" />
                                            </Link >
                                            <Link to="#">
                                                <img className="mediaLinksSpace" src={youtube} alt="youtube" />
                                            </Link >
                                            <Link to="#">
                                                <img className="marginLeft" src={linkedIn} alt="linkedIn" />
                                            </Link >
                                        </div>
                                        <div className="emailData">
                                            <Link to="#" className="emailIcon">
                                                <img src={email} alt="email" />
                                            </Link >
                                            <p>info@shabadguru.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div> */}







        </>
    )
}
