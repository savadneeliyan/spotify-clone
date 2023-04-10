import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useStateProvider } from '../../utils/StateProvider';

const Seekbar = ({currentPlaying}) => {
  
  const [seekTime, setSeekTime] = useState(currentPlaying?.progress);
  const value = currentPlaying?.progress

  const getTime = (millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds
  };
  

  const [{ token }] = useStateProvider();


  useEffect( () => {
    const getseekvalue = async () =>{  
      const response = await axios.put(
        `https://api.spotify.com/v1/me/player/seek?position_ms=${Math.round(seekTime)}`,{},
        {
          headers: {
            Authorization: "Bearer " + token,
            "content-Type": "application/json",
          },
        }
        );
    }
    getseekvalue()
  }, [seekTime])
  
  console.log(typeof(Math.round(seekTime)))

  return (
    <div className="hidden sm:flex flex-row items-center">
      
      <p className="text-white">{value === 0 ? '0:00' : getTime(value)}</p>

      <input
        type="range"
        step="any"
        value={seekTime}
        min="0"
        max={currentPlaying?.duration}
        onInput={(event) => setSeekTime(event.target.value)}
        className="md:block w-24 md:w-56 2xl:w-96 h-1 mx-4 2xl:mx-6 rounded-lg cursor-pointer"
      />
      <p className="text-white">{currentPlaying?.duration === 0 ? '0:00' : getTime(currentPlaying?.duration)}</p>
      
    </div>
  );
};

export default Seekbar;
