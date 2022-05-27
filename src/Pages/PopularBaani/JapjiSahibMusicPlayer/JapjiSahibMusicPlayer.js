import React from 'react'
import musicNavBrand from '../../Images/musicNavIcon.svg';
import shriRaagBrandImage from '../../Images/brand.png';
import japjiImg from '../../Images/J.png';

import Navbar from '../../Shared/Navbar/Navbar';
import ShriRaagMusicLyrics from '../../ShriRaag/ShriRaagMusicPlayer/ShriRaagMusicLyrics';
import MusicPlayer1 from '../../Home/MusicPlayer1/MusicPlayer1';

export default function JapjiSahibMusicPlayer() {
  const raagNavPadding = {
    padding: ''
  }

  return (
    <div className="">
      <Navbar brand={musicNavBrand} backAddress='' navAdjustPadding={raagNavPadding} centerImage={shriRaagBrandImage} />
      <ShriRaagMusicLyrics secondBackArrow ='/polularbaani' lyricsHeading1='Japji Sahib' lyricsHeading2='ਓਮ ਸਤਿਗੁਰ ਪ੍ਰਸਾਦਾ' musicListLeftBarHeading='Popular Baani' LeftBarOption1='Japji Sahib' LeftBarOption2='Sodar' LeftBarOption3='Sodar Rehras' LeftBarOption4='Sohila' LeftBarOption5='Raag Gujri' LeftBarOption6='Raag Devgandhari' LeftBarOption7='Raag Bihagra' LeftBarOption8='Raag Vadhans' LeftBarOption9='Raag Sorath' LeftBarOption10='Raag Dhanasri' LeftBarOption11='Raag Jaitsri' LeftBarOption12='Raag Todhi' LeftBarOption13='Raag Bairari' LeftBarOption14='Raag Gaund' LeftBarOption15='Raag Ramkali' LeftBarOption16='Raag Nat Narayan' LeftBarOption17='Raag Mali Gaura' LeftBarOption18='Raag Maaru' LeftBarOption19='Raag Tukhari' LeftBarOption20='Raag Kedara' LeftBarOption21='Raag Bhairon' LeftBarOption22='Raag Basant' LeftBarOption23='Raag Sarang' LeftBarOption24='Raag Malaar' LeftBarOption25='Raag Kaanra' LeftBarOption26='Raag Kalyaan' LeftBarOption27='Raag Parbhati' LeftBarOption28='Raag Ramkali' LeftBarOption29='Raag Nat Narayan' LeftBarOption30='Raag Mali Gaura' leftNavLink1='' leftNavLink2='' leftNavLink3=''/>

      <MusicPlayer1 musicLink1="Japji Sahib" musicLink2="" shriRaagImg={japjiImg} bottomNavHeading='Japji Sahib' languageOpt1='Multi Lingual' languageOpt2='Gurmukhi' languageOpt3='Trans' languageCloseBtn='Close' />

    </div>
  )
}
