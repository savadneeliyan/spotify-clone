import React, { useState } from 'react'
import MusicListing from '../components/MusicListing'
import TopPlaylists from '../components/TopPlaylists'
import { BestofArtists, BollywoodHits, MadeForYou, Romance, Tamil, YourShow, discovermore, indiabest } from '../contents'
import MyPlaylist from '../components/MyPlaylist'
import { useEffect } from 'react'
import axios from 'axios'
import { useStateProvider } from '../utils/StateProvider'





function HomePage({id}) {
const [data, setdata] = useState()
const [release, setrelease] = useState()
const [romance, setRomance] = useState()
const [tamil, settamil] = useState()
const [{ token }, dispatch] = useStateProvider();
  

  useEffect(() => {
    const bollywood =async ()=>{
      const bollyhits = await axios.get(`https://api.spotify.com/v1/browse/categories/${BollywoodHits}/playlists`,
        {
          headers: {
            Authorization: "Bearer " + token,
            "content-Type": "application/json",
          }, 
        }
      ) 
      setdata(bollyhits.data.playlists.items) 
      
      const romancetrack = await axios.get(`https://api.spotify.com/v1/browse/categories/${Romance}/playlists`,
        {
          headers: {
            Authorization: "Bearer " + token,
            "content-Type": "application/json",
          }, 
        }
      ) 
      setRomance(romancetrack.data.playlists.items) 
      
      const tamiltrack = await axios.get(`https://api.spotify.com/v1/browse/categories/${Tamil}/playlists`,
        {
          headers: {
            Authorization: "Bearer " + token,
            "content-Type": "application/json",
          }, 
        }
      ) 
      settamil(tamiltrack.data.playlists.items) 
      
      const newrelease = await axios.get(`https://api.spotify.com/v1/browse/new-releases`,
        {
          headers: {
            Authorization: "Bearer " + token,
            "content-Type": "application/json",
          }, 
        }
      ) 
      setrelease(newrelease.data.albums.items)  

    }
    bollywood()
  }, [])
   


  return (
    <>
      <TopPlaylists/>
      <MusicListing id={id} title="Bollywood Hits" BollywoodHits={BollywoodHits} data={data} />
      <MusicListing id={id} title="New Releases" data={release}/>
      <MusicListing id={id} title="romance" data={romance}/>
      <MusicListing id={id} title="tamil" data={tamil}/>
      {/* <MusicListing id={id} title="Best Of Artists" data={BestofArtists} /> */}
      {/* <MyPlaylist/> */}
    </>
  )
}

export default HomePage