import { SET_TOKEN, SET_IDS, SET_TRACKS, SET_IMAGES, SET_ARTISTS, SET_GENRES, SET_FEATURES, SET_USER_IMAGE } from "./userSpotifyTypes";


const initialState = {
  token: "",
  IDs: [],
  tracks: [],
  images: [],
  artists: [],
  genres: [],
  features: [],
  userImage: "https://firebasestorage.googleapis.com/v0/b/partylytical.appspot.com/o/playerImages%2Fprofile-picture-square.png?alt=media&token=a7b63909-cedd-4b93-9fcb-bf21436a934e",
}

const userSpotifyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN: return {
      ...state,
      token: action.payload
    }

    case SET_IDS: return {
      ...state,
      IDs: action.payload
    }

    case SET_TRACKS: return {
      ...state,
      tracks: action.payload
    } 

    case SET_IMAGES: return {
      ...state,
      images: action.payload
    }

    case SET_ARTISTS: return {
      ...state,
      artists: action.payload,
    }

    case SET_GENRES: return {
      ...state,
      genres: action.payload
    }

    case SET_FEATURES: return {
        ...state,
        features: action.payload
      }

    case SET_USER_IMAGE: return {
    ...state,
    userImage: action.payload
    }

    default: return state;
  }
}

export default userSpotifyReducer;