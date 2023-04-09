import React from 'react'
import MusicListing from '../components/MusicListing'
import TopPlaylists from '../components/TopPlaylists'
import { BestofArtists, MadeForYou, YourShow, discovermore, indiabest } from '../contents'
import MyPlaylist from '../components/MyPlaylist'





function HomePage({id}) {
  return (
    <>
      {/* <TopPlaylists/>
      <MusicListing id={id} title="Made for you" data={MadeForYou} />
      <MusicListing id={id} title="discover more" data={discovermore}/>
      <MusicListing id={id} title="your Shows" data={YourShow}/>
      <MusicListing id={id} title="india's best" data={indiabest}/>
      <MusicListing id={id} title="Best Of Artists" data={BestofArtists} /> */}
      <MyPlaylist/>
    </>
  )
}

export default HomePage