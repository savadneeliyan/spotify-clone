import React from 'react'
import { useEffect } from 'react'

function ListMusic() {

    useEffect(() => {
        
        // const options = {
        //     method: 'GET',
        //     url: 'https://spotify23.p.rapidapi.com/playlist_tracks/',
        //     params: {id: '37i9dQZF1DX4Wsb4d7NKfP', offset: '0', limit: '100'},
        //     headers: {
        //       'X-RapidAPI-Key': 'b142123d1dmsh7f8b27fadb903bdp17b84fjsn89f9dc4e1f0b',
        //       'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        //     }
        //   };
          
        //   axios.request(options).then(function (response) {
        //       setData(response.data.items);
        //       console.log(data)
        //   }).catch(function (error) {
        //       console.error(error);
        //   });

    }, [])

  return (
    <>
        <div className="top-container">
            <h2>made for you</h2>
           
        </div>
        <div className='paylist-grid'>
            {/* {
                data?.map((item,i)=>{
                   return */}
                    <div className='playlist-container' >
                        <div className='playlist-img'>
                            {/* <img src={item.track?.album.images[0].url} alt="" /> */}
                            <img src="" alt="" />
                            <div className="play-icon">
                                <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 gQUQL">
                                    <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                                </svg>
                            </div>
                        </div>
                        {/* <h2>{item.track?.name}</h2> */}
                        <h2>jkfbweewf</h2>
                        {/* <p> {item.track?.name.substring(0, 50) + "..."}</p> */}
                        <p> Catch all the latest music from artists you follow, plus new singles picked for you. Updates every Friday. </p>
                    </div>
                    <div className='playlist-container' >
                        <div className='playlist-img'>
                            {/* <img src={item.track?.album.images[0].url} alt="" /> */}
                            <img src="" alt="" />
                            <div className="play-icon">
                                <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 gQUQL">
                                    <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                                </svg>
                            </div>
                        </div>
                        {/* <h2>{item.track?.name}</h2> */}
                        <h2>jkfbweewf</h2>
                        {/* <p> {item.track?.name.substring(0, 50) + "..."}</p> */}
                        <p> Catch all the latest music from artists you follow, plus new singles picked for you. Updates every Friday. </p>
                    </div>
                    <div className='playlist-container' >
                        <div className='playlist-img'>
                            {/* <img src={item.track?.album.images[0].url} alt="" /> */}
                            <img src="" alt="" />
                            <div className="play-icon">
                                <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 gQUQL">
                                    <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                                </svg>
                            </div>
                        </div>
                        {/* <h2>{item.track?.name}</h2> */}
                        <h2>jkfbweewf</h2>
                        {/* <p> {item.track?.name.substring(0, 50) + "..."}</p> */}
                        <p> Catch all the latest music from artists you follow, plus new singles picked for you. Updates every Friday. </p>
                    </div>
                    <div className='playlist-container' >
                        <div className='playlist-img'>
                            {/* <img src={item.track?.album.images[0].url} alt="" /> */}
                            <img src="" alt="" />
                            <div className="play-icon">
                                <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 gQUQL">
                                    <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                                </svg>
                            </div>
                        </div>
                        {/* <h2>{item.track?.name}</h2> */}
                        <h2>jkfbweewf</h2>
                        {/* <p> {item.track?.name.substring(0, 50) + "..."}</p> */}
                        <p> Catch all the latest music from artists you follow, plus new singles picked for you. Updates every Friday. </p>
                    </div>
                    <div className='playlist-container' >
                        <div className='playlist-img'>
                            {/* <img src={item.track?.album.images[0].url} alt="" /> */}
                            <img src="" alt="" />
                            <div className="play-icon">
                                <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 gQUQL">
                                    <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                                </svg>
                            </div>
                        </div>
                        {/* <h2>{item.track?.name}</h2> */}
                        <h2>jkfbweewf</h2>
                        {/* <p> {item.track?.name.substring(0, 50) + "..."}</p> */}
                        <p> Catch all the latest music from artists you follow, plus new singles picked for you. Updates every Friday. </p>
                    </div>
                    <div className='playlist-container' >
                        <div className='playlist-img'>
                            {/* <img src={item.track?.album.images[0].url} alt="" /> */}
                            <img src="" alt="" />
                            <div className="play-icon">
                                <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 gQUQL">
                                    <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                                </svg>
                            </div>
                        </div>
                        {/* <h2>{item.track?.name}</h2> */}
                        <h2>jkfbweewf</h2>
                        {/* <p> {item.track?.name.substring(0, 50) + "..."}</p> */}
                        <p> Catch all the latest music from artists you follow, plus new singles picked for you. Updates every Friday. </p>
                    </div>
                    <div className='playlist-container' >
                        <div className='playlist-img'>
                            {/* <img src={item.track?.album.images[0].url} alt="" /> */}
                            <img src="" alt="" />
                            <div className="play-icon">
                                <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 gQUQL">
                                    <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                                </svg>
                            </div>
                        </div>
                        {/* <h2>{item.track?.name}</h2> */}
                        <h2>jkfbweewf</h2>
                        {/* <p> {item.track?.name.substring(0, 50) + "..."}</p> */}
                        <p> Catch all the latest music from artists you follow, plus new singles picked for you. Updates every Friday. </p>
                    </div>
                    <div className='playlist-container' >
                        <div className='playlist-img'>
                            {/* <img src={item.track?.album.images[0].url} alt="" /> */}
                            <img src="" alt="" />
                            <div className="play-icon">
                                <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 gQUQL">
                                    <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                                </svg>
                            </div>
                        </div>
                        {/* <h2>{item.track?.name}</h2> */}
                        <h2>jkfbweewf</h2>
                        {/* <p> {item.track?.name.substring(0, 50) + "..."}</p> */}
                        <p> Catch all the latest music from artists you follow, plus new singles picked for you. Updates every Friday. </p>
                    </div>
                    <div className='playlist-container' >
                        <div className='playlist-img'>
                            {/* <img src={item.track?.album.images[0].url} alt="" /> */}
                            <img src="" alt="" />
                            <div className="play-icon">
                                <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 gQUQL">
                                    <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                                </svg>
                            </div>
                        </div>
                        {/* <h2>{item.track?.name}</h2> */}
                        <h2>jkfbweewf</h2>
                        {/* <p> {item.track?.name.substring(0, 50) + "..."}</p> */}
                        <p> Catch all the latest music from artists you follow, plus new singles picked for you. Updates every Friday. </p>
                    </div>
                    <div className='playlist-container' >
                        <div className='playlist-img'>
                            {/* <img src={item.track?.album.images[0].url} alt="" /> */}
                            <img src="" alt="" />
                            <div className="play-icon">
                                <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 gQUQL">
                                    <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                                </svg>
                            </div>
                        </div>
                        {/* <h2>{item.track?.name}</h2> */}
                        <h2>jkfbweewf</h2>
                        {/* <p> {item.track?.name.substring(0, 50) + "..."}</p> */}
                        <p> Catch all the latest music from artists you follow, plus new singles picked for you. Updates every Friday. </p>
                    </div>
                    <div className='playlist-container' >
                        <div className='playlist-img'>
                            {/* <img src={item.track?.album.images[0].url} alt="" /> */}
                            <img src="" alt="" />
                            <div className="play-icon">
                                <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 gQUQL">
                                    <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                                </svg>
                            </div>
                        </div>
                        {/* <h2>{item.track?.name}</h2> */}
                        <h2>jkfbweewf</h2>
                        {/* <p> {item.track?.name.substring(0, 50) + "..."}</p> */}
                        <p> Catch all the latest music from artists you follow, plus new singles picked for you. Updates every Friday. </p>
                    </div>
                    <div className='playlist-container' >
                        <div className='playlist-img'>
                            {/* <img src={item.track?.album.images[0].url} alt="" /> */}
                            <img src="" alt="" />
                            <div className="play-icon">
                                <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 gQUQL">
                                    <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                                </svg>
                            </div>
                        </div>
                        {/* <h2>{item.track?.name}</h2> */}
                        <h2>jkfbweewf</h2>
                        {/* <p> {item.track?.name.substring(0, 50) + "..."}</p> */}
                        <p> Catch all the latest music from artists you follow, plus new singles picked for you. Updates every Friday. </p>
                    </div>
                    <div className='playlist-container' >
                        <div className='playlist-img'>
                            {/* <img src={item.track?.album.images[0].url} alt="" /> */}
                            <img src="" alt="" />
                            <div className="play-icon">
                                <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 gQUQL">
                                    <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                                </svg>
                            </div>
                        </div>
                        {/* <h2>{item.track?.name}</h2> */}
                        <h2>jkfbweewf</h2>
                        {/* <p> {item.track?.name.substring(0, 50) + "..."}</p> */}
                        <p> Catch all the latest music from artists you follow, plus new singles picked for you. Updates every Friday. </p>
                    </div>
                    <div className='playlist-container' >
                        <div className='playlist-img'>
                            {/* <img src={item.track?.album.images[0].url} alt="" /> */}
                            <img src="" alt="" />
                            <div className="play-icon">
                                <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 gQUQL">
                                    <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                                </svg>
                            </div>
                        </div>
                        {/* <h2>{item.track?.name}</h2> */}
                        <h2>jkfbweewf</h2>
                        {/* <p> {item.track?.name.substring(0, 50) + "..."}</p> */}
                        <p> Catch all the latest music from artists you follow, plus new singles picked for you. Updates every Friday. </p>
                    </div>
                    <div className='playlist-container' >
                        <div className='playlist-img'>
                            {/* <img src={item.track?.album.images[0].url} alt="" /> */}
                            <img src="" alt="" />
                            <div className="play-icon">
                                <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 gQUQL">
                                    <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                                </svg>
                            </div>
                        </div>
                        {/* <h2>{item.track?.name}</h2> */}
                        <h2>jkfbweewf</h2>
                        {/* <p> {item.track?.name.substring(0, 50) + "..."}</p> */}
                        <p> Catch all the latest music from artists you follow, plus new singles picked for you. Updates every Friday. </p>
                    </div>
                    <div className='playlist-container' >
                        <div className='playlist-img'>
                            {/* <img src={item.track?.album.images[0].url} alt="" /> */}
                            <img src="" alt="" />
                            <div className="play-icon">
                                <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 gQUQL">
                                    <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                                </svg>
                            </div>
                        </div>
                        {/* <h2>{item.track?.name}</h2> */}
                        <h2>jkfbweewf</h2>
                        {/* <p> {item.track?.name.substring(0, 50) + "..."}</p> */}
                        <p> Catch all the latest music from artists you follow, plus new singles picked for you. Updates every Friday. </p>
                    </div>
                    <div className='playlist-container' >
                        <div className='playlist-img'>
                            {/* <img src={item.track?.album.images[0].url} alt="" /> */}
                            <img src="" alt="" />
                            <div className="play-icon">
                                <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 gQUQL">
                                    <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                                </svg>
                            </div>
                        </div>
                        {/* <h2>{item.track?.name}</h2> */}
                        <h2>jkfbweewf</h2>
                        {/* <p> {item.track?.name.substring(0, 50) + "..."}</p> */}
                        <p> Catch all the latest music from artists you follow, plus new singles picked for you. Updates every Friday. </p>
                    </div>
                {/* })
            } */}
        </div>
    </>
  )
}

export default ListMusic