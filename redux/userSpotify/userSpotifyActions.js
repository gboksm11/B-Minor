
import { SET_TOKEN, SET_TRACKS, SET_IMAGES, SET_ARTISTS, SET_GENRES, SET_FEATURES, SET_USER_IMAGE, SET_IDS } from "./userSpotifyTypes";

export const setToken = (token) => {
  return {
    type: SET_TOKEN,
    payload: token
  }
}

export const setTracks = (tracks) => {
  return {
    type: SET_TRACKS,
    payload: tracks
  }
}


export const setIDs = (ids) => {
  return {
    type: SET_IDS,
    payload: ids
  }
}

export const setImages = (images) => {
  return {
    type: SET_IMAGES,
    payload: image
  }
}

export const setArtists = (artists) => {
  return {
    type: SET_ARTISTS,
    payload: artists
  }
}

export const setGenres = (genres) => {
  return {
    type: SET_GENRES,
    payload: genres
  }
}

export const setFeatures = (features) => {
    return {
      type: SET_FEATURES,
      payload: features
    }
  }

  export const setUserImage = (image) => {
    return {
      type: SET_USER_IMAGE,
      payload: image
    }
  }