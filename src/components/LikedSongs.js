import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useStateProvider } from '../utils/StateProvider';
import axios from 'axios';
import { reducerCases } from '../utils/Constants';

function LikedSongs() {
    const [{ token, playerState, selectedPlaylist }, dispatch] = useStateProvider();
    const [data, setdata] = useState()
    useEffect(() => {
      
        const fetchlikes = async () => {
            const liked = await axios.get(`https://api.spotify.com/v1/me/tracks?limit=50`,
                {
                headers: {
                    Authorization: "Bearer " + token,
                    "content-Type": "application/json",
                }, 
                }
            ) 
            setdata(liked.data.items)
            console.log(liked)
        }
        fetchlikes()
    }, [])


    const changeplay = async (track) => {
        console.log(track)
        const response = await axios.put(
          `https://api.spotify.com/v1/me/player/play`,
          {
            context_uri:track?.comntext_uri ? track.comntext_uri : "spotify:album:5QcoO5rgE4bsin0nQIGY5S",
            offset: {
              position: track?.track_number ? track.track_number -1 : 0
            },
            position_ms: 0
          },
          {
            headers: {
              Authorization: "Bearer " + token,
              "content-Type": "application/json",
            },
          }
        );
        if (response.status === 204){
          const currentplaying = {
            id: track.id,
            name: track.name,
            artists : track.artists,
            image: track.image
          };
          dispatch({type:reducerCases.SET_PLAYING, currentplaying});
          dispatch({type:reducerCases.SET_PLAYER_STATE, playerState:!playerState})
        }else dispatch({type:reducerCases.SET_PLAYER_STATE, playerState:!playerState})
      }
  
  
      const pause = async () => {
        await axios.put(
          `https://api.spotify.com/v1/me/player/pause`,
          {
          },
          {
            headers: {
              Authorization: "Bearer " + token,
              "content-Type": "application/json",
            },
          }
        );
        
          dispatch({type:reducerCases.SET_PLAYER_STATE, playerState:!playerState})
        
      }



    const mstominutes = (ms) => {
        const minutes = Math.floor(ms / 60000);
        const seconds = ((ms % 60000) / 1000).toFixed(0);
        return minutes + " : " + (seconds < 10 ? "0" : "") + seconds; 
    }

    const timeSince = (date) => {

        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        var seconds = Math.floor((new Date() - date) / 1000);
      
        var interval 
      
        if (interval > 1) {
          return Math.floor(interval) + " years";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
          return months[date.getMonth()] + " "+date.toString().substring(7, 10) + "," + date.getFullYear()
        }
        interval = seconds / 86400;
        if (interval > 1) {
          return Math.floor(interval) + " days";
        }
        interval = seconds / 3600;
        if (interval > 1) {
          return Math.floor(interval) + " hours";
        }
        interval = seconds / 60;
        if (interval > 1) {
          return Math.floor(interval) + " minutes";
        }
        return Math.floor(seconds) + " seconds";
      }


      const showartists = (item) =>{
        const n =item.length
        return item.map((name , i) => (<Link to={`/artist/${name.id}`} key={i}>{name.name} {i+1 === n ? "" :", "}</Link>)) 
        
      }


  return (
    data && <div className='playlistPage'>
        <div className="container">
            <div className="play-list-top">
                <div className="playlist-img">
                    <img src="	https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png" alt="" />
                </div>
                <div className="names-section">
                    <span>Playlist</span>
                    <h2>Liked Songs</h2>
                    
                    <div className="discription-container">
                        <p><a href="">mohammed savad . </a>30 songs</p>
                    </div>
                </div>
            </div>
            <div className="play-list-center">
                <div className='round'>
                {
                    playerState? 
                  
                    <svg onClick={() =>{changeplay(selectedPlaylist)}}
                      role="img"
                      height="24"
                      width="24"
                      aria-hidden="true"
                      className="Svg-sc-ytk21e-0 gQUQL UIBT7E6ZYMcSDl1KL62g"
                      viewBox="0 0 24 24"
                      data-encore-id="icon"
                    >
                      <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                    </svg> :
                  <svg onClick={() =>{pause()}}
                    role="img"
                    height="28"
                    width="28"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-encore-id="icon"
                    className="Svg-sc-ytk21e-0 gQUQL"
                  >
                    <path d="M5.7 3a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7H5.7zm10 0a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
                  </svg>
                  }
                </div>
                
                <svg role="img" height="32" width="32" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 gQUQL">
                    <path d="M5.21 1.57a6.757 6.757 0 0 1 6.708 1.545.124.124 0 0 0 .165 0 6.741 6.741 0 0 1 5.715-1.78l.004.001a6.802 6.802 0 0 1 5.571 5.376v.003a6.689 6.689 0 0 1-1.49 5.655l-7.954 9.48a2.518 2.518 0 0 1-3.857 0L2.12 12.37A6.683 6.683 0 0 1 .627 6.714 6.757 6.757 0 0 1 5.21 1.57zm3.12 1.803a4.757 4.757 0 0 0-5.74 3.725l-.001.002a4.684 4.684 0 0 0 1.049 3.969l.009.01 7.958 9.485a.518.518 0 0 0 .79 0l7.968-9.495a4.688 4.688 0 0 0 1.049-3.965 4.803 4.803 0 0 0-3.931-3.794 4.74 4.74 0 0 0-4.023 1.256l-.008.008a2.123 2.123 0 0 1-2.9 0l-.007-.007a4.757 4.757 0 0 0-2.214-1.194z"></path>
                </svg>
            
            
                <svg role="img" height="32" width="32" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 gQUQL">
                    <path d="M4.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm15 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-7.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path>
                </svg>
                
            </div>
            <div className="play-list-down">
                <div className="headers">
                    <div className='table-row'>#</div>
                    <div className='table-row'>title</div>
                    <div className='table-row'>album</div>
                    <div className='table-row'>date added</div>
                    <div className='table-row'>
                        <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" className="Svg-sc-ytk21e-0 gQUQL">
                            <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path><path d="M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25z"></path>
                        </svg>
                    </div>
                </div>
                
                    
                {
                    data?.map((item,i)=> (
                        
                            <div className="columns">
                                <div className="colums"><span>{i+1}</span> 
                                {
                                    playerState? 
                                    <svg onClick={() =>{changeplay(item.track)}} role="img" height="24" width="24" aria-hidden="true" className="Svg-sc-ytk21e-0 gQUQL UIBT7E6ZYMcSDl1KL62g" viewBox="0 0 24 24" data-encore-id="icon">
                                        <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                                    </svg>
                                    :
                                    <svg onClick={() =>{pause()}}
                                      role="img"
                                      height="28"
                                      width="28"
                                      aria-hidden="true"
                                      viewBox="0 0 24 24"
                                      data-encore-id="icon"
                                      className="Svg-sc-ytk21e-0 gQUQL"
                                    >
                                      <path d="M5.7 3a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7H5.7zm10 0a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
                                    </svg>
                                    }
                                </div>
                                <div className="colums-container">
                                    <img src={item.track.album.images[0].url} alt="" />
                                    <div className="colum-content">
                                    <Link to={`/track/${item.track.id}`} key={i}> <h3>{item.track?.name}</h3></Link>
                                        <h5>{showartists(item.track?.artists)}</h5>
                                        {/* <h5>{item.track?.artists.map((name) => (<Link to={`/artist/${name.id}`} key={i}>{name.name}</Link>))}</h5> */}
                                    </div>    
                                </div>
                                <div className="album-name">
                                    <Link to={`/album/${item.track?.album?.id}`}>{item.track?.album.name}</Link>
                                </div>
                                <div className="date-added">
                                    {timeSince(new Date(item?.added_at))}
                                    
                                </div>
                                <div className="time">
                                    {mstominutes(item?.track.duration_ms)}
                                </div>
                            </div>

                    ))
                }
                
            </div>
        </div>
    </div>
  )
}

export default LikedSongs