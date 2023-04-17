import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react'
import { listpages } from '../contents';
import { Link, useLocation } from 'react-router-dom';
import { useStateProvider } from '../utils/StateProvider';

function ListMusic({track}) {
    const [data, setData] = useState();
    const [{ token, selectedPlaylist, playerState }, dispatch] = useStateProvider();
    let location = useLocation();    
    const id = location.pathname.split("/")[2];

    useEffect(() => {
        
        // const options = {
        //     method: 'GET',
        //     url: 'https://spotify23.p.rapidapi.com/playlist_tracks/',
        //     params: {id: '37i9dQZF1DX4Wsb4d7NKfP', offset: '0', limit: '100'},
        //     headers: {
        //       'X-RapidAPI-Key': 'b142123d1dmsh7f8b27fadb903bdp17b84fjsn89f9dc4e1f0b',
        //       'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        //     }
        //   };
          
        //   axios.request(options).then(function (response) {
        //       setData(response.data.items);
        //       console.log(data)
        //   }).catch(function (error) {
        //       console.error(error);
        //   });

        const getuserinfo = async () => {

            const track = await axios.get(`https://api.spotify.com/v1/artists/${id}/albums?limit=50`,
            {
                headers: {
                    Authorization: "Bearer " + token,
                    "content-Type": "application/json",
                },
            }
            );

            setData(track.data.items)
        }
        getuserinfo()
        
    }, [id])


  return (
    <>
        <div className="top-container">
            <h2>made for you</h2>
           
        </div>
        <div className='paylist-grid'>
            {
                data?.map((item,i)=>
                   
                    (
                        <Link to={`/album/${item.id}`}>
                            <div className='playlist-container' key={i}>
                                <div className='playlist-img'>
                                    <img src={item?.images[0]?.url} alt="" />
                                    <div className="play-icon">
                                        <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 gQUQL">
                                            <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <h2>{item.name.length > 20 ? item.name.substring(0,17)+"..." : item.name }</h2>
                                <p> {item?.album_type} . {item?.release_date.substring(0,4)}</p>
                            </div>
                        </Link> 
                    )
                )
            }
            
        </div>
    </>
  )
}

export default ListMusic