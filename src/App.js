import './App.css';
import HomePage from './Pages/HomePage';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import {useEffect, useState } from 'react';
import MusicListing from './components/MusicListing';
import axios from 'axios';
import ListMusic from './components/ListMusic';
import { Route, Routes } from 'react-router-dom';



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
          <div className="rightContainer" onScroll={handleScroll}>
            <Navbar data={data} scrollPosition={scrollPosition}/>
            <div className="contents">
              {/* <Svg/> */}
              <Routes>
                <Route path="/" element={<HomePage/>} /> 
                <Route path="/music" element={<ListMusic/>} /> 
              </Routes>
              {/* <MusicListing id={id}/> */}
              
            </div>
          </div>
          <div className="player"></div>
      </div>
    </div>
  );
}

export default App;
