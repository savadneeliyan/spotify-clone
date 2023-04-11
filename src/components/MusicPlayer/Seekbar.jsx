import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useStateProvider } from '../../utils/StateProvider';

const Seekbar = ({currentPlaying, progress, duration}) => {
    const [seekTime, setSeekTime] = useState(progress? progress: "" );
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
        )
    }
    getseekvalue()
  }, [seekTime])
  

  return (
    <div className="hidden sm:flex flex-row items-center">
      
      <p className="text-white">{(seekTime ? seekTime  : progress) === 0 ? '0:00' : getTime(progress)}</p>

      <input
        type="range"
        step="any"
        value={seekTime}
        min="0"
        max={duration}
        onInput={(event) => setSeekTime(event.target.value)}
        className="md:block w-24 md:w-56 2xl:w-96 h-1 mx-4 2xl:mx-6 rounded-lg cursor-pointer"
        disabled = {!currentPlaying}
      />
      <p className="text-white">{duration === 0 ? '0:00' : getTime(duration)}</p>
      
    </div>
  );
};

export default Seekbar;
