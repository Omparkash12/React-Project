import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';

// import backArrow from '../Images/raagNavArrow.svg';
import brandImg from '../Images/brand.png';
import trackIcon from '../Images/trackIcon.svg';

import RaagMusic from '../Raag/RaagMusic/RaagMusic';
import popularBaani from '../Images/polularBaaniImg.png'
import RaagMusicList from '../Raag/RaagMusicList/RaagMusicList';
import Footer from '../Shared/Footer/Footer';

export default function PopularBaani() {
    const raagNavPadding = {
        padding: '',
    }
    return (
        <div className="">
            <Navbar brand={brandImg} backAddress='/' navAdjustPadding={raagNavPadding} centerImage='' />

            <RaagMusic playbuttonIcon={popularBaani} randomplayPaddingTop='2rem' playHeading='Popular Baanis' randomPlayButton='Play Random' />
            <RaagMusicList secondBackArrow ='/' shriRaagMusictrack1='/japjisahibmusicplayer' link3shriRaagPage='' raagHeading="34 Popular Baanis" trackIcon={trackIcon} raagLink1='Japji Sahib' raagLink2='Sodar' raagLink3='Sodar Rehras' raagLink4='Sohila' raagLink5='Bara Maha' raagLink6='Bavan Akhri' raagLink7='Sukhmani Sahib' raagLink8='Bavan Akhri (Bhagat Kabir Ji)' raagLink9='Japji Sahib' raagLink10='Sodar' raagLink11='Sodar Rehras' raagLink12='Sohila' raagLink13='Bara Maha' raagLink14='Bavan Akhri' raagLink15='Sukhmani Sahib' raagLink16='Bavan Akhri (Bhagat Kabir Ji)' raagLink17='Japji Sahib' raagLink18='Sodar' raagLink19='Sodar Rehras' raagLink20='Sohila' raagLink21='Bara Maha' raagLink22='Bavan Akhri' raagLink23='Sukhmani Sahib' raagLink24='Bavan Akhri (Bhagat Kabir Ji)' raagLink25='Japji Sahib' raagLink26='Sodar' raagLink27='Sodar Rehras' raagLink28='Sohila'/>

            <Footer />
        </div>
    )
}
