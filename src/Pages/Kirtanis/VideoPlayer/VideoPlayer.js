import React from 'react';
import './VideoPlayer.css';
// import j from '../../Images/J.png'

export default function VideoPlayer() {
    return (
        <div className="containerDiv">
            {/* <video autoplay="" loop="" width="100%" height="100%" controls>
                <source src="https://player.vimeo.com/external/194837908.sd.mp4?s=c350076905b78c67f74d7ee39fdb4fef01d12420&profile_id=164" type="video/mp4" />
            </video> */}

            {/* <video width="100%" height="auto" loop controls
                poster={j}
                src="https://player.vimeo.com/external/194837908.sd.mp4?s=c350076905b78c67f74d7ee39fdb4fef01d12420&profile_id=164"
            ></video> */}
            {/* <iframe width="100%" height="350px" src="https://www.youtube.com/embed/nFjVlf2r9_Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe> */}

            <div className="videoPlayer">
                <iframe style={{ borderRadius: '15px' }} width="380px" height="245px" src="https://www.youtube.com/embed/VsEvPOgUbrs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>


    )
}
