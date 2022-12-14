import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet, KeyboardAvoidingView, Text, Button, Image, AsyncStorage, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import { ResponseType, useAuthRequest } from "expo-auth-session";
import axios from "axios";
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../redux/userSpotify/userSpotifyActions";
import { SafeAreaView } from "react-native-safe-area-context";


const discovery = {
  authorizationEndpoint: 
  "https://accounts.spotify.com/authorize",
  tokenEndpoint: 
  "https://accounts.spotify.com/api/token",
};

const Spotify = ({  }) => {

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const token = useSelector(state => state.userSpotify.token);

  // const [imageURLs, setImageURLs] = useState();

  // const renderImages = () => {
  //   return imageURLs.map(imageURL => <Image style={styles.imo} source={{uri: imageURL}}></Image>)
  // }

  //const [token, setToken] = useState("");
  // const [tracks, setTracks] = useState([]);
  // const [artists, setArtists] = useState([]);
  // const [ids , setIds] = useState([]);
  // const [track_data, setTrackData] = useState([]);
  // const [images, setImages] = useState([]);

  const [request, response, promptAsync] = 
  useAuthRequest(
    {
      responseType: ResponseType.Token,
      clientId: "7ea6ddd8fe4d43538ccf0cf2cbd6bb7e",
      scopes: [
        // "user-read-currently-playing",
        // "user-read-recently-played",
        // "user-read-playback-state",
        "user-top-read",
        // "user-modify-playback-state",
        // "streaming",
        // "user-read-email",
        "user-read-private",
      ],
      // In order to follow the "Authorization Code Flow" 
      // to fetch token after authorizationEndpoint
      // this must be set to false
      usePKCE: false,
      redirectUri: "exp://10.18.249.185:19000",
    },
    discovery
  );
  useEffect(() => {
    if (response?.type === "success") {
      const { access_token } = response.params;
      dispatch(setToken(access_token));
      AsyncStorage.setItem("spotify_token", access_token);
      navigation.navigate("TabsView", {token: token});

     // setToken(access_token);
    }
  }, [response]);

  // console.log(`response = ${response}`);
  // useEffect(() => {
  //   if (token) {
  //     axios(
  //       "https://api.spotify.com/v1/me/top/tracks?time_range=medium_term&limit=20", {
  //       method: "GET",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //         Authorization: "Bearer " + token,
  //       },
  //     })
  //       .then((response) => {
  //           let tracks1 = [];
  //           let images = [];
  //           let ids1 = [];
          
  //           for(let i = 0 ; i < 20; i++) {
  //               tracks1.push(response.data.items[i].name);
  //               ids1.push(response.data.items[i].id);
  //               // images.push(response.data[i]);
  //           }

   
  //       })
  //       .catch((error) => {
  //         console.log("error", error.message);
  //       })
  //       ;

  //     axios(
  //         "https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=20", {
  //         method: "GET",
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //           Authorization: "Bearer " + token,
  //         },
  //       })
  //         .then((response) => {
  //             let artists1 = [];
  //             let genres1 = [];
  //             for(let i = 0 ; i < 20; i++) {
                  
  //                 artists1.push(response.data.items[i].name);
  //                 genres1.push(response.data.items[i].genres);
  
                  
  //             }
  //         })
  //         .catch((error) => {
  //           console.log("error", error.message);
  //         });
        
          


  //     setTimeout(
  //       () =>
  //       // rconsole.log("token AHAHHAHA="+token),
  //       500
  //     );

  //     //dispatch(tokenAction.addToken(token));
  //   }
  // });
  return (
    <SafeAreaView behavior="padding" 
    style={styles.container}>
      <StatusBar style="light" />
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          color: "white",
          marginTop: "20%"
        }}
      >
        Connect your <Text style={styles.spotifyText}>Spotify</Text> Account
      </Text>
      {/* {renderImages()} */}
      {/* <Button
        title="Login with Spotify"
        style={styles.button}
        onPress={() => {
          promptAsync();
        }}
      /> */}

        <TouchableOpacity
          onPress={() => {
            promptAsync();
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
};
export default Spotify;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
    flexDirection: "column"
  },
  imo: {
    width: 200,
    height: 200,
  },
  button: {
    backgroundColor: '#1DB954',
    width: '70%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: "auto",
    marginBottom: "10%",
    marginLeft: "auto",
    marginRight: "auto"
  },
  spotifyText: {
    color: "#1DB954"
  },
  buttonText: {
    color: "black",
    textAlign: "center"
  }
});