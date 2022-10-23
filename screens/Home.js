import { useState, useEffect } from "react";
import { Text, View, Image, AsyncStorage, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setArtists, setTracks, setIDS, setFeatures, setImages, setGenres } from "../redux/userSpotify/userSpotifyActions";
import axios from "axios";
import musicIcon from "../assets/music.png";
import Card from "../components/Card";

const Home = () => {

  const token = useSelector(state => state.userSpotify.token);
  const tracks = useSelector(state => state.userSpotify.tracks);

  console.log(`token = ${token}`);

  console.log(`tracks are = ${tracks}`);
  
  const dispatch = useDispatch();

  useEffect(() => {

    let token_async;
    async function getToken() {
      return await AsyncStorage.getItem("spotify_token");
    }

    console.log("ASYC TOKEN = " + token);

    token_async = getToken();
    if (token) {
      console.log("IN REQUEST TKOEN + " + token);
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
                  
                  console.log("response 2 = " + response);
                  artists1.push(response.data.items[i].name);
                  genres1.push(response.data.items[i].genres);
                  dispatch(setArtists(artists1));
                  dispatch(setGenres(genres1));
              }
          })
          .catch((error) => {
            console.log("error", error.message);
          });
        }

  }, [token]);

  const renderTracks = () => {
    return tracks.map(track => <Text style={styles.songText}>{track}</Text>)
    //return tracks.map(track => ;
  }

  return(
    <View>
      <Text style={styles.title}>Welcome to Home</Text>
      <Text style={styles.title}>Your top playing tracks:</Text>
      {renderTracks()}
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c0f4cc',
    flexDirection: "column",
    alignItems: 'center',
  },
  baseText: {
    fontSize: 10

  }, 
  title: {
    fontSize: 48,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "10%"
  },
  picture: {
      width: 200,
      height: 200,
      marginLeft: 'auto',
      marginRight: 'auto',
      alignSelf: "flex-start",
      marginTop: "5%",
      borderRadius: 50

  },
  songText: {

  },
  label : {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: "6%"
  },
  username : {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: "3%"
  },
  location : {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: "2%"
  },
  bContainer: {
    flex: 0.08,
    width: '100%',
    height: '1%',
    flexDirection: "row",
    justifyContent: 'space-around'

  },
  Button : {
    fontSize: 25,
    fontWeight: 'bold',


  },
  line: {
    flex:0.015,
    flexDirection: 'row',
    width: '90%',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 1

  },
  line1: {
    flex:0.015,
    flexDirection: 'row',
    width: '90%',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 1

  }

});


export default Home;