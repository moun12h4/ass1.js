import image from './apple-music.jpg';

function AppleMusic(){
    return(
        <div className='first'>
            <div className='second'>
                <img src ={image} />
                <div className='third'>
                    <h3>Apple Music</h3>
                    <p>
                    Apple Music is a music, audio and video streaming service developed by Apple Inc.
                    Users select music to stream to their device on-demand, or they can listen to 
                    existing playlists.
                    </p>
                    <button>Share</button>
                    <button>Learn more</button>
                </div>
            </div>
        </div>
    );
}
export default AppleMusic;