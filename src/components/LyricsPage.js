import React from 'react'
import { Lyrics } from '../contents'


function LyricsPage() {
  return (
    <div className='lyrics'>
        <div className="lyrics-container">
          {Lyrics.lyrics.lines.map((line, i)=>{
            return <p key={i}>{line.words}</p>
          })}
            
        </div>
    </div>
  )
}

export default LyricsPage