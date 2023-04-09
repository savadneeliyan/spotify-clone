import React, { useEffect } from 'react'
import { useStateProvider } from '../utils/StateProvider'
import axios from 'axios'
import { reducerCases } from '../utils/Constants'
import { Link } from 'react-router-dom'

function MyPlaylist() {
    const [{ token, selectedPlaylistId, selectedPlaylist }, dispatch] = useStateProvider();
    const mstominutes = (ms) => {
        const minutes = Math.floor(ms / 60000);
        const seconds = ((ms % 60000) / 1000).toFixed(0);
        return minutes + " : " + (seconds < 10 ? "0" : "") + seconds; 
    }
    useEffect(() => {
        const getinitialplaylist = async () => {
            const response = await axios.get(
                `https://api.spotify.com/v1/playlists/${selectedPlaylistId}`,
                {
                    headers: {
                        Authorization: "Bearer " + token,
                        "content-Type": "application/json",
                    },
                }
            );
            const selectedPlaylist = {
              id: response.data.id,
              title: response?.data.name,
              img: response?.data.images[0].url,
              discription: response?.data.description.startsWith("<a")
                ? ""
                : response?.data.description,
              trackItems: response?.data.tracks.items.map(
                ({ track, added_at }) => ({
                  id: track.id,
                  addeddate: added_at.substring(0, 10),
                  name: track.name,
                  artists: track.artists.map((artists) => artists.name),
                  image: track?.album?.images[0]?.url,
                  duration: track.duration_ms,
                  album: track.album.name,
                  comntext_uri: track.album.uri,
                  track_number: track.track_number,
                })
              ),
            };
            dispatch({ type: reducerCases.SET_PLAYLIST, selectedPlaylist });
        }
        getinitialplaylist();
    }, [token, dispatch, selectedPlaylistId])
    

    return (
      <div className="playlistPage">
        {selectedPlaylist && (
          <>
            <div className="container">
              <div className="play-list-top">
                <div className="playlist-img">
                  <img src={selectedPlaylist.img} alt="" />
                </div>
                <div className="names-section">
                  <span>Playlist</span>
                  <h2>discover weekly</h2>
                  <p>
                    Your weekly mixtape of fresh music. Enjoy new music and deep
                    cuts picked for you. Updates every Monday.
                  </p>
                  <div className="discription-container">
                    <svg
                      role="img"
                      height="24"
                      width="24"
                      fill="#1ed760"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-encore-id="icon"
                      className="Svg-sc-ytk21e-0 hyZePi"
                    >
                      <path d="M12 1a11 11 0 1 0 0 22 11 11 0 0 0 0-22zm5.045 15.866a.686.686 0 0 1-.943.228c-2.583-1.579-5.834-1.935-9.663-1.06a.686.686 0 0 1-.306-1.337c4.19-.958 7.785-.546 10.684 1.226a.686.686 0 0 1 .228.943zm1.346-2.995a.858.858 0 0 1-1.18.282c-2.956-1.817-7.464-2.344-10.961-1.282a.856.856 0 0 1-1.11-.904.858.858 0 0 1 .611-.737c3.996-1.212 8.962-.625 12.357 1.462a.857.857 0 0 1 .283 1.179zm.116-3.119c-3.546-2.106-9.395-2.3-12.78-1.272a1.029 1.029 0 0 1-.597-1.969c3.886-1.18 10.345-.952 14.427 1.471a1.029 1.029 0 0 1-1.05 1.77z"></path>
                    </svg>
                    <p>
                      made for <a href="">mohammed savad . </a>30 songs,about
                      1hr 45 mins
                    </p>
                  </div>
                </div>
              </div>
              <div className="play-list-center">
                <div className="round">
                  <svg
                    role="img"
                    height="28"
                    width="28"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-encore-id="icon"
                    className="Svg-sc-ytk21e-0 gQUQL"
                  >
                    <path d="M5.7 3a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7H5.7zm10 0a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
                  </svg>
                </div>

                <svg
                  role="img"
                  height="32"
                  width="32"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-encore-id="icon"
                  className="Svg-sc-ytk21e-0 gQUQL"
                >
                  <path d="M5.21 1.57a6.757 6.757 0 0 1 6.708 1.545.124.124 0 0 0 .165 0 6.741 6.741 0 0 1 5.715-1.78l.004.001a6.802 6.802 0 0 1 5.571 5.376v.003a6.689 6.689 0 0 1-1.49 5.655l-7.954 9.48a2.518 2.518 0 0 1-3.857 0L2.12 12.37A6.683 6.683 0 0 1 .627 6.714 6.757 6.757 0 0 1 5.21 1.57zm3.12 1.803a4.757 4.757 0 0 0-5.74 3.725l-.001.002a4.684 4.684 0 0 0 1.049 3.969l.009.01 7.958 9.485a.518.518 0 0 0 .79 0l7.968-9.495a4.688 4.688 0 0 0 1.049-3.965 4.803 4.803 0 0 0-3.931-3.794 4.74 4.74 0 0 0-4.023 1.256l-.008.008a2.123 2.123 0 0 1-2.9 0l-.007-.007a4.757 4.757 0 0 0-2.214-1.194z"></path>
                </svg>

                <svg
                  role="img"
                  height="32"
                  width="32"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-encore-id="icon"
                  className="Svg-sc-ytk21e-0 gQUQL"
                >
                  <path d="M4.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm15 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-7.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path>
                </svg>
              </div>
              <div className="play-list-down">
                <div className="headers">
                  <div className="table-row">#</div>
                  <div className="table-row">title</div>
                  <div className="table-row">album</div>
                  <div className="table-row">date added</div>
                  <div className="table-row">
                    <svg
                      role="img"
                      height="16"
                      width="16"
                      aria-hidden="true"
                      viewBox="0 0 16 16"
                      data-encore-id="icon"
                      className="Svg-sc-ytk21e-0 gQUQL"
                    >
                      <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path>
                      <path d="M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25z"></path>
                    </svg>
                  </div>
                </div>

                {selectedPlaylist.trackItems.map((track, i) => (
                  <Link to={`/single/${track.id}`} key={i}>
                    <div className="columns">
                      <div className="colums">
                        <span>{i + 1}</span>
                        <svg
                          role="img"
                          height="24"
                          width="24"
                          aria-hidden="true"
                          className="Svg-sc-ytk21e-0 gQUQL UIBT7E6ZYMcSDl1KL62g"
                          viewBox="0 0 24 24"
                          data-encore-id="icon"
                        >
                          <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                        </svg>
                      </div>
                      <div className="colums-container">
                        <img src={track.image} alt="" />
                        <div className="colum-content">
                          <h3>{track.name}</h3>
                          <h5>{track.artists.join(", ")}</h5>
                        </div>
                      </div>
                      <div className="album-name">
                        {track.album}
                      </div>
                      <div className="date-added">{track.addeddate}</div>
                      <div className="time">{mstominutes(track.duration)}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    );
}

export default MyPlaylist