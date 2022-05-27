import React from 'react';
import '../Raag/Raag/Raag.css'
import Navbar from '../Shared/Navbar/Navbar'
import RaagMusic from '../Raag/RaagMusic/RaagMusic';
import RaagMusicList from '../Raag/RaagMusicList/RaagMusicList';

import backArrow from '../Images/raagNavArrow.svg';
import shriRaagIcon from '../Images/shriRaag.png';
import trackIcon from '../Images/trackIcon.svg';

import shriRaagBrandImage from '../Images/brand.png';
import Footer from '../Shared/Footer/Footer';


export default function ShriRaag() {

  const raagNavPadding = {
    padding: "8px 0",
  }


  return (
    <div>
      <div className="Raagpadding">
        <Navbar brand={backArrow} backAddress='/raag' navAdjustPadding={raagNavPadding} centerImage={shriRaagBrandImage} />
      </div>
      <RaagMusic playbuttonIcon={shriRaagIcon} playHeading='Shri Raag' randomPlayButton='Play Random' />
      <RaagMusicList secondBackAroow='' shriRaagMusictrack1='/shriraagmusicplayer' link3shriRaagPage='' raagHeading="40 Shabad" trackIcon={trackIcon} raagLink1='ਆਵਹੁ ਭੈਣੇ ਤੁਸੀ ਮਿਲਹੁ ਪਿਆਰੀਆ ॥' raagLink2='ਮੇਰਾ ਮਨੁ ਲੋਚੈ ਗੁਰ ਦਰਸਨ ਤਾਈ ॥' raagLink3='ਸਾ ਰੁਤਿ ਸੁਹਾਵੀ ਜਿਤੁ ਤੁਧੁ ਸਮਾਲੀ ॥' raagLink4='ਅਨਹਦੁ ਵਾਜੈ ਸਹਜਿ ਸੁਹੇਲਾ ॥' raagLink5='ਜਿਤੁ ਘਰਿ ਪਿਰਿ ਸੋਹਾਗੁ ਬਣਾਇਆ ॥' raagLink6='ਖੋਜਤ ਖੋਜਤ ਦਰਸਨ ਚਾਹੇ ॥' raagLink7='ਪਾਰਬ੍ਰਹਮ ਅਪਰੰਪਰ ਦੇਵਾ ॥' raagLink8='ਕਹਿਆ ਕਰਣਾ ਦਿਤਾ ਲੈਣਾ ॥' raagLink9='ਦੁਖੁ ਤਦੇ ਜਾ ਵਿਸਰਿ ਜਾਵੈ ॥' raagLink10='ਲਾਲ ਗੋਪਾਲ ਦਇਆਲ ਰੰਗੀਲੇ ॥' raagLink11='ਧੰਨੁ ਸੁ ਵੇਲਾ ਜਿਤੁ ਮੈ ਸਤਿਗੁਰੁ ਮਿਲਿਆ ॥' raagLink12='ਸਗਲ ਸੰਤਨ ਪਹਿ ਵਸਤੁ ਇਕ ਮਾਂਗਉ ॥' raagLink13='ਵਿਸਰੁ ਨਾਹੀ ਏਵਡ ਦਾਤੇ ॥' raagLink14='ਸਿਫਤਿ ਸਾਲਾਹਣੁ ਤੇਰਾ ਹੁਕਮੁ ਰਜਾਈ ॥' raagLink15='ਤੂੰ ਜਲਨਿਧਿ ਹਮ ਮੀਨ ਤੁਮਾਰੇ ॥' raagLink16='ਅੰਮ੍ਰਿਤ ਨਾਮੁ ਸਦਾ ਨਿਰਮਲੀਆ ॥' raagLink17='ਨਿਧਿ ਸਿਧਿ ਰਿਧਿ ਹਰਿ ਹਰਿ ਹਰਿ ਮੇਰੈ ॥' raagLink18='ਪ੍ਰਭ ਕਿਰਪਾ ਤੇ ਹਰਿ ਹਰਿ ਧਿਆਵਉ ॥' raagLink19='ਓਤਿ ਪੋਤਿ ਸੇਵਕ ਸੰਗਿ ਰਾਤਾ ॥' raagLink20='ਸਭ ਕਿਛੁ ਘਰ ਮਹਿ ਬਾਹਰਿ ਨਾਹੀ ॥' raagLink21='ਤਿਸੁ ਕੁਰਬਾਣੀ ਜਿਨਿ ਤੂੰ ਸੁਣਿਆ ॥' raagLink22='ਤੂੰ ਪੇਡੁ ਸਾਖ ਤੇਰੀ ਫੂਲੀ ॥' raagLink23='ਸਫਲ ਸੁ ਬਾਣੀ ਜਿਤੁ ਨਾਮੁ ਵਖਾਣੀ ॥' raagLink24='ਅੰਮ੍ਰਿਤ ਬਾਣੀ ਹਰਿ ਹਰਿ ਤੇਰੀ ॥' raagLink25='ਆਵਹੁ ਭੈਣੇ ਤੁਸੀ ਮਿਲਹੁ ਪਿਆਰੀਆ ॥' raagLink26='ਮੇਰਾ ਮਨੁ ਲੋਚੈ ਗੁਰ ਦਰਸਨ ਤਾਈ ॥' raagLink27='ਪਾਰਬ੍ਰਹਮ ਅਪਰੰਪਰ ਦੇਵਾ ॥' raagLink28='' />

      <Footer />
    </div>
  )
}
