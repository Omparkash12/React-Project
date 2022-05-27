import React from 'react';
import Navbar from '../../../Shared/Navbar/Navbar';

import ShriRaagMusicLyrics from '../ShriRaagMusicLyrics';
import MusicPlayer1 from '../../../Home/MusicPlayer1/MusicPlayer1';

import shriRaagImg from '../../../Images/shriRaag1.png';
import musicNavBrand from '../../../Images/musicNavIcon.svg';
import shriRaagBrandImage from '../../../Images/brand.png';



export default function ShriRaagMusicPlayer() {
    const raagNavPadding = {
        padding: ''
    }

  return (
      <div className="">
            <Navbar brand={musicNavBrand} backAddress='' navAdjustPadding={raagNavPadding} centerImage={shriRaagBrandImage} />
            <ShriRaagMusicLyrics secondBackArrow ='/shriraag' lyricsHeading1='Shri Raag' lyricsHeading2='ਓਮ ਸਤਿਗੁਰ ਪ੍ਰਸਾਦਾ' musicListLeftBarHeading='Shri Raag' LeftBarOption1='Sri Raag' LeftBarOption2='Raag Maajh' LeftBarOption3='Raag Gauri' LeftBarOption4='Raag Aasa' LeftBarOption5='Raag Gujri' LeftBarOption6='Raag Devgandhari' LeftBarOption7='Raag Bihagra' LeftBarOption8='Raag Vadhans' LeftBarOption9='Raag Sorath' LeftBarOption10='Raag Dhanasri' LeftBarOption11='Raag Jaitsri' LeftBarOption12='Raag Todhi' LeftBarOption13='Raag Bairari' LeftBarOption14='Raag Gaund' LeftBarOption15='Raag Ramkali' LeftBarOption16='Raag Nat Narayan' LeftBarOption17='Raag Mali Gaura' LeftBarOption18='Raag Maaru' LeftBarOption19='Raag Tukhari' LeftBarOption20='Raag Kedara' LeftBarOption21='Raag Bhairon' LeftBarOption22='Raag Basant' LeftBarOption23='Raag Sarang' LeftBarOption24='Raag Malaar' LeftBarOption25='Raag Kaanra' LeftBarOption26='Raag Kalyaan' LeftBarOption27='Raag Parbhati' LeftBarOption28='Raag Ramkali' LeftBarOption29='Raag Nat Narayan' LeftBarOption30='Raag Mali Gaura' leftNavLink1='' leftNavLink2='/raagmaajhmusicplayer' leftNavLink3=''/>

            <MusicPlayer1 musicLink1="Sri Raag" musicLink2="ੴ ਸਤਿਗੁਰ ਪ੍ਰਸਾਦਿ" shriRaagImg={shriRaagImg} bottomNavHeading='Shri Raag' languageOpt1='Multi Lingual' languageOpt2='Gurmukhi' languageOpt3='Trans' languageCloseBtn='Close' />
            {/* <Footer />             */}
      </div>
  )
}
