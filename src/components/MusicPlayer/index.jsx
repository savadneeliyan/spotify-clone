import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

// import { nextSong, prevSong, playPause } from '../../redux/features/playerSlice';
import Controls from './Controls';
import Player from './Player';
import Seekbar from './Seekbar';
import Track from './Track';
import VolumeBar from './VolumeBar';
import { useStateProvider } from '../../utils/StateProvider';
import axios from 'axios';
import { reducerCases } from '../../utils/Constants';

const MusicPlayer = () => {
  // const { activeSong, currentSongs, currentIndex, isActive, isPlaying } = useSelector((state) => state.player);

  const [{ token, currentPlaying, playerState }, dispatch] = useStateProvider();

  useEffect(() => {
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
            }
              
              dispatch({ type: reducerCases.SET_PLAYING, currentPlaying });
          }
        }
        getcurrentTrack();
    }, [token, dispatch])



  const activeSong = ""
  const currentSongs = ""
  const currentIndex = ""
  const isActive = ""
  const isPlaying = ""
  const nextSong = ""
  const prevSong = ""
  const playPause = ""
  const [duration, setDuration] = useState(0);
  const [seekTime, setSeekTime] = useState(0);
  const [appTime, setAppTime] = useState(0);
  const [volume, setVolume] = useState(0.3);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (currentSongs.length) dispatch(playPause(true));
  // }, [currentIndex]);

  const volumechange = async (e) => {
    await axios.put("https://api.spotify.com/v1/me/player/volume", {}, {
      params: {
          volume_percent:parseInt(e.target.value)
      },
      headers: {
          Authorization: "Bearer " + token,
          "content-Type": "application/json",
        },
    })
  }

  const handlePlayPause = async () => {
    const state = playerState ? "pause" : "play";
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
      console.log(response)
    // if (isPlaying) {
    //   dispatch(playPause(false));
    // } else {
    //   dispatch(playPause(true));
    // }
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
      console.log(response);
      // dispatch({ type: reducerCases.SET_PLAYING, currentPlaying });

    if (!shuffle) {
      // dispatch(nextSong((currentIndex + 1) % currentSongs.length));
    } else {
      // dispatch(nextSong(Math.floor(Math.random() * currentSongs.length)));
    }
  };

  const handlePrevSong = async () => {
    if (currentIndex === 0) {
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
      
      console.log(response)
      // dispatch({ type: reducerCases.SET_PLAYING, currentPlaying });

    } else if (shuffle) {
      // dispatch(prevSong(Math.floor(Math.random() * currentSongs.length)));
    } else {
      // dispatch(prevSong(currentIndex - 1));
    }
  };

  return (
    <div className="relative sm:px-12 px-8 w-full flex items-center justify-between">
      <Track isPlaying={isPlaying} isActive={isActive} activeSong={activeSong} currentPlaying={currentPlaying} />
      <div className="flex-1 flex flex-col items-center justify-center">
        <Controls
          isPlaying={playerState}
          isActive={isActive}
          repeat={repeat}
          setRepeat={setRepeat}
          shuffle={shuffle}
          setShuffle={setShuffle}
          currentSongs={currentPlaying}
          handlePlayPause={handlePlayPause}
          handlePrevSong={handlePrevSong}
          handleNextSong={handleNextSong}
        />
        <Seekbar
          value={appTime}
          min="0"
          max={duration}
          onInput={(event) => setSeekTime(event.target.value)}
          setSeekTime={setSeekTime}
          appTime={appTime}
        />
        <Player
          activeSong={activeSong}
          volume={volume}
          isPlaying={isPlaying}
          seekTime={seekTime}
          repeat={repeat}
          currentIndex={currentIndex}
          onEnded={handleNextSong}
          onTimeUpdate={(event) => setAppTime(event.target.currentTime)}
          onLoadedData={(event) => setDuration(event.target.duration)}
        />
      </div>
      <VolumeBar value={volume} min="0" max="1" onChange={(e) => volumechange(e)} setVolume={setVolume} />
    </div>
  );
};

export default MusicPlayer;
