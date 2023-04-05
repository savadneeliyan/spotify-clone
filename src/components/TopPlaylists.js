import React from 'react'
import { Link } from 'react-router-dom'

function TopPlaylists() {
  return (
    <div className='TopPlaylist'>
        <h2>Good Afternoon</h2>
        <div className="playlistcontainer">
            
            <Link to="playlist">
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
            <Link to="playlist">
                <div className='grid-container'>
                    <img src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb18045f4451e50f23177dd524/2/en/default" alt="" />
                    <h2>Daily Mix 2</h2>
                    <div className="playbutton-h">
                        <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 gQUQL">
                            <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                        </svg>
                    </div>
                </div>
            </Link>
            <Link to="playlist">
                <div className='grid-container'>
                    <img src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebcb6926f44f620555ba444fca/1/en/default" alt="" />
                    <h2>Daily Mix 1</h2>
                    <div className="playbutton-h">
                        <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 gQUQL">
                            <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                        </svg>
                    </div>
                </div>
            </Link>
            <Link to="playlist">
                <div className='grid-container'>
                    <img src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eba267db5c4c4d70ed1ab9c375/5/en/default" alt="" />
                    <h2>Daily Mix 5</h2>
                    <div className="playbutton-h">
                        <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 gQUQL">
                            <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                        </svg>
                    </div>
                </div>
            </Link>
            <Link to="playlist">
                <div className='grid-container'>
                    <img src="https://i.scdn.co/image/ab67706f00000002721eddd4132604c8b83671c8" alt="" />
                    <h2>Trending Now Tamil</h2>
                    <div className="playbutton-h">
                        <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 gQUQL">
                            <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                        </svg>
                    </div>
                </div>
            </Link>
            <Link to="playlist">
                <div className='grid-container'>
                    <img src="https://i.scdn.co/image/ab67706c0000da84f328d1a11a9c3ebf3731cd00" alt="" />
                    <h2>Coke Studio 1-14 Season</h2>
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