import { reducerCases } from "./Constants";

export const initialState = {
  token: null,
  playlists: [],
  userInfo: null,
  selectedPlaylistId: "4ivLkjXkmc0anTf31Uy6dn",
  selectedPlaylist: null,
  currentPlaying: null,
  playerState:true,
  devices:null,
  seekbar:null,
  owner:null
};

const reducer = (state, action) => {
    switch (action.type) {
      case reducerCases.SET_TOKEN: {
        return {
          ...state,
          token: action.token,
        };
      }
      case reducerCases.SET_PLAYLISTS: {
        return {
          ...state,
          playlists: action.playlists,
        };
      }
      case reducerCases.SET_USER: {
        return {
          ...state,
          userInfo: action.userInfo,
        };
      }
      case reducerCases.SET_PLAYLIST: {
        return {
          ...state,
          selectedPlaylist: action.selectedPlaylist,
        };
      }
      case reducerCases.SET_PLAYING: {
        return {
          ...state,
          currentPlaying: action.currentPlaying,
        };
      }
      case reducerCases.SET_PLAYER_STATE: {
        return {
          ...state,
          playerState: action.playerState,
        };
      }
      case reducerCases.SET_PLAYLIST_ID: {
        return {
          ...state,
          selectedPlaylistId: action.selectedPlaylistId,
        };
      }
      case reducerCases.SET_DEVICES: {
        return {
          ...state,
          devices: action.devices,
        };
      }
      case reducerCases.SET_SEEKBAR: {
        return {
          ...state,
          seekbar: action.seekbar,
        };
      }
      case reducerCases.SET_OWNER: {
        return {
          ...state,
          owner: action.owner,
        };
      }

      default:
        return state;
    }
};

export default reducer;