import React from 'react';
import './Kirtanis.css'
import MainHeading from '../Home/MainHeading/MainHeading';
import MainParagraph from '../Home/MainParagraph/MainParagraph';
import Navbar from '../Shared/Navbar/Navbar';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import LargeImage from '../Home/LargeImages/LargeImages';
import Footer from '../Shared/Footer/Footer';
import NewsLetter from '../Home/NewsLetter/NewsLetter';

import brandImg from '../Images/brand.png';
import headingLineImg from '../Images/lineImg.svg';

export default function Kirtanis() {
    const raagNavPadding = {
        padding: "",
    }

    return (
        <div className="">
            <Navbar brand={brandImg} backAddress='/' navAdjustPadding={raagNavPadding} centerImage='' />
            <div className="containerDiv headingPadding">
                <MainHeading heading1="The Kirtanis" heading2="" headingLineImg={headingLineImg} />
            </div>

            <div className="containerDiv">
                <MainParagraph paragraph='The Kirtan on this website has been sung by the students of Baru Sahib (Kalgidhar Society). These young students have been trained in Raags by dozens of accomplished Professors of Raagas (Music).Anahad BaniwithTantiSaaz has been undertaken by these students for the first time in the history of Sikh television. It is a mesmerizing Raag Aadharit rendition of the complete Guru Granth Sahib Ji. All the Kirtan you hear on this website is the audio files of the Kirtan they sung on television. More information on the Kalgidhar Society is available on www.barsahib.org. You can also see the Baru Sahib students doing Kirtan on the youtube link below.' />
            </div>
            <VideoPlayer />

            <MainHeading heading1='' heading2='Baru sahib Kids doing Kirtan' headingLineImg='' />
            <LargeImage />
            <NewsLetter NewsHeading="SIGN TO OUR NEWSLETTER" NewsButton="SUBSCRIBE NOW" />
            <Footer />


        </div>
    )
}
