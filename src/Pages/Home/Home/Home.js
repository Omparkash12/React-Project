import React from 'react';
import './Home.css';
import Navbar from '../../Shared/Navbar/Navbar';
import SearchBar from '../SearchBar/SearchBar';
import MainHeading from '../MainHeading/MainHeading';
import Accordion from '../Accordion/Accordion';
import MainParagraph from '../MainParagraph/MainParagraph';
import LargeImages from '../LargeImages/LargeImages';
import NewsLetter from '../NewsLetter/NewsLetter';
import StaticMusicPlayer from '../StaticMusicPlayer/StaticMusicPlayer';


// Images
import brandImages from '../../Images/brand.png';
import Footer from '../../Shared/Footer/Footer';

import headingLineImg from '../../Images/lineImg.svg';

export default function Home() {

  const navNoPadding = {
    padding: "8px 0", 
  }


  
  return (
    <div>
      <Navbar brand={brandImages} backAddress='/' navAdjustPadding={navNoPadding}/>
      <SearchBar />
      <MainHeading heading1="Sabad Radio" heading2="" headingLineImg={headingLineImg} />
      <StaticMusicPlayer />
      <Accordion accordionHeading1="Raags" accordionHeading2="Popular Baanis" AccorLink1="Pre Raags" AccorLink2="Raags" AccorLink3="Post Raags" AccorLink4="Japji" AccorLink5="Sodar" AccorLink6="Sodar Rehras" />

      <div className="containerDiv">
        <div className="boxShadow">
          <MainHeading heading1="Raag Malaar" heading2="" headingLineImg={headingLineImg} />
          <MainParagraph paragraph='The purpose of Raag Malhar is a communication of feelings from the soul, to show the mind how to become cool and refreshed. The mind is always burning with the desire to reach its goals uickly and without effort, however the emotions conveyed in this Raag can bring composure and fulfilment to the mind. Raag Malhar brings the emotion that anyone who drinks a drop of Amrit from Gurbani becomes cool and satisfied. It can bring the mind into this calmness, bringing a sense of satisfaction and    contentment. Raag Malhar is usually sung in the rainy season at any time.' />
        </div>
      </div>

      <div className="topBottomPadding">
        <MainHeading heading1="The Kirtanis" heading2="Baru sahib Kids doing Kirtan" headingLineImg={headingLineImg} />
        <LargeImages />
      </div>

      <NewsLetter NewsHeading="SIGN TO OUR NEWSLETTER" NewsButton="SUBSCRIBE NOW"/>
      <Footer />
    </div>
  )
}
