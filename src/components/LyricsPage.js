import React from 'react'
import { Lyrics } from '../contents'

function LyricsPage() {
  return (
    <div className='lyrics'>
        <div className="lyrics-container">
          {Lyrics.lines.map((line)=>{
            return <p>{line.words}</p>
          })}
            
        </div>
    </div>
  )
}

export default LyricsPage