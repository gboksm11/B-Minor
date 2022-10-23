import { combineReducers } from "redux";
import userSpotifyReducer from "./userSpotify/userSpotifyReducer";

const rootReducer = combineReducers({
  userSpotify: userSpotifyReducer
});

export default rootReducer;