import React from 'react';
import './Raag.css'
import Navbar from '../../Shared/Navbar/Navbar';
import backArrow from '../../Images/raagNavArrow.svg';
import RaagMusic from '../RaagMusic/RaagMusic';
import RaagMusicList from '../RaagMusicList/RaagMusicList';

import playbuttonIcon from '../../Images/playImageR.png';
import trackIcon from '../../Images/trackIcon.svg'

import raagBrandImage from '../../Images/brand.png';
import Footer from '../../Shared/Footer/Footer';

export default function Raag() {

  const raagNavPadding = {
    padding: "8px 0",
  }


  return (
    <div className=''>
      <div className="Raagpadding">
        <Navbar brand={backArrow} backAddress='/' navAdjustPadding={raagNavPadding} centerImage={raagBrandImage} />
      </div>
      <RaagMusic playbuttonIcon={playbuttonIcon} playHeading='Raag' randomPlayButton='Play Random' />
      <RaagMusicList shriRaagMusictrack1='' link3shriRaagPage='/shriraag' raagHeading="34 Raags" trackIcon={trackIcon} raagLink1='Raags' raagLink2='Pre Raags' raagLink3='Shri Raag' raagLink4='Raag Maajh' raagLink5='Raag Gauri' raagLink6='Raag Gujri' raagLink7='Raag Devgandhari' raagLink8='Raag Bihagra' raagLink9='Raag Vadhans' raagLink10='Raag Sorath' raagLink11='Raag Dhanasri' raagLink12='Raag Jaitsri' raagLink13='Raag Todhi' raagLink14='Raag Bairari' raagLink15='Raag Tilang' raagLink16='Raag Suhi' raagLink17='Raag Bilawal' raagLink18='Raag Gaund' raagLink19='Raag Ramkali' raagLink20='Raag Nat Narayan' raagLink21='Raag Mali Gaura' raagLink22='Raag Maaru' raagLink23='Raag Tukhari' raagLink24='Raag Kedara' raagLink25='Raag Bhairon' raagLink26='Raag Basant' raagLink27='Raag Sarang' raagLink28='' />

      <Footer />
    </div>
  )
}
