import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Playlist } from '../contents';
import { reducerCases } from '../utils/Constants';
import { useStateProvider } from '../utils/StateProvider';



function MusicListing({title, data, id, Editors, Release}) {
    const [{ token, playerState }, dispatch] = useStateProvider();
 
    // const [data, setData] = useState();
    // const [link , setLink] = useState();
    const randomItems = Playlist.tracks.items.sort(() => Math.random() - 0.5);
    useEffect(() => {
        
        // const options = {
        //     method: 'GET',
        //     url: 'https://spotify23.p.rapidapi.com/playlist_tracks/',
        //     params: {id: '37i9dQZF1DX4Wsb4d7NKfP', offset: '0', limit: '5'},
        //     headers: {
        //       'X-RapidAPI-Key': 'b142123d1dmsh7f8b27fadb903bdp17b84fjsn89f9dc4e1f0b',
        //       'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        //     }
        //   };
          
        //   axios.request(options).then(function (response) {
        //       setData(response.data.items);
        //   }).catch(function (error) {
        //       console.error(error);
        //   });

    }, [])


    const changeplay = async (track) => {
        console.log(track)
        const response = await axios.put(
          `https://api.spotify.com/v1/me/player/play`,
          {
            context_uri:track.comntext_uri,
            offset: {
              position: track.track_number ? track.track_number -1 : 0
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


    const changeplaylist =(selectedPlaylistId) => {
        dispatch({ type: reducerCases.SET_PLAYLIST_ID, selectedPlaylistId });
      };

  return ( 
    <>
        <div className="top-container">
            <h2>{title}</h2>
            <Link to={`/music/${id ? id : Editors ? 'featured-playlists': Release  ?'new-releases':''}`}>Show All</Link>
          
            {/* <Link to={`/album/${ id }`}>Show All</Link> */}
        </div>
        <div className='paylist-flex'>
            {
                data?.slice(0, 7).map((item,i)=> (
                    item.album_group ? 
                        <Link to={`/album/${ item?.id }`} key={i}>
                        {/* <Link to={`/track/${ item?.id }`} key={i}> */}
                            <div className='playlist-container' >
                                <div className='playlist-img'>
                                    <img src={item?.images[0].url} alt="" />
                                    <div className="play-icon" >
                                    {
                                        playerState? 
                                            <svg onClick={() =>{changeplay(item)}}
                                            role="img"
                                            height="24"
                                            width="24"
                                            aria-hidden="true"
                                            className="Svg-sc-ytk21e-0 gQUQL UIBT7E6ZYMcSDl1KL62g"
                                            viewBox="0 0 24 24"
                                            data-encore-id="icon"
                                            >
                                            <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                                            </svg>:
                                            <svg  onClick={() =>{pause()}} role="img" height="24" width="24" aria-hidden="true" className="Svg-sc-ytk21e-0 gQUQL UIBT7E6ZYMcSDl1KL62g" viewBox="0 0 24 24" data-encore-id="icon">
                                            <path d="M5.7 3a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7H5.7zm10 0a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
                                            </svg>
                                        } 
                                    </div>
                                </div>
                                <h2>{item?.name.length > 20 ? item?.name.substring(0,17)+"..." : item?.name }</h2>
                                {item?.artists.map( (name , i)=>{
                                return name.name                                     
                                }
                                ).join(", ")}
                            </div>
                        </Link>
                        :
                        <Link to={`/playlist/${ item.id }`} key={i}>
                            <div className='playlist-container' onClick={()=> changeplaylist(item.id)} >
                                <div className='playlist-img'>
                                    <img src={item?.images[0].url} alt="" />
                                    <div className="play-icon">
                                        <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 gQUQL">
                                            <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <h2>{item?.name.length > 20 ? item?.name.substring(0,17)+"..." : item?.name }</h2>
                                
                                {item.artists?.map( (name , i)=>{
                                   return name.name + ", "                                     
                                }
                                )}
                                <p> {item.description.length > 40 ? item.description.substring(0,40)+"..." : item.description}</p>
                            </div>
                        </Link>
                    )
                )
            }
        </div>

    </>
  )
}

export default MusicListing