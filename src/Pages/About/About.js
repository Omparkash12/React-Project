import React from 'react';
import './About.css';
import Navbar from '../Shared/Navbar/Navbar';
import MainHeading from '../Home/MainHeading/MainHeading';

import brandImg from '../Images/brand.png';
import headingLineImg from '../Images/lineImg.svg'
import MainParagraph from '../Home/MainParagraph/MainParagraph';
import NewsLetter from '../Home/NewsLetter/NewsLetter';
import Footer from '../Shared/Footer/Footer';

export default function About() {
    const raagNavPadding = {
        padding: "",
    }

    return (
        <div className="">
            <Navbar brand={brandImg} backAddress='/' navAdjustPadding={raagNavPadding} centerImage='' />
            <div className="headingPadding">
                <MainHeading heading1='About' heading2='' headingLineImg={headingLineImg} />
            </div>
            <div className="containerDiv mainParagraphPaddBottom">
                <MainParagraph paragraph='For the first time ever, the entire Guru Granth Sahib ji has been sung in the Raags in which it was written. Many of the musical instruments used were the same string instruments from the Gurus times. The children at Gurdwara Baru Sahib spent over six years recording this kirtan for the entire Bani in Guru Granth Sahib Ji. Shabad Guru was created to make sure everyone has access to this treasure. The entire Guru Granth Sahib Ji, organized by the Raags it was written in, is present in this website. We hope the Sadh Sangat enjoys this blessing from Waheguru Ji.' />
            </div>
            <NewsLetter NewsHeading="SIGN TO OUR NEWSLETTER" NewsButton="SUBSCRIBE NOW" />
            <Footer/>
        </div>
    )
}
