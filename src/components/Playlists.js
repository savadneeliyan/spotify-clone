import React, { useEffect } from 'react'
import { useStateProvider } from '../utils/StateProvider';
import axios from 'axios';
import { reducerCases } from '../utils/Constants';

function Playlists() {

    const [{ token, playlists }, dispatch] =
      useStateProvider();
    
    useEffect(() => {
        const getplaylistData = async () => {
            const responce = await axios.get("https://api.spotify.com/v1/me/playlists",
                {
                    headers: {
                        Authorization: "Bearer " + token,
                        "content-Type": "application/json"
                    },
                }
            );
            const { items } = responce.data;
            const playlists = items.map(({ name, id }) => {
                return {name , id }
            })
            dispatch({ type : reducerCases.SET_PLAYLISTS , playlists})
        };
        getplaylistData()
    }, [token, dispatch])

    const changeplaylist =(selectedPlaylistId) => {
      dispatch({ type: reducerCases.SET_PLAYLIST_ID, selectedPlaylistId });
    };


  return (
    <div>
        <h2> playlists </h2>
          <ul>
              {
                playlists.map(({ name, id }) => (       
                    <li key={id} onClick={()=> changeplaylist(id)}> {name} </li>
                ))
              }
        </ul>
          
    </div>
  )
}

export default Playlists