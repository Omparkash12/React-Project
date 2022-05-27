// // https://github.com/lhz516/react-h5-audio-player
// const AudioPlayer = window.ReactH5AudioPlayer.default

// class PlayerApp extends React.Component {
//     render() {
//         return (
//             <div className="container">
//                 <AudioPlayer
//                     src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
//                 // Try other props!
//                 />
//             </div>
//         );
//     }
// }

// ReactDOM.render(<PlayerApp />, document.getElementById('root'));



import React from 'react'

export default function DynamicMusicPlayer() {
    const AudioPlayer = window.ReactH5AudioPlayer.default

    return (
        <div className="container">
            <AudioPlayer
                src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
            // Try other props!
            />
        </div>
    )
}
ReactDOM.render(<DynamicMusicPlayer />, document.getElementById('root'));
