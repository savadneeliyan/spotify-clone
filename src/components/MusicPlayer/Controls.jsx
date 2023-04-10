import React from 'react';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import { BsArrowRepeat, BsFillPauseFill, BsFillPlayFill, BsShuffle } from 'react-icons/bs';

const Controls = ({isplaying,repeat, handlerepeat, currentPlaying, setRepeat, shuffle, handleShuffle, currentSongs, handlePlayPause, handlePrevSong, handleNextSong }) => (
  // <div className="flex items-center justify-around md:w-36 lg:w-52 2xl:w-80">
  //   <BsArrowRepeat size={20} color={repeat ? 'red' : 'white'} onClick={() => setRepeat((prev) => !prev)} className="hidden sm:block cursor-pointer" />
  //   {currentSongs && <MdSkipPrevious size={30} color="#FFF" className="cursor-pointer" onClick={handlePrevSong} />}
  //   {isPlaying ? (
  //     <BsFillPauseFill size={45} color="#FFF" onClick={handlePlayPause} className="cursor-pointer" />
  //   ) : (
  //     <BsFillPlayFill size={45} color="#FFF" onClick={handlePlayPause} className="cursor-pointer" />
  //   )}
  //   {currentSongs && <MdSkipNext size={30} color="#FFF" className="cursor-pointer" onClick={handleNextSong} />}
  //   <BsShuffle size={20} color={shuffle ? 'red' : 'white'} onClick={() => setShuffle((prev) => !prev)} className="hidden sm:block cursor-pointer" />
  // </div>

  <div className="flex items-center justify-around md:w-36 lg:w-52 2xl:w-80">
    <BsShuffle size={20} color={shuffle ? '#1db954' : '#fff'} onClick={handleShuffle} className="hidden sm:block cursor-pointer" />

    {currentPlaying && <MdSkipPrevious size={30} color="#FFF" className="cursor-pointer" onClick={handlePrevSong} />}
    
    {isplaying ? (
      <BsFillPlayFill size={45} color="#FFF" onClick={handlePlayPause} className="cursor-pointer" />
      ) : (
      <BsFillPauseFill size={45} color="#FFF" onClick={handlePlayPause} className="cursor-pointer" />
    )}
    {currentPlaying && <MdSkipNext size={30} color="#FFF" className="cursor-pointer" onClick={handleNextSong} />}
    <BsArrowRepeat size={20} color={repeat ? '#1db954' : 'white'} onClick={handlerepeat} className="hidden sm:block cursor-pointer" />
  </div>


);

export default Controls;
