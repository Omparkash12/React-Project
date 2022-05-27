import React from 'react'
import Navbar from '../Shared/Navbar/Navbar';
import MainHeading from '../Home/MainHeading/MainHeading';

import brandImg from '../Images/brand.png';
import headingLineImg from '../Images/lineImg.svg'
import StaticMusicPlayer from '../Home/StaticMusicPlayer/StaticMusicPlayer';
import Accordion from '../Home/Accordion/Accordion';
import MainParagraph from '../Home/MainParagraph/MainParagraph';
import NewsLetter from '../Home/NewsLetter/NewsLetter';
import Footer from '../Shared/Footer/Footer';

export default function ShabadRadio() {
    const raagNavPadding = {
        padding: '',
    }


    return (
        <div className="">
            <Navbar brand={brandImg} backAddress='/' navAdjustPadding={raagNavPadding} centerImage='' />
            <div className="headingPadding">
                <MainHeading heading1='Shabad Radio' heading2='' headingLineImg={headingLineImg} />
            </div>

            <StaticMusicPlayer />
            <Accordion accordionHeading1="Raags" accordionHeading2="Popular Baanis" AccorLink1="Pre Raags" AccorLink2="Raags" AccorLink3="Post Raags" AccorLink4="Japji" AccorLink5="Sodar" AccorLink6="Sodar Rehras" />

            <div className="containerDiv">
                <div className="boxShadow">
                    <MainHeading heading1="Shabad Radio" heading2="" headingLineImg={headingLineImg} />
                    <MainParagraph paragraph='The purpose of Raag Malhar is a communication of feelings from the soul, to show the mind how to become cool and refreshed. The mind is always burning with the desire to reach its goals uickly and without effort, however the emotions conveyed in this Raag can bring composure and fulfilment to the mind. Raag Malhar brings the emotion that anyone who drinks a drop of Amrit from Gurbani becomes cool and satisfied. It can bring the mind into this calmness, bringing a sense of satisfaction and    contentment. Raag Malhar is usually sung in the rainy season at any time.' />
                </div>
            </div>

            <NewsLetter NewsHeading="SIGN TO OUR NEWSLETTER" NewsButton="SUBSCRIBE NOW"/>
            <Footer />
        </div>
    )
}
