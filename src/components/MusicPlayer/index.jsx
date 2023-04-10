import React, { useState, useEffect } from 'react';
import Controls from './Controls';
import Player from './Player';
import Seekbar from './Seekbar';
import Track from './Track';
import VolumeBar from './VolumeBar';
import { useStateProvider } from '../../utils/StateProvider';
import axios from 'axios';
import { reducerCases } from '../../utils/Constants';

const MusicPlayer = () => {


  const [{ token, currentPlaying, playerState, devices }, dispatch] = useStateProvider();
 const  deviceId= "11134946c4d69ee620718b16dbcd42d2efb0192a";

  const activeSong = ""

  const currentIndex = ""
  const isActive = ""
  const isPlaying = false

  const [duration, setDuration] = useState(0);
  const [appTime, setAppTime] = useState(0);
  const [volume, setVolume] = useState(0.3);
  const [repeat, setRepeat] = useState(true);
  const [shuffle, setShuffle] = useState(false);




  useEffect(() => {
    
    // get track 

        const getcurrentTrack = async () => {
            const response = await axios.get(
                `https://api.spotify.com/v1/me/player/currently-playing`,
                {
                    headers: {
                        Authorization: "Bearer " + token,
                        "content-Type": "application/json",
                    },
                }
            );
          if (response.data !== "") {
            const currentPlaying = {
              id: response?.data.item.id,
              name: response?.data.item.name,
              artists: response?.data.item.artists?.map((artists) => artists.name),
              img : response?.data.item.album?.images[0]?.url,
              isplaying: response?.data.is_playing,
              duration  : response?.data.item.duration_ms,
              progress  : response?.data.progress_ms
            }
              
              dispatch({ type: reducerCases.SET_PLAYING, currentPlaying });
              if(response?.data.is_playing){
                dispatch({ type: reducerCases.SET_PLAYER_STATE, playerState:false });
              }
            }
          }

        getcurrentTrack();
    }, [token, dispatch,currentPlaying])
// console.log(devices)

  const volumechange = async (e) => {
    await axios.put("https://api.spotify.com/v1/me/player/volume", {}, {
      
      headers: {
        Authorization: "Bearer " + token,
        "content-Type": "application/json",
      },
      params: {
        'volume_percent': parseInt(e.target.value) , 
        'device_id':deviceId
      },
    })

  }

  const handlePlayPause = async () => {
    const state = playerState ? "play" : "pause";
    const response = await axios.put(
      `https://api.spotify.com/v1/me/player/${state}`,{},
      {
        headers: {
          Authorization: "Bearer " + token,
          "content-Type": "application/json",
        },
      }
    );
    dispatch({ type: reducerCases.SET_PLAYER_STATE, playerState:!playerState });
  };

  const handleNextSong = async() => {
    await axios.post(
          `https://api.spotify.com/v1/me/player/next`,{},
          {
              headers: {
                  Authorization: "Bearer " + token,
                  "content-Type": "application/json",
              },
          }
    );
    const response = await axios.get(
      `https://api.spotify.com/v1/me/player/currently-playing`,
      {
          headers: {
              Authorization: "Bearer " + token,
              "content-Type": "application/json",
          },
      }
    );
    if (response.data !== "") {
      const currentPlaying = {
        id: response?.data.item.id,
        name: response?.data.item.name,
        artists: response?.data.item.artists?.map((artists) => artists.name),
        img: response?.data.item.album?.images[0]?.url,
      }
              
      dispatch({ type: reducerCases.SET_PLAYING, currentPlaying });
    } else {
      dispatch({ type: reducerCases.SET_PLAYING, currentPlaying:null });
    }

  };

  const handlePrevSong = async () => {
      await axios.post(
          `https://api.spotify.com/v1/me/player/previous`,{},
          {
              headers: {
                  Authorization: "Bearer " + token,
                  "content-Type": "application/json",
              },
          }
      );
      const response = await axios.get(
            `https://api.spotify.com/v1/me/player/currently-playing`,
            {
                headers: {
                    Authorization: "Bearer " + token,
                    "content-Type": "application/json",
                },
            }
        );
    if (response.data !== "") {
      const currentPlaying = {
        id: response?.data.item.id,
        name: response?.data.item.name,
        artists: response?.data.item.artists?.map((artists) => artists.name),
        img: response?.data.item.album?.images[0]?.url,
      }
              
      dispatch({ type: reducerCases.SET_PLAYING, currentPlaying });
    } else {
      dispatch({ type: reducerCases.SET_PLAYING, currentPlaying:null });
    }
          
  };

const handleShuffle = async () => {

    await axios.put('https://api.spotify.com/v1/me/player/shuffle',{},{
      headers: {
        Authorization: "Bearer " + token,
        "content-Type": "application/json",
      },
      params: {
        'state': shuffle, 
        'device_id':deviceId
      },
      
    });
    setShuffle(!shuffle);

  }
const handlerepeat = async () => {
  const state = repeat ? "track" : "off";
    await axios.put('https://api.spotify.com/v1/me/player/repeat',{},{
      headers: {
        Authorization: "Bearer " + token,
        "content-Type": "application/json",
      },
      params: {
        'state': state , 
        'device_id':deviceId
      },
      
    });
    setRepeat(!repeat);
  }


  return (
    <div className="relative sm:px-12 px-8 w-full flex items-center justify-between">
      <Track currentPlaying={currentPlaying} />
      <div className="flex-1 flex flex-col items-center justify-center">
        <Controls
          // isActive={isActive}
          repeat={repeat}
          // setRepeat={setRepeat}
          shuffle={shuffle}
          handlerepeat={handlerepeat}
          handleShuffle={handleShuffle}
          // isPlaying={isPlaying}
          isplaying={playerState}
          handlePlayPause={handlePlayPause}
          currentPlaying={currentPlaying}
          handlePrevSong={handlePrevSong}
          handleNextSong={handleNextSong}
        />
        <Seekbar
          // value={appTime}
          // min="0"
          // max={duration}
          // onInput={(event) => setSeekTime(event.target.value)}
          // setSeekTime={setSeekTime}
          // appTime={appTime}
          currentPlaying={currentPlaying}
        />
        <Player
          activeSong={activeSong}
          volume={volume}
          currentPlaying={currentPlaying}
          // seekTime={seekTime}
          repeat={repeat}
          handlerepeat={handlerepeat}
          currentIndex={currentIndex}
          onEnded={handleNextSong}
          onTimeUpdate={(event) => setAppTime(event.target.currentTime)}
          onLoadedData={(event) => setDuration(event.target.duration)}
        />
      </div>
      <VolumeBar value={volume} min="0" max="100" onChange={(e) => volumechange(e)} setVolume={setVolume} />
    </div>
  );
};

export default MusicPlayer;
