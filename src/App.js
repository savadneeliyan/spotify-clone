import './App.css';
import HomePage from './Pages/HomePage';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import {useEffect, useState } from 'react';
import axios from 'axios';
import ListMusic from './components/ListMusic';
import { Route, Routes  } from 'react-router-dom';
import PlayListPage from './components/PlayListPage';
import Player from './components/Player';
import SinglePage from './components/SinglePage';
import LyricsPage from './components/LyricsPage';
import SearchPage from './components/SearchPage';
import LikedSongs from './components/LikedSongs';
import MusicPlayer from './components/MusicPlayer';
import Login from './components/Login';
import { useStateProvider } from "./utils/StateProvider";
import { reducerCases } from "./utils/Constants";
import Playlists from './components/Playlists';
import MyPlaylist from './components/MyPlaylist';
import SinglepagePlaylist from './components/siglepageplaylist';



function App() {

const [{ token }, dispatch] = useStateProvider();

useEffect(() => {
  const hash = window.location.hash;
  if (hash) {
    const token = hash.substring(1).split("&")[0].split("=")[1];
    dispatch({ type: reducerCases.SET_TOKEN, token });

    const getuserinfo = async () => {
      const { data } = await axios.get("https://api.spotify.com/v1/me",
        {
          headers: {
            Authorization: "Bearer " + token,
            "content-Type": "application/json",
          },
        }
      );
      const userInfo = {
        userId: data.id,
        username: data.display_name,
      };
      dispatch({ type: reducerCases.SET_USER, userInfo });
    }
    getuserinfo();

    const getdiviceId = async () => {
      const diviceid = await axios.get('https://api.spotify.com/v1/me/player/devices',
      {
        headers: {
          Authorization: "Bearer " + token,
          "content-Type": "application/json",
        },
      })
      const deviceId = {
        id: diviceid.data.devices[0]?.id,
        volumn: diviceid.data.devices[0]?.volume_percent
      }

      dispatch({ type: reducerCases.SET_DEVICES, devices:deviceId });
    }
    getdiviceId()
  }



  
}, [token, dispatch]);


  return (
    <div className="App">
      {token ? <div className="Home">
        <Sidebar />
        <div className="rightContainer">
          <Navbar  />
          <div className="contents">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/music/:id" element={<ListMusic />} />
              <Route path="/music/new-releases" element={<ListMusic Release />} />
              <Route path="/music/featured-playlists" element={<ListMusic Editors />} />
              <Route path="/album/:id" element={<SinglepagePlaylist />} />
              <Route path="/playlist/:id" element={<MyPlaylist />} />
              {/* <Route path="/playlist" element={<PlayListPage />} /> */}
              <Route path="/track/:id" element={<SinglePage />} />
              <Route path="/lyrics" element={<LyricsPage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/liked" element={<LikedSongs />} />
            </Routes>
          </div>
        </div>
        {/* <Player/> */}
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-[#181818] backdrop-blur-lg  z-10">
          <MusicPlayer />
        </div>
      </div>
        : <Login />
      }
    </div>
  );
}

export default App;
