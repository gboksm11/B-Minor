import { useState, useEffect } from "react";
import { Text, View, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setArtists, setTracks, setIDS, setFeatures, setImages, setGenres } from "../redux/userSpotify/userSpotifyActions";
import axios from "axios";

const Home = () => {

  const token = useSelector(state => state.userSpotify.token);
  const tracks = useSelector(state => state.userSpotify.tracks);

  console.log(`token = ${token}`);

  console.log(`tracks are = ${tracks}`);
  
  const dispatch = useDispatch();

  useEffect(() => {

    axios(
      "https://api.spotify.com/v1/me/top/tracks?time_range=medium_term&limit=20", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => {
          let tracks1 = [];
          let images = [];
          let ids1 = [];
        
          for(let i = 0 ; i < 20; i++) {
              tracks1.push(response.data.items[i].name);
              ids1.push(response.data.items[i].id);
          }

          console.log(`tracks1 = ${tracks1}`);
          dispatch(setTracks(tracks1));
          dispatch(setIDS(ids1));
      })
      .catch((error) => {
        console.log("error", error.message);
      })
      ;

      axios(
        "https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=20", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      })
        .then((response) => {
            let artists1 = [];
            let genres1 = [];
            for(let i = 0 ; i < 20; i++) {
                
                artists1.push(response.data.items[i].name);
                genres1.push(response.data.items[i].genres);
                dispatch(setArtists(artists1));
                dispatch(setGenres(genres1));
            }
        })
        .catch((error) => {
          console.log("error", error.message);
        });





  }, [token]);

  return(
    <View>
      <Text>Welcome to Home</Text>
    </View>
  )

}

export default Home;