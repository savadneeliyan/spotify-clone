import React from 'react'
import styled from 'styled-components'

function Login() {

    const handleClick = () => { 
        const clientId = "fea3ebca4ca84eacaba84a6a45371090";
        // const clientId = "48b1e3e0a8f24619903d7d746820e21e";
        const redirectUrl = "https://savadneeliyan.github.io/spotify-clone/";
        const apiUrl = "http://accounts.spotify.com/authorize";
        const scope = ['user-read-email', 'user-read-private', 'user-read-playback-state', 'user-modify-playback-state', 'user-read-currently-playing', 'user-read-playback-position', 'user-top-read', 'user-read-recently-played','user-library-read']
        window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(" ")}&response_type=token&show_dialog=true`;
    }


  return (
        <Container>
          <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png" alt="" />  
          <button onClick={handleClick}>connect to spotify </button>   
        </Container>
  )
}

export default Login


const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color:#1db954;
    gap:5rem;
    img{
        height:20vh;
        width:fit-content;
    }
    button{
        padding:1rem 5rem;
        border-radius:5rem;
        border:none;
        background-color:black;
        color:#49f585;
        font-size:1.4rem;
        cursor:pointer;
    }
`;