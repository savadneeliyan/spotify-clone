import React, { useEffect, useState } from 'react'
import { ArtistSongs, BestofArtists, Lyrics, MadeForYou, Track, YourShow, discovermore, indiabest } from '../contents'
import MusicListing from './MusicListing'
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useStateProvider } from '../utils/StateProvider';


function SinglePage() {
    const [{ token, selectedPlaylist, playerState }, dispatch] = useStateProvider();
    const [data, setdata] = useState()
    let location = useLocation();    
    const id = location.pathname.split("/")[2];
    const [artist, setArtist] = useState()
    const [artistTrack, setArtistTrack] = useState()
    const [artistTopTrack, setArtistTopTrack] = useState()

    useEffect(() => {
        const getTrack = async () => {

          // current track

            const response = await axios.get(`https://api.spotify.com/v1/tracks/${id}`,
              {
                headers: {
                  Authorization: "Bearer " + token,
                  "content-Type": "application/json",
                },
              }
            );
            setdata(response?.data)
           

            // current artist 

            const {data} = await axios.get(`https://api.spotify.com/v1/artists/${response.data?.artists[0].id}`,
              {
                headers: {
                    Authorization: "Bearer " + token,
                    "content-Type": "application/json",
                },
              }
            );
            setArtist(data)
            
            // artist track

            const track = await axios.get(`https://api.spotify.com/v1/artists/${response.data?.artists[0].id}/albums?limit=20`,
              {
                headers: {
                    Authorization: "Bearer " + token,
                    "content-Type": "application/json",
                },
              }
            );
            console.log("id",response.data?.artists[0].id)
            setArtistTrack(track)

            // artist top tracks

            const topTrack = await axios.get(`https://api.spotify.com/v1/artists/${response.data?.artists[0].id}/top-tracks?market=ES`,
              {
                headers: {
                    Authorization: "Bearer " + token,
                    "content-Type": "application/json",
                },
              }
            );
            setArtistTopTrack(topTrack)

          }
          
          getTrack() 

          
          
    }, [id])
    

    

    const time = (millis) => {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
      }

      const [readmore , setReadmore] = useState(true);
      const [length , setlength] = useState(5);

      const handleShowmore = () =>{
        readmore ? setlength(selectedPlaylist.trackItems.length) : setlength(5);
        setReadmore(!readmore);
      }
    // console.log(Track)
  return (
    artistTopTrack && <div className='singlepage'>
        <div className="play-list-top">
            <div className="playlist-img">
                <img src={data?.album?.images[0].url} alt="" />
            </div>
            <div className="names-section">
                <span>song</span>
                <h2>{data?.name}</h2>
                <div className="discription-container">
                    
                    <img className='artistImg' src={Track[0].album?.images[0].url} alt="" />
                    {/* <p> <a href={`/artists/${Track[0].artists[0].id}`}>{Track[0].artists[0].name} . </a>{Track[0].track_number} songs . {Track[0].album.release_date.slice(0,4)} . about { time(Track[0].duration_ms)}</p> */}
                    <p> <a href={`/artists/${artist?.id}`}>{artist?.name} . </a> {data?.album.release_date.slice(0,4)} . about { time(data?.duration_ms)}</p>
                </div>
            </div>
        </div>
        <div className="play-list-center">
            <div className='round'>
                <svg role="img" height="28" width="28" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 gQUQL">
                    <path d="M5.7 3a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7H5.7zm10 0a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
                </svg>
            </div>
            
            <svg role="img" height="32" width="32" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 gQUQL">
                <path d="M5.21 1.57a6.757 6.757 0 0 1 6.708 1.545.124.124 0 0 0 .165 0 6.741 6.741 0 0 1 5.715-1.78l.004.001a6.802 6.802 0 0 1 5.571 5.376v.003a6.689 6.689 0 0 1-1.49 5.655l-7.954 9.48a2.518 2.518 0 0 1-3.857 0L2.12 12.37A6.683 6.683 0 0 1 .627 6.714 6.757 6.757 0 0 1 5.21 1.57zm3.12 1.803a4.757 4.757 0 0 0-5.74 3.725l-.001.002a4.684 4.684 0 0 0 1.049 3.969l.009.01 7.958 9.485a.518.518 0 0 0 .79 0l7.968-9.495a4.688 4.688 0 0 0 1.049-3.965 4.803 4.803 0 0 0-3.931-3.794 4.74 4.74 0 0 0-4.023 1.256l-.008.008a2.123 2.123 0 0 1-2.9 0l-.007-.007a4.757 4.757 0 0 0-2.214-1.194z"></path>
            </svg>
        
        
            <svg role="img" height="32" width="32" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 gQUQL">
                <path d="M4.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm15 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-7.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path>
            </svg>
        </div>
        <div className="profilecontainer">
            <img src={artist?.images[0]?.url} alt="" />
            <div>
                <h2>Artist</h2>
                <h3><a href={`/artists/${artist?.id}`}>{artist?.name} </a></h3>
            </div>
        </div>
        {/* <div className='single-lyrics'>
            <h2>Lyrics</h2>
            {Lyrics.lyrics.lines.map((line, i)=>{
                return <p key={i}>{line.words}</p>
            })}
            

        </div> */}
        <div className="single-bottom">
            <h3>Popular Tracks By </h3>
            <h2>{data?.artists[0].name}</h2>
        </div>
        
        <div className='play-list-down'>
        {artistTopTrack?.data?.tracks?.slice(0, length).map((track, i) => (
                  <Link to={`/track/${track.id}`} key={i}>
                    <div className="columns cursor-pointer" >
                      <div className="colums">
                        <span>{i + 1}</span>
                        {
                         playerState? 
                            <svg onClick="{() =>{changeplay(track)}}"
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
                            <svg  onClick="{() =>{pause()}}" role="img" height="24" width="24" aria-hidden="true" className="Svg-sc-ytk21e-0 gQUQL UIBT7E6ZYMcSDl1KL62g" viewBox="0 0 24 24" data-encore-id="icon">
                              <path d="M5.7 3a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7H5.7zm10 0a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
                            </svg>
                          } 
                      </div>
                      <div className="colums-container">
                        <img src={track.album?.images[0]?.url} alt="" />
                        <div className="colum-content">
                          <h3>{track.name}</h3>
                          {/* <h5>{track?.artists?.map(items => ( items.name)).join(", ")}</h5> */}
                        </div>
                      </div>
                      <div className="album-name">
                        {/* {track.album.album_type} */}
                        {/* {() => {getfollowers(track.id)}} */}
                      </div>
                      {/* <div className="date-added">{track.addeddate}</div> */}
                      {/* <div className="time">{"mstominutes(track.duration)" + time(track.duration)}</div> */}
                      <div className="time">{time(track?.duration_ms)}</div>
                    </div>
                  </Link>
                ))}
           
            <div className="list-bottom">
                <a onClick={handleShowmore} className="readmore">{readmore ? "See More" : "See Less "}</a>
            </div>
            {/* <MusicListing  title="Made for you" data={MadeForYou} /> */}


            <div className="top-container">
            <h2>poppular release by {artist?.name}</h2>
            <Link track={artistTrack} to={`/music/${artist?.id}`}>Show All</Link>
        </div>
        <div className='paylist-flex'>
            {
              artistTrack?.data?.items?.slice(0, 7).map((item,i)=>
                  
                (
                    <Link to={`/album/${ item.id }`} key={i}>
                      <div className='playlist-container' >
                        <div className='playlist-img'>
                            <img src={item.images[0].url} alt="" />
                            <div className="play-icon">
                                <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 gQUQL">
                                    <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                                </svg>
                            </div>
                        </div>
                        <h2>{item.name.length > 20 ? item.name.substring(0,17)+"..." : item.name }</h2>
                        <h2>{item.release_date.substring(0,4)} . {item.type}</h2>
                      </div>
                    </Link>
                )
              )
            }
        </div>
          
        </div>
    </div>
  )
}

export default SinglePage