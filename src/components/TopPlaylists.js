import React from 'react'
import { Link } from 'react-router-dom'
import { reducerCases } from '../utils/Constants';
import { useStateProvider } from '../utils/StateProvider';


function TopPlaylists() {
    
    const [{ token, playlists }, dispatch] = useStateProvider();

    const now = new Date();
    const hours = now.getHours();

    let greeting;

    if (hours >= 5 && hours < 12) {
        greeting = 'Good morning';
    } else if (hours >= 12 && hours < 18) {
        greeting = 'Good afternoon';
    } else {
        greeting = 'Good evening';
    }

    const changeplaylist =(selectedPlaylistId) => {
        dispatch({ type: reducerCases.SET_PLAYLIST_ID, selectedPlaylistId });
      };

  return (
    <div className='TopPlaylist'>
        <h2 className='capitalize '>{greeting}</h2>
        <div className="playlistcontainer">
            
            <Link to="/liked">
                <div className='grid-container'>
                    <img src="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png" alt="" />
                    <h2>Liked songs</h2>
                    <div className="playbutton-h">
                        <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 gQUQL">
                            <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                        </svg>
                    </div>
                </div>
            </Link>
            <Link to="/playlist/37i9dQZF1EIYW0ZG9oSF7f">
                <div className='grid-container' onClick={()=> changeplaylist('37i9dQZF1EIYW0ZG9oSF7f')}>
                    <img src="https://seed-mix-image.spotifycdn.com/v6/img/artist/1qFp8zDvsXyCsC5dqz8X4S/en/default" alt="" />
                    <h2>Sushin shyam mix</h2>
                    <div className="playbutton-h">
                        <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 gQUQL">
                            <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                        </svg>
                    </div>
                </div>
            </Link>
            <Link to="/playlist/37i9dQZF1E37yg2m8REqPN">
                <div className='grid-container' onClick={()=> changeplaylist('37i9dQZF1E37yg2m8REqPN')}>
                    <img src="	https://dailymix-images.scdn.co/v2/img/ab67616d0000b273e1ae9327732ecdfed4d1e9e8/2/en/default" alt="" />
                    <h2>Daily Mix 2</h2>
                    <div className="playbutton-h">
                        <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 gQUQL">
                            <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                        </svg>
                    </div>
                </div>
            </Link>
            <Link to="/playlist/37i9dQZF1E35Pg3eGQgfAG">
                <div className='grid-container' onClick={()=> changeplaylist('37i9dQZF1E35Pg3eGQgfAG')}>
                    <img src="	https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebb19af0ea736c6228d6eb539c/1/en/default" alt="" />
                    <h2>Daily Mix 1</h2>
                    <div className="playbutton-h">
                        <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 gQUQL">
                            <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                        </svg>
                    </div>
                </div>
            </Link>
            <Link to="/playlist/37i9dQZF1E35Pg3eGQgfAG">
                <div className='grid-container' onClick={()=> changeplaylist('37i9dQZF1E35Pg3eGQgfAG')}>
                    <img src="https://seed-mix-image.spotifycdn.com/v6/img/two_thousands/6ohaQzKaXrobAL8paLSaxq/en/default" alt="" />
                    <h2>2000s mix</h2>
                    <div className="playbutton-h">
                        <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 gQUQL">
                            <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                        </svg>
                    </div>
                </div>
            </Link>
            <Link to="/playlist/37i9dQZF1DWTYKFynxp6Fs">
                <div className='grid-container' onClick={()=> changeplaylist('37i9dQZF1DWTYKFynxp6Fs')}>
                    <img src="https://i.scdn.co/image/ab67706f00000002452b8c5c0a720e58d620b4ee" alt="" />
                    <h2>Treanding Now Malayalam</h2>
                    <div className="playbutton-h">
                        <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 gQUQL">
                            <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                        </svg>
                    </div>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default TopPlaylists