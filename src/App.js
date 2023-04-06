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



function App() {


  
    const [data ,setData] = useState();
    const [id , setId] = useState('nocopyrightsounds');
    useEffect(() => { 
        // const options = {
        //   method: 'GET',
        //   url: 'https://spotify23.p.rapidapi.com/user_profile/',
        //   params: {id: id, playlistLimit: '10', artistLimit: '10'},
        //   headers: {
        //       'X-RapidAPI-Key': '5bd207f698msh17b3b213c1c7cf8p1e3e24jsn7e2107bb0ef5',
        //       'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        //   }
        
        // }
        // setId('nocopyrightsounds');

        // axios.request(options).then(function (response) {
        //   setData(response.data)
        // }).catch(function (error) {
        //   console.error(error);
        // });
        
    }, [])
  

    const [scrollPosition, setScrollPosition] = useState(false);

    const handleScroll = (e) => {
        setScrollPosition(e.target.scrollTop > 1);
    };



  return (
    <div className="App">
      <div className='Home'>
          <Sidebar/>
          <div className="rightContainer" >
            <Navbar data={data} scrollPosition={scrollPosition}/>
            <div className="contents">
              <Routes>
                <Route path="/" element={<HomePage/>} /> 
                <Route path="/music" element={<ListMusic/>} /> 
                <Route path="/playlist" element={<PlayListPage/>} /> 
                <Route path="/track/:id" element={<SinglePage/>} /> 
                <Route path="/lyrics" element={<LyricsPage/>} /> 
                <Route path="/search" element={<SearchPage/>} /> 
                <Route path="/liked" element={<LikedSongs/>} /> 
              </Routes>
              
            </div>
          </div>
          <Player/>
      </div>
    </div>
  );
}

export default App;
