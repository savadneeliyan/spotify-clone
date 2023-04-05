import React from 'react'
import { Link } from 'react-router-dom'

function LikedSongs() {
  return (
    <div className='playlistPage'>
        <div className="container">
            <div className="play-list-top">
                <div className="playlist-img">
                    <img src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb18045f4451e50f23177dd524/2/en/default" alt="" />
                </div>
                <div className="names-section">
                    <span>Playlist</span>
                    <h2>Liked Songs</h2>
                    
                    <div className="discription-container">
                        <p><a href="">mohammed savad . </a>30 songs</p>
                    </div>
                </div>
            </div>
            <div className="play-list-center">
                <div className='round'>
                    <svg role="img" height="28" width="28" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 gQUQL">
                        <path d="M5.7 3a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7H5.7zm10 0a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
                    </svg>
                </div>
                
                <svg role="img" height="32" width="32" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 gQUQL">
                    <path d="M5.21 1.57a6.757 6.757 0 0 1 6.708 1.545.124.124 0 0 0 .165 0 6.741 6.741 0 0 1 5.715-1.78l.004.001a6.802 6.802 0 0 1 5.571 5.376v.003a6.689 6.689 0 0 1-1.49 5.655l-7.954 9.48a2.518 2.518 0 0 1-3.857 0L2.12 12.37A6.683 6.683 0 0 1 .627 6.714 6.757 6.757 0 0 1 5.21 1.57zm3.12 1.803a4.757 4.757 0 0 0-5.74 3.725l-.001.002a4.684 4.684 0 0 0 1.049 3.969l.009.01 7.958 9.485a.518.518 0 0 0 .79 0l7.968-9.495a4.688 4.688 0 0 0 1.049-3.965 4.803 4.803 0 0 0-3.931-3.794 4.74 4.74 0 0 0-4.023 1.256l-.008.008a2.123 2.123 0 0 1-2.9 0l-.007-.007a4.757 4.757 0 0 0-2.214-1.194z"></path>
                </svg>
            
            
                <svg role="img" height="32" width="32" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 gQUQL">
                    <path d="M4.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm15 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-7.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path>
                </svg>
                
            </div>
            <div className="play-list-down">
                <div className="headers">
                    <div className='table-row'>#</div>
                    <div className='table-row'>title</div>
                    <div className='table-row'>album</div>
                    <div className='table-row'>date added</div>
                    <div className='table-row'>
                        <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" className="Svg-sc-ytk21e-0 gQUQL">
                            <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path><path d="M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25z"></path>
                        </svg>
                    </div>
                </div>
                <Link to="/single">
                    <div className="columns">
                        <div className="colums"><span>1</span> 
                            <svg role="img" height="24" width="24" aria-hidden="true" className="Svg-sc-ytk21e-0 gQUQL UIBT7E6ZYMcSDl1KL62g" viewBox="0 0 24 24" data-encore-id="icon">
                                <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                            </svg>
                        </div>
                        <div className="colums-container">
                            <img src="https://i.scdn.co/image/ab67616d000048519b8c8ab6e0a59493a5fa06c6" alt="" />
                            <div className="colum-content">
                                <h3>kanmani anbodu</h3>
                                <h5>Aswanth Ajith</h5>
                            </div>    
                        </div>
                        <div className="album-name">
                            <a href="">kanmani anbodu kadhal</a>
                        </div>
                        <div className="date-added">
                            9 hours ago
                        </div>
                        <div className="time">
                            3:32
                        </div>
                    </div>
                </Link>
                <Link to="/single">
                    <div className="columns">
                        <div className="colums"><span>2</span> 
                            <svg role="img" height="24" width="24" aria-hidden="true" className="Svg-sc-ytk21e-0 gQUQL UIBT7E6ZYMcSDl1KL62g" viewBox="0 0 24 24" data-encore-id="icon">
                                <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                            </svg>
                        </div>
                        <div className="colums-container">
                            <img src="https://i.scdn.co/image/ab67616d0000485156ed980c1e0508ec3fd78821" alt="" />
                            <div className="colum-content">
                                <h3>kanmani anbodu</h3>
                                <h5>Aswanth Ajith</h5>
                            </div>    
                        </div>
                        <div className="album-name">
                            <a href="">kanmani anbodu kadhal</a>
                        </div>
                        <div className="date-added">
                            9 hours ago
                        </div>
                        <div className="time">
                            3:32
                        </div>
                    </div>
                </Link>
                <Link to="/single">
                    <div className="columns">
                        <div className="colums"><span>3</span> 
                            <svg role="img" height="24" width="24" aria-hidden="true" className="Svg-sc-ytk21e-0 gQUQL UIBT7E6ZYMcSDl1KL62g" viewBox="0 0 24 24" data-encore-id="icon">
                                <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                            </svg>
                        </div>
                        <div className="colums-container">
                            <img src="https://i.scdn.co/image/ab67616d0000485191145998e54e8c27572bdd59" alt="" />
                            <div className="colum-content">
                                <h3>kanmani anbodu</h3>
                                <h5>Aswanth Ajith</h5>
                            </div>    
                        </div>
                        <div className="album-name">
                            <a href="">kanmani anbodu kadhal</a>
                        </div>
                        <div className="date-added">
                            9 hours ago
                        </div>
                        <div className="time">
                            3:32
                        </div>
                    </div>
                </Link>
                <Link to="/single">
                    <div className="columns">
                        <div className="colums"><span>4</span> 
                            <svg role="img" height="24" width="24" aria-hidden="true" className="Svg-sc-ytk21e-0 gQUQL UIBT7E6ZYMcSDl1KL62g" viewBox="0 0 24 24" data-encore-id="icon">
                                <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                            </svg>
                        </div>
                        <div className="colums-container">
                            <img src="https://i.scdn.co/image/ab67616d000048519451e80ff0ec76b0b0e5f982" alt="" />
                            <div className="colum-content">
                                <h3>kanmani anbodu</h3>
                                <h5>Aswanth Ajith</h5>
                            </div>    
                        </div>
                        <div className="album-name">
                            <a href="">kanmani anbodu kadhal</a>
                        </div>
                        <div className="date-added">
                            9 hours ago
                        </div>
                        <div className="time">
                            3:32
                        </div>
                    </div>
                </Link>
                <Link to="/single">
                    <div className="columns">
                        <div className="colums"><span>5</span> 
                            <svg role="img" height="24" width="24" aria-hidden="true" className="Svg-sc-ytk21e-0 gQUQL UIBT7E6ZYMcSDl1KL62g" viewBox="0 0 24 24" data-encore-id="icon">
                                <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                            </svg>
                        </div>
                        <div className="colums-container">
                            <img src="https://i.scdn.co/image/ab67616d00004851ca4b77428a30c42c75a8627a" alt="" />
                            <div className="colum-content">
                                <h3>kanmani anbodu</h3>
                                <h5>Aswanth Ajith</h5>
                            </div>    
                        </div>
                        <div className="album-name">
                            <a href="">kanmani anbodu kadhal</a>
                        </div>
                        <div className="date-added">
                            9 hours ago
                        </div>
                        <div className="time">
                            3:32
                        </div>
                    </div>
                </Link>
                <Link to="/single">
                    <div className="columns">
                        <div className="colums"><span>6</span> 
                            <svg role="img" height="24" width="24" aria-hidden="true" className="Svg-sc-ytk21e-0 gQUQL UIBT7E6ZYMcSDl1KL62g" viewBox="0 0 24 24" data-encore-id="icon">
                                <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                            </svg>
                        </div>
                        <div className="colums-container">
                            <img src="https://i.scdn.co/image/ab67616d00004851682b969d739bfb451f692f3a" alt="" />
                            <div className="colum-content">
                                <h3>kanmani anbodu</h3>
                                <h5>Aswanth Ajith</h5>
                            </div>    
                        </div>
                        <div className="album-name">
                            <a href="">kanmani anbodu kadhal</a>
                        </div>
                        <div className="date-added">
                            9 hours ago
                        </div>
                        <div className="time">
                            3:32
                        </div>
                    </div>
                </Link>
                <Link to="/single">
                    <div className="columns">
                        <div className="colums"><span>7</span> 
                            <svg role="img" height="24" width="24" aria-hidden="true" className="Svg-sc-ytk21e-0 gQUQL UIBT7E6ZYMcSDl1KL62g" viewBox="0 0 24 24" data-encore-id="icon">
                                <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                            </svg>
                        </div>
                        <div className="colums-container">
                            <img src="https://i.scdn.co/image/ab67616d000048512c1576bf13263140f4d45081" alt="" />
                            <div className="colum-content">
                                <h3>kanmani anbodu</h3>
                                <h5>Aswanth Ajith</h5>
                            </div>    
                        </div>
                        <div className="album-name">
                            <a href="">kanmani anbodu kadhal</a>
                        </div>
                        <div className="date-added">
                            9 hours ago
                        </div>
                        <div className="time">
                            3:32
                        </div>
                    </div>
                </Link>
                <Link to="/single">
                    <div className="columns">
                        <div className="colums"><span>8</span> 
                            <svg role="img" height="24" width="24" aria-hidden="true" className="Svg-sc-ytk21e-0 gQUQL UIBT7E6ZYMcSDl1KL62g" viewBox="0 0 24 24" data-encore-id="icon">
                                <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                            </svg>
                        </div>
                        <div className="colums-container">
                            <img src="https://i.scdn.co/image/ab67616d000048515f68e66aec5f4e05ccbc9cdb" alt="" />
                            <div className="colum-content">
                                <h3>kanmani anbodu</h3>
                                <h5>Aswanth Ajith</h5>
                            </div>    
                        </div>
                        <div className="album-name">
                            <a href="">kanmani anbodu kadhal</a>
                        </div>
                        <div className="date-added">
                            9 hours ago
                        </div>
                        <div className="time">
                            3:32
                        </div>
                    </div>
                </Link>
                <Link to="/single">
                    <div className="columns">
                        <div className="colums"><span>9</span> 
                            <svg role="img" height="24" width="24" aria-hidden="true" className="Svg-sc-ytk21e-0 gQUQL UIBT7E6ZYMcSDl1KL62g" viewBox="0 0 24 24" data-encore-id="icon">
                                <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                            </svg>
                        </div>
                        <div className="colums-container">
                            <img src="https://i.scdn.co/image/ab67616d0000485166d4b230dd302390931e8e21" alt="" />
                            <div className="colum-content">
                                <h3>kanmani anbodu</h3>
                                <h5>Aswanth Ajith</h5>
                            </div>    
                        </div>
                        <div className="album-name">
                            <a href="">kanmani anbodu kadhal</a>
                        </div>
                        <div className="date-added">
                            9 hours ago
                        </div>
                        <div className="time">
                            3:32
                        </div>
                    </div>
                </Link>
                <Link to="/single">
                    <div className="columns">
                        <div className="colums"><span>10</span> 
                            <svg role="img" height="24" width="24" aria-hidden="true" className="Svg-sc-ytk21e-0 gQUQL UIBT7E6ZYMcSDl1KL62g" viewBox="0 0 24 24" data-encore-id="icon">
                                <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                            </svg>
                        </div>
                        <div className="colums-container">
                            <img src="https://i.scdn.co/image/ab67616d0000485137bdb4ab21bb5795c22453b8" alt="" />
                            <div className="colum-content">
                                <h3>kanmani anbodu</h3>
                                <h5>Aswanth Ajith</h5>
                            </div>    
                        </div>
                        <div className="album-name">
                            <a href="">kanmani anbodu kadhal</a>
                        </div>
                        <div className="date-added">
                            9 hours ago
                        </div>
                        <div className="time">
                            3:32
                        </div>
                    </div>
                </Link>
                <Link to="/single">
                    <div className="columns">
                        <div className="colums"><span>11</span> 
                            <svg role="img" height="24" width="24" aria-hidden="true" className="Svg-sc-ytk21e-0 gQUQL UIBT7E6ZYMcSDl1KL62g" viewBox="0 0 24 24" data-encore-id="icon">
                                <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                            </svg>
                        </div>
                        <div className="colums-container">
                            <img src="https://i.scdn.co/image/ab67616d0000485108ef8c2cba99f6c49890afa0" alt="" />
                            <div className="colum-content">
                                <h3>kanmani anbodu</h3>
                                <h5>Aswanth Ajith</h5>
                            </div>    
                        </div>
                        <div className="album-name">
                            <a href="">kanmani anbodu kadhal</a>
                        </div>
                        <div className="date-added">
                            9 hours ago
                        </div>
                        <div className="time">
                            3:32
                        </div>
                    </div>
                </Link>
                <Link to="/single">
                    <div className="columns">
                        <div className="colums"><span>12</span> 
                            <svg role="img" height="24" width="24" aria-hidden="true" className="Svg-sc-ytk21e-0 gQUQL UIBT7E6ZYMcSDl1KL62g" viewBox="0 0 24 24" data-encore-id="icon">
                                <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                            </svg>
                        </div>
                        <div className="colums-container">
                            <img src="https://i.scdn.co/image/ab67616d000048513c4b854fd6673c6c188b57c7" alt="" />
                            <div className="colum-content">
                                <h3>kanmani anbodu</h3>
                                <h5>Aswanth Ajith</h5>
                            </div>    
                        </div>
                        <div className="album-name">
                            <a href="">kanmani anbodu kadhal</a>
                        </div>
                        <div className="date-added">
                            9 hours ago
                        </div>
                        <div className="time">
                            3:32
                        </div>
                    </div>
                </Link>
                <Link to="/single">
                    <div className="columns">
                        <div className="colums"><span>13</span> 
                            <svg role="img" height="24" width="24" aria-hidden="true" className="Svg-sc-ytk21e-0 gQUQL UIBT7E6ZYMcSDl1KL62g" viewBox="0 0 24 24" data-encore-id="icon">
                                <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                            </svg>
                        </div>
                        <div className="colums-container">
                            <img src="https://i.scdn.co/image/ab67616d0000485149f5ceec0ba07e0e4adb135b" alt="" />
                            <div className="colum-content">
                                <h3>kanmani anbodu</h3>
                                <h5>Aswanth Ajith</h5>
                            </div>    
                        </div>
                        <div className="album-name">
                            <a href="">kanmani anbodu kadhal</a>
                        </div>
                        <div className="date-added">
                            9 hours ago
                        </div>
                        <div className="time">
                            3:32
                        </div>
                    </div>
                </Link>
                <Link to="/single">
                    <div className="columns">
                        <div className="colums"><span>14</span> 
                            <svg role="img" height="24" width="24" aria-hidden="true" className="Svg-sc-ytk21e-0 gQUQL UIBT7E6ZYMcSDl1KL62g" viewBox="0 0 24 24" data-encore-id="icon">
                                <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                            </svg>
                        </div>
                        <div className="colums-container">
                            <img src="https://i.scdn.co/image/ab67616d00004851e8b9aa94e18b5641a5abd307" alt="" />
                            <div className="colum-content">
                                <h3>kanmani anbodu</h3>
                                <h5>Aswanth Ajith</h5>
                            </div>    
                        </div>
                        <div className="album-name">
                            <a href="">kanmani anbodu kadhal</a>
                        </div>
                        <div className="date-added">
                            9 hours ago
                        </div>
                        <div className="time">
                            3:32
                        </div>
                    </div>
                </Link>
                <Link to="/single">
                    <div className="columns">
                        <div className="colums"><span>15</span> 
                            <svg role="img" height="24" width="24" aria-hidden="true" className="Svg-sc-ytk21e-0 gQUQL UIBT7E6ZYMcSDl1KL62g" viewBox="0 0 24 24" data-encore-id="icon">
                                <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                            </svg>
                        </div>
                        <div className="colums-container">
                            <img src="https://i.scdn.co/image/ab67616d00004851c0e4ba7f3cd842f5fdc69269" alt="" />
                            <div className="colum-content">
                                <h3>kanmani anbodu</h3>
                                <h5>Aswanth Ajith</h5>
                            </div>    
                        </div>
                        <div className="album-name">
                            <a href="">kanmani anbodu kadhal</a>
                        </div>
                        <div className="date-added">
                            9 hours ago
                        </div>
                        <div className="time">
                            3:32
                        </div>
                    </div>
                </Link>
                <Link to="/single">
                    <div className="columns">
                        <div className="colums"><span>16</span> 
                            <svg role="img" height="24" width="24" aria-hidden="true" className="Svg-sc-ytk21e-0 gQUQL UIBT7E6ZYMcSDl1KL62g" viewBox="0 0 24 24" data-encore-id="icon">
                                <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                            </svg>
                        </div>
                        <div className="colums-container">
                            <img src="https://i.scdn.co/image/ab67616d0000485199a9ac989f3bcf220035da8b" alt="" />
                            <div className="colum-content">
                                <h3>kanmani anbodu</h3>
                                <h5>Aswanth Ajith</h5>
                            </div>    
                        </div>
                        <div className="album-name">
                            <a href="">kanmani anbodu kadhal</a>
                        </div>
                        <div className="date-added">
                            9 hours ago
                        </div>
                        <div className="time">
                            3:32
                        </div>
                    </div>
                </Link>
                <Link to="/single">
                    <div className="columns">
                        <div className="colums"><span>17</span> 
                            <svg role="img" height="24" width="24" aria-hidden="true" className="Svg-sc-ytk21e-0 gQUQL UIBT7E6ZYMcSDl1KL62g" viewBox="0 0 24 24" data-encore-id="icon">
                                <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                            </svg>
                        </div>
                        <div className="colums-container">
                            <img src="https://i.scdn.co/image/ab67616d00004851326c79da75a4ee6e3d9736b4" alt="" />
                            <div className="colum-content">
                                <h3>kanmani anbodu</h3>
                                <h5>Aswanth Ajith</h5>
                            </div>    
                        </div>
                        <div className="album-name">
                            <a href="">kanmani anbodu kadhal</a>
                        </div>
                        <div className="date-added">
                            9 hours ago
                        </div>
                        <div className="time">
                            3:32
                        </div>
                    </div>
                </Link>
                <Link to="/single">
                    <div className="columns">
                        <div className="colums"><span>18</span> 
                            <svg role="img" height="24" width="24" aria-hidden="true" className="Svg-sc-ytk21e-0 gQUQL UIBT7E6ZYMcSDl1KL62g" viewBox="0 0 24 24" data-encore-id="icon">
                                <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                            </svg>
                        </div>
                        <div className="colums-container">
                            <img src="https://i.scdn.co/image/ab67616d000048517139a03b8bbd6515a7700934" alt="" />
                            <div className="colum-content">
                                <h3>kanmani anbodu</h3>
                                <h5>Aswanth Ajith</h5>
                            </div>    
                        </div>
                        <div className="album-name">
                            <a href="">kanmani anbodu kadhal</a>
                        </div>
                        <div className="date-added">
                            9 hours ago
                        </div>
                        <div className="time">
                            3:32
                        </div>
                    </div>
                </Link>
                <Link to="/single">
                    <div className="columns">
                        <div className="colums"><span>19</span> 
                            <svg role="img" height="24" width="24" aria-hidden="true" className="Svg-sc-ytk21e-0 gQUQL UIBT7E6ZYMcSDl1KL62g" viewBox="0 0 24 24" data-encore-id="icon">
                                <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                            </svg>
                        </div>
                        <div className="colums-container">
                            <img src="https://i.scdn.co/image/ab67616d000048515d14e857caf68271fbf5d3e0" alt="" />
                            <div className="colum-content">
                                <h3>kanmani anbodu</h3>
                                <h5>Aswanth Ajith</h5>
                            </div>    
                        </div>
                        <div className="album-name">
                            <a href="">kanmani anbodu kadhal</a>
                        </div>
                        <div className="date-added">
                            9 hours ago
                        </div>
                        <div className="time">
                            3:32
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default LikedSongs