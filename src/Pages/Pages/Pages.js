import React from 'react';
import Contact from '../Contact/Contact';
import Raag from '../Raag/Raag/Raag';
import Home from '../Home/Home/Home';
import ShriRaag from '../ShriRaag/ShriRaag';

import { Routes, Route } from 'react-router-dom';
import PopularBaani from '../PopularBaani/PopularBaani';
import ShriRaagMusicPlayer from '../ShriRaag/ShriRaagMusicPlayer/ShriRaagMusicPlayer/ShriRaagMusicPlayer';
import RaagMaajhMusicPlayer from '../Raag/RaagMaajhMusicPlayer/RaagMaajhMusicPlayer';
import JapjiSahibMusicPlayer from '../PopularBaani/JapjiSahibMusicPlayer/JapjiSahibMusicPlayer';
import Kirtanis from '../Kirtanis/Kirtanis';
import About from '../About/About';
import ShabadRadio from '../ShabadRadio/ShabadRadio';
// import DynamicMusicPlayer from '../Home/DynamicMusicPlayer/DynamicMusicPlayer';

export default function Pages() {
  return (
      
    <div className="">
      {/* <Navbar /> */}
      {/* <Home /> */}
      {/* <Raags /> */}
      {/* <ShriRaag /> */}
      {/* <ShriRaagMusicPlayer backAdrees='' /> */}
      {/* <Copy /> */}
      {/* <RaagMaajhMusicPlayer/> */}
      {/* <JapjiSahibMusicPlayer/> */}
      {/* <Kirtanis /> */}
      {/* <VideoPlayer/> */}
      {/* <About/> */}
      {/* <Contact /> */}
      {/* <ShabadRadio/>  */}
      {/* <DynamicMusicPlayer /> */}

      <Routes>
        <Route exact path="/" element={<Home />}  />
      </Routes>

      <Routes>
        <Route exact path="/raag" element={<Raag />}  />
      </Routes>

      <Routes>
        <Route exact path="/shriraag" element={<ShriRaag />}  />
      </Routes>

      <Routes>
        <Route exact path="/shriraagmusicplayer" element={<ShriRaagMusicPlayer/>}  />
      </Routes>

      <Routes>        
        <Route exact path="/polularbaani" element={<PopularBaani />}  />
      </Routes>

      <Routes>        
        <Route exact path="/raagmaajhmusicplayer" element={<RaagMaajhMusicPlayer/>}  />
      </Routes>

      <Routes>        
        <Route exact path="/japjisahibmusicplayer" element={<JapjiSahibMusicPlayer/>}  />
      </Routes>

      <Routes>        
        <Route exact path="/kirtanis" element={<Kirtanis />}  />
      </Routes>

      <Routes>        
        <Route exact path="/about" element={<About />}  />
      </Routes>

      <Routes>        
        <Route exact path="/contact" element={<Contact />}  />
      </Routes>

      <Routes>        
        <Route exact path="/shabadradio" element={<ShabadRadio />}  />
      </Routes>
      
    </div>
        
  )
}
