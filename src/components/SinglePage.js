import React, { useState } from 'react'
import { ArtistSongs, BestofArtists, Lyrics, MadeForYou, Track, YourShow, discovermore, indiabest } from '../contents'
import MusicListing from './MusicListing'
import { Link } from 'react-router-dom';


function SinglePage() {
    const time = (millis) => {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
      }

      const [readmore , setReadmore] = useState(true);
      const [length , setlength] = useState(7);

      const handleShowmore = () =>{
        readmore ? setlength(ArtistSongs.data.artist.discography.singles.items.length) : setlength(7);
        setReadmore(!readmore);
      }
    // console.log(Track)
  return (
    <div className='singlepage'>
        <div className="play-list-top">
            <div className="playlist-img">
                <img src={Track[0].album?.images[0].url} alt="" />
            </div>
            <div className="names-section">
                <span>Playlist</span>
                <h2>{Track[0].name}</h2>
                <div className="discription-container">
                    
                    <img className='artistImg' src={Track[0].album?.images[0].url} alt="" />
                    <p> <a href={`/artists/${Track[0].artists[0].id}`}>{Track[0].artists[0].name} . </a>{Track[0].track_number} songs . {Track[0].album.release_date.slice(0,4)} . about { time(Track[0].duration_ms)}</p>
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
            <img src={Track[0].album?.images[0].url} alt="" />
            <div>
                <h2>Artist</h2>
                <h3><a href={`/artists/${Track[0].artists[0].id}`}>{Track[0].artists[0].name} </a></h3>
            </div>
        </div>
        <div className='single-lyrics'>
            <h2>Lyrics</h2>
            {Lyrics.lyrics.lines.map((line, i)=>{
                return <p key={i}>{line.words}</p>
            })}
            

        </div>
        <div className="single-bottom">
            <h3>Popular Tracks By </h3>
            <h2>{Track[0].artists[0].name}</h2>
        </div>
        
        <div className='play-list-down'>
            {
                ArtistSongs.data.artist.discography.singles.items.slice(0,length).map((artist,i) => (
                    <Link to={`/track/${artist.releases.items[0].id}`} key={i}>
                        <div className="columns">
                            <div className="colums"><span>{i+1}</span> 
                                <svg role="img" height="24" width="24" aria-hidden="true" className="Svg-sc-ytk21e-0 gQUQL UIBT7E6ZYMcSDl1KL62g" viewBox="0 0 24 24" data-encore-id="icon">
                                    <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                                </svg>
                            </div>
                            <div className="colums-container">
                                <img src={artist.releases.items[0].coverArt.sources[0].url} alt="" />
                                <div className="colum-content">
                                    <h3>{artist.releases.items[0].name}</h3>
                                </div>    
                            </div>
                            <div className="album-name">
                                9854625
                            </div>
                            
                            <div className="time">
                                3:32
                            </div>
                        </div>
                    </Link>
                ))
            }
           
            <div className="list-bottom">
                <a onClick={handleShowmore} className="readmore">{readmore ? "See More" : "See Less "}</a>
            </div>
            <MusicListing  title="Made for you" data={MadeForYou} />
            <MusicListing  title="discover more" data={discovermore}/>
            <MusicListing  title="your Shows" data={YourShow}/>
            <MusicListing  title="india's best" data={indiabest}/>
            <MusicListing  title="Best Of Artists" data={BestofArtists} />
        </div>
    </div>
  )
}

export default SinglePage