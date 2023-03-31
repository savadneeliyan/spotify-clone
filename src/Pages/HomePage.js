import React from 'react'
import MusicListing from '../components/MusicListing'

function HomePage({id}) {
  return (
    <>
      <MusicListing id={id} title="Made for you"/>
      <MusicListing id={id} title="discover more"/>
      <MusicListing id={id} title="your top mix"/>
      <MusicListing id={id} title="india best"/>
      <MusicListing id={id} title="more of what you like"/>
    </>
  )
}

export default HomePage