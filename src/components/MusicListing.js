import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Playlist } from '../contents';

function MusicListing({title}) {
    // const [data, setData] = useState();
    // const [link , setLink] = useState();

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
    
    console.log(Playlist.tracks.items)


  return ( 
    <>
        <div className="top-container">
            <h2>{title}</h2>
            <a href={`/music/`}>Show All</a>
        </div>
        <div className='paylist-flex'>
            {
                Playlist.tracks.items.slice(0, 5).map((item,i)=>
                   
                    (
                        <Link to={item.track.external_urls.spotify} key={i}>
                            <div className='playlist-container' >
                                <div className='playlist-img'>
                                    <img src={item.track.album.images[0].url} alt="" />
                                    <div className="play-icon">
                                        <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 gQUQL">
                                            <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <h2>{item.track.album.name.length > 20 ? item.track.album.name.substring(0,17)+"..." : item.track.album.name }</h2>
                                <h2>{item.id}</h2>
                                {console.log()}
                                {item.track.album.artists.map( (name , i)=>{
                                   return name.name + ", " 
                                    
                                    
                                }
                                )}
                                {/* <p> {item.artist.length > 40 ? item.artist.substring(0,40)+"..." : item.artist}</p> */}
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